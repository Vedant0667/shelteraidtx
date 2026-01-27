import Link from "next/link"
import { SiteFooter } from "@/components/SiteFooter"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0F172A]">
      <main className="px-6 pt-28 pb-16 md:pt-36">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
              Terms of Service
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-balance">
              Clear rules for a <span className="gradient-text-warm">shared mission</span>
            </h1>
            <p className="text-sm md:text-base text-[#64748B]">
              Effective date: January 27, 2026
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-10 space-y-8 leading-relaxed text-[#475569]">
            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Acceptance of terms</h2>
              <p>
                By accessing or using this website, you agree to these Terms of Service. If you do
                not agree, please do not use the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">About this website</h2>
              <p>
                Shelter Aid TX is a student-led 501(c)(3) nonprofit organization. This website is
                provided to share information about our mission, coordinate donations and
                partnerships, and help people get involved.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Donations and partnerships</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Donation and partnership opportunities may change over time.</li>
                <li>We may accept, decline, or limit donations based on program needs.</li>
                <li>Online donations, if enabled, are processed by third-party providers.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Appropriate use</h2>
              <p>You agree not to misuse the site. This includes, for example:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Attempting to interfere with the site’s normal operation.</li>
                <li>Submitting false, misleading, or harmful information.</li>
                <li>Trying to access areas or data you are not authorized to access.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Content and intellectual property</h2>
              <p>
                Unless otherwise noted, the content on this site is owned by Shelter Aid TX and is
                protected by applicable intellectual property laws. We grant you a limited,
                non-commercial, non-exclusive license to access and share public content for
                informational purposes, provided it is not modified or presented in a misleading way.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Third-party links and services</h2>
              <p>
                This site may link to third-party websites or services (for example, a partner
                portal or donation tooling). We are not responsible for third-party content, terms,
                or privacy practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Disclaimers</h2>
              <p>
                This website is provided on an “as is” and “as available” basis. While we aim for
                accuracy and reliability, we do not guarantee that the site will always be
                error-free, uninterrupted, or fully up to date.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Shelter Aid TX is not liable for indirect,
                incidental, special, consequential, or punitive damages arising from your use of the
                site.
              </p>
              <p>
                To the fullest extent permitted by law, our total liability for any claim related to
                the site will not exceed $100.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Termination</h2>
              <p>
                We may suspend or terminate access to the website at any time if we believe these
                Terms have been violated or if continued access could harm the organization or
                others.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas, without regard to
                conflict-of-law principles.
              </p>
              <p>
                Any disputes arising from these Terms will be resolved in state or federal courts
                located in Texas.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Severability</h2>
              <p>
                If any provision of these Terms is found unenforceable, the remaining provisions
                will remain in effect.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Changes to these terms</h2>
              <p>
                We may update these Terms of Service from time to time. When we do, we will revise
                the effective date at the top of the page. Continued use of the site after changes
                means you accept the updated terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a className="text-[#2B9FD9] hover:underline font-medium" href="mailto:shelteraidtx@gmail.com">
                  shelteraidtx@gmail.com
                </a>
                .
              </p>
              <p>Mailing address: 5900 Balcones Dr Ste 100, Austin, TX 78731.</p>
              <p className="text-sm text-[#64748B]">
                You can also reach out via the{" "}
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
