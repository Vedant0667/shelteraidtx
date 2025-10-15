"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function WhoWeArePage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Hero - Team Members First */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-6xl px-5">
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Who We Are", url: "/who-we-are" },
              ]}
            />
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-6">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-semibold text-blue-600">Our Team</span>
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
