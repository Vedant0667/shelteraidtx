import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib"
import { ORG_EIN } from "@/lib/donations"
import { RECEIPT_LOGO_PNG_BASE64 } from "@/lib/receipt-logo"

// One-page US Letter donation receipt, attached to the receipt email.
// Standard PDF fonts (Helvetica) so nothing is fetched or embedded at send time
// besides the logo, which ships in the bundle.

export type ReceiptPdfData = {
  receiptNumber: string
  /** Payment time (unix seconds). Pinned into the PDF metadata so a retried
   *  webhook renders byte-identical bytes under the same Resend idempotency key. */
  paidAt: number
  /** Long date, e.g. "October 6, 2026". */
  date: string
  donorName: string | null
  donorEmail: string
  amount: string
  description: string
  reference: string
}

const INK = rgb(15 / 255, 23 / 255, 42 / 255)
const SOFT = rgb(51 / 255, 65 / 255, 85 / 255)
const MUTED = rgb(100 / 255, 116 / 255, 139 / 255)
const ACCENT = rgb(26 / 255, 122 / 255, 176 / 255)
const WASH = rgb(238 / 255, 247 / 255, 252 / 255)
const LINE = rgb(229 / 255, 231 / 255, 235 / 255)

const ORG_LINES = [
  "Shelter Aid TX",
  "5900 Balcones Dr Ste 100",
  "Austin, TX 78731",
  "shelteraidtx.org",
  `EIN ${ORG_EIN} · 501(c)(3) nonprofit`,
]

/**
 * The standard PDF fonts only encode WinAnsi (roughly Latin-1), and drawText
 * throws on anything else. A donor named "Łukasz", "Đặng" or "王", or with an
 * emoji in their name, must still get a receipt: keep every character the font
 * can draw ("José" stays "José"), map letters that don't decompose (Ł, Đ),
 * strip accents from the rest, and drop what still can't be drawn.
 */
const WIN_ANSI = /[\x20-\x7e\xa0-\xff\u2013\u2014\u2018\u2019\u201c\u201d\u2022\u2026]/
const NO_DECOMPOSITION: Record<string, string> = { Đ: "D", đ: "d", Ł: "L", ł: "l", ı: "i", Ħ: "H", ħ: "h", Ŧ: "T", ŧ: "t" }

function pdfSafe(text: string): string {
  let out = ""
  for (const ch of text) {
    if (WIN_ANSI.test(ch)) out += ch
    else if (NO_DECOMPOSITION[ch]) out += NO_DECOMPOSITION[ch]
    else out += [...ch.normalize("NFKD")].filter((c) => WIN_ANSI.test(c)).join("")
  }
  return out.replace(/\s+/g, " ").trim()
}

/** Largest size from `size` down to `min` at which `text` fits `maxWidth`; truncates with "..." below that. */
function fitText(text: string, font: PDFFont, size: number, maxWidth: number, min = 7): { text: string; size: number } {
  for (let s = size; s >= min; s -= 0.5) {
    if (font.widthOfTextAtSize(text, s) <= maxWidth) return { text, size: s }
  }
  let t = text
  while (t.length > 1 && font.widthOfTextAtSize(`${t}...`, min) > maxWidth) t = t.slice(0, -1)
  return { text: `${t}...`, size: min }
}

/** Greedy word wrap for Helvetica at a given size. */
function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let line = ""
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(next, size) > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

function rightText(page: PDFPage, text: string, xRight: number, y: number, font: PDFFont, size: number, color = INK) {
  page.drawText(text, { x: xRight - font.widthOfTextAtSize(text, size), y, size, font, color })
}

export async function renderReceiptPdf(d: ReceiptPdfData): Promise<Uint8Array> {
  const pdf = await PDFDocument.create()
  const stamp = new Date(d.paidAt * 1000)
  pdf.setCreationDate(stamp)
  pdf.setModificationDate(stamp)
  pdf.setProducer("Shelter Aid TX")
  pdf.setTitle(`Donation receipt ${d.receiptNumber}`)
  pdf.setAuthor("Shelter Aid TX")
  pdf.setSubject("Donation receipt")
  pdf.setCreator("shelteraidtx.org")

  const page = pdf.addPage([612, 792])
  const regular = await pdf.embedFont(StandardFonts.Helvetica)
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
  const logo = await pdf.embedPng(Buffer.from(RECEIPT_LOGO_PNG_BASE64, "base64"))

  const left = 56
  const right = 612 - 56
  const width = right - left
  let y = 792 - 56

  // Header: logo left, title block right.
  const logoW = 170
  const logoH = (logo.height / logo.width) * logoW
  page.drawImage(logo, { x: left, y: y - logoH, width: logoW, height: logoH })
  rightText(page, "DONATION RECEIPT", right, y - 12, bold, 11, ACCENT)
  rightText(page, `Receipt no. ${d.receiptNumber}`, right, y - 30, regular, 10, SOFT)
  rightText(page, d.date, right, y - 44, regular, 10, SOFT)
  y -= Math.max(logoH, 52) + 28

  page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 1, color: LINE })
  y -= 28

  // From / received from.
  const colB = left + width / 2
  page.drawText("FROM", { x: left, y, size: 8, font: bold, color: MUTED })
  page.drawText("RECEIVED FROM", { x: colB, y, size: 8, font: bold, color: MUTED })
  y -= 16
  const donorLines = [pdfSafe(d.donorName ?? "") || "Donor", pdfSafe(d.donorEmail)]
  for (let i = 0; i < Math.max(ORG_LINES.length, donorLines.length); i++) {
    if (ORG_LINES[i]) page.drawText(ORG_LINES[i], { x: left, y, size: 10, font: i === 0 ? bold : regular, color: i === 0 ? INK : SOFT })
    if (donorLines[i]) {
      // Names can run 60 characters and emails longer; shrink to the column, never past the page edge.
      const font = i === 0 ? bold : regular
      const fit = fitText(donorLines[i], font, 10, right - colB)
      page.drawText(fit.text, { x: colB, y, size: fit.size, font, color: i === 0 ? INK : SOFT })
    }
    y -= 14
  }
  y -= 22

  // Line items.
  page.drawRectangle({ x: left, y: y - 8, width, height: 24, color: WASH })
  page.drawText("DESCRIPTION", { x: left + 12, y, size: 8, font: bold, color: MUTED })
  rightText(page, "AMOUNT", right - 12, y, bold, 8, MUTED)
  y -= 30
  page.drawText(d.description, { x: left + 12, y, size: 11, font: regular, color: INK })
  rightText(page, d.amount, right - 12, y, regular, 11)
  y -= 16
  page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 1, color: LINE })
  y -= 22
  page.drawText("Total received", { x: left + 12, y, size: 11, font: bold, color: INK })
  rightText(page, d.amount, right - 12, y, bold, 13)
  y -= 30

  page.drawText(`Payment reference: ${pdfSafe(d.reference)}`, { x: left + 12, y, size: 9, font: regular, color: MUTED })
  y -= 36

  // Tax acknowledgment (IRS: org name, amount, date, no goods or services).
  const tax = `Shelter Aid TX is a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code, EIN ${ORG_EIN}. No goods or services were provided in exchange for this contribution. Please keep this receipt for your tax records.`
  const taxLines = wrap(tax, regular, 10, width - 32)
  const boxH = 30 + taxLines.length * 14
  page.drawRectangle({ x: left, y: y - boxH + 14, width, height: boxH, borderColor: LINE, borderWidth: 1 })
  page.drawText("Tax information", { x: left + 16, y: y - 4, size: 10, font: bold, color: INK })
  let ty = y - 20
  for (const line of taxLines) {
    page.drawText(line, { x: left + 16, y: ty, size: 10, font: regular, color: SOFT })
    ty -= 14
  }
  y -= boxH + 28

  page.drawText("Thank you for helping us collect, store, and deliver shoes to shelters across Dallas-Fort Worth.", {
    x: left,
    y,
    size: 10,
    font: regular,
    color: SOFT,
  })

  // Footer.
  page.drawLine({ start: { x: left, y: 72 }, end: { x: right, y: 72 }, thickness: 1, color: LINE })
  page.drawText("Shelter Aid TX · shelteraidtx.org · Questions: reply to your receipt email", {
    x: left,
    y: 56,
    size: 8,
    font: regular,
    color: MUTED,
  })

  return pdf.save()
}
