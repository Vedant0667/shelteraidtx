"use client"

import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"

export type StepTab = { title: string; description: string; image?: { src: string; alt: string } }

const REDUCE_MOTION = "(prefers-reduced-motion: reduce)"

function subscribeReduceMotion(onChange: () => void) {
  const mql = window.matchMedia(REDUCE_MOTION)
  mql.addEventListener("change", onChange)
  return () => mql.removeEventListener("change", onChange)
}

/**
 * Interactive process: hairline rows on the left, one large photo card on the
 * right that follows the selected step. Auto-advances every 5s until the user picks one.
 */
/**
 * `image`: one fixed photo for every step (used on the homepage); otherwise each
 * step supplies its own. `priority` stays off by default — only the page's real
 * LCP element should preload, and this panel is below the fold everywhere.
 */
export function StepsTabs({
  items,
  image,
  priority = false,
}: {
  items: StepTab[]
  image?: { src: string; alt: string }
  priority?: boolean
}) {
  const [active, setActive] = useState(0)
  const [wantsAuto, setWantsAuto] = useState(true)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  // Reduced motion kills auto-advance: globals.css zeroes every animation, so the
  // progress hairline would otherwise paint frozen at 100%. Read as an external
  // store (not setState-in-effect) so it also tracks live OS-level changes.
  const reduceMotion = useSyncExternalStore(
    subscribeReduceMotion,
    () => window.matchMedia(REDUCE_MOTION).matches,
    () => false
  )
  const auto = wantsAuto && !reduceMotion

  useEffect(() => {
    if (!auto) return
    if (items.length === 0) return
    const id = setInterval(() => setActive((i) => (i + 1) % items.length), 5000)
    return () => clearInterval(id)
  }, [auto, items.length])

  const select = (i: number) => {
    setActive(i)
    setWantsAuto(false)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1
    let next: number | null = null
    if (event.key === "ArrowDown") next = i === last ? 0 : i + 1
    else if (event.key === "ArrowUp") next = i === 0 ? last : i - 1
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = last
    if (next === null) return
    event.preventDefault()
    select(next)
    tabRefs.current[next]?.focus()
  }

  if (items.length === 0) return null

  const current = items[active]

  return (
    <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-6">
        <ul className="rows" role="tablist" aria-label="How it works">
          {items.map((step, i) => {
            const selected = i === active
            return (
              <li key={step.title} className="row relative" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={`step-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="step-panel"
                  tabIndex={selected ? 0 : -1}
                  ref={(node) => {
                    tabRefs.current[i] = node
                  }}
                  onClick={() => select(i)}
                  onKeyDown={(event) => onKeyDown(event, i)}
                  className="grid w-full grid-cols-[3.5rem_1fr] items-baseline gap-4 text-left"
                >
                  <span className={`kicker text-[0.78rem] tracking-[0.16em] ${selected ? "" : "text-[var(--muted)]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className={`title block transition-colors ${selected ? "text-[var(--ink)]" : "text-[var(--muted)]"}`}>{step.title}</span>
                    <span className="body mt-2 block">{step.description}</span>
                  </span>
                </button>
                {selected && auto && (
                  <span className="absolute inset-x-0 bottom-[-1px] h-px bg-[var(--hairline)]" aria-hidden="true">
                    <span className="steps-progress block h-full bg-[var(--accent)]" />
                  </span>
                )}
              </li>
            )
          })}
        </ul>

        {/* WCAG 2.2.2: auto-updating content needs a pause. Under reduced motion
            nothing advances on its own, so there is nothing to offer a control for. */}
        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setWantsAuto((on) => !on)}
            aria-pressed={!auto}
            aria-label={auto ? "Pause auto-advance" : "Resume auto-advance"}
            className="btn-icon mt-4"
          >
            {auto ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
          </button>
        )}
      </div>

      <div className="lg:col-span-6">
        <div
          role="tabpanel"
          id="step-panel"
          aria-labelledby={`step-tab-${active}`}
          className="photo relative min-h-[320px] shadow-editorial lg:h-full lg:min-h-[520px]"
        >
          {image ? (
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority={priority} />
          ) : (
            items.map(
              (step, i) =>
                step.image && (
                  <Image
                    key={step.image.src + i}
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                    priority={priority && i === 0}
                  />
                )
            )
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(15_23_42/0.6)] to-transparent p-6 text-white md:p-8">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/75">
              Step {active + 1} of {items.length}
            </p>
            <p className="font-display mt-1 text-2xl text-white">{current.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
