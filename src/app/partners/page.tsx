import Image from "next/image"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import {
  ButtonLink,
  LogoWall,
  PageIntro,
  Reveal,
  Section,
  type PartnerItem,
} from "@/components/site"

/**
 * Collection partners. 15 entries: an even 5 x 3 on desktop, and the last cell
 * takes the full width of the 2-up phone grid so the wall never ends on an
 * orphan tile.
 *
 * `box` only ever takes two values (contract §8): `max-h-10` for wide
 * wordmarks, `max-h-14` for square marks, so the *ink* lands at one optical
 * height across the wall instead of every file arriving at its own size.
 */
const collectionPartners: PartnerItem[] = [
  { name: "Greenhill School", logo: "/images/greenhill.jpg", box: "max-h-14" },
  { name: "Fleet Feet Plano", logo: "/images/fleetfeet-mark.png", box: "max-h-14" },
  { name: "Fleet Feet Preston/Forest", logo: "/images/fleetfeet-mark.png", box: "max-h-14" },
  { name: "CISV Dallas Chapter", logo: "/images/cisv-mark.png", box: "max-h-14" },
  { name: "Prince of Peace XC", logo: "/images/shelters/POP-logo.png", box: "max-h-14" },
  { name: "B&B Consignment", logo: "/images/partners/collection/b-and-b-consignment.png", box: "max-h-10" },
  { name: "Indy Clover Plano", logo: "/images/partners/collection/indy-clover-plano.png", box: "max-h-10" },
  { name: "Lamplighter School", logo: "/images/partners/collection/lamplighter-school.png", box: "max-h-14" },
  { name: "Levine School", logo: "/images/partners/collection/levine-school.png", box: "max-h-14" },
  { name: "Promenade Optical", logo: "/images/partners/collection/promenade-optical.png", box: "max-h-10" },
  { name: "SAS Store", logo: "/images/partners/collection/sas-store.png", box: "max-h-10" },
  { name: "Sneaker Haven Allen", logo: "/images/partners/collection/sneaker-haven-allen.png", box: "max-h-14" },
  { name: "Sneaker Haven Dallas", logo: "/images/partners/collection/sneaker-haven-dallas.png", box: "max-h-14" },
  { name: "Tradehome Shoes", logo: "/images/partners/collection/tradehome-shoes.png", box: "max-h-14" },
  {
    name: "Local Dallas Neighborhoods",
    logo: "/images/partners/collection/local-dallas-neighborhoods.webp",
    bleed: true,
    span: true,
  },
]

/** Shelter partners: 7 entries on the 4-up wall. */
const shelterPartners: PartnerItem[] = [
  { name: "Family Gateway", logo: "/images/shelters/family-gateway.png", box: "max-h-10" },
  { name: "Hope Restored Missions", logo: "/images/shelters/hope-restored.png", box: "max-h-14" },
  { name: "AITF Services", logo: "/images/shelters/aitf.png", box: "max-h-14" },
  { name: "Our Daily Bread", logo: "/images/shelters/our-daily-bread.png", box: "max-h-10" },
  { name: "Journey to Dream", logo: "/images/shelters/journey-to-dream.png", box: "max-h-10" },
  { name: "Genesis Women's Shelter", logo: "/images/shelters/genesis.png", box: "max-h-14" },
  { name: "Family Place", logo: "/images/shelters/family-place.png", box: "max-h-10", span: true },
]

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageIntro
          kicker="Our partners"
          title="The people who make it"
          em="possible."
          lede="From collection to delivery, our partners are the backbone of everything we do."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Our Partners", url: "/partners" },
              ]}
            />
          }
        />

        {/* Text + media pair, so the section header sits INSIDE the left column
            (contract §3 exception) and the lead partner's mark aligns to the top
            of the heading. `items-stretch` plus `md:h-full` on the mount makes
            both columns end on the same line (§15). */}
        <Section tone="surface">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <p className="kicker mb-5">Where the shoes come from</p>
              <h2 className="display-lg">
                Drives and
                <br />
                <span className="display-em">drop-offs.</span>
              </h2>
              <p className="lede mt-6">
                Buckner International is our lead collection partner, bringing in shoes for shelters
                across Dallas-Fort Worth.
              </p>
              <p className="body mt-8">
                Everything else arrives through drives: schools, shops, teams, and neighborhoods that
                set out a bin and fill it for us.
              </p>
            </div>

            <Reveal className="md:col-span-6">
              <div className="photo shadow-editorial flex aspect-[5/2] items-center justify-center px-6 py-8 md:aspect-auto md:h-full md:px-10">
                <Image
                  src="/images/partners/collection/buckner-international-navy.svg"
                  alt="Buckner International"
                  width={228}
                  height={56}
                  className="h-auto w-full max-w-[15rem] sm:max-w-[22rem] lg:max-w-[26rem]"
                />
              </div>
            </Reveal>
          </div>
        </Section>

        <Section
          tone="sunken"
          kicker="Collection partners"
          title="Schools, shops, and"
          em="neighborhoods."
          lede="Businesses, campuses, and community organizations that host drives and collection events with us."
        >
          <Reveal>
            <LogoWall items={collectionPartners} columns={5} />
          </Reveal>
        </Section>

        <Section
          tone="bg"
          kicker="Where the shoes go"
          title="Shelters we"
          em="deliver to."
          lede="Every pair we collect goes directly to these shelters serving people experiencing homelessness across DFW."
        >
          <Reveal>
            <LogoWall items={shelterPartners} columns={4} />
          </Reveal>
        </Section>

        <Section
          tone="surface"
          kicker="Join us"
          title="Want to become"
          em="a partner?"
          lede="Whether you run a shelter that needs shoes or an organization that wants to host a drive, we would love to work with you."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink arrow href="/get-involved?tab=partnership#contact">
                Partner with us
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
