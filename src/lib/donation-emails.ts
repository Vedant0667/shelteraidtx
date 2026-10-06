import "server-only"

import { Resend } from "resend"
import { ORG_EIN, formatUsd } from "@/lib/donations"

const FROM = "Shelter Aid TX <contact@shelteraidtx.org>"
const REPLY_TO = "shelteraidtx@gmail.com"

export class EmailNotConfiguredError extends Error {}

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new EmailNotConfiguredError("RESEND_API_KEY is not set")
  return new Resend(key)
}

function formatDate(unixSeconds: number): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "America/Chicago",
  }).format(new Date(unixSeconds * 1000))
}

/**
 * The name comes from whatever the payer typed at checkout, and this email goes
 * out from our domain. Keep it short and plain so nobody can buy a $5 "message
 * from Shelter Aid TX" with a link or extra lines in it.
 */
function safeName(name: string | null | undefined): string | null {
  if (!name) return null
  const cleaned = name.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, " ").replace(/\s+/g, " ").trim()
  if (!cleaned || cleaned.length > 60 || /[@<>]|:\/\/|www\./i.test(cleaned)) return null
  return cleaned
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
  const amount = formatUsd(r.amountCents)
  // Customer Portal login link, configured in the Stripe Dashboard. Optional.
  const portal = process.env.STRIPE_PORTAL_LOGIN_URL

  const name = safeName(r.name)
  const lines = [
    name ? `Hi ${name},` : "Hi,",
    "",
    `Thank you for your ${amount} donation to Shelter Aid TX.`,
    "",
    `Amount: ${amount}${r.monthly ? " (monthly)" : ""}`,
    `Date: ${formatDate(r.paidAt)}`,
    `Reference: ${r.reference}`,
    "",
    `Shelter Aid TX is a 501(c)(3) nonprofit, EIN ${ORG_EIN}. No goods or services were provided in exchange for this donation. Keep this email for your tax records.`,
  ]

  if (r.monthly) {
    lines.push(
      "",
      portal
        ? `This donation repeats every month. To change or cancel it, sign in here with this email address: ${portal}`
        : "This donation repeats every month. To change or cancel it, reply to this email."
    )
  }

  lines.push("", "Shelter Aid TX", "https://www.shelteraidtx.org")

  const { data, error } = await resend.emails.send(
    {
      from: FROM,
      to: [r.to],
      replyTo: REPLY_TO,
      subject: `Your ${amount} donation receipt from Shelter Aid TX`,
      text: lines.join("\n"),
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
