import Link from "next/link"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ButtonLink, PageIntro, Prose, Section } from "@/components/site"

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          width="prose"
          kicker="Privacy"
          title="Your privacy, handled"
          em="with care."
          lede="What we collect through this website, why we collect it, how it is used, and the choices you have."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Privacy Policy", url: "/privacy" },
              ]}
            />
          }
        />

        <section className="sect tone-surface">
          <div className="wrap-prose">
            <p className="meta">Last updated January 27, 2026</p>
            <Prose className="mt-8 [&>*:first-child]:mt-0">
              <h2 id="overview">Overview</h2>
              <p>
                Shelter Aid TX (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a
                student-led 501(c)(3) nonprofit organization. This Privacy Policy explains what
                information we collect through this website, how we use it, and the choices you
                have.
              </p>
              <p>
                We aim to keep this policy clear and easy to read. A good privacy notice should
                explain what is collected, why it is collected, how it is used or shared, what
                security measures are used, and how to contact the organization.
              </p>

              <h2 id="information-we-collect">Information we collect</h2>
              <ul>
                <li>
                  Contact details you provide, such as name, email, organization, and message
                  content when you submit a form.
                </li>
                <li>
                  Basic technical data, like approximate device or browser details and high-level
                  usage events to help us improve the site.
                </li>
              </ul>

              <h2 id="how-we-use-information">How we use information</h2>
              <ul>
                <li>Respond to inquiries and partnership requests.</li>
                <li>Coordinate shoe donations, drives, and volunteer activity.</li>
                <li>Operate, maintain, and improve the website and our programs.</li>
                <li>Comply with applicable legal or reporting obligations.</li>
              </ul>
              <p>
                We process personal information based on consent, our legitimate nonprofit interests,
                and compliance with legal obligations.
              </p>

              <h2 id="when-we-share-information">When we share information</h2>
              <p>We do not sell personal information.</p>
              <p>We may share limited information with trusted service providers that help us run the site and our operations, such as:</p>
              <ul>
                <li>Email and form delivery providers.</li>
                <li>Hosting, analytics, or security tooling providers.</li>
              </ul>
              <p>
                Privacy policies are generally expected to describe the categories of third parties
                that receive information and why.
              </p>

              <h2 id="cookies-and-analytics">Cookies and analytics</h2>
              <p>
                We may use lightweight analytics and similar technologies to understand high-level
                site usage. This may include aggregate page views, referral sources, and approximate
                device or browser types. You can reduce tracking by adjusting your browser settings.
              </p>

              <h2 id="data-retention">Data retention</h2>
              <p>
                We generally retain contact and inquiry information for up to 5 years unless a
                longer period is required for record-keeping or legal purposes.
              </p>

              <h2 id="security">Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational measures designed to
                protect personal information. Privacy notices should describe security safeguards at
                a high level.
              </p>

              <h2 id="childrens-privacy">Children&rsquo;s privacy</h2>
              <p>
                This site is not directed to children under 13, and we do not knowingly collect
                personal information from children under 13 through this website.
              </p>

              <h2 id="no-sensitive-data">No sensitive data</h2>
              <p>
                We do not intentionally collect sensitive personal information such as government
                identification numbers, health data, or precise location data through this website.
              </p>

              <h2 id="email-communications">Email communications</h2>
              <p>
                We may send occasional updates related to donations, partnerships, or program
                activity. You can opt out of these communications at any time.
              </p>

              <h2 id="your-choices">Your choices</h2>
              <ul>
                <li>You can contact us to update or correct your information.</li>
                <li>You can request that we delete information you submitted through the site.</li>
                <li>You can opt out of non-essential emails by following unsubscribe instructions.</li>
              </ul>
              <p>
                Many privacy frameworks emphasize making user choices and contact paths clear in the
                privacy policy.
              </p>

              <h2 id="state-privacy-rights">State privacy rights</h2>
              <p>
                Depending on where you live, you may have additional rights under applicable privacy
                laws, including the right to request access to or deletion of your personal
                information. We do not discriminate against individuals who exercise these rights.
              </p>
              <p>
                We aim to provide a clear privacy notice and reasonable methods to contact us about
                privacy requests, consistent with state guidance.
              </p>

              <h2 id="third-party-links">Third-party links</h2>
              <p>
                Our website may link to third-party sites. We are not responsible for their privacy
                practices.
              </p>

              <h2 id="changes-to-this-policy">Changes to this policy</h2>
              <p>
                We may update this policy from time to time. When we do, we will revise the
                effective date at the top of the page.
              </p>

              <h2 id="contact-us">Contact us</h2>
              <p>
                If you have questions about this policy or our privacy practices, contact us at{" "}
                <a href="mailto:shelteraidtx@gmail.com">
                  shelteraidtx@gmail.com
                </a>
                .
              </p>
              <p>
                Mailing address: 5900 Balcones Dr Ste 100, Austin, TX 78731.
              </p>
              <p>
                For questions about donations or partnering, you can also use the{" "}
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
          title="Need something"
          em="clarified?"
          lede="If anything here is unclear, or you want information you sent us updated or removed, tell us and we will reply within 2 business days."
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
