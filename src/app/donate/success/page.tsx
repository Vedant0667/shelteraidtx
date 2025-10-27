"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MotionDiv } from "@/components/Motion";
import Link from "next/link";

function DonateSuccessPageInner() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const paymentIntent = searchParams.get("payment_intent");
    const paymentIntentClientSecret = searchParams.get("payment_intent_client_secret");

    if (paymentIntent && paymentIntentClientSecret) {
      // Payment was successful
      setPaymentStatus("success");
    } else {
      setPaymentStatus("error");
    }
  }, [searchParams]);

  return (
    <>
      <NavBar />
      <main className="pt-8 sm:pt-16 min-h-screen">
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5">
            {paymentStatus === "loading" && (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-[var(--color-primary)] mb-8"></div>
                <h1 className="font-display text-3xl font-bold text-slate-900 mb-4">
                  Processing your donation...
                </h1>
              </div>
            )}

            {paymentStatus === "success" && (
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
                className="text-center"
              >
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-2xl">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Thank You!
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Your generous donation has been successfully processed. You&apos;ll receive a confirmation email shortly with your donation receipt.
                </p>

                <div className="bg-gradient-to-br from-[var(--color-secondary)] to-white rounded-2xl p-8 mb-8">
                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                    Your Impact
                  </h2>
                  <p className="text-slate-600">
                    Thanks to your donation, we can continue providing shoes and essential items to homeless individuals across Dallas-Fort Worth. Your generosity directly helps those in need find dignity, comfort, and hope.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-all"
                    style={{
                      background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                    }}
                  >
                    Return Home
                  </Link>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    See Our Impact
                  </Link>
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Share the Mission</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Help us reach more people by sharing Shelter Aid TX with your network
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://shelteraidtx.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://shelteraidtx.org&text=I%20just%20donated%20to%20Shelter%20Aid%20TX%20to%20help%20homeless%20individuals%20in%20Dallas-Fort%20Worth.%20Join%20me%20in%20making%20a%20difference!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://shelteraidtx.org&title=Shelter%20Aid%20TX&summary=Helping%20homeless%20individuals%20in%20Dallas-Fort%20Worth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </MotionDiv>
            )}

            {paymentStatus === "error" && (
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
                className="text-center"
              >
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-2xl">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Payment Error
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  We encountered an issue processing your donation. Please try again or contact us for assistance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-all"
                    style={{
                      background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                    }}
                  >
                    Try Again
                  </Link>
                  <Link
                    href="/donate#shoe-contact"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                  >
                    Contact Support
                  </Link>
                </div>
              </MotionDiv>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function DonateSuccessPage() {
  return (
    <Suspense fallback={null}>
      <DonateSuccessPageInner />
    </Suspense>
  );
}
