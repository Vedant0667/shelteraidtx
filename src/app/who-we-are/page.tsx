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
        {/* Team Section */}
        <section className="relative w-full py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Meet Our Team
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                Founded in October 2023, we are high school students dedicated to supporting those in need and providing resources to shelters across the DFW area
              </p>
              <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/team-photo.jpeg"
                  alt="Shelter Aid TX Team"
                  width={1240}
                  height={620}
                  className="w-full h-auto"
                  priority
                />
              </div>
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
