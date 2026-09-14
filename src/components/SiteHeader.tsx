"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"

export const NAV_LINKS = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
] as const

const PORTAL_URL = "https://portal.shelteraidtx.org"

/** One site header: transparent over mastheads, ivory with a hairline once scrolled. */
export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /** Lock body scroll while the sheet is open, restoring whatever was there before. */
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  /** Tab cycle: the toggle first (always reachable to close), then the sheet's own focusables. */
  const focusCycle = useCallback(() => {
    const sheet = sheetRef.current
    const inSheet = sheet
      ? Array.from(sheet.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")).filter(
          (el) => el.tabIndex >= 0 && el.getClientRects().length > 0,
        )
      : []
    const toggle = toggleRef.current
    return toggle && toggle.getClientRects().length > 0 ? [toggle, ...inSheet] : inSheet
  }, [])

  /** Escape to close + focus trap while open; focus returns to the toggle on close. */
  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false
        toggleRef.current?.focus()
      }
      return
    }
    wasOpenRef.current = true
    // Land on the first link in the sheet; Shift+Tab from there reaches the close button.
    const initial = focusCycle()
    const landing = initial[1] ?? initial[0]
    if (landing) landing.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const cycle = focusCycle()
      if (cycle.length === 0) return
      const index = cycle.indexOf(document.activeElement as HTMLElement)
      const step = event.shiftKey ? -1 : 1
      const next =
        index === -1
          ? cycle[event.shiftKey ? cycle.length - 1 : 0]
          : cycle[(index + step + cycle.length) % cycle.length]
      event.preventDefault()
      next.focus()
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, focusCycle])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-[var(--hairline)] bg-[rgb(251_248_242/0.94)] backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="wrap flex h-[var(--header-h)] items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Shelter Aid TX home"
          onClick={(event) => {
            setOpen(false)
            if (pathname !== "/") return
            // Already home: scroll back to the top instead of a no-op navigation.
            event.preventDefault()
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            })
          }}
        >
          <Image src="/images/main-logo.png" alt="Shelter Aid TX" width={200} height={40} className="h-9 w-auto md:h-10" priority />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-[0.95rem] transition-colors hover:text-[var(--ink)] ${
                isActive(link.href) ? "text-[var(--ink)]" : "text-[var(--muted)]"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PORTAL_URL}
            target="_blank"
            // nofollow: the portal is a gated app, not content we want crawled.
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-[0.95rem] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            Login
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <Link href="/request-shoes" className="btn btn-secondary btn-sm ml-2">
            Request shoes
          </Link>
          <Link href="/donate" className="btn btn-primary btn-sm">
            Donate shoes
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 grid h-11 w-11 shrink-0 place-items-center rounded-full text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="site-menu"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 flex h-[calc(100dvh-var(--header-h))] flex-col bg-[var(--bg)] transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="wrap flex flex-1 flex-col justify-center overflow-y-auto" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b border-[var(--hairline)] py-6 font-display text-[2rem] leading-tight ${isActive(link.href) ? "text-[var(--accent-ink)]" : "text-[var(--ink)]"}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PORTAL_URL}
            target="_blank"
            // nofollow: the portal is a gated app, not content we want crawled.
            rel="noopener noreferrer nofollow"
            className="mt-6 inline-flex w-fit items-center gap-1.5 py-3 text-lg text-[var(--muted)]"
            tabIndex={open ? 0 : -1}
          >
            Login
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
        <div className="wrap shrink-0 border-t border-[var(--hairline)] pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Link
            href="/request-shoes"
            className="btn btn-secondary btn-lg mb-3 w-full"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Request shoes
          </Link>
          <Link href="/donate" className="btn btn-primary btn-lg w-full" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Donate shoes
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
