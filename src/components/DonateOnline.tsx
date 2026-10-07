"use client"

import { useId, useState } from "react"
// "/pure": importing the default entry injects Stripe.js immediately as a side
// effect. The pure entry waits until loadStripe() is called.
import { loadStripe } from "@stripe/stripe-js/pure"
import type { Stripe } from "@stripe/stripe-js"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import {
  MAX_DONATION_CENTS,
  MIN_DONATION_CENTS,
  PRESET_AMOUNTS_CENTS,
  formatUsd,
  type DonationFrequency,
} from "@/lib/donations"

// Publishable key only (pk_...). It is safe in the browser by design; the secret
// key stays in src/lib/stripe.ts on the server.
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// Stripe.js (and its fraud-detection cookie) loads on the first Donate click,
// not with the page: keeps the homepage and /donate fast and cookie-free until
// someone actually starts checkout.
let stripePromise: Promise<Stripe | null> | null = null
function getStripe(): Promise<Stripe | null> | null {
  if (!publishableKey) return null
  if (!stripePromise) {
    // If Stripe.js fails to load (ad blocker, flaky network), forget the failed
    // attempt so the next Donate click retries instead of a blank checkout.
    stripePromise = loadStripe(publishableKey).catch((err) => {
      stripePromise = null
      throw err
    })
  }
  return stripePromise
}

const FREQUENCIES: { value: DonationFrequency; label: string }[] = [
  { value: "once", label: "One time" },
  { value: "monthly", label: "Monthly" },
]

/** Parses "25", "25.5", "$1,000" into cents; null when it isn't a plain dollar amount. */
function parseDollars(raw: string): number | null {
  const cleaned = raw.replace(/[$,\s]/g, "")
  if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return null
  return Math.round(Number(cleaned) * 100)
}

const pill = (active: boolean) =>
  `rounded-lg border px-4 py-2.5 text-[0.95rem] font-semibold transition-colors ${
    active
      ? // Selected: the deeper brand blue, so white text clears 4.5:1 (sky is 2.97:1).
        "border-[var(--accent-ink)] bg-[var(--accent-ink)] text-white"
      : "border-[var(--hairline)] bg-transparent text-[var(--ink)] hover:border-[var(--accent)]"
  }`

export default function DonateOnline() {
  const uid = useId()
  const [frequency, setFrequency] = useState<DonationFrequency>("once")
  const [preset, setPreset] = useState<number | null>(PRESET_AMOUNTS_CENTS[1])
  const [custom, setCustom] = useState("")
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  // What the open Checkout Session was created with. The summary reads this, not
  // the live picker state, so it always matches what Stripe will charge.
  const [submitted, setSubmitted] = useState<{ amount: number; frequency: DonationFrequency } | null>(null)
  const [status, setStatus] = useState<"idle" | "loading">("idle")
  const [error, setError] = useState<string | null>(null)

  const customCents = custom ? parseDollars(custom) : null
  const amount = custom ? customCents : preset
  const amountValid =
    amount !== null && amount >= MIN_DONATION_CENTS && amount <= MAX_DONATION_CENTS

  if (!publishableKey) {
    return (
      <p className="body">
        Online donations are unavailable right now. Email{" "}
        <a className="underline" href="mailto:shelteraidtx@gmail.com">
          shelteraidtx@gmail.com
        </a>{" "}
        and we will help you give another way.
      </p>
    )
  }

  async function startCheckout() {
    if (!amountValid || amount === null || status === "loading") return
    const request = { amount, frequency }
    setStatus("loading")
    setError(null)
    // Start downloading Stripe.js now, in parallel with creating the session.
    // A load failure surfaces below when checkout mounts; don't leave it unhandled here.
    getStripe()?.catch(() => {})
    try {
      const res = await fetch("/api/donate/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      })
      const data: { clientSecret?: string; error?: string } = await res.json().catch(() => ({}))
      if (!res.ok || !data.clientSecret) {
        setError(
          res.status === 429
            ? "Too many attempts. Wait a few minutes and try again."
            : "We couldn't start checkout. Try again, or email shelteraidtx@gmail.com."
        )
        return
      }
      setSubmitted(request)
      setClientSecret(data.clientSecret)
    } catch {
      setError("We couldn't reach the server. Check your connection and try again.")
    } finally {
      setStatus("idle")
    }
  }

  if (clientSecret && submitted) {
    return (
      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="body">
            {formatUsd(submitted.amount)}
            {submitted.frequency === "monthly" ? " every month" : ""}
          </p>
          <button
            type="button"
            className="text-[0.9rem] font-medium text-[var(--accent-ink)] underline"
            onClick={() => {
              setClientSecret(null)
              setSubmitted(null)
            }}
          >
            Change amount
          </button>
        </div>
        {/* Card details are entered inside Stripe's iframe and never touch our server. */}
        <EmbeddedCheckoutProvider key={clientSecret} stripe={getStripe()} options={{ clientSecret }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    )
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        void startCheckout()
      }}
    >
      {/* Locked while checkout is being created, so the choice can't change under it. */}
      <fieldset disabled={status === "loading"}>
        <legend className="field-label">How often</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {FREQUENCIES.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={frequency === f.value}
              className={pill(frequency === f.value)}
              onClick={() => setFrequency(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset disabled={status === "loading"}>
        <legend className="field-label">Amount</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PRESET_AMOUNTS_CENTS.map((cents) => (
            <button
              key={cents}
              type="button"
              aria-pressed={!custom && preset === cents}
              className={pill(!custom && preset === cents)}
              onClick={() => {
                setPreset(cents)
                setCustom("")
              }}
            >
              {formatUsd(cents)}
            </button>
          ))}
        </div>
        <label htmlFor={`custom-${uid}`} className="field-label mt-4 block">
          Or enter an amount
        </label>
        <input
          id={`custom-${uid}`}
          className="field mt-2 text-base"
          inputMode="decimal"
          autoComplete="off"
          placeholder="$"
          value={custom}
          maxLength={12}
          aria-invalid={custom !== "" && !amountValid}
          aria-describedby={`amount-help-${uid}`}
          onChange={(e) => setCustom(e.target.value)}
        />
        <p id={`amount-help-${uid}`} className="mt-2 text-[0.85rem] text-[var(--ink-soft)]">
          {formatUsd(MIN_DONATION_CENTS)} to {formatUsd(MAX_DONATION_CENTS)}.
        </p>
      </fieldset>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={!amountValid || status === "loading"}
          className="btn btn-primary btn-lg w-full"
        >
          {status === "loading"
            ? "Starting checkout..."
            : amountValid && amount !== null
              ? `Donate ${formatUsd(amount)}${frequency === "monthly" ? " a month" : ""}`
              : "Donate"}
        </button>
        {error && (
          <p role="alert" className="field-error">
            {error}
          </p>
        )}
      </div>
    </form>
  )
}
