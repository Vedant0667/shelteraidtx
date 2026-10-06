import "server-only"

import Stripe from "stripe"

let client: Stripe | null = null

/**
 * Server-only Stripe client. Returns null when the key is missing so routes can
 * answer 503 instead of crashing. The key never leaves the server: this module
 * throws at build time if a client component imports it.
 */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) return null
  if (!client) {
    client = new Stripe(key, {
      // Pin to the SDK's version so a dashboard default change can't alter payloads.
      apiVersion: Stripe.API_VERSION,
      maxNetworkRetries: 2,
      appInfo: { name: "shelteraidtx-donations" },
    })
  }
  return client
}

/**
 * Marks objects this site creates, so the webhook only sends donation receipts
 * ("no goods or services were provided") for donations, never for some future
 * Payment Link or ticket sale on the same Stripe account.
 * Identifier format per Stripe: a label plus 8 random letters.
 */
export const DONATION_INTEGRATION_ID = "shelteraidtx_donate_qkvmrtzb"
export const DONATION_METADATA = { source: "shelteraidtx-donate" } as const
