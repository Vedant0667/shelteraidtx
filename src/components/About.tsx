"use client";

import { MotionDiv, fadeInUp } from "./Motion";

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-5">
        <MotionDiv {...fadeInUp} className="space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-6">
              <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">Our Mission</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Supporting homeless shelters across DFW
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Shelter Aid TX is a student-led 501(c)3 nonprofit organization dedicated to providing warmth and dignity to those facing homelessness. Founded in October 2023, we channel the generosity of our community directly to those who need it most.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Community-Driven</h3>
                <p className="text-slate-600 leading-relaxed">We connect compassionate donors with shelters in need, creating a sustainable network of support across Dallas-Fort Worth.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">100% Transparent</h3>
                <p className="text-slate-600 leading-relaxed">Every donation goes directly to helping shelters. We believe in complete transparency and accountability to our community.</p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
