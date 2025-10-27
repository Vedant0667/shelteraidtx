"use client";

import Link from "next/link";
import { MotionDiv, fadeInUp } from "./Motion";

const supportHighlights = [
  {
    title: "Coordinate Drop-Offs",
    description: "Schedule shoe drop-offs or pickups anywhere in the Dallas-Fort Worth metroplex.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7l9-4 9 4-9 4-9-4zm0 7l9 4 9-4"
      />
    ),
    tint: "from-[var(--color-primary)] to-[var(--color-primary-hover)]",
  },
  {
    title: "Drive Resources",
    description: "Access plug-and-play flyers, signup sheets, and talking points for your shoe drive.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h10m-6 6h6"
      />
    ),
    tint: "from-[var(--color-accent)] to-amber-600",
  },
  {
    title: "Partner Support",
    description: "Match shelters and community partners with the inventory they need most.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    tint: "from-indigo-500 to-purple-600",
  },
];

const impactStats = [
  { label: "Pairs Delivered", value: "1.2k+" },
  { label: "Shelter Partners", value: "6" },
  { label: "Community Partners", value: "3" },
];

export default function Donate() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-24 bg-gradient-to-br from-[var(--color-secondary)] to-white"
    >
      <div className="mx-auto max-w-5xl px-5">
        <MotionDiv {...fadeInUp} className="space-y-10 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
              <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">Need a Hand?</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
              Get in Touch
            </h2>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
              Let us know how you want to support Shelter Aid TX—donating shoes, hosting a drive,
              or partnering on community outreach. We respond within two business days.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {supportHighlights.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tint}`}>
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-slate-900 mb-2">{item.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8 justify-center flex-wrap">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/donate#contact-form"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
              }}
            >
              Open Contact Form
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-lg font-semibold transition-all hover:bg-[var(--color-primary)] hover:text-white"
            >
              Explore Ways to Help
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
