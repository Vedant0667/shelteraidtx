import type { Metadata } from "next"
import Link from "next/link"
import NavBar from "@/components/NavBar"
import { SiteFooter } from "@/components/SiteFooter"

export const metadata: Metadata = {
  title: "Donate Shoes in DFW",
  description:
    "Donate new or gently used shoes in Dallas-Fort Worth. See what we accept, how drop-off works, and how to request pickup for larger donations.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Donate Shoes in DFW | Shelter Aid TX",
    description:
      "Donate new or gently used shoes in Dallas-Fort Worth. See what we accept, how drop-off works, and how to request pickup for larger donations.",
    url: "https://shelteraidtx.org/donate",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donate Shoes in DFW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate Shoes in DFW | Shelter Aid TX",
    description:
      "Donate new or gently used shoes in Dallas-Fort Worth. See what we accept, how drop-off works, and how to request pickup for larger donations.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

const acceptance = [
  "All sizes for men, women, and children",
  "Athletic shoes, casual shoes, boots, and sandals",
  "New or gently used shoes in clean, wearable condition",
]

const steps = [
  {
    title: "Check what to donate",
    answer: "We accept new and gently used shoes that are clean and ready to wear.",
  },
  {
    title: "Choose drop-off or pickup",
    answer:
      "Smaller donations can be dropped off through partners. For larger donations, we can coordinate pickup.",
  },
  {
    title: "Send details",
    answer:
      "Share sizes, quantity, and your preferred timing so we can coordinate quickly with shelter partners.",
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0F172A]">
      <NavBar />

      <main className="px-6 pt-28 pb-20 md:pt-36">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              Donate Shoes
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
              Donate shoes in Dallas-Fort Worth
            </h1>
            <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              If you are searching for "donate shoes DFW," you are in the right place. Shelter Aid TX
              collects shoes and delivers them directly to shelter partners across the Dallas-Fort Worth area.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="glass-card rounded-3xl p-7 text-center hover-lift"
              >
                <div className="font-display text-3xl font-bold text-[#2B9FD9] mb-2">
                  {index + 1}
                </div>
                <h2 className="font-display text-xl font-bold mb-3">{step.title}</h2>
                <p className="text-[#64748B] leading-relaxed">{step.answer}</p>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border border-[#E2E8F0] bg-white p-8 md:p-10 mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">What shoes do you accept?</h2>
            <p className="text-[#64748B] leading-relaxed mb-5">
              We focus on shoes that can be used immediately by shelter partners and recipients. In general,
              if a shoe is clean, wearable, and practical, it can help.
            </p>
            <ul className="space-y-2 text-[#475569]">
              {acceptance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2B9FD9]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-[#E8F4F8] via-white to-[#F5E6D3]/50 p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-4">How to donate now</h2>
            <p className="text-[#64748B] leading-relaxed mb-6">
              The fastest way to donate is to send us a short message with what you have. We will follow up
              with the best next step based on your donation size and location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-involved?tab=shoe-donation#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2B9FD9] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#1E87C4] hover:shadow-lg hover:shadow-[#2B9FD9]/20"
              >
                Start a Donation
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#E2E8F0] px-8 py-4 text-base font-semibold text-[#0F172A] transition-all duration-300 hover:border-[#2B9FD9] hover:text-[#2B9FD9]"
              >
                See Drop-Off Partners
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

