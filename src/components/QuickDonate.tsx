"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MotionDiv, fadeInUp } from "./Motion";

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
    <section className="relative w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <MotionDiv
          {...fadeInUp}
          className="rounded-3xl border border-slate-200/70 bg-white/90 shadow-2xl backdrop-blur-sm p-6 sm:p-10"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-secondary)] text-sm font-semibold text-[var(--color-primary)]">
                Quick Gift
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                Make a Donation in Seconds
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Choose an amount, tap donate, and we&apos;ll take you straight to our secure payment page. Your support keeps shoes headed to shelters across DFW.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[var(--color-secondary)] p-5 text-center">
                  <p className="font-display text-3xl font-bold text-[var(--color-primary)]">
                    1,003+
                  </p>
                  <p className="text-sm text-slate-600">Pairs Delivered</p>
                </div>
                <div className="rounded-2xl bg-[var(--color-secondary)] p-5 text-center">
                  <p className="font-display text-3xl font-bold text-[var(--color-primary)]">
                    6
                  </p>
                  <p className="text-sm text-slate-600">Shelter Partners</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-6 sm:p-8">
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
                You&apos;ll be redirected to our secure Stripe checkout.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
