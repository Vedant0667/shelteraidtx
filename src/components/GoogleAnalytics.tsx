import Script from "next/script"
import { gaMeasurementId } from "@/lib/analytics"

/**
 * GA4 tag. Renders nothing until NEXT_PUBLIC_GA_MEASUREMENT_ID is set in Vercel.
 * Skipped entirely when the browser sends Global Privacy Control, as the
 * privacy policy promises. Page views on client-side navigation come from
 * GA4's enhanced measurement (browser history events), on by default.
 * Don't override page_location in config: it sticks to every later hit in the
 * tab and misattributes pages after client-side navigation. The thank-you
 * page's `session_id` is redacted in GA4 Admin (Data streams > Redact data).
 */
export function GoogleAnalytics() {
  const id = gaMeasurementId()
  if (!id) return null

  return (
    <Script id="ga4" strategy="afterInteractive">
      {`if (!navigator.globalPrivacyControl) {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=${id}";
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "${id}");
}`}
    </Script>
  )
}
