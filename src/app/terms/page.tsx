import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Shelter Aid TX&apos;s website and services, including donation policies, refunds, and liability limitations.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Shelter Aid TX",
    description: "Terms and conditions for using our services and making donations.",
    url: "https://shelteraidtx.org/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-8 sm:pt-16">
        <section className="relative w-full py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 mb-8">
              Last Updated: October 26, 2025
            </p>

            <div className="prose prose-slate max-w-none">
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using the Shelter Aid TX website at <a href="https://shelteraidtx.org" className="text-[var(--color-primary)] hover:underline">shelteraidtx.org</a> (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Site or services.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Shelter Aid TX is a 501(c)(3) nonprofit organization (EIN: 93-3584886) organized under the laws of the State of Texas.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                2. Use of Website
              </h2>
              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                2.1 Permitted Use
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                You may use our Site for lawful purposes only and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Use the Site in any way that violates applicable federal, state, or local laws</li>
                <li>Impersonate or attempt to impersonate Shelter Aid TX, our employees, volunteers, or any other person or entity</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site</li>
                <li>Use any robot, spider, or other automatic device to access the Site for any purpose</li>
                <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other malicious material</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                2.2 Intellectual Property
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                All content on this Site, including text, graphics, logos, images, and software, is the property of Shelter Aid TX or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                3. Donations
              </h2>
              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                3.1 Tax Deductibility
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Donations to Shelter Aid TX are tax-deductible to the extent allowed by law. As a 501(c)(3) nonprofit organization, we will provide you with a receipt for your donation that can be used for tax purposes. We recommend consulting with a tax professional regarding the deductibility of your specific donation.
              </p>

              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                3.2 Payment Processing
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                All monetary donations are processed securely through Stripe, a third-party payment processor. By making a donation, you agree to Stripe&apos;s Terms of Service and Privacy Policy. We do not store your payment card information on our servers.
              </p>

              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                3.3 Refund Policy
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Donations are generally non-refundable. However, if you believe a charge was made in error or you need to cancel a recurring donation, please contact us at <a href="mailto:shelteraidtx@gmail.com" className="text-[var(--color-primary)] hover:underline">shelteraidtx@gmail.com</a> within 15 days of the transaction. We will review refund requests on a case-by-case basis.
              </p>

              <h3 className="font-display text-xl font-semibold text-slate-900 mt-6 mb-3">
                3.4 Use of Donations
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Donations to Shelter Aid TX will be used to support our mission of providing shoes and essential items to homeless shelters across the Dallas-Fort Worth area. This includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Purchasing new shoes and essential items for shelter residents</li>
                <li>Transportation and logistics for delivering donations to partner shelters</li>
                <li>Operational costs associated with running our programs</li>
                <li>Community outreach and awareness initiatives</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                We reserve the right to use donations where they are most needed to fulfill our charitable mission.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                4. Shoe Donations
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When donating physical shoes to Shelter Aid TX:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Shoes should be new or gently used and in clean, wearable condition</li>
                <li>We accept all sizes: men&apos;s, women&apos;s, and children&apos;s shoes</li>
                <li>We reserve the right to decline or properly dispose of items that do not meet quality standards</li>
                <li>Once donated, shoes become the property of Shelter Aid TX and will be distributed to partner shelters at our discretion</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                THIS SITE AND ALL CONTENT, SERVICES, AND PRODUCTS PROVIDED THROUGH THE SITE ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Shelter Aid TX does not warrant that:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>The Site will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from the use of the Site will be accurate or reliable</li>
                <li>Any errors in the Site will be corrected</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SHELTER AID TX, ITS DIRECTORS, OFFICERS, EMPLOYEES, VOLUNTEERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                7. Indemnification
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless Shelter Aid TX, its directors, officers, employees, volunteers, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with your access to or use of the Site or your violation of these Terms.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                8. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms and your use of the Site shall be governed by and construed in accordance with the laws of the State of Texas, without giving effect to any principles of conflicts of law. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Travis County, Texas.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of the Site after any changes indicates your acceptance of the new Terms.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                10. Severability
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h2 className="font-display text-2xl font-bold text-slate-900 mt-8 mb-4">
                11. Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-[var(--color-secondary)] rounded-2xl p-6 mb-8">
                <p className="text-slate-900 font-semibold mb-2">Shelter Aid TX</p>
                <p className="text-slate-600">Email: <a href="mailto:shelteraidtx@gmail.com" className="text-[var(--color-primary)] hover:underline">shelteraidtx@gmail.com</a></p>
                <p className="text-slate-600">Address: 5900 Balcones Dr Ste 100, Austin, TX 78731</p>
                <p className="text-slate-600 mt-2">EIN: 93-3584886</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
