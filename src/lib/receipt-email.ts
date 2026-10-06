import { ORG_EIN } from "@/lib/donations"

// Donation receipt email: HTML for mail apps that render it, plain text for
// the rest. Email clients ignore <style> blocks and web fonts, so everything is
// inline styles on tables, and the serif is Georgia (Libre Baskerville's
// closest system match). Colors are the site's tokens from globals.css.

const INK = "#0f172a"
const INK_SOFT = "#334155"
const MUTED = "#64748b"
const ACCENT_INK = "#1a7ab0"
const ACCENT_WASH = "#eef7fc"
const HAIRLINE = "#e5e7eb"
const PAGE = "#f6f3ec"
const SERIF = "Georgia, 'Times New Roman', serif"
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

const SITE = "https://www.shelteraidtx.org"
const LOGO = `${SITE}/images/logo-wordmark.png`
const MAILING_ADDRESS = "5900 Balcones Dr Ste 100, Austin, TX 78731"

export type ReceiptView = {
  /** Already sanitized (safeName); null when the payer gave none or it was dropped. */
  name: string | null
  amountCents: number
  paidAt: number
  monthly: boolean
  reference: string
  /** Human-readable receipt number, also printed on the PDF. */
  receiptNumber: string
  /** Stripe Customer Portal login link, if configured. */
  portal?: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Receipts always show cents: "$5.00", not "$5". */
function money(cents: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100)
}

function longDate(unixSeconds: number): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "America/Chicago" }).format(
    new Date(unixSeconds * 1000)
  )
}

export function renderReceipt(r: ReceiptView): { subject: string; html: string; text: string } {
  const amount = money(r.amountCents)
  const date = longDate(r.paidAt)
  const firstName = r.name?.split(" ")[0] ?? null
  const kind = r.monthly ? "Monthly donation" : "One-time donation"
  const subject = `Receipt for your ${amount} donation to Shelter Aid TX`
  const taxLine = `Shelter Aid TX is a 501(c)(3) nonprofit, EIN ${ORG_EIN}. No goods or services were provided in exchange for this donation. Keep this email for your tax records.`
  const cancelText = r.portal
    ? `This donation repeats every month. To change or cancel it, sign in with this email address at ${r.portal}`
    : "This donation repeats every month. To change or cancel it, reply to this email."

  const text = [
    firstName ? `Thank you, ${firstName}.` : "Thank you.",
    "",
    "Your gift helps us collect, store, and deliver donated shoes to shelters across Dallas-Fort Worth.",
    "",
    `Amount: ${amount} (${kind.toLowerCase()})`,
    `Date: ${date}`,
    `Receipt no.: ${r.receiptNumber}`,
    ...(r.name ? [`Donor: ${r.name}`] : []),
    `Payment reference: ${r.reference}`,
    "",
    taxLine,
    "",
    "A PDF copy of this receipt is attached.",
    ...(r.monthly ? ["", cancelText] : []),
    "",
    "Shelter Aid TX",
    `Mailing address: ${MAILING_ADDRESS}`,
    SITE,
  ].join("\n")

  const row = (label: string, value: string, last = false) => `
              <tr>
                <td style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${HAIRLINE};`}font-family:${SANS};font-size:14px;color:${MUTED};">${label}</td>
                <td align="right" style="padding:12px 0;${last ? "" : `border-bottom:1px solid ${HAIRLINE};`}font-family:${SANS};font-size:14px;color:${INK};">${value}</td>
              </tr>`

  const details = [
    row("Receipt no.", escapeHtml(r.receiptNumber)),
    row("Date", escapeHtml(date)),
    ...(r.name ? [row("Donor", escapeHtml(r.name))] : []),
    row("Payment reference", `<span style="font-family:Menlo,Consolas,monospace;font-size:12px;">${escapeHtml(r.reference)}</span>`, true),
  ].join("")

  const cancelHtml = r.monthly
    ? `
          <tr>
            <td style="padding:0 40px 8px;font-family:${SANS};font-size:14px;line-height:22px;color:${INK_SOFT};">
              This donation repeats every month. To change or cancel it, ${
                r.portal
                  ? `<a href="${escapeHtml(r.portal)}" style="color:${ACCENT_INK};">manage your donation</a> (sign in with this email address).`
                  : "reply to this email."
              }
            </td>
          </tr>`
    : ""

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${PAGE};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(`Your ${amount} donation receipt. EIN ${ORG_EIN}.`)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;border:1px solid ${HAIRLINE};">
          <tr>
            <td align="center" style="padding:28px 40px 8px;">
              <a href="${SITE}"><img src="${LOGO}" width="200" alt="Shelter Aid TX" style="display:block;width:200px;max-width:100%;height:auto;border:0;"></a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 40px 0;font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${ACCENT_INK};">Donation receipt</td>
          </tr>
          <tr>
            <td style="padding:10px 40px 0;font-family:${SERIF};font-size:30px;line-height:38px;color:${INK};">${
              firstName ? `Thank you, ${escapeHtml(firstName)}.` : "Thank you."
            }</td>
          </tr>
          <tr>
            <td style="padding:12px 40px 24px;font-family:${SANS};font-size:15px;line-height:24px;color:${INK_SOFT};">
              Your gift helps us collect, store, and deliver donated shoes to shelters across Dallas-Fort Worth.
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${ACCENT_WASH};border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <div style="font-family:${SANS};font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${MUTED};">Amount</div>
                    <div style="padding-top:4px;font-family:${SERIF};font-size:34px;line-height:40px;color:${INK};">${amount}</div>
                    <div style="padding-top:2px;font-family:${SANS};font-size:14px;color:${INK_SOFT};">${kind}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 40px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${details}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 40px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${HAIRLINE};border-radius:12px;">
                <tr>
                  <td style="padding:16px 20px;font-family:${SANS};font-size:13px;line-height:20px;color:${INK_SOFT};">
                    <strong style="color:${INK};">Tax information</strong><br>
                    ${escapeHtml(taxLine)}<br><br>
                    A PDF copy of this receipt is attached.
                  </td>
                </tr>
              </table>
            </td>
          </tr>${cancelHtml}
          <tr>
            <td style="padding:8px 40px 32px;font-family:${SANS};font-size:14px;line-height:22px;color:${INK_SOFT};">
              Questions about your donation? Reply to this email.
            </td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding:20px 16px 0;font-family:${SANS};font-size:12px;line-height:18px;color:${MUTED};">
              Shelter Aid TX &middot; 501(c)(3) nonprofit &middot; Dallas-Fort Worth, TX<br>
              ${escapeHtml(MAILING_ADDRESS)}<br>
              <a href="${SITE}" style="color:${MUTED};">shelteraidtx.org</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, html, text }
}
