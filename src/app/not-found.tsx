import type { Metadata } from "next"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, PageIntro } from "@/components/site"

// Override the root layout's "index, follow" and drop the inherited canonical
// (which would point at the homepage).
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          kicker="404"
          title="We couldn't find that page."
          lede="The link may be old or mistyped. You can donate shoes or money, request shoes for a shelter, or start from the homepage."
          actions={
            <>
              <ButtonLink arrow href="/donate">
                Donate
              </ButtonLink>
              <ButtonLink href="/request-shoes" variant="secondary">
                Request shoes
              </ButtonLink>
              <ButtonLink href="/" variant="secondary">
                Home
              </ButtonLink>
            </>
          }
        />
      </main>
      <SiteFooter />
    </>
  )
}
