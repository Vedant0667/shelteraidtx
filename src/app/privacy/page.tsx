import Link from "next/link"
import { SiteFooter } from "@/components/SiteFooter"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0F172A]">
      <main className="px-6 pt-28 pb-16 md:pt-36">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              Privacy Policy
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-balance">
              Your privacy, <span className="gradient-text">handled with care</span>
            </h1>
            <p className="text-sm md:text-base text-[#64748B]">
              Effective date: January 27, 2026
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-10 space-y-8 leading-relaxed text-[#475569]">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Overview</h2>
              <p>
                Shelter Aid TX ("we," "our," or "us") is a student-led 501(c)(3) nonprofit
                organization. This Privacy Policy explains what information we collect through this
                website, how we use it, and the choices you have.
              </p>
              <p>
                We aim to keep this policy clear and easy to read. A good privacy notice should
                explain what is collected, why it is collected, how it is used or shared, what
                security measures are used, and how to contact the organization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Information we collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Contact details you provide:</strong> such as name, email, organization,
                  and message content when you submit a form.
                </li>
                <li>
                  <strong>Donation-related details:</strong> if online donations are enabled, we
                  may collect information needed to process your donation (for example, amount and
                  basic contact details). Payment details are handled by the payment processor.
                </li>
                <li>
                  <strong>Basic technical data:</strong> like approximate device/browser details
                  and high-level usage events to help us improve the site.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">How we use information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to inquiries and partnership requests.</li>
                <li>Coordinate shoe donations, drives, and volunteer activity.</li>
                <li>Operate, maintain, and improve the website and our programs.</li>
                <li>Comply with applicable legal or reporting obligations.</li>
              </ul>
              <p>
                We process personal information based on consent, our legitimate nonprofit interests,
                and compliance with legal obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">When we share information</h2>
              <p>We do not sell personal information.</p>
              <p>We may share limited information with trusted service providers that help us run the site and our operations, such as:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email and form delivery providers.</li>
                <li>Hosting, analytics, or security tooling providers.</li>
                <li>Payment processors, when donations are enabled.</li>
              </ul>
              <p>
                Privacy policies are generally expected to describe the categories of third parties
                that receive information and why.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Cookies and analytics</h2>
              <p>
                We may use lightweight analytics and similar technologies to understand high-level
                site usage. This may include aggregate page views, referral sources, and approximate
                device or browser types. You can reduce tracking by adjusting your browser settings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Data retention</h2>
              <p>
                We generally retain contact and inquiry information for up to 5 years unless a
                longer period is required for record-keeping or legal purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational measures designed to
                protect personal information. Privacy notices should describe security safeguards at
                a high level.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Children's privacy</h2>
              <p>
                This site is not directed to children under 13, and we do not knowingly collect
                personal information from children under 13 through this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">No sensitive data</h2>
              <p>
                We do not intentionally collect sensitive personal information such as government
                identification numbers, health data, or precise location data through this website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Email communications</h2>
              <p>
                We may send occasional updates related to donations, partnerships, or program
                activity. You can opt out of these communications at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Your choices</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>You can contact us to update or correct your information.</li>
                <li>You can request that we delete information you submitted through the site.</li>
                <li>You can opt out of non-essential emails by following unsubscribe instructions.</li>
              </ul>
              <p>
                Many privacy frameworks emphasize making user choices and contact paths clear in the
                privacy policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">State privacy rights</h2>
              <p>
                Depending on where you live, you may have additional rights under applicable privacy
                laws, including the right to request access to or deletion of your personal
                information. We do not discriminate against individuals who exercise these rights.
              </p>
              <p className="text-sm text-[#64748B]">
                We aim to provide a clear privacy notice and reasonable methods to contact us about
                privacy requests, consistent with state guidance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Third-party links</h2>
              <p>
                Our website may link to third-party sites. We are not responsible for their privacy
                practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Changes to this policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will revise the
                effective date at the top of the page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Contact us</h2>
              <p>
                If you have questions about this policy or our privacy practices, contact us at{" "}
                <a className="text-[#2B9FD9] hover:underline font-medium" href="mailto:shelteraidtx@gmail.com">
                  shelteraidtx@gmail.com
                </a>
                .
              </p>
              <p>
                Mailing address: 5900 Balcones Dr Ste 100, Austin, TX 78731.
              </p>
              <p className="text-sm text-[#64748B]">
                For questions about donations or partnering, you can also use the{" "}
                <Link href="/get-involved?tab=partnership#contact" className="text-[#2B9FD9] hover:underline font-medium">
                  contact form
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
