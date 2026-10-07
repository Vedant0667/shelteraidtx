import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { ButtonLink, Em, PageIntro, RowList, Section } from "@/components/site"

const upcomingEvents = [
  {
    type: "Community",
    title: "Community Shoe Drive",
    summary:
      "A local event to collect new and gently used shoes for our shelter partners.",
    note: "Date and location will be announced soon",
  },
  {
    type: "Schools",
    title: "School Partner Drive",
    summary:
      "A student-led drive run with our school partners across the Dallas-Fort Worth area.",
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
          /* nbsp keeps "shoe drives" whole so the line never strands "drives". */
          title={
            <>
              Upcoming shoe&nbsp;drives <Em>and community events.</Em>
            </>
          }
          lede="Shelter Aid TX hosts and supports shoe collection events across Dallas-Fort Worth. Events let us collect a lot of shoes quickly, and we deliver them to our shelter partners."
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
          lede="A shoe drive at your school, team, or workplace is one of the fastest ways to collect shoes. We help with promotion, collection setup, and pickup."
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
