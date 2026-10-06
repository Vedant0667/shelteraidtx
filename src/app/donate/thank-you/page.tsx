import type { Metadata } from "next"
import { headers } from "next/headers"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, PageIntro } from "@/components/site"
import { formatUsd } from "@/lib/donations"
import { rateLimit } from "@/lib/security"
import { getStripe } from "@/lib/stripe"

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
}

// Stripe Checkout Session IDs: anything else is rejected before calling Stripe.
const SESSION_ID = /^cs_(test|live)_[A-Za-z0-9]{10,200}$/

// "unknown" whenever we could not ask Stripe: a donor who paid must never be told
// they weren't charged, or they may give twice.
type Outcome =
  | { kind: "paid"; amount: number | null; monthly: boolean }
  | { kind: "processing" }
  | { kind: "unpaid" }
  | { kind: "unknown" }

async function lookUp(sessionId: string | undefined): Promise<Outcome> {
  if (!sessionId || !SESSION_ID.test(sessionId)) return { kind: "unknown" }

  // Each view costs a Stripe API call, which shares a rate limit with checkout.
  const forwardedFor = (await headers()).get("x-forwarded-for")
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown"
  if (!rateLimit(`thanks:${ip}`, { limit: 20, windowMs: 10 * 60 * 1000 }).ok) {
    return { kind: "unknown" }
  }

  const stripe = getStripe()
  if (!stripe) return { kind: "unknown" }
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (session.status === "complete" && session.payment_status !== "unpaid") {
      return { kind: "paid", amount: session.amount_total, monthly: session.mode === "subscription" }
    }
    if (session.status === "complete") return { kind: "processing" }
    // Only an open or expired session proves no money moved.
    return { kind: "unpaid" }
  } catch {
    return { kind: "unknown" }
  }
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>
}) {
  const raw = (await searchParams).session_id
  const outcome = await lookUp(typeof raw === "string" ? raw : undefined)

  // Shows the amount only. The donor's email and name stay out of the page,
  // since this URL can end up in browser history or be shared.
  const copy =
    outcome.kind === "paid"
      ? {
          title: "Thank you",
          em: "for your donation.",
          lede: `Your ${outcome.amount != null ? formatUsd(outcome.amount) + " " : ""}${
            outcome.monthly ? "monthly " : ""
          }donation went through. We emailed you a receipt for your tax records.`,
        }
      : outcome.kind === "processing"
        ? {
            title: "Your donation",
            em: "is processing.",
            lede: "Bank payments can take a few business days to clear. We will email your receipt once it does.",
          }
        : outcome.kind === "unpaid"
          ? {
              title: "Your donation",
              em: "didn't go through.",
              lede: "You were not charged. You can try again from the Donate page.",
            }
          : {
              title: "We couldn't confirm",
              em: "your donation.",
              lede: "Check your email for a receipt before trying again. If none arrives within an hour, email shelteraidtx@gmail.com and we will look it up.",
            }

  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          kicker="Donate"
          title={copy.title}
          em={copy.em}
          lede={copy.lede}
          actions={
            outcome.kind === "unpaid" ? (
              <ButtonLink arrow href="/donate#give">
                Try again
              </ButtonLink>
            ) : (
              <ButtonLink arrow href="/">
                Back to home
              </ButtonLink>
            )
          }
        />
      </main>
      <SiteFooter />
    </>
  )
}
