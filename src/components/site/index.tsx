import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export { Reveal } from "./Reveal"
export { StepsTabs } from "./StepsTabs"
export type { StepTab } from "./StepsTabs"

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

type Tone = "bg" | "surface" | "sunken" | "ink"
const TONE: Record<Tone, string> = { bg: "tone-bg", surface: "tone-surface", sunken: "tone-sunken", ink: "tone-ink" }

/** Italic word inside a display heading. */
export function Em({ children }: { children: ReactNode }) {
  return <span className="display-em">{children}</span>
}

/**
 * Editorial section: hairline top, kicker + big serif heading (last line
 * italic via `em`), lede beside/below, optional action on the right.
 */
export function Section({
  id,
  kicker,
  title,
  em,
  lede,
  action,
  tone = "bg",
  tight = false,
  children,
  className = "",
}: {
  id?: string
  kicker?: string
  title?: ReactNode
  em?: ReactNode
  lede?: ReactNode
  action?: ReactNode
  tone?: Tone
  tight?: boolean
  children?: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`${TONE[tone]} ${tight ? "sect-tight" : "sect"} ${className}`}>
      <div className="wrap">
        {(kicker || title) && (
          <div className={`flex flex-col gap-8 md:flex-row md:items-start md:justify-between ${children ? "mb-12 md:mb-16" : ""}`}>
            <div className="max-w-3xl">
              {kicker && <p className="kicker mb-5">{kicker}</p>}
              {title && (
                <h2 className="display-lg">
                  {title}
                  {em && (
                    <>
                      <br />
                      <Em>{em}</Em>
                    </>
                  )}
                </h2>
              )}
              {lede && <p className="lede mt-6">{lede}</p>}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/**
 * Page masthead (portfolio hero anatomy): kicker, big serif title with an
 * italic line, lede, actions; optional photo card on the right with an
 * offset accent frame. Faint paper rules behind.
 *
 * Every route uses this so the top of the site is identical everywhere:
 * same ivory ground, same paper rules, same `--header-h + 3.5/5.5rem` top
 * padding. `width="prose"` is the document variant (blog post, legal): the
 * same anatomy at the 44rem measure and one heading step down, so the
 * masthead lines up with the body copy underneath it.
 */
export function PageIntro({
  kicker,
  title,
  em,
  lede,
  actions,
  photo,
  strip,
  above,
  width = "wide",
}: {
  /** ReactNode, not string: a dated masthead wraps it in <time dateTime="…">. */
  kicker?: ReactNode
  title: ReactNode
  em?: ReactNode
  lede?: ReactNode
  actions?: ReactNode
  photo?: { src: string; alt: string; priority?: boolean; aspect?: string }
  strip?: ReactNode
  /** Rendered above the masthead at full width (breadcrumbs bring their own container). */
  above?: ReactNode
  width?: "wide" | "prose"
}) {
  const prose = width === "prose"
  return (
    <section className="relative isolate overflow-hidden tone-bg">
      <div aria-hidden className="paper-rules pointer-events-none absolute inset-x-0 top-0 h-full opacity-50" />
      <div className="relative pt-[calc(var(--header-h)+3.5rem)] md:pt-[calc(var(--header-h)+5.5rem)]">
        {above}
        <div className={`${prose ? "wrap-prose" : "wrap"} ${above ? "mt-9 md:mt-10" : ""} pb-16 md:pb-20`}>
          <div className={`grid grid-cols-1 items-end gap-12 ${photo ? "lg:grid-cols-12 lg:gap-10" : ""}`}>
            <div className={photo ? "order-2 lg:order-1 lg:col-span-7" : prose ? "" : "max-w-3xl"}>
              {kicker && <p className="kicker mb-7">{kicker}</p>}
              <h1 className={prose ? "display-lg" : "display-xl"}>
                {title}
                {em && (
                  <>
                    <br />
                    <Em>{em}</Em>
                  </>
                )}
              </h1>
              {lede && <p className={`lede mt-8 ${prose ? "max-w-none" : ""}`}>{lede}</p>}
              {actions && <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">{actions}</div>}
            </div>
            {photo && (
              <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
                <figure className="photo-frame relative w-full max-w-[26rem]">
                  <div className={`photo relative ${photo.aspect ?? "aspect-[4/5]"} shadow-editorial`}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 26rem, 90vw"
                      className="object-cover object-top"
                      priority={photo.priority}
                    />
                  </div>
                </figure>
              </div>
            )}
          </div>
          {strip && <div className="mt-16">{strip}</div>}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Buttons and links                                                   */
/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "secondary" | "on-dark" | "ghost-on-dark"
type ButtonSize = "sm" | "md" | "lg"
const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "on-dark": "btn-on-dark",
  "ghost-on-dark": "btn-ghost-on-dark",
}
const SIZE_CLASS: Record<ButtonSize, string> = { sm: "btn-sm", md: "", lg: "btn-lg" }

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  external = false,
  className = "",
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  arrow?: boolean
  external?: boolean
  className?: string
}) {
  const classes = `btn ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden="true" />}
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}

export function LinkArrow({ href, children, className = "", external = false }: { href: string; children: ReactNode; className?: string; external?: boolean }) {
  const cls = `link-arrow ${className}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRight aria-hidden="true" />
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowUpRight aria-hidden="true" />
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/* Strips, rows, cards                                                 */
/* ------------------------------------------------------------------ */

/** Hairline-celled facts strip (the portfolio's "Now" strip). */
export function StatStrip({ items, columns }: { items: { label: string; value: ReactNode }[]; columns?: 2 | 3 | 4 }) {
  const cols = columns ?? (items.length >= 4 ? 4 : items.length === 3 ? 3 : 2)
  const colClass = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
  return (
    <dl className={`strip grid-cols-1 ${colClass}`}>
      {items.map((s) => (
        <div key={s.label}>
          <dt className="kicker">{s.label}</dt>
          <dd className="title-sm mt-1.5">{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export type RowItem = { kicker?: string; title: ReactNode; detail?: ReactNode; link?: { href: string; label: string; external?: boolean } }

/** Hairline-separated rows: kicker left, serif title + detail, arrow right. */
export function RowList({ items, compact = false }: { items: RowItem[]; compact?: boolean }) {
  return (
    <ul className="rows">
      {items.map((a, i) => {
        const inner = (
          <div className={`grid grid-cols-1 gap-x-8 gap-y-3 ${compact ? "" : "lg:grid-cols-[10rem_1fr_auto] lg:items-baseline"}`}>
            <span className="kicker">{a.kicker}</span>
            <div>
              <h3 className="title">{a.title}</h3>
              {a.detail && <p className="body mt-2">{a.detail}</p>}
              {a.link && (
                <span className="link-arrow mt-3">
                  {a.link.label}
                  <ArrowUpRight aria-hidden="true" />
                </span>
              )}
            </div>
            {a.link && !compact && <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-[var(--muted)] transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)] lg:block" aria-hidden="true" />}
          </div>
        )
        return (
          <li key={i} className="row group">
            {a.link ? (
              a.link.external ? (
                <a href={a.link.href} target="_blank" rel="noreferrer" className="block rounded-sm">
                  {inner}
                </a>
              ) : (
                <Link href={a.link.href} className="block rounded-sm">
                  {inner}
                </Link>
              )
            ) : (
              inner
            )}
          </li>
        )
      })}
    </ul>
  )
}

export function Card({
  children,
  className = "",
  hover = false,
  flat = false,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  hover?: boolean
  flat?: boolean
  as?: "div" | "li" | "article"
}) {
  return <Tag className={`${flat ? "card-flat" : "card"} ${hover ? "card-hover" : ""} ${className}`}>{children}</Tag>
}

/** Supporting card: image on top, serif title with optional icon box, text, dot-separated meta. */
export function MediaCard({
  image,
  title,
  icon,
  text,
  meta,
  href,
  external = false,
  badge,
  imageAspect = "aspect-[16/10]",
}: {
  image?: { src: string; alt: string }
  title: ReactNode
  icon?: ReactNode
  text?: ReactNode
  meta?: string[]
  href?: string
  external?: boolean
  badge?: string
  imageAspect?: string
}) {
  const body = (
    <>
      {image && (
        <div className={`relative ${imageAspect} overflow-hidden border-b hairline bg-[var(--sunken)]`}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          {badge && <span className="kicker absolute left-4 top-4 rounded-full bg-[var(--surface)] px-3 py-1">{badge}</span>}
        </div>
      )}
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="title flex items-center gap-3">
            {title}
            {icon && <span className="icon-box">{icon}</span>}
          </h3>
          {href && <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-[var(--muted)] transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" aria-hidden="true" />}
        </div>
        {text && <p className="body mt-3">{text}</p>}
        {meta && meta.length > 0 && (
          <p className="meta dot-sep mt-5 flex flex-wrap">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </p>
        )}
      </div>
    </>
  )
  const cls = "card card-hover group block overflow-hidden"
  if (href && external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    )
  if (href)
    return (
      <Link href={href} className={cls}>
        {body}
      </Link>
    )
  return <article className="card overflow-hidden">{body}</article>
}

/** Flagship row: media card on one side, kicker + serif title + text + meta on the other. */
export function FeatureRow({
  kicker,
  title,
  text,
  meta,
  link,
  media,
  image,
  reverse = false,
  as: Heading = "h3",
  align = "start",
  split = "6/6",
}: {
  kicker?: string
  title: ReactNode
  text?: ReactNode
  meta?: string[]
  link?: { href: string; label: string; external?: boolean }
  media?: ReactNode
  image?: { src: string; alt: string; aspect?: string; contain?: boolean }
  reverse?: boolean
  as?: "h2" | "h3"
  /** Column tops align by default (contract §15); "center" only for short captions beside tall media. */
  align?: "start" | "center"
  split?: "6/6" | "7/5"
}) {
  const mediaCols = split === "7/5" ? "md:col-span-7" : "md:col-span-6"
  const textCols = split === "7/5" ? "md:col-span-5" : "md:col-span-6"
  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 ${align === "center" ? "items-center" : "items-start"}`}>
      <div className={`${mediaCols} ${reverse ? "md:order-2" : ""}`}>
        {media ?? (image && (
          <div className={`photo relative ${image.aspect ?? "aspect-[16/10]"} shadow-editorial ${image.contain ? "flex items-center justify-center p-10" : ""}`}>
            {image.contain ? (
              <Image src={image.src} alt={image.alt} width={600} height={200} className="h-auto w-full max-w-[22rem]" />
            ) : (
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
            )}
          </div>
        ))}
      </div>
      <div className={`${textCols} ${reverse ? "md:order-1" : ""}`}>
        {kicker && <p className="kicker mb-4">{kicker}</p>}
        <Heading className="display-md">{title}</Heading>
        {text && <div className="body-lg mt-4 [&>p+p]:mt-4">{text}</div>}
        {meta && meta.length > 0 && (
          <p className="meta dot-sep mt-5 flex flex-wrap">
            {meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </p>
        )}
        {link && (
          <div className="mt-6">
            <LinkArrow href={link.href} external={link.external}>
              {link.label}
            </LinkArrow>
          </div>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export type PartnerItem = {
  name: string
  logo: string
  href?: string
  /** Tailwind height class for the mark so different logos land at one optical size, e.g. "h-10" for wide wordmarks, "h-14" for square marks. */
  box?: string
  /** Span two columns on the 2-up phone grid so the last row closes flush. */
  span?: boolean
  /** Photo-style asset: bleed edge to edge instead of sitting as a mark. */
  bleed?: boolean
}

export function LogoWall({ items, columns = 6, showNames = true }: { items: PartnerItem[]; columns?: 4 | 5 | 6; showNames?: boolean }) {
  const cols =
    columns === 4
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : columns === 5
        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
  return (
    <ul className={`grid gap-x-4 gap-y-6 ${cols}`}>
      {items.map((p) => (
        <li key={p.name} className={`flex flex-col gap-2.5 ${p.span ? "col-span-2 sm:col-span-1" : ""}`}>
          <div className={`logo-tile ${p.bleed ? "overflow-hidden p-0" : ""}`}>
            {p.bleed ? (
              <Image src={p.logo} alt={p.name} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
            ) : (
              <Image
                src={p.logo}
                alt={p.name}
                width={240}
                height={120}
                className={`w-auto max-w-full object-contain ${p.box ?? "max-h-12"}`}
                style={{ height: "auto" }}
              />
            )}
          </div>
          {showNames && <span className="meta">{p.name}</span>}
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/* Quotes, accordion, prose                                            */
/* ------------------------------------------------------------------ */

export function Quote({ quote, name, org, className = "" }: { quote: string; name?: string; org?: string; className?: string }) {
  return (
    <figure className={className}>
      <blockquote className="title">{quote}</blockquote>
      {(name || org) && (
        <figcaption className="mt-4">
          {org && <span className="kicker block">{org}</span>}
          {name && <span className="meta mt-1 block">{name}</span>}
        </figcaption>
      )}
    </figure>
  )
}

export type AccordionItem = { question: string; answer: ReactNode }

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="acc-list">
      {items.map((item) => (
        <details key={item.question} className="acc">
          <summary>
            <span className="title-sm">{item.question}</span>
            <span className="acc-mark" aria-hidden="true" />
          </summary>
          <div className="acc-body">{item.answer}</div>
        </details>
      ))}
    </div>
  )
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`prose-site ${className}`}>{children}</div>
}

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

/**
 * Vertical timeline: hairline spine, accent year markers, entries alternate
 * sides on desktop. Uses the same type roles as every other list on the site
 * (kicker year, serif `title`, muted `body`).
 */
/** Vertical timeline: left hairline spine with accent year markers, entries left-aligned (contract §1). */
export function Timeline({ items }: { items: { year: string; title: string; description: string }[] }) {
  return (
    <ol className="relative max-w-3xl">
      <span className="absolute bottom-3 top-3 left-[7px] w-px bg-[var(--hairline-strong)]" aria-hidden="true" />
      {items.map((item) => (
        <li key={item.year + item.title} className="relative pb-10 pl-10 last:pb-0 md:pl-12">
          <span
            className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
            aria-hidden="true"
          />
          <p className="kicker">{item.year}</p>
          <h3 className="title mt-2">{item.title}</h3>
          <p className="body mt-2">{item.description}</p>
        </li>
      ))}
    </ol>
  )
}

/* No legacy aliases live here any more. Every page composes the primitives
   above: Section / PageIntro / StatStrip / RowList / FeatureRow / MediaCard /
   Card / LogoWall / Quote / Accordion / Prose / ButtonLink / LinkArrow / Em. */
