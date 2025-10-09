"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";

export default function GetInvolvedPage() {
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
                className="flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-white/80 mb-6 w-fit">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Join Us</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Make a Difference Today
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  There are many ways you can help make a difference in the lives of those experiencing homelessness in Dallas-Fort Worth
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]"
              >
                <Image
                  src="/images/stock-5513.jpg"
                  alt="Get involved"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Ways to Help
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Choose how you'd like to support our mission
              </p>
            </MotionDiv>

            <div className="space-y-16 max-w-5xl mx-auto">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Donate Shoes</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    New or gently used shoes of all sizes help provide warmth and dignity to those in need. Every pair makes a difference.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">All sizes accepted - men's, women's, and children's</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">New and gently used shoes welcomed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Multiple drop-off locations across DFW</span>
                    </li>
                  </ul>
                </div>
                <div className="order-2 text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-[var(--color-secondary)] border-2 border-[var(--color-primary)]">
                    <p className="font-display text-5xl font-bold text-[var(--color-primary)] mb-1">1,003+</p>
                    <p className="text-sm font-semibold text-slate-700">Pairs Donated</p>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1 text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-[var(--color-secondary)] border-2 border-blue-500">
                    <p className="font-display text-5xl font-bold text-blue-600 mb-1">100%</p>
                    <p className="text-sm font-semibold text-slate-700">Community-Funded</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Volunteer</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Help sort donations, organize drives, or assist with deliveries to our shelter partners. Your time creates real impact.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Flexible schedules that work around school</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Community service hours provided</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Direct impact on your local community</span>
                    </li>
                  </ul>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-amber-600 mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-slate-900 mb-4">Spread the Word</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Share our mission with friends, family, and on social media to expand our reach and multiply our impact.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Follow us on Instagram @shelteraidtx</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Share our posts and success stories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">Organize a shoe drive at your school or workplace</span>
                    </li>
                  </ul>
                </div>
                <div className="order-2 text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-[var(--color-secondary)] border-2 border-[var(--color-accent)]">
                    <p className="font-display text-5xl font-bold text-[var(--color-accent)] mb-1">6</p>
                    <p className="text-sm font-semibold text-slate-700">Shelter Partners</p>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <MotionDiv {...fadeInUp}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Every contribution, whether it&apos;s shoes, time, or funds, helps provide warmth and dignity to those experiencing homelessness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://shelteraidtx.org"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-shadow"
                  style={{
                    background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                  }}
                >
                  Donate Now
                </a>
                <a
                  href="shelteraidtx@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
