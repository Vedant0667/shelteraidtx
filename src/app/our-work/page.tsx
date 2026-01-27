import NavBar from "@/components/NavBar"
import { SiteFooter } from "@/components/SiteFooter"

const programs = [
  {
    title: "Shoe Donation Program",
    answer:
      "We collect new and gently used shoes and deliver them directly to shelter partners across Dallas-Fort Worth.",
    details: [
      "All sizes are welcome, including men's, women's, and children's shoes.",
      "Donations are sorted by size and type so shelters can quickly match needs.",
    ],
  },
  {
    title: "Essential Items Support",
    answer:
      "When shelter partners request it, we coordinate additional essentials alongside shoes, such as clothing and basic care items.",
    details: [
      "We focus on items shelters specifically ask for.",
      "Shoes remain the priority, and essentials are coordinated based on partner need.",
    ],
  },
  {
    title: "Needs-Based Partnerships",
    answer:
      "We work directly with shelters to understand what is needed right now, then collect and deliver accordingly.",
    details: [
      "Shelter requests guide what we collect.",
      "We prioritize quality and practical sizing over volume alone.",
    ],
  },
]

const process = [
  {
    title: "Collect",
    text: "We gather shoes from schools, businesses, and community partners across DFW.",
  },
  {
    title: "Sort",
    text: "Volunteers organize donations by size, condition, and type so they are ready to distribute.",
  },
  {
    title: "Coordinate",
    text: "We confirm needs with shelter partners before delivery.",
  },
  {
    title: "Deliver",
    text: "Shoes go directly to shelters serving people experiencing homelessness in Dallas-Fort Worth.",
  },
]

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#0F172A]">
      <NavBar />

      <main className="px-6 pt-28 pb-20 md:pt-36">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              Our Work
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
              How we turn donated shoes into <span className="gradient-text">immediate help</span>
            </h1>
            <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
              Shelter Aid TX exists to make shoe donations simple to give and useful to receive.
              Our programs focus on direct delivery, partner requests, and consistent follow-through.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {programs.map((program) => (
              <article
                key={program.title}
                className="glass-card rounded-3xl p-8 hover-lift h-full"
              >
                <h2 className="font-display text-2xl font-bold mb-3">{program.title}</h2>
                <p className="text-[#475569] leading-relaxed mb-5">{program.answer}</p>
                <ul className="space-y-2 text-sm text-[#64748B]">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2B9FD9]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="rounded-3xl border border-[#E2E8F0] bg-white p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
              The work, step by step
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#FAFBFC] p-6 text-center"
                >
                  <div className="font-display text-3xl font-bold text-[#2B9FD9] mb-2">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

