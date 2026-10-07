import Image from "next/image"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, Em, PageIntro, RowList, Section, Timeline } from "@/components/site"
import { organizationSchema } from "@/lib/schema"

const teamMembers = [
  {
    name: "Vedant Subramanian",
    title: "Founder & Board Chair",
    image: "/images/Vedant-headshot.jpg",
    bio: "Vedant founded Shelter Aid TX after calling 50 shelters and hearing the same request again and again: shoes.",
  },
  {
    name: "Arjun Subramanian",
    title: "Co-Founder & Vice Chair",
    image: "/images/Arjun-headshot.JPG",
    bio: "Arjun sets the long-term direction of Shelter Aid TX, so the focus stays on getting shoes to shelters.",
  },
  {
    name: "Vikram Sampath",
    title: "President",
    image: "/images/Vikram-headshot.jpg",
    bio: "Vikram helps run day-to-day operations and coordinates volunteers across DFW.",
  },
  {
    name: "Aarav Nesargi",
    title: "VP & Secretary",
    image: "/images/aarav-nesargi-2026.jpeg",
    bio: "Aarav leads partnerships with schools and community organizations and keeps the team organized.",
  },
]

/** Same three roles as every other row list on the site: kicker, title, detail. */
const coreValues = [
  {
    kicker: "Impact",
    title: "Focused on DFW shelters",
    description:
      "Our work is for people experiencing homelessness across Dallas-Fort Worth. We measure it in pairs collected for the shelters that serve them.",
  },
  {
    kicker: "Leadership",
    title: "Students leading the work",
    description: "Students lead Shelter Aid TX and organize the work in their own schools and communities.",
  },
  {
    kicker: "Action",
    title: "Delivery over talk",
    description: "We deliver real shoes to real people who need them.",
  },
]

const timeline = [
  {
    year: "2023",
    title: "50 phone calls",
    description: "We called 50 shelters across DFW and asked what they needed most. The answer was shoes.",
  },
  {
    year: "2023",
    title: "501(c)(3) founded",
    description: "Officially incorporated as a nonprofit, so donations to Shelter Aid TX are tax-deductible.",
  },
  {
    year: "2024",
    title: "$7,000 award",
    description:
      "At Greenhill School's What's NEXT Pitch Night, a Shark Tank-like event, we won mentorship and $7,000, the largest award of the night, for storage.",
  },
  {
    year: "2026",
    title: "8,000+ pairs collected",
    description:
      "More than 8,000 pairs collected so far. Every one goes directly to our shelter partners across Dallas-Fort Worth.",
  },
]

export default function WhoWeArePage() {
  return (
    <>
      {/* Plain <script>, not next/script: structured data has to be in the
          server-rendered HTML for crawlers that never execute JS. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <SiteHeader />

      <main>
        <PageIntro
          kicker="Founded 2023"
          title={
            <>
              Students collecting shoes <Em>for shelters.</Em>
            </>
          }
          lede="Shelter Aid TX is a student-led 501(c)(3) nonprofit in Dallas-Fort Worth. We collect shoes and deliver them to shelters serving people experiencing homelessness."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Who We Are", url: "/who-we-are" },
              ]}
            />
          }
        />

        {/* Team: standard Section masthead; the glass cards below are the
            original ones, left-aligned to the same gutter as the heading. */}
        <Section
          tone="surface"
          kicker="Our team"
          title="Meet the people behind"
          em="Shelter Aid TX."
          lede="Students lead Shelter Aid TX, with help from mentors. The four below lead the board, operations, and partnerships."
        >
        {/* Left-aligned at the `.wrap` gutter (no `mx-auto`); the cards
            themselves are the originals, untouched. */}
        <div className="max-w-4xl">
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="glass-card rounded-[14px] overflow-hidden hover-lift">
                  <div className="aspect-square md:aspect-[3/4] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 768px) 28rem, 50vw"
                      className={`object-cover object-top md:object-center ${i === 0 ? "scale-[1.5] translate-y-[10%] md:translate-y-0 md:scale-[1.8] md:origin-top" : ""} ${i === 2 ? "scale-125 -translate-y-[15%] md:translate-y-0 md:scale-[1.25] md:translate-y-[-10%]" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <p className="text-[#87CEEB] text-[0.7rem] leading-tight md:text-sm font-medium mb-1">{member.title}</p>
                      <h3 className="font-display text-[1.0625rem] leading-[1.15] md:text-2xl font-bold md:mb-3 text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed hidden md:block">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="meta mt-6 md:mt-8">
            These four are only part of the team. Another 12+ members work alongside them.
          </p>
        </div>
        </Section>

        {/* Our story. Text + photo pair, so the section header sits INSIDE the
            left column (contract §3 exception). `items-stretch` plus a `flex-1`
            photo frame and a bottom-anchored caption makes both columns start and
            end on the same line whatever the copy length (§15). */}
        <Section tone="sunken">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
            {/* DOM order is the phone order: text first, then the photo. */}
            <div className="md:col-span-6">
              <p className="kicker kicker-rule mb-6">How it started</p>
              <h2 className="display-lg">
                It started with <Em>50 phone calls.</Em>
              </h2>
              <p className="lede mt-6">
                In the summer of 2023 we wanted to help people experiencing homelessness in DFW, but we did not know
                how. So we picked up the phone and started calling shelters.
              </p>
            </div>

            {/* The photo keeps its own 2:1 shape (1240x620) so nobody is cropped. */}
            <figure className="md:col-span-6">
              <div className="photo shadow-editorial relative aspect-[2/1]">
                <Image
                  src="/images/team-photo.jpeg"
                  alt="Founder Vedant Subramanian (left) with co-founders Harshdeep Bommareddy (center) and Arjun Subramanian (right)"
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <figcaption className="meta mt-3">
                Founder Vedant Subramanian with co-founders Arjun Subramanian and Harshdeep Bommareddy
              </figcaption>
            </figure>
          </div>

          {/* Heading left, story right: the same two columns as the row above,
              so neither side sits empty. */}
          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-[var(--hairline)] pt-12 md:mt-20 md:grid-cols-12 md:gap-12 md:pt-16">
            <div className="md:col-span-6">
              <p className="kicker kicker-rule mb-6">Our story</p>
              <h3 className="display-md">
                Shelters kept saying the same thing: <Em>shoes.</Em>
              </h3>
            </div>
            <div className="md:col-span-6">
              <p className="body-lg">
                After 50 calls, a pattern was clear. Shelter after shelter told us they needed shoes more than almost
                anything else. That was our answer.
              </p>
              <p className="body-lg mt-4">
                We founded Shelter Aid TX as a 501(c)(3). What started as a simple question to shelters has grown into
                more than 8,000 pairs collected, and every pair goes directly to our shelter partners across
                Dallas-Fort Worth.
              </p>
            </div>
          </div>
        </Section>

        {/* Milestones */}
        <Section
          tone="bg"
          kicker="Milestones"
          title="The story"
          em="so far."
          lede="Three years from a list of phone numbers to more than 8,000 pairs collected for our shelter partners."
        >
          <Timeline items={timeline} />
        </Section>

        {/* Core values */}
        <Section
          tone="surface"
          kicker="Values"
          title="What we"
          em="stand for."
          lede="Three commitments that decide what we take on and how we follow through."
        >
          <RowList
            items={coreValues.map((value) => ({
              kicker: value.kicker,
              title: value.title,
              detail: value.description,
            }))}
          />
        </Section>

        {/* Closing */}
        <Section
          tone="ink"
          kicker="Get involved"
          title="Want to help?"
          em="Here's how."
          lede="Donate shoes or money, volunteer your time, or partner with us on a drive with your school, shop, or team."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <ButtonLink arrow variant="on-dark" href="/get-involved">
                Get involved
              </ButtonLink>
              <ButtonLink variant="ghost-on-dark" href="/partners">
                See our partners
              </ButtonLink>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </>
  )
}
