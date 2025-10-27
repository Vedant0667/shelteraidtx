"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import ContactForm from "@/components/ContactForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "@/components/StripePaymentForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

// FEATURE FLAG: Set to true when banking details are ready
const DONATIONS_ENABLED = false;

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const presetAmounts = [10, 25, 50, 100];

const shoeSteps = [
  {
    title: "Schedule a Drop-Off",
    description:
      "Clean, gently used sneakers and casual shoes of all sizes keep shelters stocked year-round.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7l9-4 9 4-9 4-9-4zm0 7l9 4 9-4"
      />
    ),
    tint: "from-[var(--color-primary)] to-[var(--color-primary-hover)]",
  },
  {
    title: "Host a Shoe Drive",
    description:
      "Schools, teams, and workplaces can collect pairs together. We provide promo kits and pickup support.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h10m-6 6h6"
      />
    ),
    tint: "from-[var(--color-accent)] to-amber-600",
  },
  {
    title: "Request a Pickup",
    description:
      "Have 30 or more pairs ready to go? Volunteers can coordinate sorting and delivery to partner shelters.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    tint: "from-[var(--color-primary)] to-[var(--color-primary-hover)]",
  },
];

const heroStats = [
  {
    label: "Pairs Delivered",
    value: "1.2k+",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    label: "Shelter Partners",
    value: "6",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    label: "Community Partners",
    value: "5",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    ),
  },
];

const inquiryOptions = [
  { value: "donation-support", label: "Monetary Donation Support" },
  { value: "shoe-donation", label: "Donate Shoes" },
  { value: "host-drive", label: "Host a Shoe Drive" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "volunteer", label: "Volunteer Interest" },
  { value: "general-question", label: "General Question" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is my donation tax-deductible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shelter Aid TX is a registered 501(c)(3) nonprofit organization (EIN 93-3584886). All monetary donations are tax-deductible, and you'll receive a receipt for your records after completing your donation.",
      },
    },
    {
      "@type": "Question",
      name: "Where do the donated shoes go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every pair of shoes donated goes directly to homeless shelters across the Dallas-Fort Worth area. We partner with 6 local shelters to ensure shoes reach those experiencing homelessness in our community.",
      },
    },
    {
      "@type": "Question",
      name: "What types of shoes do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept clean, gently used sneakers and casual shoes of all sizes. Shoes should be in good condition—free from major damage, suitable for daily wear, and able to provide comfort and protection.",
      },
    },
    {
      "@type": "Question",
      name: "How do I donate shoes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can donate shoes by scheduling a drop-off, hosting a shoe drive at your school or workplace, or requesting a pickup if you have 30+ pairs. Use our contact form to coordinate any of these options—we'll respond within two business days.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make a monetary donation instead of donating shoes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Monetary donations help us cover operational costs, transportation, and shelter partnerships. You can make a secure one-time or monthly donation through our Stripe-powered payment form on this page.",
      },
    },
    {
      "@type": "Question",
      name: "How can I volunteer or partner with Shelter Aid TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We welcome volunteers for sorting, delivery coordination, and community outreach. Organizations can partner with us for shoe drives or shelter collaborations. Fill out our contact form selecting 'Volunteer Interest' or 'Partnership Inquiry' to get started.",
      },
    },
  ],
};

const appearance = {
  theme: "stripe" as const,
  variables: {
    colorPrimary: "#0284c7",
  },
};

export default function DonatePage() {
  const searchParams = useSearchParams();

  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);

  const presetSet = useMemo(() => new Set(presetAmounts), []);

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    if (amountParam) {
      const parsed = parseFloat(amountParam);
      if (!Number.isNaN(parsed) && parsed > 0) {
        setSelectedAmount(parsed);
        setCustomAmount(presetSet.has(parsed) ? "" : amountParam);
      }
    }

    const frequencyParam = searchParams.get("frequency");
    if (frequencyParam === "one-time" || frequencyParam === "monthly") {
      setFrequency(frequencyParam);
    }
  }, [searchParams, presetSet]);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed) && parsed > 0) {
      setSelectedAmount(parsed);
    }
  };

  const handleProceedToPayment = async () => {
    setError("");

    if (selectedAmount < 1) {
      setError("Please select or enter a valid donation amount.");
      return;
    }
    if (!donorName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!donorEmail.trim() || !donorEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedAmount,
          frequency,
          donorName,
          donorEmail,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize payment.");
      }

      setClientSecret(data.clientSecret);
      setShowPaymentForm(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentError = (message: string) => {
    setError(message);
    setShowPaymentForm(false);
    setClientSecret("");
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavBar />
      <main className="pt-8 sm:pt-16">
        {/* Hero Section */}
        <section className="relative w-full py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-5xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumbs
                items={[
                  { name: "Home", url: "/" },
                  { name: "Donate", url: "/donate" },
                ]}
              />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-center sm:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-2 w-fit">
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-[var(--color-primary)]">Support Our Mission</span>
              </div>
              <h1 className="font-display text-4xl sm:text-[2.75rem] font-bold text-slate-900">
                Donate Shoes. Fund Impact. Support Shelters.
              </h1>
              <p className="mx-auto sm:mx-0 max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed">
                Every contribution keeps shoes flowing to Dallas-Fort Worth shelters. Choose a gift amount,
                share a quick note, and we'll handle the rest within two business days.
              </p>

              {/* Hero Stats - Simple inline gradient text */}
              <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 pt-4">
                {heroStats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <div className="text-center sm:text-left">
                      <p className="font-display text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Payment Form Section */}
        <section className="relative w-full py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`rounded-2xl bg-white p-6 sm:p-8 ${!DONATIONS_ENABLED ? 'opacity-60 pointer-events-none relative' : ''}`}
            >
              {!DONATIONS_ENABLED && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl z-10">
                  <div className="text-center px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-4">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-[var(--color-primary)] text-lg">Coming Soon</span>
                    </div>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Online donations will be available soon. In the meantime, contact us about shoe donations or volunteering opportunities.
                    </p>
                  </div>
                </div>
              )}
              {!showPaymentForm ? (
                <div className="space-y-8">
                  <div className="space-y-3 text-center">
                    <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-2">
                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm font-semibold text-[var(--color-primary)]">Secure Payment</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-slate-900">
                      Donate Securely
                    </h2>
                    <p className="text-sm text-slate-500">
                      Stripe powers the checkout experience. Choose your amount and share contact details for a receipt.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="inline-flex rounded-full bg-slate-100 p-1">
                      {(["one-time", "monthly"] as const).map((option) => (
                        <button
                          key={option}
                          onClick={() => setFrequency(option)}
                          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                            frequency === option
                              ? "bg-white text-[var(--color-primary)]"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {option === "one-time" ? "One-Time" : "Monthly"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Choose Amount
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => handleAmountClick(amount)}
                          className={`py-4 rounded-xl text-lg font-display font-semibold transition-all ${
                            selectedAmount === amount && !customAmount
                              ? "bg-[var(--color-primary)] text-white"
                              : "bg-slate-50 text-slate-900 hover:bg-slate-100"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <label htmlFor="custom-amount" className="sr-only">
                        Custom amount
                      </label>
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-display text-lg">
                        $
                      </span>
                      <input
                        id="custom-amount"
                        type="number"
                        min="1"
                        step="0.01"
                        value={customAmount}
                        onChange={(event) => handleCustomAmountChange(event.target.value)}
                        placeholder="Other amount"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none font-display text-lg transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2"
                        htmlFor="donor-name"
                      >
                        Name
                      </label>
                      <input
                        id="donor-name"
                        type="text"
                        value={donorName}
                        onChange={(event) => setDonorName(event.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2"
                        htmlFor="donor-email"
                      >
                        Email
                      </label>
                      <input
                        id="donor-email"
                        type="email"
                        value={donorEmail}
                        onChange={(event) => setDonorEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)]/20"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleProceedToPayment}
                    disabled={isLoading || selectedAmount < 1}
                    className="w-full rounded-full px-8 py-4 font-display text-lg font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      background:
                        isLoading || selectedAmount < 1
                          ? "#94a3b8"
                          : "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                    }}
                  >
                    {isLoading ? "Preparing checkout..." : "Continue to Payment"}
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    Secure payment processing powered by Stripe.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <button
                    onClick={() => {
                      setShowPaymentForm(false);
                      setClientSecret("");
                    }}
                    className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
                  >
                    &larr; Back
                  </button>
                  <div className="rounded-xl bg-slate-50 px-5 py-4 flex justify-between text-sm text-slate-700">
                    <span>{frequency === "monthly" ? "Monthly donation" : "One-time donation"}</span>
                    <span className="font-display text-lg text-[var(--color-primary)]">
                      ${selectedAmount.toFixed(2)}
                      {frequency === "monthly" && <span className="text-sm">/month</span>}
                    </span>
                  </div>
                  {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                      <StripePaymentForm
                        amount={selectedAmount}
                        frequency={frequency}
                        donorEmail={donorEmail}
                        onSuccess={() => {}}
                        onError={handlePaymentError}
                      />
                    </Elements>
                  )}
                </div>
              )}
            </MotionDiv>
          </div>
        </section>

        {/* Shoe Donation Steps Section */}
        <section className="relative w-full py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-5xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 space-y-3"
            >
              <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-2 w-fit">
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-sm font-semibold text-[var(--color-primary)]">Donate Shoes</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                Prefer to Donate Shoes?
              </h2>
              <p className="text-lg text-slate-600">
                Follow these steps and we will make sure each pair reaches a Dallas-Fort Worth shelter.
              </p>
            </MotionDiv>

            <div className="grid gap-8 md:grid-cols-3">
              {shoeSteps.map((step, index) => (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.tint}`}
                  >
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {step.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold text-slate-900 mb-2">{step.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative w-full py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-4xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 space-y-3"
            >
              <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-2 w-fit">
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-semibold text-[var(--color-primary)]">Frequently Asked</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                Common Questions
              </h2>
              <p className="text-base text-slate-600">
                Everything you need to know about donating shoes and supporting our mission.
              </p>
            </MotionDiv>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-xl bg-white p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="relative w-full py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 space-y-3"
            >
              <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-2 w-fit">
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-[var(--color-primary)]">Quick Response</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                Tell Us How We Can Help
              </h2>
              <p className="text-base text-slate-600">
                One form covers everything: donation questions, shoe pickups, collaborations, or volunteer interest.
              </p>
            </MotionDiv>

            <ContactForm
              subject="Website Inquiry"
              description="Have questions or want to collaborate? Share a few details below and we will follow up within two business days."
              submitLabel="Send Message"
              successMessage="Thank you! We'll reach out shortly."
              inquiryOptions={inquiryOptions}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
