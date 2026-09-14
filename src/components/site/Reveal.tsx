"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in ms, e.g. index * 60. */
  delay?: number
  as?: ElementType
}

/**
 * Enhance-only scroll reveal. Server-rendered content is fully visible; after
 * hydration the element is armed (hidden) only if it is below the fold, then
 * fades up when it enters the viewport. Reduced-motion users see no movement
 * (handled in globals.css).
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight * 0.92
    if (alreadyVisible) return

    el.setAttribute("data-armed", "")
    let fallback = 0
    const show = () => {
      el.setAttribute("data-in", "")
      observer.disconnect()
      window.clearTimeout(fallback)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show()
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    )
    observer.observe(el)
    // Safety net: if the observer never fires (odd browsers, print, prerender), reveal anyway.
    fallback = window.setTimeout(show, 4000)
    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
