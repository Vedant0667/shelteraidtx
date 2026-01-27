import NavBar from "@/components/NavBar"
import { SiteFooter } from "@/components/SiteFooter"

const upcomingEvents = [
  {
    title: "Community Shoe Drive",
    summary:
      "A local collection event focused on gathering new and gently used shoes for shelter partners.",
    note: "Date and location will be announced soon.",
  },
  {
    title: "School Partner Drive",
    summary:
      "Student-led collection drive coordinated with school partners across the Dallas-Fort Worth area.",
    note: "Date and location will be announced soon.",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0F172A]">
      <NavBar />

      <main className="px-6 pt-28 pb-20 md:pt-36">
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
              Events
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
              Upcoming shoe drives and community events
            </h1>
            <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Shelter Aid TX hosts and supports collection events across Dallas-Fort Worth. These
              events help us gather shoes quickly and deliver them where they are needed most.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <article key={event.title} className="glass-card rounded-3xl p-8 hover-lift">
                <h2 className="font-display text-2xl font-bold mb-3">{event.title}</h2>
                <p className="text-[#475569] leading-relaxed mb-4">{event.summary}</p>
                <p className="text-sm text-[#64748B]">{event.note}</p>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border border-[#E2E8F0] bg-white p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-4">Want to host a drive?</h2>
            <p className="text-[#64748B] leading-relaxed">
              Hosting a shoe drive is one of the fastest ways to help. We can provide guidance on
              promotion, collection setup, and pickup coordination.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

