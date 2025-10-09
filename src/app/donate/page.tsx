"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MotionDiv } from "@/components/Motion";

export default function DonatePage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-white/80 mb-6">
                <span className="text-sm font-semibold text-[var(--color-primary)]">Make an Impact</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Donate to Shelter Aid TX
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                Your donation helps provide shoes and essential items to homeless individuals across Dallas-Fort Worth. Every contribution makes a difference.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Donation Options */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5">
            <div className="grid md:grid-cols-3 gap-8">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 120, damping: 18 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">One-Time</h3>
                <p className="text-slate-600 mb-6">Make a single donation to support our mission</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-[var(--color-primary)]"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold">
                    MOST IMPACT
                  </span>
                </div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Monthly</h3>
                <p className="text-slate-600 mb-6">Recurring donations provide stable support for our programs</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 120, damping: 18 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">In-Kind</h3>
                <p className="text-slate-600 mb-6">Donate shoes or essential items directly</p>
              </MotionDiv>
            </div>

            {/* Stripe Placeholder */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 120, damping: 18 }}
              className="mt-16 bg-white rounded-2xl p-12 shadow-xl text-center"
            >
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
                Payment Processing Coming Soon
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                We're setting up secure payment processing through Stripe. In the meantime, you can donate via email or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@shelteraidtx.org?subject=Donation Inquiry"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-shadow"
                  style={{
                    background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                  }}
                >
                  Email to Donate
                </a>
                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                >
                  Other Ways to Help
                </a>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Your Impact
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how donations help homeless individuals across DFW
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-display text-5xl sm:text-6xl font-bold mb-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  1,003+
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Pairs Donated</div>
                <div className="text-sm text-slate-600">Shoes provided to those in need</div>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl sm:text-6xl font-bold mb-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  6
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Shelter Partners</div>
                <div className="text-sm text-slate-600">Organizations we support</div>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl sm:text-6xl font-bold mb-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="font-bold text-lg text-slate-900 mb-2">Community-Funded</div>
                <div className="text-sm text-slate-600">Every dollar goes to our mission</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Info */}
        <section className="relative w-full py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="text-sm text-slate-600">
              <strong>Shelter Aid TX</strong> is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law. Tax ID will be provided upon donation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
