import Image from "next/image"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, LinkArrow, PageIntro, Prose, Section } from "@/components/site"

const baseUrl = "https://shelteraidtx.org"

const postSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What is hard about starting a nonprofit in high school",
  description:
    "What it actually takes to start a student nonprofit: building trust, staying consistent, and delivering real results for shelter partners.",
  image: `${baseUrl}/images/form-blog.jpg`,
  author: {
    "@type": "Organization",
    name: "Shelter Aid TX",
    url: `${baseUrl}/who-we-are`,
  },
  publisher: {
    "@type": "Organization",
    name: "Shelter Aid TX",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/main-logo.png`,
    },
  },
  datePublished: "2025-10-26",
  dateModified: "2026-09-13",
  mainEntityOfPage: `${baseUrl}/blog/starting-a-nonprofit-in-high-school`,
}

export default function BlogPostPage() {
  return (
    <>
      {/* Plain <script>, not next/script: structured data has to be in the
          server-rendered HTML for crawlers that never execute JS. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />

      <SiteHeader />

      <main>
        <PageIntro
          width="prose"
          kicker={<time dateTime="2025-10-26">October 26, 2025</time>}
          title="What is hard about starting"
          em="a nonprofit in high school."
          lede="Starting a student nonprofit looks intimidating from the outside, mostly because of the legal and administrative steps. In practice, the slower work is earning trust, keeping momentum, and proving you can deliver consistently over time."
          above={
            <>
              <Breadcrumbs
                items={[
                  { name: "Home", url: "/" },
                  { name: "Blog", url: "/blog" },
                  { name: "Starting a Nonprofit in High School", url: "/blog/starting-a-nonprofit-in-high-school" },
                ]}
              />
              <div className="wrap-prose mt-4">
                {/* -my-3/py-3: same geometry, a thumb-sized hit area on mobile. */}
                <LinkArrow href="/blog" className="-my-3 py-3">
                  All notes
                </LinkArrow>
              </div>
            </>
          }
        />

        <article className="sect tone-surface">
          <div className="wrap-prose">
            <figure className="photo shadow-editorial">
              <Image
                src="/images/form-blog.jpg"
                alt="A volunteer filling out a paper form on a clipboard outdoors"
                width={540}
                height={360}
                sizes="(min-width: 768px) 42rem, 100vw"
                className="h-auto w-full"
                priority
              />
            </figure>
            <p className="meta mt-4">Filling out a collection form at a neighborhood drive</p>
          </div>

          <div className="wrap-prose mt-10 md:mt-14">
            <Prose className="[&>*:first-child]:mt-0">
              <h2>Paperwork is the easy part</h2>
              <p>
                Filing for 501(c)(3) status takes focus, but it is usually a bounded task: forms,
                patience, and careful reading. Texas keeps it fairly approachable, and there are
                plenty of free resources that walk through the process step by step.
              </p>
              <p>
                The paperwork is important because it enables the work, but it is rarely the main
                constraint on impact.
              </p>

              <h2>Being taken seriously is the hard part</h2>
              <p>
                The tougher part shows up after the forms are filed. Reaching out to shelters does
                not always lead to a quick &ldquo;yes,&rdquo; and momentum can fade without steady
                follow-through. Messages get missed, plans shift, and credibility has to be earned
                through delivery. Trust builds when the work shows up on time and in the way it was
                promised.
              </p>
              <p>
                Progress tends to feel slow early on, and then it accelerates once people have seen
                consistent results.
              </p>

              <h2>What actually worked</h2>
              <ul>
                <li>
                  Start small on purpose. Early wins do not have to be huge. They just have to be
                  real and repeatable.
                </li>
                <li>
                  Be consistent. Follow up, show up, and do what you said you would do, especially
                  when it would be easier to let something slide.
                </li>
                <li>
                  Let the work speak. Completed work communicates reliability more clearly than any
                  single pitch.
                </li>
              </ul>
            </Prose>
          </div>
        </article>

        <Section
          tone="sunken"
          kicker="Take part"
          title="Want to help"
          em="get started?"
          lede="Do not wait for perfect conditions. Start with what you have, keep the promises you make, and build a rhythm you can sustain. Over time, consistency does most of the heavy lifting."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href="/get-involved?tab=volunteer#contact" arrow>
                Volunteer
              </ButtonLink>
              <ButtonLink href="/donate" variant="secondary">
                Donate shoes
              </ButtonLink>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </>
  )
}
