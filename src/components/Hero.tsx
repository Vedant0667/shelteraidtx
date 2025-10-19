"use client";

import { MotionDiv, fadeInUp, hoverScale } from "./Motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden min-h-screen flex items-center">
      {/* Semi-opaque background image behind EVERYTHING */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 w-full">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Donate Shoes to Help Shelters Across{" "}
            <span
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent"
            >
              DFW
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Student-led nonprofit providing warmth, dignity, and hope to those experiencing homelessness in Dallas-Fort Worth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <MotionDiv whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                }}
              >
                Get Involved
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </MotionDiv>

            <MotionDiv whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                Learn More
              </a>
            </MotionDiv>
          </div>

          <div className="mt-12 flex items-center gap-8 justify-center flex-wrap">
            <div>
              <div className="font-display text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                1,207+
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">Shoes Donated</div>
            </div>
            <div className="h-12 w-px bg-slate-300"></div>
            <div>
              <div className="font-display text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                6
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">Shelter Partners</div>
            </div>
            <div className="h-12 w-px bg-slate-300"></div>
            <div>
              <div className="font-display text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                2023
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">Founded</div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
