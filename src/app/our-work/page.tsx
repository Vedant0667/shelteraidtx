import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Programs & Impact | Shelter Aid TX",
  description: "Learn about our programs providing shoes and essential items to homeless shelters across Dallas-Fort Worth. See the impact we're making in our community.",
};

export default function OurWorkPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Page Header */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px]">
                <Image
                  src="/images/process-img.jpeg"
                  alt="Our work"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Our Work
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  From collecting shoes to building partnerships, discover how we&apos;re making a difference in the lives of those experiencing homelessness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Our Programs
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Shoe Donation Program</h3>
                <p className="text-slate-600 leading-relaxed mb-3">Our flagship program collecting new and gently used shoes for homeless individuals across DFW. Every pair provides warmth, protection, and dignity.</p>
                <p className="text-sm text-[var(--color-primary)] font-semibold">New & Gently Used Accepted • All Sizes Needed • 1,003+ Pairs Donated</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Essential Items Program</h3>
                <p className="text-slate-600 leading-relaxed mb-3">Beyond shoes, we collect and distribute essential items that shelters need most to serve their communities effectively.</p>
                <p className="text-sm text-[var(--color-primary)] font-semibold">Clothing & Winter Gear • Hygiene Products • Emergency Supplies</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Tailored Donations</h3>
                <p className="text-slate-600 leading-relaxed mb-3">We reach out to shelters to understand their specific requirements, including shoe sizes, types, and quality preferences to ensure donations precisely meet their needs.</p>
                <p className="text-sm text-[var(--color-primary)] font-semibold">Needs Assessment • Size Customization • Quality-Focused</p>
              </div>

              <div className="border-l-4 border-[var(--color-primary)] pl-6 py-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Monetary Contributions</h3>
                <p className="text-slate-600 leading-relaxed mb-3">Financial contributions enable us to cover essential operational costs such as transportation, storage, and distribution of donated shoes and supplies.</p>
                <p className="text-sm text-[var(--color-primary)] font-semibold">Transportation • Storage Solutions • Distribution Logistics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="relative w-full py-16 sm:py-20 bg-slate-50">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Our Impact
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">1,003</div>
                <div className="text-sm text-slate-600">Pairs of Shoes Donated</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">6</div>
                <div className="text-sm text-slate-600">Shelter Partners</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">100%</div>
                <div className="text-sm text-slate-600">Community Funded</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">2023</div>
                <div className="text-sm text-slate-600">Founded</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
