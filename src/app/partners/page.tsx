import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners - Shelter & Community Partners | Shelter Aid TX",
  description: "Meet our trusted shelter partners and community organizations across Dallas-Fort Worth. Together, we're making a difference for those experiencing homelessness.",
};

export default function PartnersPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="flex flex-col justify-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-secondary)] mb-6 w-fit">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Our Network</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Partners Making Change Happen
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We work with trusted homeless shelters and nonprofit organizations across Dallas-Fort Worth to maximize our impact and reach those who need help most.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
                <Image
                  src="/images/stock-4430.jpg"
                  alt="Partners"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Shelter Partners - Premium Grid */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Shelter Partners
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Trusted organizations we support across Dallas-Fort Worth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Family Gateway", desc: "Shelter and support services for homeless families in Dallas" },
                { name: "Hope Restored Missions", desc: "Restoring hope and dignity to those experiencing homelessness" },
                { name: "AITF Services", desc: "Supporting individuals and families in crisis throughout DFW" },
                { name: "Our Daily Bread", desc: "Monsignor King Outreach Center providing meals and essential services" },
                { name: "Journey to Dream", desc: "Empowering individuals to achieve self-sufficiency and stability" },
                { name: "Genesis Women's Shelter", desc: "Safety and support for women and children escaping domestic violence" },
              ].map((partner, i) => (
                <div key={i} className="border-l-4 border-[var(--color-primary)] pl-6 py-4 bg-white/60">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{partner.name}</h3>
                  <p className="text-slate-600 text-sm">{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Community Partners
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Local businesses, schools, and organizations that support our mission
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src="/images/greenhill.jpg"
                    alt="Greenhill School"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-lg text-slate-900">Greenhill School</p>
                <p className="text-slate-600 mt-1 text-sm">Shoe donation drive partner with Genesis Women's Shelter</p>
              </div>

              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src="/images/fleetfeet.png"
                    alt="Fleet Feet Plano"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-lg text-slate-900">Fleet Feet Plano</p>
                <p className="text-slate-600 mt-1 text-sm">Longest-standing partner hosting donation boxes</p>
              </div>

              <div className="text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src="/images/cisv.png"
                    alt="CISV Dallas Chapter"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-lg text-slate-900">CISV Dallas Chapter</p>
                <p className="text-slate-600 mt-1 text-sm">Children's International Summer Villages promoting community service</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
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
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                Partner as an Organization
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
