"use client";

import { MotionDiv, fadeInUp } from "./Motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5">
        <MotionDiv {...fadeInUp} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative min-h-[500px]">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <Image
                src="/images/stock-4430.jpg"
                alt="Community helping those in need"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center text-white text-sm font-bold leading-tight">
                  501(c)3
                </div>
                <div>
                  <div className="text-xs text-slate-600">Registered</div>
                  <div className="font-bold text-slate-900">Nonprofit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-6 w-fit">
              <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">Our Mission</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Supporting homeless shelters across DFW
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Shelter Aid TX is a student-led 501(c)3 nonprofit organization dedicated to providing warmth and dignity to those facing homelessness. Founded in October 2023, we channel the generosity of our community directly to those who need it most.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Community-Driven</h3>
                  <p className="text-slate-600">We connect compassionate donors with shelters in need, creating a sustainable network of support across Dallas-Fort Worth.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">100% Transparent</h3>
                  <p className="text-slate-600">Every donation goes directly to helping shelters. We believe in complete transparency and accountability to our community.</p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
