/**
 * Google Analytics 4 events, for the conversions Google Ad Grants requires.
 * A no-op until NEXT_PUBLIC_GA_MEASUREMENT_ID is set and the tag has loaded,
 * and when the visitor's browser sends Global Privacy Control.
 *
 * Never pass names, emails, or message text: only form types and amounts.
 */

type GtagParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: GtagParams) => void
  }
}

const MEASUREMENT_ID = /^G-[A-Z0-9]{4,16}$/

/** The measurement ID if it is well-formed, so a bad env value can never reach an inline script. */
export function gaMeasurementId(): string | null {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
  return id && MEASUREMENT_ID.test(id) ? id : null
}

export function track(name: string, params?: GtagParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}
