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
        {/* Page Header */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col justify-center">
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Our Partners
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We work with trusted homeless shelters and nonprofit organizations across Dallas-Fort Worth to maximize our impact
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px]">
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

        {/* Partner Categories */}
        <section className="relative w-full py-16 sm:py-20 bg-gradient-to-br from-[var(--color-secondary)] to-white">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-6">
              Who We Help
            </h2>
            <p className="text-center text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
              We collaborate with these dedicated organizations providing shelter and services to those experiencing homelessness in the DFW area
            </p>

            <div className="space-y-3">
              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Family Gateway</h3>
                <p className="text-slate-600">Providing shelter and support services for homeless families in Dallas</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Hope Restored Missions</h3>
                <p className="text-slate-600">Restoring hope and dignity to those experiencing homelessness</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">AITF Services</h3>
                <p className="text-slate-600">Supporting individuals and families in crisis throughout DFW</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Our Daily Bread</h3>
                <p className="text-slate-600">Monsignor King Outreach Center providing meals and essential services</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Journey to Dream</h3>
                <p className="text-slate-600">Empowering individuals to achieve self-sufficiency and stability</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Genesis Women&apos;s Shelter</h3>
                <p className="text-slate-600">Providing safety and support for women and children escaping domestic violence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Partners */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-6">
              Community Partners
            </h2>
            <p className="text-center text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
              Local businesses, schools, and organizations that support our mission through donations and volunteer efforts
            </p>
            <div className="space-y-12">
              <div className="text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/images/greenhill.jpg"
                    alt="Greenhill School"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-lg text-slate-900">Greenhill School</p>
                <p className="text-slate-600 mt-1">Shoe donation drive partner with Genesis Women&apos;s Shelter</p>
              </div>

              <div className="text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/images/fleetfeet.png"
                    alt="Fleet Feet Plano"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-lg text-slate-900">Fleet Feet Plano</p>
                <p className="text-slate-600 mt-1">Longest-standing partner hosting donation boxes</p>
              </div>

              <div className="text-center">
                <div className="h-24 flex items-center justify-center mb-4">
                  <Image
                    src="/images/cisv.png"
                    alt="CISV Dallas Chapter"
                    width={365}
                    height={365}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="font-semibold text-lg text-slate-900">CISV Dallas Chapter</p>
                <p className="text-slate-600 mt-1">Children&apos;s International Summer Villages promoting community service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Become a Partner
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a shelter in need of support or an organization wanting to help, we&apos;d love to partner with you
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
