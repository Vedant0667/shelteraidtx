import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

const SITE_LINKS = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
]

const TAKE_PART = [
  { label: "Donate shoes", href: "/donate" },
  { label: "Request shoes (shelters)", href: "/request-shoes" },
  { label: "Host a drive", href: "/get-involved?tab=host-drive#contact" },
  { label: "Volunteer", href: "/get-involved?tab=volunteer#contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

/** Quiet ivory footer with hairlines. */
export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[var(--hairline)] bg-[var(--bg)]">
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block" aria-label="Shelter Aid TX home">
              <Image src="/images/main-logo.png" alt="Shelter Aid TX" width={170} height={32} className="h-8 w-auto" />
            </Link>
            <p className="body mt-5 max-w-sm">
              A student-led 501(c)(3) in Dallas-Fort Worth. We collect shoes and deliver every pair to shelter
              partners across the metroplex.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.instagram.com/shelteraidtx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shelter Aid TX on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-[var(--muted)] transition-colors hover:border-[var(--hairline-strong)] hover:text-[var(--ink)]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/shelter-aid-tx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shelter Aid TX on LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)] text-[var(--muted)] transition-colors hover:border-[var(--hairline-strong)] hover:text-[var(--ink)]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="kicker-muted">Site</p>
            <ul className="mt-4 space-y-2.5">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="kicker-muted">Take part</p>
            <ul className="mt-4 space-y-2.5">
              {TAKE_PART.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="kicker-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted)]">
              <li>
                <a href="mailto:shelteraidtx@gmail.com" className="transition-colors hover:text-[var(--ink)]">
                  shelteraidtx@gmail.com
                </a>
              </li>
              <li>Dallas-Fort Worth, TX</li>
              <li className="text-[0.82rem]">
                Mailing: 5900 Balcones Dr Ste 100
                <br />
                Austin, TX 78731
              </li>
              <li className="pt-1 text-[0.82rem]">EIN 93-3584886</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--hairline)] pt-6 text-[0.8rem] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <span className="font-display text-[var(--ink)]/70">Shelter Aid TX</span>
          <span>© {new Date().getFullYear()} · Made by students in DFW</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
