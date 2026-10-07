"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import { useSearchParams } from "next/navigation"
import ContactForm from "@/components/ContactForm"
import { Em, LinkArrow } from "@/components/site"

/**
 * Every checklist on this page is the same row anatomy as every other list on
 * the site: a kicker, then a bold title (contract §13/§14). No ordinal rail,
 * no chips.
 */
type CheckItem = { kicker: string; title: string }

const donationGuidelines: CheckItem[] = [
  { kicker: "Condition", title: "New or gently used, clean and undamaged" },
  { kicker: "Sizes", title: "All sizes for men, women, and children" },
  { kicker: "Types", title: "Athletic shoes, casual shoes, boots, sandals" },
  { kicker: "Pairs", title: "Tied or banded together" },
]

const driveSupport: CheckItem[] = [
  { kicker: "Boxes", title: "Collection boxes and signage" },
  { kicker: "Promotion", title: "Flyers and social media graphics" },
  { kicker: "Logistics", title: "Coordination and pickup scheduling" },
  { kicker: "Results", title: "An impact report after your drive" },
]

/**
 * Tabs without their own checklist still need a second column, otherwise the
 * panel reads as an orphan form beside empty space. These are the facts the
 * rest of the site already states, so every tab lands on the same rhythm.
 */
const howWeWork: CheckItem[] = [
  { kicker: "Reply time", title: "We reply within 2 business days" },
  { kicker: "Coverage", title: "Drop-offs and pickups across DFW" },
  { kicker: "Taxes", title: "All donations are tax-deductible" },
]

const HOW_WE_WORK_TITLE = "What to expect"

type Way = {
  id: string
  /** Tab label. Sentence case, and the same words the whole site uses. */
  title: string
  /** Panel kicker when it should read differently from the tab label. */
  kicker?: string
  description: string
  inquiryValue: string
  /** Display heading: plain phrase, then a faint-ink phrase on the same line. */
  heading: string
  headingEm: string
  body: string
  subject: string
  placeholder: string
  listTitle?: string
  list?: CheckItem[]
  /** Optional link under the intro, for a closely related way to help. */
  aside?: { href: string; label: string }
}

const waysToHelp: Way[] = [
  {
    id: "shoe-donation",
    title: "Donate shoes",
    description:
      "Tell us what you have and where you are, and we'll set up a drop-off or pickup. We accept all sizes for men, women, and children.",
    inquiryValue: "shoe-donation",
    heading: "Donate new or",
    headingEm: "gently used shoes.",
    body: "Every pair goes directly to shelters across Dallas-Fort Worth. We take new and gently used shoes in all sizes.",
    subject: "Shoe Donation",
    placeholder:
      "Tell us about your donation, including types, sizes, quantities, and gender, plus your preferred drop-off or pickup location.",
    listTitle: "What we accept",
    list: donationGuidelines,
    aside: { href: "/donate#give", label: "Rather give money? Donate online" },
  },
  {
    id: "host-drive",
    title: "Host a drive",
    description: "Run a collection at your school, workplace, or community group. Tell us when, and we'll supply what you need.",
    inquiryValue: "host-drive",
    heading: "Host a shoe drive.",
    headingEm: "We supply the boxes.",
    body: "We supply collection boxes and promotional materials, then coordinate the pickup. Schools, workplaces, and community groups run drives with us.",
    subject: "Shoe Drive Inquiry",
    placeholder:
      "Tell us about your organization and when you would like to host a drive. We will provide collection boxes and promotional materials.",
    listTitle: "What we provide",
    list: driveSupport,
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Sort donations, help at events, or spread the word about Shelter Aid TX.",
    inquiryValue: "volunteer",
    heading: "Sort shoes and",
    headingEm: "help at events.",
    body: "Volunteers sort donations, help at events, and spread the word. You can give a few hours or take on a bigger role.",
    subject: "Volunteer Interest",
    placeholder: "Tell us about yourself, your availability, and how you would like to help.",
  },
  {
    id: "partnership",
    title: "Partner with us",
    description: "For businesses and organizations: employee drives, drop-off locations, and other corporate partnerships.",
    inquiryValue: "partnership",
    heading: "Run an employee drive or",
    headingEm: "host a drop-off.",
    body: "Corporate partners run employee drives and host drop-off locations, which gives people more places to give shoes. Tell us what would work for your organization.",
    subject: "Partnership Inquiry",
    placeholder: "Tell us about your organization and how you would like to partner with Shelter Aid TX.",
  },
]

const inquiryOptions = [
  { value: "shoe-donation", label: "Donate shoes" },
  { value: "host-drive", label: "Host a drive" },
  { value: "volunteer", label: "Volunteer" },
  { value: "partnership", label: "Partner with us" },
]

/**
 * Older links point at ids that were renamed; keep them landing on the right
 * tab. `request`/`shelter` are deliberately absent: shelters asking for shoes
 * belong on /request-shoes, not on a donation tab, so those fall through to the
 * default rather than resolving to the wrong answer.
 */
const TAB_ALIASES: Record<string, string> = {
  "shoe-drive": "host-drive",
  drive: "host-drive",
  donate: "shoe-donation",
  partner: "partnership",
}

/** Donating shoes is the ask most visitors arrive with, so it opens first. */
const DEFAULT_TAB = "shoe-donation"

function resolveTab(value?: string | null) {
  if (!value) return DEFAULT_TAB
  const id = TAB_ALIASES[value] ?? value
  return waysToHelp.some((way) => way.id === id) ? id : DEFAULT_TAB
}

export function WaysToHelp() {
  // Deep links such as /get-involved?tab=partnership#contact decide which panel
  // opens. Reading the query here (rather than on the server) keeps the route
  // static; `useSearchParams` re-reads it on every client navigation.
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  // The query picks the panel; a click overrides it until the query changes
  // again. Adjusting during render (instead of an effect) means a footer link
  // such as /get-involved?tab=shoe-drive#contact reopens the right panel even
  // when the visitor is already on this page.
  const [picked, setPicked] = useState<string | null>(null)
  const [seenParam, setSeenParam] = useState(tabParam)
  if (tabParam !== seenParam) {
    setSeenParam(tabParam)
    setPicked(null)
  }
  const activeId = picked ?? resolveTab(tabParam)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const active = waysToHelp.find((way) => way.id === activeId) ?? waysToHelp[0]

  const onKeyDown =(event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = waysToHelp.length - 1
    let next = -1
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = last
    if (next < 0) return
    event.preventDefault()
    setPicked(waysToHelp[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      {/* Segmented control: one hairline tray, 8px tabs inside it. Two-up on a
          phone; a single inline row from the small breakpoint up. */}
      <div
        role="tablist"
        aria-label="Ways to help"
        className="grid grid-cols-2 gap-1 rounded-xl border border-[var(--hairline)] bg-[var(--surface)] p-1 shadow-[0_1px_2px_rgb(var(--shadow-color)/0.05)] sm:inline-grid sm:grid-flow-col sm:auto-cols-fr sm:grid-cols-none"
      >
        {waysToHelp.map((way, index) => {
          const selected = way.id === active.id
          return (
            <button
              key={way.id}
              id={`tab-${way.id}`}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${way.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setPicked(way.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-[0.9rem] font-semibold tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 sm:px-5 ${
                selected
                  ? // Deeper brand blue so white text clears 4.5:1 (sky is 2.97:1).
                    "bg-[var(--accent-ink)] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.22),0_6px_16px_-8px_rgb(43_159_217/0.65)]"
                  : "text-[var(--ink-soft)] hover:bg-[var(--sunken)] hover:text-[var(--ink)]"
              }`}
            >
              {way.title}
            </button>
          )
        })}
      </div>

      <div className="rule mt-8 md:mt-9" />

      {/* The anchor sits on the panel group so /get-involved?tab=…#contact lands
          on the whole answer (copy + form), with the fixed header cleared by the
          scroll-padding-top set in globals.css.

          Every panel is in the markup and the inactive ones are hidden with the
          `hidden` attribute rather than unmounted, so all four answers ship in
          the server HTML for crawlers. Only the open panel mounts the form:
          four live forms would mean four duplicate sets of field ids. */}
      <div id="contact" className="mt-9 md:mt-14">
        {waysToHelp.map((way) => {
          const selected = way.id === active.id
          const listTitle = way.listTitle ?? HOW_WE_WORK_TITLE
          const listItems = way.list ?? howWeWork
          return (
            <div
              key={way.id}
              id={`panel-${way.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${way.id}`}
              hidden={!selected}
            >
              <div className="max-w-3xl">
                <p className="kicker mb-5">{way.kicker ?? way.title}</p>
                <h3 className="display-md">
                  {way.heading} <Em>{way.headingEm}</Em>
                </h3>
                <p className="lede mt-5">{way.body}</p>
                {way.aside && (
                  <div className="mt-4">
                    <LinkArrow href={way.aside.href}>{way.aside.label}</LinkArrow>
                  </div>
                )}
              </div>

              {/* Contract §15: both columns open with a kicker on the same line
                  and, because the card and the row list each fill the stretched
                  column, both end on the same line too. DOM order is the phone
                  order: the form first, then the checklist. */}
              <div className="mt-12 grid grid-cols-1 items-stretch gap-8 md:mt-16 md:grid-cols-12 md:gap-12">
                <div className="flex flex-col md:col-span-6">
                  <p className="kicker mb-5">Send a message</p>
                  {/* `[&_.field]:text-base`: inputs must be 16px or iOS Safari
                      zooms the whole page on focus. Belongs in `.field` itself. */}
                  <div className="card flex flex-1 flex-col p-7 [&_.field]:text-base md:p-9">
                    {/* Same card intro as /donate and /request-shoes: title, one
                        body sentence, hairline rule, then the fields (§6). */}
                    <h4 className="title">Your message</h4>
                    <p className="body mt-2">{way.description}</p>
                    <div className="rule mb-7 mt-6" />
                    {selected && (
                      <ContactForm
                        subject={way.subject}
                        submitLabel="Send message"
                        successMessage="Thank you. We will be in touch within 2 business days."
                        inquiryOptions={inquiryOptions}
                        minimal
                        defaultInquiry={way.inquiryValue}
                        messagePlaceholder={way.placeholder}
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:col-span-6">
                  <p className="kicker mb-5">{listTitle}</p>
                  <ul className="rows flex flex-1 flex-col">
                    {listItems.map((item) => (
                      <li key={item.title} className="row flex-1">
                        <p className="kicker">{item.kicker}</p>
                        <h4 className="title mt-4">{item.title}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WaysToHelp
