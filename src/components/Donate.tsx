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
  { label: "Pairs Delivered", value: "1,207+" },
  { label: "Shelter Partners", value: "6" },
  { label: "Community Partners", value: "3" },
];

export default function Donate() {
  return (
    <section
      id="contact"
      className="relative w-full py-12 sm:py-16 bg-gradient-to-br from-[var(--color-secondary)] to-white"
    >
      <div className="mx-auto max-w-5xl px-5">
        <MotionDiv {...fadeInUp} className="space-y-10 text-center sm:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-[var(--color-secondary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
              Need a Hand?
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
              Get in Touch
            </h2>
            <p className="mx-auto sm:mx-0 max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed">
              Let us know how you want to support Shelter Aid TX—donating shoes, hosting a drive,
              or partnering on community outreach. We respond within two business days.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 text-left">
            {supportHighlights.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.tint}`}>
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-slate-900">{item.title}</p>
                  <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-left sm:justify-start">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-sm"
              >
                <p className="font-display text-xl font-bold text-[var(--color-primary)]">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
            <Link
              href="/donate#contact-form"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
              }}
            >
              Open Contact Form
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 text-base font-semibold transition-all hover:bg-[var(--color-primary)] hover:text-white"
            >
              Explore Ways to Help
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
