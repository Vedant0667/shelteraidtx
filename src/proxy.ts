import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

function buildCsp() {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "img-src 'self' data: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "script-src 'self' 'unsafe-inline' https://vercel.live https://*.vercel-insights.com",
    "connect-src 'self' https://vercel.live https://*.vercel-insights.com",
    "upgrade-insecure-requests",
  ]
  return directives.join("; ")
}

export function proxy(req: NextRequest) {
  const res = NextResponse.next()

  const forwardedProto = req.headers.get("x-forwarded-proto")
  const isHttps = req.nextUrl.protocol === "https:" || forwardedProto === "https"

  res.headers.set("Content-Security-Policy", buildCsp())
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

