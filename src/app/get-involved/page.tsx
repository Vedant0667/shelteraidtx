import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved - Donate & Volunteer | Shelter Aid TX",
  description: "Join our mission to help homeless shelters in DFW. Donate shoes, volunteer your time, or become a partner. Multiple ways to make a difference.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Page Header */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="flex flex-col justify-center">
                <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-secondary)] mb-6 w-fit">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Join Us</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                  Make a Difference Today
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  There are many ways you can help make a difference in the lives of those experiencing homelessness in Dallas-Fort Worth
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
                <Image
                  src="/images/stock-5513.jpg"
                  alt="Get involved"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Every contribution, whether it&apos;s shoes, time, or funds, helps provide warmth and dignity to those experiencing homelessness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shelteraidtx.org"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-shadow"
                style={{
                  background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
                }}
              >
                Donate Now
              </a>
              <a
                href="mailto:contact@shelteraidtx.org"
                className="inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-base font-medium transition-all hover:bg-[var(--color-primary)] hover:text-white"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
