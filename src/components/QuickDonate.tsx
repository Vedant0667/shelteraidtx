"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MotionDiv, fadeInUp } from "./Motion";

// FEATURE FLAG: Set to true when banking details are ready
const DONATIONS_ENABLED = false;

const quickAmounts = [5, 10, 25, 50];

export default function QuickDonate() {
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue) && parsedValue > 0) {
      setSelectedAmount(parsedValue);
    }
  };

  const handleDonateNow = () => {
    if (selectedAmount < 1) {
      return;
    }

    const params = new URLSearchParams();
    params.set("amount", selectedAmount.toString());
    params.set("frequency", frequency);

    router.push(`/donate?${params.toString()}`);
  };

  return (
    <section className="relative w-full py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <MotionDiv
          {...fadeInUp}
          className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center"
        >
          <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)]">
                <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">Quick Gift</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
                Make a Donation in Seconds
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Choose an amount, tap donate, and we'll take you straight to our secure payment page. Your support keeps shoes headed to shelters across DFW.
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                <div>
                  <div className="font-display text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                    1.2k+
                  </div>
                  <div className="text-sm font-medium text-slate-600 mt-1">Pairs Delivered</div>
                </div>
                <div className="h-12 w-px bg-slate-300"></div>
                <div>
                  <div className="font-display text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                    6
                  </div>
                  <div className="text-sm font-medium text-slate-600 mt-1">Shelter Partners</div>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 relative ${!DONATIONS_ENABLED ? 'opacity-60' : ''}`}>
              {!DONATIONS_ENABLED && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl z-10">
                  <div className="text-center px-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-300 mb-2">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-slate-700">Coming Soon</span>
                    </div>
                    <p className="text-sm text-slate-600">Online donations will be available soon</p>
                  </div>
                </div>
              )}
              <div className="flex justify-center mb-6">
                <div className="inline-flex rounded-full bg-slate-100 p-1">
                  <button
                    onClick={() => setFrequency("one-time")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      frequency === "one-time"
                        ? "bg-white text-[var(--color-primary)] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      frequency === "monthly"
                        ? "bg-white text-[var(--color-primary)] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`rounded-xl border px-4 py-3 text-lg font-display font-semibold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? "bg-[var(--color-primary)] text-white border-transparent shadow-lg"
                        : "border-slate-200 bg-slate-50 text-slate-900 hover:border-[var(--color-primary)] hover:bg-white"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative mb-4">
                <label htmlFor="quick-donate-custom" className="sr-only">
                  Custom amount
                </label>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-display text-lg">
                  $
                </span>
                <input
                  id="quick-donate-custom"
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  placeholder="Other amount"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none font-display text-lg transition-all"
                />
              </div>

              <button
                onClick={handleDonateNow}
                disabled={selectedAmount < 1}
                className="w-full rounded-full px-8 py-4 font-display text-lg font-medium text-white shadow-lg hover:shadow-xl transition-all disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background:
                    selectedAmount < 1
                      ? "#94a3b8"
                      : "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                }}
              >
                Donate ${selectedAmount.toFixed(2)}
                {frequency === "monthly" ? "/month" : ""}
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                You'll be redirected to our secure Stripe checkout.
              </p>
            </div>
        </MotionDiv>
      </div>
    </section>
  );
}
