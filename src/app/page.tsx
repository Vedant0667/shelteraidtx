"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Play } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import DonateOptions from "@/components/DonateOptions"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import {
  Accordion,
  ButtonLink,
  LinkArrow,
  LogoWall,
  Reveal,
  Section,
} from "@/components/site"
import { organizationSchema, websiteSchema } from "@/lib/schema"

// Eased count-up: slow start, fast middle, gentle settle (S-curve, ease-in-out quart).
function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
}

// While counting, mirror the style of the final display: "8k" counts 0 -> 999 -> 1k -> 7.9k -> 8k.
function formatLike(display: string, n: number) {
  if (/k$/i.test(display) && n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`
  return `${Math.round(n)}`
}

function HeroCounter({ value, suffix, display }: { value: string; suffix: string; display: string }) {
  // Seeded with the real number so the server-rendered HTML carries "8k"/"32"/
  // "100" for crawlers and no-JS visitors. Only an in-view, motion-allowed visit
  // rewinds it to zero and counts back up.
  const [displayValue, setDisplayValue] = useState(display)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // The effect re-runs when the target changes, so the previous run's "already
    // counted" latch must be cleared or the new value would never animate.
    hasAnimated.current = false

    const target = Number.parseFloat(value)
    const duration = 2200
    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true
        observer.disconnect()

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplayValue(display)
          return
        }

        setDisplayValue("0")
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          if (t < 1) {
            setDisplayValue(formatLike(display, target * easeInOutQuart(t)))
            frame = requestAnimationFrame(tick)
          } else {
            setDisplayValue(display)
          }
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, display])

  return (
    <div
      ref={ref}
      className="font-display text-[2.4rem] font-bold leading-none tracking-[-0.045em] text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-7xl"
    >
      {displayValue}
      {suffix && <span>{suffix}</span>}
    </div>
  )
}

/** Poster first; the Vimeo player (and its third-party cookies) loads only on play. */
function TestimonialVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const [playing, setPlaying] = useState(false)
  const frame = useRef<HTMLIFrameElement>(null)
  // The button unmounts on play, so hand keyboard focus to the player.
  useEffect(() => {
    if (playing) frame.current?.focus()
  }, [playing])
  if (playing) {
    const url = new URL(src)
    url.searchParams.set("autoplay", "1")
    return (
      <iframe
        ref={frame}
        src={url.toString()}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }
  return (
    // Focus ring drawn on the overlay: `.photo` clips an outside outline, and the
    // absolutely positioned poster paints over an inset one.
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className="group absolute inset-0 focus-visible:outline-none"
    >
      <Image src={poster} alt="" fill sizes="(min-width: 640px) 416px, 100vw" className="object-cover" />
      <span className="absolute inset-0 grid place-items-center bg-black/10 transition-colors group-hover:bg-black/20 group-focus-visible:bg-black/20 group-focus-visible:ring-[3px] group-focus-visible:ring-inset group-focus-visible:ring-[var(--accent)]">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-[var(--ink)] shadow-lg transition-transform group-hover:scale-105 group-focus-visible:scale-105">
          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
        </span>
      </span>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const dynamicWords = ["warmth", "dignity", "comfort", "hope", "care"]

const steps = [
  {
    title: "Collect donations",
    description:
      "We collect new and gently used shoes from individuals, schools, and community groups, through drop-off partners and shoe drives.",
  },
  {
    title: "Sort every pair",
    description:
      "Our volunteers sort every pair by size, type, and condition, and check that it is clean and in good shape.",
  },
  {
    title: "Match each request",
    description:
      "We work directly with each shelter. They tell us the sizes, quantities, and gender they need, and we match pairs to the request.",
  },
  {
    title: "Deliver to shelters",
    description:
      "We take the shoes directly to our shelter partners across Dallas-Fort Worth, and the shelters hand them to the people staying there.",
  },
]

/** How it works photos, in step order: collect, sort, load for delivery. */
const processPhotos = [
  { src: "/images/process-img.jpeg", alt: "Bags of shoes collected at a shoe drive" },
  { src: "/images/sorting-shoes.jpg", alt: "A volunteer sorts donated shoes into bins in our storage unit" },
  { src: "/images/loading-car.jpg", alt: "Volunteers load bags of shoes for delivery" },
]

const testimonials = [
  {
    name: "Journey to Dream",
    person: "Ravain Owens, Director",
    quote: "Thank you Shelter Aid TX. We appreciate your kindness.",
    video: "https://player.vimeo.com/video/961584844?h=1bc1d3e8dd&title=0&byline=0&portrait=0",
    poster: "/images/testimonials/journey-to-dream.jpg",
  },
  {
    name: "Our Daily Bread",
    person: "Our Daily Bread Team",
    quote: "We are thankful for the donation and for all of your help.",
    video: "https://player.vimeo.com/video/1030946527?h=7062cd25fc&title=0&byline=0&portrait=0",
    poster: "/images/testimonials/our-daily-bread.jpg",
  },
]

const faqs = [
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes. Shelter Aid TX is a 501(c)(3) nonprofit, EIN 93-3584886, so donations of shoes and money are tax-deductible to the extent allowed by law. Online donations come with a receipt by email.",
  },
  {
    question: "Where do the shoes go?",
    answer:
      "All donated shoes go directly to our shelter partners in the Dallas-Fort Worth area, including Family Gateway, Hope Restored Missions, AITF Services, Our Daily Bread, Journey to Dream, Genesis Women's Shelter, and Family Place.",
  },
  {
    question: "What types of shoes do you accept?",
    answer:
      "Clean new or gently used shoes in good condition: athletic shoes, casual shoes, boots, and sandals, in all sizes for men, women, and children.",
  },
  {
    question: "How can I donate shoes?",
    answer:
      "You can drop off shoes at one of our partner locations, organize a shoe drive at your school or workplace, or request a volunteer pickup for donations of 30 or more pairs.",
  },
  {
    question: "Can I donate money instead of shoes?",
    answer:
      "Yes, once or monthly, at shelteraidtx.org/donate. The shoes themselves are donated; money pays for collecting, storing, and delivering them to shelters.",
  },
  {
    question: "Can I cancel a monthly donation?",
    answer:
      "Yes, any time. Every monthly receipt tells you how, or you can email contact@shelteraidtx.org.",
  },
  {
    question: "How can I volunteer or partner with you?",
    answer:
      "Tell us how you would like to help through the contact form, and we will reply within 2 business days.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

const shelterPartners = [
  { name: "Family Gateway", logo: "/images/shelters/family-gateway.png" },
  { name: "Hope Restored Missions", logo: "/images/shelters/hope-restored.png" },
  { name: "AITF Services", logo: "/images/shelters/aitf.png" },
  { name: "Our Daily Bread", logo: "/images/shelters/our-daily-bread.png" },
  { name: "Journey to Dream", logo: "/images/shelters/journey-to-dream.png" },
  { name: "Genesis Women's Shelter", logo: "/images/shelters/genesis.png" },
  { name: "Family Place", logo: "/images/shelters/family-place.png" },
]

const collectionPartners = [
  { name: "Greenhill School", logo: "/images/greenhill.jpg", box: "max-h-14" },
  { name: "Fleet Feet Plano", logo: "/images/fleetfeet-mark.png", box: "max-h-14" },
  { name: "CISV Dallas Chapter", logo: "/images/cisv-mark.png", box: "max-h-14" },
  { name: "Fleet Feet Preston/Forest", logo: "/images/fleetfeet-mark.png", box: "max-h-14" },
  { name: "Prince of Peace XC", logo: "/images/shelters/POP-logo.png", box: "max-h-14" },
]

const stats = [
  { value: "8000", suffix: "+", label: "Pairs collected", display: "8k" },
  { value: "32", suffix: "", label: "Community partners", display: "32" },
  { value: "100", suffix: "%", label: "Direct to shelters", display: "100" },
]

/* The hero photo is a wash, not a picture: heaviest at the very top so the
   header sits on a clean field, lightest through the middle where the field of
   shoes reads, then settling back to the page ground at the section seam. */
const HERO_WASH =
  "linear-gradient(to bottom, rgb(251 248 242 / 0.95) 0%, rgb(251 248 242 / 0.82) 15%, rgb(251 248 242 / 0.62) 52%, rgb(251 248 242 / 0.88) 86%, var(--bg) 100%)"

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const [dynamicWordIndex, setDynamicWordIndex] = useState(0)
  const [wordFade, setWordFade] = useState(true)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordFade(false)
      setTimeout(() => {
        setDynamicWordIndex((prev) => (prev + 1) % dynamicWords.length)
        setWordFade(true)
      }, 300)
    }, 3000)
    return () => clearInterval(wordInterval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    element.scrollIntoView({ behavior: reduced ? "auto" : "smooth" })
  }

  return (
    // overflow-x-clip, not -hidden: `hidden` forces overflow-y to `auto`, which
    // would make this div a second scroll container. The page scrolls on <html>.
    <div className="relative min-h-screen overflow-x-clip">
      {/* Plain <script>, not next/script: structured data has to be in the
          server-rendered HTML for crawlers that never execute JS. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
          {/* The photo carries more of the page ground on phones, where the copy
              block covers most of the frame and needs a calmer field behind it. */}
          {/* A real <img>, not a CSS background: the LCP candidate has to be
              discoverable in the HTML so the browser can preload it. Crop and
              opacity are the background's, unchanged. */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_58%] opacity-[0.3] sm:opacity-[0.45]"
              aria-hidden
            />
          </div>
          <div className="absolute inset-0" style={{ background: HERO_WASH }} />

          <div className="wrap relative z-10 text-center">
            {/* Tighter type + tracking under sm so the label holds one line on a
                360-430px phone instead of orphaning "in DFW" onto a second row. */}
            <p className="kicker rise-in mb-6 inline-flex items-center gap-2 text-[0.6rem] tracking-[0.12em] sm:mb-7 sm:gap-2.5 sm:text-[0.76rem] sm:tracking-[0.22em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] pulse-dot" aria-hidden="true" />
              <span>Student-led 501(c)(3) nonprofit in DFW</span>
            </p>

            <h1 className="display-xl mx-auto max-w-4xl text-balance">
              <span className="rise-in block" style={{ animationDelay: "100ms" }}>
                Give shoes.
              </span>{" "}
              <span className="rise-in block" style={{ animationDelay: "220ms" }}>
                Give{" "}
                {/* Opacity only. The blur-rise belongs to `.word-in` inside
                    AnimatedText, which pads its box so tall glyphs stay
                    inside the filter's raster; `overflow-visible` plus the
                    padding/negative-margin pair here keeps this wrapper from
                    clipping that padded child while leaving the line box intact. */}
                <span
                  className={`display-em inline-block overflow-visible pb-[0.15em] -mb-[0.15em] text-[var(--accent-ink)] transition-opacity duration-300 ${
                    wordFade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <AnimatedText key={dynamicWordIndex} text={dynamicWords[dynamicWordIndex]} delay={0} />
                </span>
                .
              </span>
            </h1>

            <p className="lede rise-in mx-auto mt-7 text-center sm:mt-8" style={{ animationDelay: "340ms" }}>
              Shelter Aid TX is a student-led 501(c)(3) nonprofit in Dallas-Fort Worth. We collect new and gently
              used shoes and deliver them to homeless shelters across DFW.
            </p>

            <div
              className="rise-in mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center"
              style={{ animationDelay: "460ms" }}
            >
              {/* Lands on the donate section, where shoes and money sit side by side. */}
              <Link href="#donate" className="btn btn-primary">
                Donate
                <ArrowRight aria-hidden="true" />
              </Link>
              {/* Shelters are the other half of the audience: they need a way in
                  from the first screen, not buried in the donate section. */}
              <Link href="/request-shoes" className="btn btn-secondary">
                Request shoes
              </Link>
            </div>

            {/* Counters: plain numerals in three columns, small kickers underneath. */}
            <div
              className="rise-in mx-auto mt-12 grid w-full max-w-3xl grid-cols-3 gap-x-3 border-t border-[var(--hairline)] pt-6 sm:mt-16 sm:gap-x-8 sm:pt-8 md:gap-x-12"
              style={{ animationDelay: "600ms" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <HeroCounter value={stat.value} suffix={stat.suffix} display={stat.display} />
                  <div className="kicker mt-2.5 text-[0.56rem] leading-[1.6] tracking-[0.1em] sm:mt-3.5 sm:text-[0.68rem] sm:tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("how-it-works")}
            // `nudge` animates transform: translate(-50%, …), so it centres itself
            // while running; the static -translate-x-1/2 keeps it centred for
            // reduced-motion users, where the animation is cut to 0.001ms.
            className="nudge absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[var(--muted)] sm:block"
            aria-label="See how it works"
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </section>

        {/* Shelter logo marquee */}
        <section
          className="border-y border-[var(--hairline)] bg-[var(--surface)] py-9 md:py-12"
          aria-label="Shelter partners"
        >
          <div className="wrap">
            {/* Same left kicker + hairline-to-the-right rule as every other
                sub-head on the page ("In their own words", "Also collecting"). */}
            <div className="mb-7 flex items-center gap-5 md:mb-8">
              <h2 className="kicker shrink-0">Shelters we deliver to</h2>
              <div className="h-px flex-1 bg-[var(--hairline)]" />
            </div>
          </div>
          <div className="logo-marquee">
            <div className="logo-marquee-content">
              {[...shelterPartners, ...shelterPartners].map((partner, i) => (
                <div key={i} className="flex flex-shrink-0 items-center justify-center px-7 sm:px-8 md:px-12">
                  <Image
                    src={partner.logo}
                    alt={i < shelterPartners.length ? partner.name : ""}
                    aria-hidden={i >= shelterPartners.length}
                    width={120}
                    height={60}
                    className="h-9 w-auto object-contain opacity-70 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 md:h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works — hairline step rows, then a row of three process photos */}
        <Section
          id="how-it-works"
          tone="bg"
          kicker="How it works"
          title="From your closet"
          em="to a DFW shelter."
          lede="You give the shoes. We handle collection, sorting, and delivery, and shelters tell us what they need."
        >
          {/* Steps across the top (2x2 on tablets, one row from lg), then the
              three process photos in one row of equal 4:3 frames, so every photo
              shares the same edges and nobody is cropped. On phones: the steps,
              then the photos, each full width. */}
          {/* From md each first-row cell draws its own top hairline, so the top
              line breaks at the column gaps exactly like the bottom one. */}
          <ol className="rows grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:border-t-0 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="row border-[var(--hairline)] md:[&:nth-child(-n+2)]:border-t lg:[&:nth-child(-n+4)]:border-t"
              >
                <p className="kicker">Step {i + 1}</p>
                <h3 className="title mt-4">{step.title}</h3>
                <p className="body mt-2">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-14 md:gap-8">
            {processPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 80}>
                <figure className="photo shadow-editorial relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1280px) 384px, (min-width: 640px) 31vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Impact */}
        {/* Text + media pair, so the section header sits INSIDE the left column
            (contract §3 exception): the press clipping's top edge lands on the
            heading's cap line and `items-stretch` makes both columns end on the
            same line. The clipping is mounted, never cropped. */}
        <Section id="impact" tone="surface">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <p className="kicker kicker-rule mb-6">Our impact</p>
              <h2 className="display-lg">
                Shoes for neighbors across DFW <span className="display-em">since 2023.</span>
              </h2>
              <p className="lede mt-6">
                We have delivered shoes and other essentials to people experiencing homelessness across
                Dallas-Fort Worth. Everyone needs shoes. For someone staying at a shelter, a pair that
                fits makes it easier to get around, stay healthy, and keep their dignity.
              </p>
              <ul className="rows mt-8">
                <li className="row">
                  <p className="kicker">Featured in</p>
                  <h3 className="title mt-4">The Dallas Morning News</h3>
                  <p className="body mt-2">
                    The Dallas Morning News wrote about the shelter calls that started it, our $7,000 award at
                    Greenhill School&rsquo;s What&rsquo;s NEXT Pitch Night, and the shoes we bring to Family
                    Gateway, Our Daily Bread, and Journey to Dream.
                  </p>
                  <div className="mt-4">
                    <LinkArrow href="/who-we-are">Meet the team</LinkArrow>
                  </div>
                </li>
              </ul>
            </div>

            {/* Full size: the clipping fills the column edge to edge and the
                1.08 scale eats the source PNG's own white margin, so no blank
                space is left inside the box and only its rounded corners clip.
                `md:h-full` keeps the media column ending on the same line as the
                text beside it (§15). */}
            <Reveal className="md:col-span-6">
              <figure className="photo shadow-editorial relative aspect-[4/5] md:aspect-auto md:h-full">
                <Image
                  src="/images/screenshot.png"
                  alt="The Dallas Morning News article about Shelter Aid TX"
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="origin-center scale-[1.08] object-cover object-center"
                />
              </figure>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-16">
            <div className="mb-8 flex items-center gap-5">
              <h3 className="kicker shrink-0">In their own words</h3>
              <div className="h-px flex-1 bg-[var(--hairline)]" />
            </div>
            <ul className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-12">
              {testimonials.map((t, i) => (
                <Reveal as="li" key={t.name} delay={i * 80}>
                  <figure>
                    <div className="photo shadow-editorial relative aspect-[9/16] w-full sm:max-w-[26rem]">
                      <TestimonialVideo src={t.video} poster={t.poster} title={`${t.name} testimonial video`} />
                    </div>
                    <figcaption className="mt-8 max-w-[26rem]">
                      <blockquote className="title text-pretty">{t.quote}</blockquote>
                      <p className="kicker mt-5">{t.name}</p>
                      <p className="meta mt-1.5">{t.person}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>

        {/* Donate */}
        <Section
          id="donate"
          tone="sunken"
          kicker="Donate"
          title="Give shoes,"
          em="or help deliver them."
          lede="Shoes come from people like you. Money covers what it takes to get them to shelters: collection, storage, and delivery across Dallas-Fort Worth."
        >
          <DonateOptions />

          {/* The rest of the ways in, one strip under the two cards. */}
          <div className="mt-12 md:mt-16">
            <div className="mb-8 flex items-center gap-5">
              <p className="kicker shrink-0">More ways to help</p>
              <div className="h-px flex-1 bg-[var(--hairline)]" />
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              <li>
                <p className="kicker">For shelters</p>
                <h3 className="title mt-3">Need shoes for the people you serve?</h3>
                <p className="body mt-2">Tell us sizes, quantities, and gender.</p>
                <div className="mt-2">
                  <LinkArrow href="/request-shoes">Request shoes</LinkArrow>
                </div>
              </li>
              <li>
                <p className="kicker">Drop-offs</p>
                <h3 className="title mt-3">Prefer to drop off?</h3>
                <p className="body mt-2">Bring pairs to any collection partner.</p>
                <div className="mt-2">
                  <LinkArrow href="/partners">Find a drop-off partner</LinkArrow>
                </div>
              </li>
              <li>
                <p className="kicker">Shoe drives</p>
                <h3 className="title mt-3">Host a drive</h3>
                <p className="body mt-2">Schools, teams, and workplaces run drives with us.</p>
                <div className="mt-2">
                  <LinkArrow href="/get-involved?tab=host-drive#contact">Host a drive</LinkArrow>
                </div>
              </li>
            </ul>
          </div>
        </Section>

        {/* Partners */}
        <Section
          id="partners"
          tone="bg"
          kicker="Collection partners"
          title="Drop off shoes"
          em="close to home."
          lede="Schools, businesses, and community groups across DFW hold collection bins, run shoe drives, and host collection events with us."
          action={<LinkArrow href="/partners">See all partners</LinkArrow>}
        >
          {/* Same block as /partners: the lead partner reads as one hairline row
              and the mark fills the neighbouring column, so both columns share a
              top and a bottom edge (contract §15). */}
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <ul className="rows flex h-full flex-col">
                <li className="row flex-1">
                  <p className="kicker">Lead collection partner</p>
                  <h3 className="title mt-4">Buckner International</h3>
                  <p className="body mt-2">
                    Our main collection partner, bringing in shoes for shelters across Dallas-Fort Worth.
                  </p>
                </li>
              </ul>
            </div>
            <Reveal className="md:col-span-6">
              <div className="photo shadow-editorial flex aspect-[16/9] items-center justify-center p-7 sm:aspect-[16/5] sm:p-10 md:aspect-auto md:h-full">
                <Image
                  src="/images/partners/collection/buckner-international-navy.svg"
                  alt="Buckner International"
                  width={600}
                  height={200}
                  className="h-auto w-full max-w-[17rem] sm:max-w-[26rem]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-12 md:mt-16" delay={80}>
            <div className="mb-8 flex items-center gap-5">
              <h3 className="kicker shrink-0">Also collecting with us</h3>
              <div className="h-px flex-1 bg-[var(--hairline)]" />
            </div>
            <LogoWall items={collectionPartners} columns={5} />
          </Reveal>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          tone="surface"
          kicker="FAQ"
          title="Got a question?"
          em="Start here."
          lede="Answers about donating shoes or money, volunteering, and partnering with us."
        >
          <Accordion items={faqs} />
        </Section>

        {/* Closing */}
        <Section
          tone="sunken"
          kicker="Get involved"
          title="Ready to help,"
          em="or need shoes?"
          lede="Donate shoes or money, host a drive, or, if you run a shelter, tell us the sizes, quantities, and gender you need."
          action={
            /* The closing buttons are the section `action`: under the lede,
               side by side from the small breakpoint, full width on mobile. */
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href="#donate" arrow>
                Donate
              </ButtonLink>
              <ButtonLink href="/request-shoes" variant="secondary">
                Request shoes
              </ButtonLink>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </div>
  )
}
