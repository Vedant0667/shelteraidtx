import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import DonateOptions from "@/components/DonateOptions"
import { ButtonLink, LinkArrow, PageIntro, RowList, Section, StatStrip } from "@/components/site"
import { ORG_EIN } from "@/lib/donations"

const description =
  "Donate shoes or give online to Shelter Aid TX, a DFW 501(c)(3). Money, once or monthly, covers collecting, storing, and delivering shoes to shelters."

export const metadata: Metadata = {
  title: "Donate Shoes or Money in DFW",
  description,
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    type: "website",
    title: "Donate Shoes or Money in DFW | Shelter Aid TX",
    description,
    url: "https://shelteraidtx.org/donate",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donate shoes or money to Shelter Aid TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate Shoes or Money in DFW | Shelter Aid TX",
    description,
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

/** Entity, metro, and both ways to give in the first sentences (AEO: answer first). */
const intro =
  "Shelter Aid TX is a 501(c)(3) nonprofit that delivers donated shoes to homeless shelters across Dallas-Fort Worth. Give shoes through a drop-off or pickup, or give money online, once or monthly."

/** Masthead strip: the two ways to give, then the fact both share. */
const mastheadFacts = [
  { label: "Give shoes", value: "Drop-off or pickup" },
  { label: "Give online", value: "Once or monthly" },
  { label: "Tax-deductible", value: `EIN ${ORG_EIN}` },
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

const givingFacts = [
  {
    kicker: "Taxes",
    title: "Tax-deductible",
    detail: `Shelter Aid TX is a 501(c)(3) nonprofit, EIN ${ORG_EIN}. Donations are tax-deductible to the extent allowed by law.`,
  },
  {
    kicker: "Receipts",
    title: "A receipt by email",
    detail: "We email a receipt when the payment clears, and again each month for monthly donations.",
  },
  {
    kicker: "Monthly",
    title: "Cancel any time",
    detail: "Every monthly receipt tells you how, or email shelteraidtx@gmail.com.",
  },
  {
    kicker: "Security",
    title: "Processed by Stripe",
    detail: "You enter card details in Stripe's secure form. They never reach our servers.",
  },
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
          title="Donate shoes or money"
          em="in Dallas-Fort Worth."
          lede={intro}
          strip={<StatStrip items={mastheadFacts} columns={3} />}
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Donate", url: "/donate" },
              ]}
            />
          }
        />

        {/* Both ways to give, first thing under the masthead. Same block as the
            homepage donate section. `id="give"` is linked from the thank-you page. */}
        <Section
          id="give"
          tone="sunken"
          kicker="Two ways to give"
          title="How can I donate to"
          em="Shelter Aid TX?"
          lede="Send shoes through a drop-off or pickup, or give money online. Shoes go straight to shelters; money pays for collecting, storing, and delivering them."
        >
          <DonateOptions />
        </Section>

        <Section
          tone="surface"
          kicker="What we accept"
          title="Where can I donate shoes"
          em="in Dallas-Fort Worth?"
          lede="You can drop shoes at any Shelter Aid TX collection partner across Dallas-Fort Worth, or request a pickup for 30 pairs or more. We focus on shoes that can be used immediately by shelter partners and the people they serve."
        >
          <RowList items={acceptance} />
        </Section>

        <Section
          tone="bg"
          kicker="Giving online"
          title="What does a money donation"
          em="pay for?"
          lede="Collection, storage, and delivery. The shoes are donated, but getting them from drop-off points to shelters takes collection supplies, storage space, and trips across Dallas-Fort Worth."
        >
          <RowList items={givingFacts} />
        </Section>

        <Section
          tone="sunken"
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
