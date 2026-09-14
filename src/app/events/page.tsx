import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, PageIntro, RowList, Section } from "@/components/site"

const upcomingEvents = [
  {
    type: "Community",
    title: "Community Shoe Drive",
    summary:
      "A local collection event focused on gathering new and gently used shoes for shelter partners.",
    note: "Date and location will be announced soon",
  },
  {
    type: "Schools",
    title: "School Partner Drive",
    summary:
      "Student-led collection drive coordinated with school partners across the Dallas-Fort Worth area.",
    note: "Date and location will be announced soon",
  },
]

export default function EventsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageIntro
          kicker="Events"
          /* nbsp keeps "shoe drives" whole so the masthead rags
             Upcoming / shoe drives instead of stranding "drives". */
          title={<>Upcoming shoe&nbsp;drives</>}
          em="and community events."
          lede="Shelter Aid TX hosts and supports collection events across Dallas-Fort Worth. These events help us gather shoes quickly and deliver them where they are needed most."
          above={
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Events", url: "/events" },
              ]}
            />
          }
        />

        <Section
          tone="surface"
          kicker="Upcoming"
          title="On the"
          em="calendar."
          lede="Two drives are being scheduled now. Dates land here first, and partners hear from us directly."
        >
          <RowList
            items={upcomingEvents.map((event) => ({
              kicker: event.type,
              title: event.title,
              detail: (
                <>
                  {event.summary}
                  <span className="meta mt-3 block">{event.note}</span>
                </>
              ),
            }))}
          />
        </Section>

        <Section
          tone="sunken"
          kicker="Host"
          title="Want to host"
          em="a drive?"
          lede="Hosting a shoe drive is one of the fastest ways to help. We can provide guidance on promotion, collection setup, and pickup coordination."
          action={
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink href="/get-involved?tab=host-drive#contact" arrow>
                Host a drive
              </ButtonLink>
              <ButtonLink href="/get-involved?tab=volunteer#contact" variant="secondary">
                Volunteer
              </ButtonLink>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </>
  )
}
