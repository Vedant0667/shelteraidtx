"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

/**
 * Team card email: a click copies the address instead of opening a mail app.
 * `compact` shows just "Email", for cards narrower than lg where the full
 * address does not fit. Falls back to mailto when the clipboard is unavailable
 * (insecure context, permission denied). `light` is the ink-on-ivory version,
 * for rows outside the photo cards.
 */
export function CopyEmail({
  email,
  name,
  compact = false,
  light = false,
}: {
  email: string
  name: string
  compact?: boolean
  light?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const Icon = copied ? Check : Copy
  // The live region sits beside the button, not in it: a button's aria-label
  // replaces its content, and screen readers skip live regions inside it.
  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${name}'s email address, ${email}`}
        className={
          light
            ? "inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--hairline)] px-2.5 py-1 text-[0.75rem] font-medium text-[var(--ink)] transition-colors hover:border-[var(--hairline-strong)] focus-visible:outline-[var(--accent-ink)]"
            : `inline-flex max-w-full items-center gap-1.5 rounded-full font-medium text-white backdrop-blur-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${compact ? "bg-black/35 px-2.5 py-1 text-[0.7rem] hover:bg-black/50" : "bg-white/15 px-3 py-1 text-sm hover:bg-white/25"}`
        }
      >
        <Icon className={`shrink-0 ${compact || light ? "h-3 w-3" : "h-3.5 w-3.5"}`} aria-hidden="true" />
        <span className="truncate">{copied ? "Copied" : compact || light ? "Email" : email}</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  )
}
