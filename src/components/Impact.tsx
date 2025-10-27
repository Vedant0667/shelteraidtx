"use client";

import { MotionDiv, fadeInUp } from "./Motion";
import Image from "next/image";

export default function Impact() {
  return (
    <>
      {/* Featured In */}
      <section className="relative w-full py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <MotionDiv {...fadeInUp} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[500px]">
              <Image
                src="/images/screenshot.png"
                alt="Shelter Aid TX featured in Dallas Morning News"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-6 w-fit">
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">Featured In</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Dallas Morning News
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our work has been recognized for our commitment to serving the homeless community through student-led initiatives and community partnerships.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-slate-700 font-medium">Community Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-slate-700 font-medium">Student Leadership</span>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
