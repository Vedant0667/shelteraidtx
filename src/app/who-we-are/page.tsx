"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";

export default function WhoWeArePage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Hero - Team Members First */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-6xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-white/80 mb-6">
                <span className="text-sm font-semibold text-[var(--color-primary)]">Our Team</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Founded in October 2023, we are high school students dedicated to supporting those in need and providing resources to shelters across the DFW area
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 120, damping: 18 }}
                className="text-center group"
              >
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-6 shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-white text-6xl font-bold">V</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Vedant Subramanian</h3>
                <p className="text-[var(--color-primary)] font-semibold mb-4">President and Founder</p>
                <p className="text-slate-600 leading-relaxed">Leading our mission to support shelters across Texas and coordinating our donation efforts to maximize community impact.</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 120, damping: 18 }}
                className="text-center group"
              >
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-6 shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-white text-6xl font-bold">A</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Arjun Subramanian</h3>
                <p className="text-[var(--color-primary)] font-semibold mb-4">Secretary and Co-Founder</p>
                <p className="text-slate-600 leading-relaxed">Coordinating operations and partnerships with shelters throughout the DFW area to ensure effective resource distribution.</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 120, damping: 18 }}
                className="text-center group"
              >
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-6 shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-white text-6xl font-bold">H</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Harshdeep Bommareddy</h3>
                <p className="text-[var(--color-primary)] font-semibold mb-4">Vice President and Co-Founder</p>
                <p className="text-slate-600 leading-relaxed">Managing community outreach and volunteers, building relationships with donors and partners to expand our reach.</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Team Photo */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Our Founders
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                High school students passionate about making a real difference in our community
              </p>
            </MotionDiv>
            <MotionDiv
              {...fadeInUp}
              className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/team-photo.jpeg"
                alt="Shelter Aid TX Team"
                width={1240}
                height={620}
                className="w-full h-auto"
                priority
              />
            </MotionDiv>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
