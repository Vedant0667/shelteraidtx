import "server-only"

import { Resend } from "resend"
import { formatUsd } from "@/lib/donations"
import { renderReceipt } from "@/lib/receipt-email"
import { renderReceiptPdf } from "@/lib/receipt-pdf"

const FROM = "Shelter Aid TX <contact@shelteraidtx.org>"
const REPLY_TO = "shelteraidtx@gmail.com"

export class EmailNotConfiguredError extends Error {}

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new EmailNotConfiguredError("RESEND_API_KEY is not set")
  return new Resend(key)
}

/**
 * The name comes from whatever the payer typed at checkout, and this email goes
 * out from our domain. Keep it short and plain so nobody can buy a $5 "message
 * from Shelter Aid TX" with a link or extra lines in it.
 */
function safeName(name: string | null | undefined): string | null {
  if (!name) return null
  const cleaned = name.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, " ").replace(/\s+/g, " ").trim()
  // Anything a mail app could turn into a link: "@", tags, "://", "www.", or a bare domain like "claim-refund.co".
  if (!cleaned || cleaned.length > 60 || /[@<>]|:\/\/|www\.|[a-z0-9-]\.[a-z]{2,}/i.test(cleaned)) return null
  return cleaned
}

const CHICAGO = "America/Chicago"

function receiptDate(unixSeconds: number): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: CHICAGO }).format(new Date(unixSeconds * 1000))
}

function receiptMonth(unixSeconds: number): string {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: CHICAGO }).format(
    new Date(unixSeconds * 1000)
  )
}

/**
 * Stable per payment: "SATX-20261006-1WEKAB2Z" (paid date + the tail of the
 * Stripe payment or invoice id). Retries of the same event get the same number.
 */
function receiptNumberFor(paidAt: number, reference: string): string {
  const ymd = new Intl.DateTimeFormat("en-CA", { timeZone: CHICAGO }).format(new Date(paidAt * 1000)).replace(/-/g, "")
  const tail = reference.replace(/[^A-Za-z0-9]/g, "").slice(-8).toUpperCase()
  return `SATX-${ymd}-${tail}`
}

type Receipt = {
  /** Stable per payment; doubles as the Resend idempotency key so Stripe retries don't resend. */
  key: string
  to: string
  name?: string | null
  amountCents: number
  paidAt: number
  monthly: boolean
  reference: string
}

/** Returns the Resend email id, for logs. */
export async function sendDonationReceipt(r: Receipt): Promise<string> {
  const resend = getResend()
  const name = safeName(r.name)
  const receiptNumber = receiptNumberFor(r.paidAt, r.reference)
  const { subject, html, text } = renderReceipt({
    name,
    amountCents: r.amountCents,
    paidAt: r.paidAt,
    monthly: r.monthly,
    reference: r.reference,
    receiptNumber,
    // Customer Portal login link, configured in the Stripe Dashboard. Optional.
    portal: process.env.STRIPE_PORTAL_LOGIN_URL,
  })
  const pdf = await renderReceiptPdf({
    receiptNumber,
    paidAt: r.paidAt,
    date: receiptDate(r.paidAt),
    donorName: name,
    donorEmail: r.to,
    amount: new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(r.amountCents / 100),
    description: r.monthly ? `Monthly donation, ${receiptMonth(r.paidAt)}` : "One-time donation",
    reference: r.reference,
  })

  const { data, error } = await resend.emails.send(
    {
      from: FROM,
      to: [r.to],
      replyTo: REPLY_TO,
      subject,
      html,
      text,
      attachments: [{ filename: `Shelter-Aid-TX-receipt-${receiptNumber}.pdf`, content: Buffer.from(pdf) }],
    },
    { idempotencyKey: `receipt-${r.key}` }
  )
  if (error) throw new Error(`Resend rejected receipt (${error.name})`)
  return data?.id ?? "unknown"
}

/** A delayed (bank) payment failed after the thank-you page promised a receipt. */
export async function sendDonationFailedNotice(n: {
  key: string
  to: string
  name?: string | null
  amountCents: number
}): Promise<string> {
  const resend = getResend()
  const amount = formatUsd(n.amountCents)
  const name = safeName(n.name)
  const { data, error } = await resend.emails.send(
    {
      from: FROM,
      to: [n.to],
      replyTo: REPLY_TO,
      subject: `Your ${amount} donation to Shelter Aid TX didn't go through`,
      text: [
        name ? `Hi ${name},` : "Hi,",
        "",
        `Your bank declined the ${amount} payment for your donation to Shelter Aid TX, so you were not charged.`,
        "",
        "You can try again at https://www.shelteraidtx.org/donate#give, or reply to this email and we will help.",
        "",
        "Shelter Aid TX",
      ].join("\n"),
    },
    { idempotencyKey: `failed-${n.key}` }
  )
  if (error) throw new Error(`Resend rejected failure notice (${error.name})`)
  return data?.id ?? "unknown"
}

/** Internal alert for events that need a human (disputes, fraud warnings). */
export async function sendDonationAlert(key: string, subject: string, body: string): Promise<void> {
  const resend = getResend()
  const to = process.env.CONTACT_RECIPIENT || REPLY_TO
  const { error } = await resend.emails.send(
    {
      from: FROM,
      to: [to],
      subject: `[Shelter Aid TX] ${subject}`,
      text: body,
    },
    { idempotencyKey: `alert-${key}` }
  )
  if (error) throw new Error(`Resend rejected alert (${error.name})`)
}
