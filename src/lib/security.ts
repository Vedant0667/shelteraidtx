import type { NextRequest } from "next/server"

type RateLimitOptions = {
  limit: number
  windowMs: number
}

type RateLimitResult = {
  ok: boolean
  remaining: number
  resetAt: number
}

type RateLimitEntry = {
  count: number
  resetAt: number
}

// In-memory rate limit store. This is best-effort and resets on deploy/restart.
const rateLimitStore = new Map<string, RateLimitEntry>()

export const MAX_JSON_BYTES = 10_000

export function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }
  return req.headers.get("x-real-ip") || "unknown"
}

export function getContentLength(req: NextRequest): number | null {
  const raw = req.headers.get("content-length")
  if (!raw) return null
  const parsed = Number(raw)
  return Number.isFinite(parsed) ? parsed : null
}

export function isJsonContentType(req: NextRequest): boolean {
  const contentType = req.headers.get("content-type") || ""
  return contentType.toLowerCase().startsWith("application/json")
}

export function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin")
  if (!origin) return true

  const envOrigin =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL

  const allowedOrigins = new Set<string>([
    req.nextUrl.origin,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://localhost:3000",
  ])

  if (envOrigin) {
    allowedOrigins.add(envOrigin)
  }

  return allowedOrigins.has(origin)
}

export function rateLimit(
  key: string,
  { limit, windowMs }: RateLimitOptions
): RateLimitResult {
  const now = Date.now()
  const entry = rateLimitStore.get(key)

  if (!entry || entry.resetAt <= now) {
    const resetAt = now + windowMs
    rateLimitStore.set(key, { count: 1, resetAt })
    return { ok: true, remaining: Math.max(0, limit - 1), resetAt }
  }

  const nextCount = entry.count + 1
  entry.count = nextCount
  rateLimitStore.set(key, entry)

  const ok = nextCount <= limit
  const remaining = Math.max(0, limit - nextCount)

  return { ok, remaining, resetAt: entry.resetAt }
}

