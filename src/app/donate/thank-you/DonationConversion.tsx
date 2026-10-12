"use client"

import { useEffect } from "react"
import { track } from "@/lib/analytics"

/**
 * Reports a paid donation to Google Analytics once, as the Ad Grants conversion.
 * `purchase` is GA4's event for a completed payment: it carries the value and
 * GA drops repeats with the same transaction_id (a reload of this page).
 * Sends the amount and Stripe's opaque session ID, never the donor's details.
 */
export function DonationConversion({
  sessionId,
  amountCents,
  monthly,
}: {
  sessionId: string
  amountCents: number | null
  monthly: boolean
}) {
  useEffect(() => {
    // The tag loads after hydration; give it a moment before giving up.
    let tries = 0
    const timer = setInterval(() => {
      tries += 1
      if (typeof window.gtag === "function") {
        clearInterval(timer)
        track("purchase", {
          transaction_id: sessionId,
          currency: "USD",
          value: amountCents != null ? amountCents / 100 : 0,
          donation_frequency: monthly ? "monthly" : "once",
        })
      } else if (tries >= 20) {
        clearInterval(timer)
      }
    }, 250)
    return () => clearInterval(timer)
  }, [sessionId, amountCents, monthly])

  return null
}
