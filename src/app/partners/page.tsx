"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PartnersPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Our Partners", url: "/partners" },
              ]}
            />
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 18 }}
                className="flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 mb-6 w-fit">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="text-sm font-semibold text-purple-600">Our Network</span>
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
                <p className="text-slate-600 text-sm leading-relaxed">Shoe donation drive partner with Genesis Women&apos;s Shelter</p>
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
                <p className="text-slate-600 text-sm leading-relaxed">Children&apos;s International Summer Villages promoting community service</p>
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
                { name: "Genesis Women&apos;s Shelter", desc: "Safety and support for women and children escaping domestic violence", logo: "/images/shelters/genesis.png" },
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

        <section id="partner-contact" className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <MotionDiv {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-slate-600">
                Whether you serve unhoused neighbors or want to fund local drives, we&rsquo;re excited
                to collaborate. Let us know how you&rsquo;d like to team up and we&rsquo;ll follow up with next steps.
              </p>
            </MotionDiv>
            <div className="grid gap-8 md:grid-cols-2">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-left"
              >
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">For Shelters</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  Tell us the sizes you need, preferred delivery windows, and how we can best support the guests you serve.
                </p>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2"><span className="mt-1 text-[var(--color-primary)]">•</span><span>Scheduled deliveries or pickups within the DFW metroplex.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-[var(--color-primary)]">•</span><span>Sorting support for mixed-size donations.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-[var(--color-primary)]">•</span><span>Monthly inventory check-ins for recurring needs.</span></li>
                </ul>
                <Link
                  href="/donate#contact-form"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                  }}
                >
                  Message Us
                </Link>
              </MotionDiv>
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-left"
              >
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">For Community Organizations</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  Partner with us on drives, sponsorships, or volunteer events that keep shoes moving to local shelters.
                </p>
                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2"><span className="mt-1 text-[var(--color-primary)]">•</span><span>Custom marketing assets and drive playbooks.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-[var(--color-primary)]">•</span><span>Volunteer coordination for sorting and delivery.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-[var(--color-primary)]">•</span><span>Impact recaps you can share with your community.</span></li>
                </ul>
                <Link
                  href="/donate#contact-form"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                  }}
                >
                  Start a Conversation
                </Link>
              </MotionDiv>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


