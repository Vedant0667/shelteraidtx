"use client";

import { MotionDiv, fadeInUp, staggerContainer } from "./Motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Collect Donations",
    description:
      "We gather shoe donations from generous individuals and partners throughout the DFW area through our online donation system and community fundraisers.",
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
    number: "02",
    title: "Sort & Organize",
    description:
      "Our volunteers carefully sort and organize donated shoes, ensuring quality items reach those who need them most across our shelter network.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    ),
  },
  {
    number: "03",
    title: "Partner with Shelters",
    description:
      "We work closely with trusted nonprofit donation partners and homeless shelters throughout Dallas-Fort Worth to identify needs and coordinate distribution.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    number: "04",
    title: "Make an Impact",
    description:
      "Shoes are distributed to those in need, providing warmth, dignity, and a step forward for individuals experiencing homelessness in our community.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full pt-20 sm:pt-28 pb-8 sm:pb-12">
      <div className="mx-auto max-w-7xl px-5">
        <MotionDiv {...fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            From donation to distribution, here&apos;s how we help shelters across DFW
          </p>
        </MotionDiv>

        {/* Image + Steps Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-20">
          <MotionDiv {...fadeInUp} className="relative min-h-[600px]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
              <Image
                src="/images/process-img.jpeg"
                alt="Organizing shoe donations"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </MotionDiv>

          <div className="space-y-8 flex flex-col justify-center">
            {steps.map((step, index) => (
              <MotionDiv
                key={step.number}
                {...fadeInUp}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
