"use client";

import { MotionDiv, fadeInUp } from "./Motion";

const steps = [
  {
    number: "01",
    title: "Collect Donations",
    description: "We gather shoe donations from individuals and partners throughout DFW through our online system and community fundraisers.",
  },
  {
    number: "02",
    title: "Sort & Organize",
    description: "Volunteers carefully sort and organize donated shoes, ensuring quality items reach those who need them most.",
  },
  {
    number: "03",
    title: "Partner with Shelters",
    description: "We work with trusted nonprofit shelters throughout Dallas-Fort Worth to identify needs and coordinate distribution.",
  },
  {
    number: "04",
    title: "Make an Impact",
    description: "Shoes are distributed, providing warmth, dignity, and a step forward for individuals experiencing homelessness.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5">
        <MotionDiv {...fadeInUp} className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From donation to distribution&mdash;here's how we help shelters across DFW
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <MotionDiv
              key={step.number}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
