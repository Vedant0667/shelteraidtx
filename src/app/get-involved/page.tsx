import { Suspense } from "react"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, LinkArrow, PageIntro, Section, StatStrip } from "@/components/site"
import { WaysToHelp } from "./WaysToHelp"

/**
 * Masthead strip: the four ways to help, in the same order as the tabs below.
 * Shelters asking for shoes have their own route, /request-shoes, so they are
 * sent there rather than through a tab.
 */
const ways = [
  { label: "Donate", value: "New or gently used shoes" },
  { label: "Host a drive", value: "Boxes, flyers, pickup" },
  { label: "Volunteer", value: "Sort, pack, staff events" },
  { label: "Partner", value: "Schools, shops, and teams" },
]

// No server-side `searchParams` read: the route stays static and `WaysToHelp`
// resolves `?tab=` itself through `useSearchParams` inside the Suspense
// boundary below.
export default function GetInvolvedPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          kicker="Get involved"
          /* Non-breaking spaces keep the line from breaking after "Every" on a
             phone; the words and their order are unchanged. */
          title={<>Every&nbsp;shoe tells&nbsp;a</>}
          em="story of hope."
          lede="Join us in providing warmth and dignity to those experiencing homelessness in DFW. There are many ways to make a difference."
          strip={<StatStrip items={ways} columns={4} />}
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Get Involved", url: "/get-involved" },
              ]}
            />
          }
        />

        {/* Cream well: the white form card below has to read as a raised
            surface, which it cannot do on a white section. */}
        <Section
          tone="sunken"
          kicker="Ways to help"
          title="Pick how you'd"
          em="like to help."
          lede="Four ways in. Choose one and the form below sends straight to the team that handles it."
        >
          <Suspense fallback={null}>
            <WaysToHelp />
          </Suspense>
        </Section>

        <Section
          tone="surface"
          kicker="Questions"
          title="We are here"
          em="to help."
          lede="Reach out any time and we will get back to you within 2 business days."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink arrow href="mailto:shelteraidtx@gmail.com" external>
                Email us
              </ButtonLink>
              <ButtonLink href="https://instagram.com/shelteraidtx" external variant="secondary">
                Follow us
              </ButtonLink>
            </div>
          }
        >
          <p className="body">
            Run a shelter? Requests have their own form, so you can send sizes, quantities, and gender
            without picking a category.
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
