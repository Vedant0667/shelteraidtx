import Link from "next/link"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ButtonLink, PageIntro, Prose, Section } from "@/components/site"

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          width="prose"
          kicker="Terms"
          title="Clear rules for"
          em="a shared mission."
          lede="How this website may be used, how donations and partnerships work, and what we are and are not responsible for."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Terms of Service", url: "/terms" },
              ]}
            />
          }
        />

        <section className="sect tone-surface">
          <div className="wrap-prose">
            <p className="meta">Last updated January 27, 2026</p>
            <Prose className="mt-8 [&>*:first-child]:mt-0">
              <h2 id="acceptance-of-terms">Acceptance of terms</h2>
              <p>
                By accessing or using this website, you agree to these Terms of Service. If you do
                not agree, please do not use the site.
              </p>

              <h2 id="about-this-website">About this website</h2>
              <p>
                Shelter Aid TX is a student-led 501(c)(3) nonprofit organization. This website is
                provided to share information about our mission, coordinate donations and
                partnerships, and help people get involved.
              </p>

              <h2 id="donations-and-partnerships">Donations and partnerships</h2>
              <ul>
                <li>Donation and partnership opportunities may change over time.</li>
                <li>We may accept, decline, or limit donations based on program needs.</li>
                <li>Online donations, if enabled, are processed by third-party providers.</li>
              </ul>

              <h2 id="appropriate-use">Appropriate use</h2>
              <p>You agree not to misuse the site. This includes, for example:</p>
              <ul>
                <li>Attempting to interfere with the site’s normal operation.</li>
                <li>Submitting false, misleading, or harmful information.</li>
                <li>Trying to access areas or data you are not authorized to access.</li>
              </ul>

              <h2 id="content-and-intellectual-property">Content and intellectual property</h2>
              <p>
                Unless otherwise noted, the content on this site is owned by Shelter Aid TX and is
                protected by applicable intellectual property laws. We grant you a limited,
                non-commercial, non-exclusive license to access and share public content for
                informational purposes, provided it is not modified or presented in a misleading way.
              </p>

              <h2 id="third-party-links-and-services">Third-party links and services</h2>
              <p>
                This site may link to third-party websites or services (for example, a partner
                portal or donation tooling). We are not responsible for third-party content, terms,
                or privacy practices.
              </p>

              <h2 id="disclaimers">Disclaimers</h2>
              <p>
                This website is provided on an “as is” and “as available” basis. While we aim for
                accuracy and reliability, we do not guarantee that the site will always be
                error-free, uninterrupted, or fully up to date.
              </p>

              <h2 id="limitation-of-liability">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Shelter Aid TX is not liable for indirect,
                incidental, special, consequential, or punitive damages arising from your use of the
                site.
              </p>
              <p>
                To the fullest extent permitted by law, our total liability for any claim related to
                the site will not exceed $100.
              </p>

              <h2 id="termination">Termination</h2>
              <p>
                We may suspend or terminate access to the website at any time if we believe these
                Terms have been violated or if continued access could harm the organization or
                others.
              </p>

              <h2 id="governing-law">Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas, without regard to
                conflict-of-law principles.
              </p>
              <p>
                Any disputes arising from these Terms will be resolved in state or federal courts
                located in Texas.
              </p>

              <h2 id="severability">Severability</h2>
              <p>
                If any provision of these Terms is found unenforceable, the remaining provisions
                will remain in effect.
              </p>

              <h2 id="changes-to-these-terms">Changes to these terms</h2>
              <p>
                We may update these Terms of Service from time to time. When we do, we will revise
                the effective date at the top of the page. Continued use of the site after changes
                means you accept the updated terms.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href="mailto:shelteraidtx@gmail.com">
                  shelteraidtx@gmail.com
                </a>
                .
              </p>
              <p>Mailing address: 5900 Balcones Dr Ste 100, Austin, TX 78731.</p>
              <p>
                You can also reach out via the{" "}
                <Link href="/get-involved?tab=partnership#contact">
                  contact form
                </Link>
                .
              </p>
            </Prose>
          </div>
        </section>

        <Section
          tone="sunken"
          kicker="Questions"
          title="Still have"
          em="questions?"
          lede="Ask us anything about these terms, a donation, or a partnership, and we will reply within 2 business days."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink arrow href="/get-involved?tab=partnership#contact">
                Send a message
              </ButtonLink>
              <ButtonLink href="mailto:shelteraidtx@gmail.com" variant="secondary" external>
                Email us
              </ButtonLink>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </>
  )
}
