import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import {
  MAX_JSON_BYTES,
  getClientIp,
  getContentLength,
  isAllowedOrigin,
  isJsonContentType,
  rateLimit,
} from "@/lib/security"

const paymentIntentSchema = z
  .object({
    amount: z.number().positive().max(1000000).optional(),
    currency: z.string().trim().max(10).optional(),
    metadata: z.record(z.string().max(200)).optional(),
  })
  .strict()

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

    if (!isAllowedOrigin(req)) {
      return NextResponse.json({ error: "Invalid origin." }, { status: 403 })
    }

    const ip = getClientIp(req)
    const limit = rateLimit(`payments:${ip}`, { limit: 10, windowMs: 10 * 60 * 1000 })
    if (!limit.ok) {
      return NextResponse.json({ error: "Too many requests." }, { status: 429 })
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
    }

    const parsed = paymentIntentSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
    }

    return NextResponse.json(
      {
        error:
          "Online payments are not enabled yet. Please check back soon or use the contact form to coordinate a donation.",
      },
      { status: 503 }
    )
  } catch {
    console.error("Payment intent creation failed")
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

