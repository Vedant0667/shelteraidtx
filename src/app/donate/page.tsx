import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import ContactForm from "@/components/ContactForm"
import { ButtonLink, Card, LinkArrow, PageIntro, RowList, Section, StatStrip } from "@/components/site"

export const metadata: Metadata = {
  title: "Donate Shoes in DFW",
  description:
    "Donate new or gently used shoes in Dallas-Fort Worth. See what we accept, how drop-off works, and how to request pickup for larger donations.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    type: "website",
    title: "Donate Shoes in DFW | Shelter Aid TX",
    description:
      "Donate new or gently used shoes in Dallas-Fort Worth. See what we accept, how drop-off works, and how to request pickup for larger donations.",
    url: "https://shelteraidtx.org/donate",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donate Shoes in DFW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate Shoes in DFW | Shelter Aid TX",
    description:
      "Donate new or gently used shoes in Dallas-Fort Worth. See what we accept, how drop-off works, and how to request pickup for larger donations.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

const intro =
  'If you are searching for "donate shoes DFW," you are in the right place. Shelter Aid TX collects shoes and delivers them directly to shelter partners across the Dallas-Fort Worth area.'

/**
 * Masthead strip (portfolio hero anatomy). Facts only, restating what the page
 * already says further down — deliberately no counts or impact numbers.
 */
const mastheadFacts = [
  { label: "We accept", value: "Clean, wearable shoes" },
  { label: "We serve", value: "Shelters across DFW" },
  { label: "We coordinate", value: "Drop-off or pickup" },
]

/** Same three roles as every other row list on the site: kicker, title, detail. */
const acceptance = [
  {
    kicker: "Sizes",
    title: "All sizes for men, women, and children",
    detail:
      "Shelters ask us for sizes, quantities, and gender, so every size has somewhere to go.",
  },
  {
    kicker: "Types",
    title: "Athletic shoes, casual shoes, boots, and sandals",
    detail: "Everyday footwear that someone can wear out of the shelter the same day.",
  },
  {
    kicker: "Condition",
    title: "New or gently used shoes in clean, wearable condition",
    detail: "If a pair is clean, wearable, and practical, it can help.",
  },
]

const steps = [
  {
    title: "Check what to donate",
    description: "We accept new and gently used shoes that are clean and ready to wear.",
  },
  {
    title: "Choose drop-off or pickup",
    description:
      "Smaller donations can be dropped off through partners. For larger donations, we can coordinate pickup.",
  },
  {
    title: "Send details",
    description:
      "Share sizes, quantities, and gender, plus your preferred timing, so we can coordinate quickly with shelter partners.",
  },
]

const inquiryOptions = [
  { value: "shoe-donation", label: "Donate shoes" },
  { value: "host-drive", label: "Host a drive" },
  { value: "volunteer", label: "Volunteer" },
]

export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          /* Kicker names the page area; the H1 carries the search phrase, so the
             two must not be the same words (every other route does the same). */
          kicker="How to give"
          title="Donate shoes"
          em="in Dallas-Fort Worth."
          lede={intro}
          strip={<StatStrip items={mastheadFacts} columns={3} />}
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Donate Shoes", url: "/donate" },
              ]}
            />
          }
        />

        <Section
          tone="surface"
          kicker="What we accept"
          title="Where can I donate shoes"
          em="in Dallas-Fort Worth?"
          lede="You can drop shoes at any Shelter Aid TX collection partner across Dallas-Fort Worth, or request a pickup for 30 pairs or more. We focus on shoes that can be used immediately by shelter partners and the people they serve."
        >
          <RowList items={acceptance} />
        </Section>

        {/* Form card sits on a sunken section (contract §6, never on white).
            `items-stretch` plus `h-full` on both columns makes the card's top and
            bottom edges land on the row list's first and last hairline, and the
            card's inner top padding equals the first row's so the two kickers
            share a baseline (§15). Same block as the homepage donate section. */}
        <Section
          tone="sunken"
          kicker="Send us the details"
          title="Tell us what"
          em="you have."
          lede="Share sizes, quantities, and gender, plus whether you would rather drop off or have us pick up."
        >
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-12">
            <div className="flex flex-col md:col-span-6">
              <p className="kicker mb-5">Shoe donations</p>
              {/* `[&_.field]:text-base`: inputs must be 16px or iOS Safari zooms
                  the whole page on focus. Belongs in `.field` itself — see report. */}
              <Card className="flex flex-1 flex-col p-7 [&_.field]:text-base md:p-9">
                <h3 className="title">Donate shoes</h3>
                <p className="body mt-2">
                  Fill out the form and we will coordinate pickup or drop-off details.
                </p>
                <div className="rule mb-7 mt-6" />
                <ContactForm
                  subject="Shoe Donation Inquiry"
                  submitLabel="Send message"
                  successMessage="Thank you. We will be in touch within 2 business days to coordinate your donation."
                  inquiryOptions={inquiryOptions}
                  minimal
                  defaultInquiry="shoe-donation"
                  messagePlaceholder="Tell us about your donation, including sizes, quantities, and gender, plus preferred pickup or drop-off details."
                />
              </Card>
            </div>

            <div className="flex flex-col md:col-span-6">
              <p className="kicker mb-5">How it works</p>
              <ol className="rows flex flex-1 flex-col">
                {steps.map((step, i) => (
                  <li key={step.title} className="row flex-1">
                    <p className="kicker">Step {i + 1}</p>
                    <h3 className="title mt-4">{step.title}</h3>
                    <p className="body mt-2">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section
          tone="bg"
          kicker="Other ways to help"
          title="Host a drive or"
          em="volunteer with us."
          lede="A drive brings in the most pairs at once, and volunteers sort and deliver them. Tell us which one fits and we will follow up within 2 business days."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink arrow href="/get-involved?tab=host-drive#contact">
                Host a drive
              </ButtonLink>
              <ButtonLink href="/get-involved?tab=volunteer#contact" variant="secondary">
                Volunteer
              </ButtonLink>
            </div>
          }
        >
          <p className="body">
            Run a shelter instead? Requests have their own form, so you can send sizes, quantities,
            and gender without picking a category.
          </p>
          <div className="mt-5">
            <LinkArrow href="/request-shoes">Request shoes for your shelter</LinkArrow>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  )
}
