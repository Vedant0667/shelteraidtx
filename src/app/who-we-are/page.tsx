import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are - Meet Our Team | Shelter Aid TX",
  description: "Meet the dedicated team behind Shelter Aid TX. Learn about our mission, values, and the people working to help homeless shelters across Dallas-Fort Worth.",
};

export default function WhoWeArePage() {
  return (
    <>
      <NavBar />
      <main className="pt-24">
        {/* Page Header */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Founded in October 2023, we are high school students dedicated to supporting those in need and providing resources to shelters across the DFW area
            </p>
          </div>
        </section>

        {/* Mission with Image */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[600px]">
                <Image
                  src="/images/stock-10929.jpg"
                  alt="Our mission"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Shelter Aid TX is dedicated to supporting shelters throughout the Dallas-Fort Worth area and broader Texas region by gathering donations and providing essential resources. Our current focus is supplying shelters with shoes, but as shelters&apos; needs evolve, so will our goals.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We believe everyone deserves a warm, safe haven, and we work tirelessly to make that vision a reality by connecting nonprofit donation partners with individual donors. We are a registered 501(c)3 nonprofit organization.
                </p>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Compassion</h4>
                      <p className="text-slate-600 text-sm">Every person deserves dignity, warmth, and hope</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Transparency</h4>
                      <p className="text-slate-600 text-sm">100% of donations go directly to helping shelters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Community</h4>
                      <p className="text-slate-600 text-sm">Building lasting partnerships across DFW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Meet Our Team
            </h2>
            <div className="mb-12">
              <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/images/team-photo.jpeg"
                  alt="Shelter Aid TX Team"
                  width={1240}
                  height={620}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center text-slate-600 max-w-2xl mx-auto">
                Our founding team of high school students committed to making a difference in the DFW community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-4">
                  <span className="text-white text-5xl font-bold">V</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Vedant Subramanian</h3>
                <p className="text-[var(--color-primary)] font-semibold text-sm mt-1 mb-2">President and Founder</p>
                <p className="text-slate-600 text-sm">Leading our mission to support shelters across Texas and coordinating our donation efforts to maximize community impact.</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-4">
                  <span className="text-white text-5xl font-bold">A</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Arjun Subramanian</h3>
                <p className="text-[var(--color-primary)] font-semibold text-sm mt-1 mb-2">Secretary and Co-Founder</p>
                <p className="text-slate-600 text-sm">Coordinating operations and partnerships with shelters throughout the DFW area to ensure effective resource distribution.</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex items-center justify-center mb-4">
                  <span className="text-white text-5xl font-bold">H</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">Harshdeep Bommareddy</h3>
                <p className="text-[var(--color-primary)] font-semibold text-sm mt-1 mb-2">Vice President and Co-Founder</p>
                <p className="text-slate-600 text-sm">Managing community outreach and volunteers, building relationships with donors and partners to expand our reach.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
