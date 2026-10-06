import type { Metadata } from "next"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import DonateOptions from "@/components/DonateOptions"
import { Em } from "@/components/site"

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

// Deliberately just a heading and the two ways to give: the forms are the page.
// (Vedant: "way too much copy before the donate button".)
export default function DonatePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="tone-sunken pb-20 pt-[calc(var(--header-h)+2.5rem)] md:pb-28 md:pt-[calc(var(--header-h)+4rem)]">
          <div id="give" className="wrap">
            <h1 className="display-lg">
              Donate <Em>shoes or money.</Em>
            </h1>
            <div className="mt-10 md:mt-12">
              <DonateOptions />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
