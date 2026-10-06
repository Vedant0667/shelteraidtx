import { NextRequest, NextResponse } from "next/server"
import type Stripe from "stripe"
import {
  EmailNotConfiguredError,
  sendDonationAlert,
  sendDonationFailedNotice,
  sendDonationReceipt,
} from "@/lib/donation-emails"
import { formatUsd } from "@/lib/donations"
import { DONATION_INTEGRATION_ID, DONATION_METADATA, getStripe } from "@/lib/stripe"

// Stripe event payloads are a few KB; anything near this is not from Stripe.
const MAX_WEBHOOK_BYTES = 512 * 1024

function idOf(ref: string | { id: string } | null | undefined): string | null {
  if (!ref) return null
  return typeof ref === "string" ? ref : ref.id
}

function isDonationSession(session: Stripe.Checkout.Session): boolean {
  return session.integration_identifier === DONATION_INTEGRATION_ID
}

/** One-time donations. Monthly ones get their receipt from invoice.paid instead. */
async function handleCheckoutPaid(session: Stripe.Checkout.Session, eventCreated: number) {
  if (!isDonationSession(session) || session.mode !== "payment") return
  // With delayed methods (bank debits) `completed` arrives while still unpaid;
  // the receipt waits for async_payment_succeeded.
  if (session.payment_status !== "paid") return

  const email = session.customer_details?.email
  if (!email || session.amount_total == null) {
    console.warn(`Checkout ${session.id} paid without email or amount; no receipt sent`)
    return
  }

  const emailId = await sendDonationReceipt({
    key: session.id,
    to: email,
    name: session.customer_details?.name,
    amountCents: session.amount_total,
    paidAt: eventCreated,
    monthly: false,
    reference: idOf(session.payment_intent) ?? session.id,
  })
  console.info(`Receipt ${emailId} sent for checkout ${session.id}`)
}

async function handleCheckoutFailed(session: Stripe.Checkout.Session) {
  if (!isDonationSession(session)) return
  const email = session.customer_details?.email
  if (!email || session.amount_total == null) return
  const emailId = await sendDonationFailedNotice({
    key: session.id,
    to: email,
    name: session.customer_details?.name,
    amountCents: session.amount_total,
  })
  console.info(`Failure notice ${emailId} sent for checkout ${session.id}`)
}

async function handleInvoicePaid(invoice: Stripe.Invoice, eventCreated: number) {
  // Only invoices for subscriptions this site created (tagged at checkout).
  const source = invoice.parent?.subscription_details?.metadata?.source
  if (source !== DONATION_METADATA.source) return
  if (!invoice.customer_email || invoice.amount_paid <= 0) return

  const emailId = await sendDonationReceipt({
    key: invoice.id,
    to: invoice.customer_email,
    name: invoice.customer_name,
    amountCents: invoice.amount_paid,
    paidAt: invoice.status_transitions?.paid_at ?? eventCreated,
    monthly: true,
    reference: invoice.number ?? invoice.id,
  })
  console.info(`Receipt ${emailId} sent for invoice ${invoice.id}`)
}

async function handleDispute(dispute: Stripe.Dispute) {
  const due = dispute.evidence_details?.due_by
  await sendDonationAlert(
    dispute.id,
    `Donation disputed: ${formatUsd(dispute.amount)}`,
    [
      `A donor disputed a ${formatUsd(dispute.amount)} donation (reason: ${dispute.reason}).`,
      due
        ? `Respond in the Stripe Dashboard before ${new Date(due * 1000).toUTCString()}, or the funds and the dispute fee are lost.`
        : "Respond in the Stripe Dashboard.",
      `Dispute: ${dispute.id}`,
      `Charge: ${idOf(dispute.charge)}`,
    ].join("\n")
  )
}

async function handleEarlyFraudWarning(warning: Stripe.Radar.EarlyFraudWarning) {
  await sendDonationAlert(
    warning.id,
    "Fraud warning on a donation",
    [
      `The card network flagged charge ${idOf(warning.charge)} as likely fraud (${warning.fraud_type}).`,
      "Refunding it now in the Stripe Dashboard usually prevents a dispute and its fee.",
    ].join("\n")
  )
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature")
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const stripe = getStripe()

  if (!secret || !stripe) {
    console.error("Stripe webhook is not configured.")
    // 500 so Stripe retries once configuration lands, instead of dropping events.
    return NextResponse.json({ error: "Not configured." }, { status: 500 })
  }

  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 })
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0)
  if (contentLength > MAX_WEBHOOK_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 })
  }

  // The signature covers the exact bytes Stripe sent, so read the raw body.
  const payload = await req.text()
  if (payload.length > MAX_WEBHOOK_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 })
  }

  let event: Stripe.Event
  try {
    // Default 300s tolerance rejects replays of old signed payloads.
    event = stripe.webhooks.constructEvent(payload, signature, secret)
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded":
        await handleCheckoutPaid(event.data.object, event.created)
        break
      case "checkout.session.async_payment_failed":
        await handleCheckoutFailed(event.data.object)
        break
      case "invoice.paid":
        await handleInvoicePaid(event.data.object, event.created)
        break
      case "charge.dispute.created":
        await handleDispute(event.data.object)
        break
      case "radar.early_fraud_warning.created":
        await handleEarlyFraudWarning(event.data.object)
        break
      default:
        // Not subscribed to anything else; acknowledge so Stripe stops retrying.
        break
    }
  } catch (err) {
    const reason = err instanceof EmailNotConfiguredError ? "email not configured" : "handler error"
    console.error(`Stripe webhook ${event.type} ${event.id} failed (${reason})`)
    // 500 makes Stripe retry with backoff for up to 3 days; sends are idempotent.
    return NextResponse.json({ error: "Handler failed." }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
