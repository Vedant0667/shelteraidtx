"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function OurWorkPage() {
  return (
    <>
      <NavBar />
      <main className="pt-8 sm:pt-16">
        {/* Page Header */}
        <section className="relative w-full py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5">
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Our Work", url: "/our-work" },
              ]}
            />
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-6 w-fit">
                  <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">What We Do</span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Making a Difference Every Day
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                From collecting shoes to building partnerships, discover how we&apos;re making a difference in the lives of those experiencing homelessness
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden min-h-[500px]"
              >
                <Image
                  src="/images/process-img.jpeg"
                  alt="Our work"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="relative w-full py-20 sm:py-32 bg-slate-50">
          <div className="mx-auto max-w-6xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-20">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Our Programs
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Multiple ways we support shelters across Dallas-Fort Worth
              </p>
            </MotionDiv>

            <div className="space-y-16 max-w-4xl mx-auto">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Shoe Donation Program</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">Our flagship program collecting new and gently used shoes for homeless individuals across DFW. Every pair provides warmth, protection, and dignity.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm px-3 py-1 rounded-full bg-white text-slate-700 font-medium">1.2k+ Pairs Donated</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white text-slate-700 font-medium">All Sizes Welcome</span>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Essential Items Distribution</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">Beyond shoes, we collect and distribute essential items that shelters need most to serve their communities effectively.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm px-3 py-1 rounded-full bg-white text-slate-700 font-medium">Clothing & Gear</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white text-slate-700 font-medium">Hygiene Products</span>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Needs-Based Approach</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">We reach out to shelters to understand their specific requirements, ensuring donations precisely meet their needs with the right sizes, types, and quality.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm px-3 py-1 rounded-full bg-white text-slate-700 font-medium">Custom Sizing</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white text-slate-700 font-medium">Quality First</span>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="relative w-full py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-20">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Real numbers showing the difference we&apos;re making
              </p>
            </MotionDiv>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="font-display text-6xl sm:text-7xl font-bold mb-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  1.2k+
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Pairs of Shoes Donated</div>
                <div className="text-sm text-slate-600">Providing warmth and dignity to those in need</div>
              </MotionDiv>
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-center"
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
                className="text-center"
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
                className="text-center"
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
