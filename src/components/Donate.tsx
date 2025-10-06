"use client";

import { MotionDiv, fadeInUp } from "./Motion";
import Image from "next/image";

const donationOptions = [
  {
    type: "One-Time Donation",
    description: "Make a single donation to help shelters in need",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    type: "Donate Shoes",
    description: "Contribute new or gently used shoes for those in need",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
  },
  {
    type: "Partner with Us",
    description: "Join as a nonprofit donation partner or shelter",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
];

export default function Donate() {
  return (
    <section id="contact" className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <MotionDiv {...fadeInUp}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ready to donate, volunteer, or partner with us? Reach out and let's make a difference together.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <MotionDiv whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="mailto:contact@shelteraidtx.org"
                  className="inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                  }}
                >
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </MotionDiv>
              <MotionDiv whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="https://shelteraidtx.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                >
                  Donate Now
                </a>
              </MotionDiv>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-900">Monetary Donations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-900">Shoe Donations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-900">Volunteer</p>
              </div>
            </div>
          </MotionDiv>

          {/* Right: Image */}
          <MotionDiv {...fadeInUp} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/stock-5513.jpg"
                alt="Join our mission"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
