import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

function buildCsp(isHttps: boolean) {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "frame-src 'self' https://player.vimeo.com https://vimeo.com",
    "img-src 'self' data: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    // React dev mode needs eval for its debugging features; never in production.
    `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV !== "production" ? " 'unsafe-eval'" : ""} https://vercel.live https://*.vercel-insights.com https://va.vercel-scripts.com`,
    "connect-src 'self' https://vercel.live https://*.vercel-insights.com https://va.vercel-scripts.com",
  ]
  // Only on HTTPS. On plain http://localhost (next dev), Safari upgrades every
  // /_next/* subresource to https://localhost, which fails, so the page renders unstyled.
  if (isHttps) directives.push("upgrade-insecure-requests")
  return directives.join("; ")
}

export function proxy(req: NextRequest) {
  const res = NextResponse.next()

  // Proxy chains can send a list ("https, http"); only the client-facing hop counts.
  const forwardedProto = (req.headers.get("x-forwarded-proto") ?? "").split(",")[0].trim()
  const isHttps = req.nextUrl.protocol === "https:" || forwardedProto === "https"

  res.headers.set("Content-Security-Policy", buildCsp(isHttps))
  // The response varies by scheme (CSP + HSTS), so caches must not share it.
  res.headers.append("Vary", "x-forwarded-proto")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("X-Frame-Options", "DENY")
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  if (isHttps) {
    res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  }

  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
