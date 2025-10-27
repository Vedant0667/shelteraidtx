"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const teamMembers = [
  {
    name: "Vedant Subramanian",
    role: "President and Co-Founder",
    initial: "V",
    image: "/images/Vedant-headshot.png",
  },
  {
    name: "Arjun Subramanian",
    role: "Board Chair and Co-Founder",
    initial: "A",
    image: "/images/Arjun-headshot.JPG",
  },
  {
    name: "Harshdeep Bommareddy",
    role: "VP and Co-Founder",
    initial: "H",
    image: "/images/Harshdeep-headshot.png",
  },
  {
    name: "Vikram Sampath",
    role: "Secretary",
    initial: "V",
    image: "/images/Vikram-headshot.jpg",
  },
  {
    name: "Aarav Nesargi",
    role: "Partnerships/Recruitment Intern",
    initial: "A",
    image: "/images/Aarav-headshot.jpeg",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <NavBar />
      <main className="pt-8 sm:pt-16">
        {/* Hero */}
        <section className="relative w-full py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5">
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Who We Are", url: "/who-we-are" },
              ]}
            />
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                About Us
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
                Meet the Team
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Founded in October 2023, we are high school students dedicated to supporting those in need and providing resources to shelters across the DFW area.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Team Grid */}
        <section className="relative w-full py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5">
            {/* Co-Founders */}
            <div className="flex justify-center gap-8 sm:gap-12 mb-16 max-w-5xl mx-auto flex-wrap">
              {/* Arjun */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center w-48 sm:w-60"
              >
                <div className="relative mb-4 group">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden transition-transform group-hover:scale-105">
                    <Image
                      src="/images/Arjun-headshot.JPG"
                      alt="Arjun Subramanian"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-[50%_10%]"
                    />
                  </div>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-1">
                  Arjun Subramanian
                </h3>
                <p className="text-sm text-slate-600">
                  Board Chair and Co-Founder
                </p>
              </MotionDiv>

              {/* Vedant - Slightly Larger */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center w-52 sm:w-64"
              >
                <div className="relative mb-4 group">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden transition-transform group-hover:scale-105">
                    <Image
                      src="/images/Vedant-headshot.png"
                      alt="Vedant Subramanian"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  Vedant Subramanian
                </h3>
                <p className="text-sm text-slate-600">
                  President and Co-Founder
                </p>
              </MotionDiv>

              {/* Harshdeep */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center w-48 sm:w-60"
              >
                <div className="relative mb-4 group">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden transition-transform group-hover:scale-105">
                    <Image
                      src="/images/Harshdeep-headshot.png"
                      alt="Harshdeep Bommareddy"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-[50%_25%]"
                    />
                  </div>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-1">
                  Harshdeep Bommareddy
                </h3>
                <p className="text-sm text-slate-600">
                  VP and Co-Founder
                </p>
              </MotionDiv>
            </div>

            {/* Rest of Team */}
            <div className="flex justify-center gap-8 sm:gap-12 max-w-xl mx-auto flex-wrap">
              {teamMembers.filter(m => !["Vedant Subramanian", "Arjun Subramanian", "Harshdeep Bommareddy"].includes(m.name)).map((member, index) => (
                <MotionDiv
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center w-40 sm:w-48"
                >
                  <div className="relative mb-4 group">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden transition-transform group-hover:scale-105">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className={`w-full h-full object-cover ${member.name === "Aarav Nesargi" ? "scale-125 translate-y-[12%]" : ""}`}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center">
                          <span className="text-white text-4xl sm:text-5xl font-bold">{member.initial}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {member.role}
                  </p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Photo */}
        <section className="relative w-full py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                  Our Founders
                </h2>
                <p className="text-lg text-slate-600">
                  The team that started it all
                </p>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-photo.jpeg"
                  alt="Shelter Aid TX Founders"
                  width={1240}
                  height={620}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-sm text-slate-500 mt-4">
                From left to right: Vedant Subramanian, Harshdeep Bommareddy, and Arjun Subramanian
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Culture Section */}
        <section className="relative w-full py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white text-slate-600 text-sm font-medium mb-6">
                Our Values
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                What We Value
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The principles that drive our mission
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Community Impact</h3>
                <p className="text-slate-600 leading-relaxed">Making a tangible difference in the lives of those experiencing homelessness</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Youth Leadership</h3>
                <p className="text-slate-600 leading-relaxed">Empowering young people to lead meaningful change in their communities</p>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Action Over Words</h3>
                <p className="text-slate-600 leading-relaxed">Delivering real shoes to real people who need them most</p>
              </MotionDiv>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
