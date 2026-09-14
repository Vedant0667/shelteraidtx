import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, LinkArrow, MediaCard, PageIntro, Section } from "@/components/site"

/**
 * `titleLines` is the display form of the title: a plain first line and an
 * italic last line ending in punctuation, the same anatomy as every other
 * display heading on the site (contract §13). `title` is the plain string used
 * for card titles, aria labels, and metadata.
 */
const posts = [
  {
    slug: "/blog/starting-a-nonprofit-in-high-school",
    title: "What is hard about starting a nonprofit in high school",
    titleLines: { first: "What is hard about starting", last: "a nonprofit in high school." },
    excerpt:
      "Paperwork was the easy part. Getting people to take us seriously was the real challenge, and here is what actually worked.",
    date: "October 26, 2025",
    /** Machine form of `date`, for the Blog JSON-LD below. */
    datePublished: "2025-10-26",
    category: "Building a student nonprofit",
    image: "/images/form-blog.jpg",
    featured: true,
  },
]

const baseUrl = "https://shelteraidtx.org"

/** The index's own Blog node, listing every post so crawlers see the archive. */
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Shelter Aid TX Blog",
  url: `${baseUrl}/blog`,
  description:
    "Real notes on building a student-led nonprofit, partnering with shelters, and turning small actions into consistent impact.",
  publisher: { "@type": "Organization", name: "Shelter Aid TX", url: baseUrl },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${baseUrl}${post.slug}`,
    datePublished: post.datePublished,
  })),
}

export default function BlogPage() {
  const featuredPost = posts.find((post) => post.featured) ?? posts[0]
  const otherPosts = posts.filter((post) => post.slug !== featuredPost.slug)

  return (
    <>
      {/* Plain <script>, not next/script: structured data has to be in the
          server-rendered HTML for crawlers that never execute JS. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <SiteHeader />

      <main>
        <PageIntro
          kicker="Blog"
          title="Notes from"
          em="the work."
          lede="Real notes on building a student-led nonprofit, partnering with shelters, and turning small actions into consistent impact."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Blog", url: "/blog" },
              ]}
            />
          }
        />

        <Section
          tone="surface"
          kicker="Latest"
          title="What we've"
          em="written."
          lede="One post so far, written after a year of drives and deliveries. We add another when there is something worth passing on."
        >
          {/* The blog feature row is the one place the image comes first in the
              DOM (contract §5), so it opens the post on a phone. `items-stretch`
              plus `md:h-full` on the photo makes both columns share a top and a
              bottom edge (§15). */}
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <Link
                href={featuredPost.slug}
                aria-label={`Read ${featuredPost.title}`}
                className="photo card-hover relative block aspect-[3/2] shadow-editorial md:aspect-auto md:h-full"
              >
                <Image
                  src={featuredPost.image}
                  alt="A volunteer filling out a paper form on a clipboard outdoors"
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover"
                />
              </Link>
            </div>
            <div className="md:col-span-6">
              <p className="kicker mb-4">
                <time dateTime={featuredPost.datePublished}>{featuredPost.date}</time>
              </p>
              <h3 className="display-md">
                <Link href={featuredPost.slug} className="transition-colors hover:text-[var(--accent-ink)]">
                  {featuredPost.titleLines.first}
                  <br />
                  <span className="display-em">{featuredPost.titleLines.last}</span>
                </Link>
              </h3>
              <p className="body-lg mt-4">{featuredPost.excerpt}</p>
              <p className="meta mt-5">{featuredPost.category}</p>
              <div className="mt-6">
                <LinkArrow href={featuredPost.slug}>Read the post</LinkArrow>
              </div>
            </div>
          </div>

          {otherPosts.length > 0 && (
            <ul className="mt-12 grid items-stretch gap-7 md:mt-16 md:grid-cols-3">
              {otherPosts.map((post) => (
                <li key={post.slug} className="h-full">
                  <MediaCard
                    href={post.slug}
                    image={{ src: post.image, alt: "" }}
                    title={post.title}
                    text={post.excerpt}
                    meta={[post.date, post.category]}
                  />
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section
          tone="sunken"
          kicker="Keep in touch"
          title="More notes are"
          em="on the way."
          lede="We write when there is something worth passing on: what worked at a drive, what a shelter actually needed, what we would do differently. Until the next post, the fastest way to help is a pair of shoes."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href="/donate" arrow>
                Donate shoes
              </ButtonLink>
              <ButtonLink href="/get-involved?tab=host-drive#contact" variant="secondary">
                Host a drive
              </ButtonLink>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </>
  )
}
