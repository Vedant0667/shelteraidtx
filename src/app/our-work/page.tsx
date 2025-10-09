"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";

export default function OurWorkPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Page Header */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]"
              >
                <Image
                  src="/images/process-img.jpeg"
                  alt="Our work"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
                className="flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-white/80 mb-6 w-fit">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">What We Do</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Making a Difference Every Day
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From collecting shoes to building partnerships, discover how we&apos;re making a difference in the lives of those experiencing homelessness
                </p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Our Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Multiple ways we support shelters across Dallas-Fort Worth
              </p>
            </MotionDiv>

            <div className="space-y-6 max-w-5xl mx-auto">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Shoe Donation Program</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">Our flagship program collecting new and gently used shoes for homeless individuals across DFW. Every pair provides warmth, protection, and dignity.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">1,003+ Pairs Donated</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">All Sizes Welcome</span>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Essential Items Distribution</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">Beyond shoes, we collect and distribute essential items that shelters need most to serve their communities effectively.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">Clothing & Gear</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">Hygiene Products</span>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Needs-Based Approach</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">We reach out to shelters to understand their specific requirements, ensuring donations precisely meet their needs with the right sizes, types, and quality.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">Custom Sizing</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold">Quality First</span>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Real numbers showing the difference we're making
              </p>
            </MotionDiv>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="font-display text-6xl sm:text-7xl font-bold mb-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  1,003
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Pairs of Shoes Donated</div>
                <div className="text-sm text-slate-600">Providing warmth and dignity to those in need</div>
              </MotionDiv>
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-center bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="font-display text-6xl sm:text-7xl font-bold mb-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  6
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Shelter Partners</div>
                <div className="text-sm text-slate-600">Trusted nonprofits across Dallas-Fort Worth</div>
              </MotionDiv>
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-center bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="font-display text-6xl sm:text-7xl font-bold mb-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Community-Funded</div>
                <div className="text-sm text-slate-600">Every donation goes directly to helping shelters</div>
              </MotionDiv>
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="text-center bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="font-display text-6xl sm:text-7xl font-bold mb-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  2023
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Founded</div>
                <div className="text-sm text-slate-600">Student-led nonprofit making a difference since October 2023</div>
              </MotionDiv>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
