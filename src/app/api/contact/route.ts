import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import {
  MAX_JSON_BYTES,
  getClientIp,
  getContentLength,
  isAllowedOrigin,
  isJsonContentType,
  rateLimit,
} from "@/lib/security"

const contactSchema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(254),
    message: z.string().trim().min(1).max(4000),
    subject: z.string().trim().max(160).optional(),
    inquiryType: z.string().trim().max(80).optional(),
  })
  .strict()

function withRateLimitHeaders(res: NextResponse, remaining: number, resetAt: number) {
  res.headers.set("X-RateLimit-Limit", "5")
  res.headers.set("X-RateLimit-Remaining", String(remaining))
  res.headers.set("X-RateLimit-Reset", String(Math.floor(resetAt / 1000)))
  return res
}

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
    const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 })
    if (!limit.ok) {
      const res = NextResponse.json({ error: "Too many requests." }, { status: 429 })
      return withRateLimitHeaders(res, limit.remaining, limit.resetAt)
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      const res = NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
      return withRateLimitHeaders(res, limit.remaining, limit.resetAt)
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      const res = NextResponse.json({ error: "Invalid request body." }, { status: 400 })
      return withRateLimitHeaders(res, limit.remaining, limit.resetAt)
    }

    const { name, email, message, subject, inquiryType } = parsed.data

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Resend API key is not configured.")
      const res = NextResponse.json(
        {
          error:
            "Email service is temporarily unavailable. Please email shelteraidtx@gmail.com directly while we finish setup.",
        },
        { status: 503 }
      )
      return withRateLimitHeaders(res, limit.remaining, limit.resetAt)
    }

    const resend = new Resend(apiKey)

    const normalizedInquiry: string =
      typeof inquiryType === "string" && inquiryType.trim().length > 0
        ? inquiryType.trim()
        : "general-question"

    const formattedInquiry = normalizedInquiry
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())

    const to = process.env.CONTACT_RECIPIENT || "shelteraidtx@gmail.com"

    const formattedSubject = subject?.trim()
      ? `[Shelter Aid TX] ${subject.trim()}`
      : "[Shelter Aid TX] Website Inquiry"

    const subjectWithInquiry =
      formattedInquiry && formattedInquiry.length > 0
        ? `${formattedSubject} - ${formattedInquiry}`
        : formattedSubject

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Inquiry Type: ${formattedInquiry}`,
      "",
      "Message:",
      message,
    ].join("\n")

    const { data, error } = await resend.emails.send({
      from: "Shelter Aid TX <contact@shelteraidtx.org>",
      to: [to],
      replyTo: email,
      subject: subjectWithInquiry,
      text,
    })

    if (error) {
      console.error("Resend error")
      const res = NextResponse.json(
        { error: "Unable to send message. Please try again later." },
        { status: 500 }
      )
      return withRateLimitHeaders(res, limit.remaining, limit.resetAt)
    }

    const res = NextResponse.json({ success: true })
    res.headers.set("X-Request-Id", String(data?.id ?? "ok"))
    return withRateLimitHeaders(res, limit.remaining, limit.resetAt)
  } catch {
    console.error("Contact form submission failed")
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    )
  }
}

