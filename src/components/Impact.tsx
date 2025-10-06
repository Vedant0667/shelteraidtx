"use client";

import { MotionDiv, fadeInUp, staggerContainer } from "./Motion";
import Image from "next/image";

const stats = [
  {
    value: "1,003",
    label: "Pairs of Shoes Donated",
    description: "Providing warmth and dignity to those in need",
  },
  {
    value: "6",
    label: "Shelter Partners",
    description: "Trusted nonprofits across Dallas-Fort Worth",
  },
  {
    value: "100%",
    label: "Community-Funded",
    description: "Every donation goes directly to helping shelters",
  },
  {
    value: "2023",
    label: "Founded",
    description: "Student-led nonprofit making a difference since October 2023",
  },
];

export default function Impact() {
  return (
    <>
    <section id="impact" className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
      <div className="mx-auto max-w-7xl px-5">
        <MotionDiv {...fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            Our Impact
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Together, we&apos;re making a real difference in the lives of those
            experiencing homelessness
          </p>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="font-display text-6xl sm:text-7xl font-bold mb-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-bold text-lg text-slate-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-600">{stat.description}</div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>

    {/* Dallas Morning News Feature */}
    <section className="relative w-full py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <MotionDiv {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
            <Image
              src="/images/screenshot.png"
              alt="Shelter Aid TX featured in Dallas Morning News"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-light)] mb-6">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
              </svg>
              <span className="text-sm font-semibold text-[var(--color-accent)]">Featured In</span>
            </div>

            <h3 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Dallas Morning News
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our work has been recognized by the Dallas Morning News for our commitment to serving the homeless community in Dallas-Fort Worth. Through student-led initiatives and community partnerships, we&apos;re creating lasting change.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Community Impact</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Student Leadership</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
    </>
  );
}
