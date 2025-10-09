"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";

export default function PartnersPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
                className="flex flex-col justify-center"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-white/80 mb-6 w-fit">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Our Network</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Partners Making Change Happen
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We work with trusted homeless shelters and nonprofit organizations across Dallas-Fort Worth to maximize our impact and reach those who need help most.
                </p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]"
              >
                <Image
                  src="/images/stock-4430.jpg"
                  alt="Partners"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Partners
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Local businesses, schools, and organizations that support our mission
              </p>
            </MotionDiv>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-center group"
              >
                <div className="h-24 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/greenhill.jpg"
                    alt="Greenhill School"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-display text-xl font-bold text-slate-900 mb-2">Greenhill School</p>
                <p className="text-slate-600 text-sm leading-relaxed">Shoe donation drive partner with Genesis Women's Shelter</p>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-center group"
              >
                <div className="h-24 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/fleetfeet.png"
                    alt="Fleet Feet Plano"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-display text-xl font-bold text-slate-900 mb-2">Fleet Feet Plano</p>
                <p className="text-slate-600 text-sm leading-relaxed">Longest-standing partner hosting donation boxes</p>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-center group"
              >
                <div className="h-24 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/cisv.png"
                    alt="CISV Dallas Chapter"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-display text-xl font-bold text-slate-900 mb-2">CISV Dallas Chapter</p>
                <p className="text-slate-600 text-sm leading-relaxed">Children's International Summer Villages promoting community service</p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Who We Support */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv {...fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Who We Support
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Trusted organizations we support across Dallas-Fort Worth
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Family Gateway", desc: "Shelter and support services for homeless families in Dallas", logo: "/images/shelters/family-gateway.png" },
                { name: "Hope Restored Missions", desc: "Restoring hope and dignity to those experiencing homelessness", logo: "/images/shelters/hope-restored.png" },
                { name: "AITF Services", desc: "Supporting individuals and families in crisis throughout DFW", logo: "/images/shelters/aitf.png" },
                { name: "Our Daily Bread", desc: "Monsignor King Outreach Center providing meals and essential services", logo: "/images/shelters/our-daily-bread.png" },
                { name: "Journey to Dream", desc: "Empowering individuals to achieve self-sufficiency and stability", logo: "/images/shelters/journey-to-dream.png" },
                { name: "Genesis Women's Shelter", desc: "Safety and support for women and children escaping domestic violence", logo: "/images/shelters/genesis.png" },
              ].map((partner, i) => (
                <MotionDiv
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: 0.1 * (i + 1) }}
                  className="flex items-start gap-6 border-l-4 border-[var(--color-primary)] pl-8 pr-8 py-8 bg-white rounded-r-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white rounded-xl p-2 group-hover:scale-105 transition-transform">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{partner.desc}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <MotionDiv {...fadeInUp}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Become a Partner
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Whether you're a shelter in need of support or an organization wanting to help, we'd love to partner with you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@shelteraidtx.org?subject=Shelter Partnership Inquiry"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-shadow"
                  style={{
                    background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                  }}
                >
                  Partner as a Shelter
                </a>
                <a
                  href="mailto:contact@shelteraidtx.org?subject=Community Partnership Inquiry"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                >
                  Partner as an Organization
                </a>
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
