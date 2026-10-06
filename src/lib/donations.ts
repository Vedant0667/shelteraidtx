// Shared by the donation form (client) and the checkout route (server).
// The server re-validates every value; these limits are not a client-side courtesy.

export const DONATION_CURRENCY = "usd"

/** $5 floor keeps card-testing bots (which probe with tiny charges) off the form. */
export const MIN_DONATION_CENTS = 500
export const MAX_DONATION_CENTS = 1_000_000

export const PRESET_AMOUNTS_CENTS = [2500, 5000, 10000, 25000] as const

export const DONATION_FREQUENCIES = ["once", "monthly"] as const
export type DonationFrequency = (typeof DONATION_FREQUENCIES)[number]

export const ORG_EIN = "93-3584886"

export function formatUsd(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100)
}
