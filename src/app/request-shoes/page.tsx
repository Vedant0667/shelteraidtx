import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, PageIntro, Section } from "@/components/site"

export const metadata: Metadata = {
  title: "Request Shoes for Your Shelter",
  description:
    "Shelters in Dallas-Fort Worth can request shoes from Shelter Aid TX. Tell us the sizes, quantities, and gender you need and we deliver directly to you.",
  alternates: { canonical: "/request-shoes" },
  openGraph: {
    type: "website",
    title: "Request Shoes for Your Shelter | Shelter Aid TX",
    description: "Tell us the sizes, quantities, and gender you need and we deliver directly to your shelter.",
    url: "https://shelteraidtx.org/request-shoes",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Request Shoes for Your Shelter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Shoes for Your Shelter | Shelter Aid TX",
    description: "Tell us the sizes, quantities, and gender you need and we deliver directly to your shelter.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

const steps = [
  {
    kicker: "Step 1",
    title: "Tell us what you need",
    detail: "Sizes, quantities, and gender, plus when you need them.",
  },
  {
    kicker: "Step 2",
    title: "We confirm within 2 business days",
    detail: "We match your request against what we have sorted and ready.",
  },
  {
    kicker: "Step 3",
    title: "We deliver to your shelter",
    detail: "Every pair goes directly to you, with no middle step.",
  },
]

export default function RequestShoesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          kicker="For shelters"
          title="Need shoes for the"
          em="people you serve?"
          lede="Tell us the sizes, quantities, and gender you need and we deliver directly to your shelter. We reply within 2 business days."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Request Shoes", url: "/request-shoes" },
              ]}
            />
          }
        />

        {/* Form card sits on a sunken section (contract §6). Contract §15: both
            columns open with a kicker on the same line, and because the card and
            the row list each fill the stretched column they end on the same line
            too. DOM order is the phone order: the form first, then the steps. */}
        <Section
          tone="sunken"
          kicker="Request shoes"
          title="How do shelters"
          em="request shoes?"
          lede="Shelters in Dallas-Fort Worth send Shelter Aid TX the sizes, quantities, and gender they need and we deliver directly, usually within days. One form, straight to the team that sorts, packs, and delivers."
        >
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-12" id="request">
            <div className="flex flex-col md:col-span-6">
              <p className="kicker mb-5">Shelter request</p>
              {/* `[&_.field]:text-base`: inputs must be 16px or iOS Safari zooms
                  the whole page on focus. Belongs in `.field` itself — see report. */}
              <div className="card flex flex-1 flex-col p-7 [&_.field]:text-base md:p-9">
                <h2 className="title">Your request</h2>
                <p className="body mt-2">
                  Include your shelter&rsquo;s name and location so we can route it quickly.
                </p>
                <div className="rule mb-7 mt-6" />
                <ContactForm
                  subject="Shelter Shoe Request"
                  submitLabel="Send request"
                  successMessage="Thank you. We will confirm your request within 2 business days."
                  inquiryOptions={[{ value: "shelter-request", label: "Request shoes for a shelter" }]}
                  minimal
                  defaultInquiry="shelter-request"
                  messagePlaceholder="Your shelter's name and location, the sizes, quantities, and gender you need, and when you need them."
                />
              </div>
            </div>

            <div className="flex flex-col md:col-span-6">
              <p className="kicker mb-5">How it works</p>
              <ol className="rows flex flex-1 flex-col">
                {steps.map((step) => (
                  <li key={step.title} className="row flex-1 py-5 md:py-5">
                    <p className="kicker">{step.kicker}</p>
                    <h3 className="title mt-4">{step.title}</h3>
                    <p className="body mt-2">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <Section
          tone="bg"
          kicker="Other ways"
          title="Not a shelter, but want"
          em="to help?"
          lede="Pairs reach us through drop-offs and drives, and volunteers sort and deliver them. Either one keeps the shelves stocked."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink arrow href="/donate">
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
