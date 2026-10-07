import { NextRequest, NextResponse } from "next/server"
import type Stripe from "stripe"
import { z } from "zod"
import {
  DONATION_CURRENCY,
  DONATION_FREQUENCIES,
  MAX_DONATION_CENTS,
  MIN_DONATION_CENTS,
} from "@/lib/donations"
import {
  MAX_JSON_BYTES,
  getClientIp,
  getContentLength,
  isAllowedOrigin,
  isJsonContentType,
  rateLimit,
} from "@/lib/security"
import { DONATION_INTEGRATION_ID, DONATION_METADATA, getStripe } from "@/lib/stripe"

// Only the amount and frequency come from the browser. Everything else on the
// Checkout Session (currency, product name, return URL) is fixed server-side.
const checkoutSchema = z
  .object({
    amount: z.number().int().min(MIN_DONATION_CENTS).max(MAX_DONATION_CENTS),
    frequency: z.enum(DONATION_FREQUENCIES),
  })
  .strict()

// Buy-now-pay-later providers don't accept charitable donations; keep them off
// the form whatever the Dashboard enables. (Exclude, never allowlist: Stripe
// picks the remaining methods dynamically.)
const EXCLUDED_METHODS: Stripe.Checkout.SessionCreateParams.ExcludedPaymentMethodType[] = [
  "affirm",
  "afterpay_clearpay",
  "alma",
  "billie",
  "klarna",
  "scalapay",
  "zip",
]

function methodNotAllowed() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  )
}

export function GET() {
  return methodNotAllowed()
}

export function PUT() {
  return methodNotAllowed()
}

export function PATCH() {
  return methodNotAllowed()
}

export function DELETE() {
  return methodNotAllowed()
}

export async function POST(req: NextRequest) {
  try {
    if (!isJsonContentType(req)) {
      return NextResponse.json({ error: "Unsupported content type." }, { status: 415 })
    }

    const contentLength = getContentLength(req)
    if (contentLength !== null && contentLength > MAX_JSON_BYTES) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 })
    }

    // Browsers always send Origin on a cross-origin or same-origin POST from fetch,
    // so a missing header means a script, not our form.
    if (!req.headers.get("origin") || !isAllowedOrigin(req)) {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 })
    }

    const ip = getClientIp(req)
    const limit = rateLimit(`donate:${ip}`, { limit: 10, windowMs: 10 * 60 * 1000 })
    if (!limit.ok) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 })
    }

    // Content-Length is optional (chunked uploads omit it), so cap the bytes
    // actually read too, not just the header.
    const raw = await req.text()
    if (new TextEncoder().encode(raw).byteLength > MAX_JSON_BYTES) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 })
    }

    let body: unknown
    try {
      body = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
    }

    const parsed = checkoutSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
    }

    const stripe = getStripe()
    if (!stripe) {
      console.error("Stripe secret key is not configured.")
      return NextResponse.json(
        { error: "Online donations are temporarily unavailable." },
        { status: 503 }
      )
    }

    const { amount, frequency } = parsed.data
    // From the request URL (the deployment's own host on Vercel), never from the
    // Origin header, which isAllowedOrigin also lets through for localhost.
    const returnUrl = `${req.nextUrl.origin}/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`

    const params: Stripe.Checkout.SessionCreateParams =
      frequency === "monthly"
        ? {
            ui_mode: "embedded_page",
            mode: "subscription",
            line_items: [
              {
                quantity: 1,
                price_data: {
                  currency: DONATION_CURRENCY,
                  unit_amount: amount,
                  recurring: { interval: "month" },
                  product_data: { name: "Monthly donation to Shelter Aid TX" },
                },
              },
            ],
            subscription_data: { metadata: DONATION_METADATA },
            return_url: returnUrl,
            excluded_payment_method_types: EXCLUDED_METHODS,
            integration_identifier: DONATION_INTEGRATION_ID,
          }
        : {
            ui_mode: "embedded_page",
            mode: "payment",
            submit_type: "donate",
            line_items: [
              {
                quantity: 1,
                price_data: {
                  currency: DONATION_CURRENCY,
                  unit_amount: amount,
                  product_data: { name: "Donation to Shelter Aid TX" },
                },
              },
            ],
            payment_intent_data: { description: "Donation to Shelter Aid TX", metadata: DONATION_METADATA },
            return_url: returnUrl,
            excluded_payment_method_types: EXCLUDED_METHODS,
            integration_identifier: DONATION_INTEGRATION_ID,
          }

    const session = await stripe.checkout.sessions.create(params)

    if (!session.client_secret) {
      console.error("Checkout session created without a client secret.")
      return NextResponse.json({ error: "Unable to start checkout." }, { status: 502 })
    }

    return NextResponse.json(
      { clientSecret: session.client_secret },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch (err) {
    // Log the Stripe error type only; messages can echo request details.
    const type = err && typeof err === "object" && "type" in err ? String(err.type) : "unknown"
    console.error(`Donation checkout failed (${type})`)
    return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 })
  }
}
