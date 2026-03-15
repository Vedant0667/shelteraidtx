"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import {
  Menu,
  X,
  Heart,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react"

const teamMembers = [
  {
    name: "Vedant Subramanian",
    title: "Founder & President",
    image: "/images/Vedant-headshot.jpg",
    bio: "Vedant founded Shelter Aid TX after calling 50 shelters and discovering the urgent need for shoes.",
  },
  {
    name: "Arjun Subramanian",
    title: "Co-Founder & Board Chair",
    image: "/images/Arjun-headshot.JPG",
    bio: "Arjun oversees the board and strategic direction of Shelter Aid TX, ensuring the organization stays true to its mission.",
  },
  {
    name: "Vikram Sampath",
    title: "Co-President",
    image: "/images/Vikram-headshot.jpg",
    bio: "Vikram helps lead day-to-day operations and coordinates volunteer efforts across the DFW area.",
  },
  {
    name: "Aarav Nesargi",
    title: "VP & Secretary",
    image: "/images/Aarav-headshot.jpeg",
    bio: "Aarav leads partnerships with schools and community organizations, and keeps the team organized.",
  },
]

const boardMembers: { name: string; title: string }[] = []

const coreValues = [
  {
    icon: Heart,
    title: "Community Impact",
    description: "Making a tangible difference in the lives of those experiencing homelessness in DFW.",
  },
  {
    icon: Users,
    title: "Youth Leadership",
    description: "Empowering young people to lead meaningful change in their communities.",
  },
  {
    icon: Zap,
    title: "Action Over Words",
    description: "We do not just talk about change, we deliver real shoes to real people who need them.",
  },
]

const timeline = [
  {
    year: "2023",
    title: "50 Phone Calls",
    description: "Called 50 shelters across DFW to identify the greatest need. The answer: shoes.",
  },
  {
    year: "2023",
    title: "501(c)(3) Founded",
    description: "Officially incorporated as a nonprofit, making all donations tax-deductible.",
  },
  {
    year: "2024",
    title: "$7,000 Raised",
    description: "Won funding at a VC pitch competition to scale our operations.",
  },
  {
    year: "2025",
    title: "1,400+ Shoes",
    description: "Reached a major milestone with 6 shelter partners across Dallas-Fort Worth.",
  },
]

export default function WhoWeArePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const baseUrl = "https://shelteraidtx.org"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "Shelter Aid TX",
    url: baseUrl,
    logo: `${baseUrl}/images/main-logo.png`,
    description:
      "Student-led 501(c)(3) nonprofit providing warmth, dignity, and hope to those experiencing homelessness in Dallas-Fort Worth through shoe donations.",
    areaServed: "Dallas-Fort Worth, TX",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general",
        email: "shelteraidtx@gmail.com",
      },
    ],
    sameAs: [
      "https://www.instagram.com/shelteraidtx",
      "https://www.linkedin.com/company/shelter-aid-tx",
    ],
    foundingDate: "2023-10-01",
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-[#FAFBFC] text-[#0F172A] overflow-x-hidden">
      <Script
        id="organization-schema-who-we-are"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-xl shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <Image
                src="/images/main-logo.png"
                alt="Shelter Aid TX"
                width={140}
                height={44}
                className="transition-transform duration-300 group-hover:scale-105 h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Blog", href: "/blog" },
                { label: "Partners", href: "/partners" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    item.href === "/who-we-are"
                      ? "text-[#2B9FD9]"
                      : "text-[#64748B] hover:text-[#2B9FD9]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://portal.shelteraidtx.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#64748B] hover:text-[#2B9FD9] transition-colors duration-300"
              >
                Login
              </a>
              <Link href="/#donate">
                <Button className="bg-[#2B9FD9] hover:bg-[#1E87C4] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#2B9FD9]/20">
                  Donate
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6">
          <nav className="flex flex-col gap-6">
            {[
              { label: "Who We Are", href: "/who-we-are" },
              { label: "Get Involved", href: "/get-involved" },
              { label: "Blog", href: "/blog" },
              { label: "Partners", href: "/partners" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-3xl font-bold text-[#0F172A] text-left hover:text-[#2B9FD9] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://portal.shelteraidtx.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-3xl font-bold text-[#0F172A] text-left hover:text-[#2B9FD9] transition-colors"
            >
              Login
            </a>
          </nav>
          <div className="mt-auto pb-8">
            <Link href="/#donate" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#2B9FD9] hover:bg-[#1E87C4] text-white rounded-full py-4 text-lg font-medium">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4F8] via-[#E8F4F8]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
            About Us
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            Students making a{" "}
            <span className="gradient-text">real difference</span>
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a student-led 501(c)(3) nonprofit providing warmth, dignity, and hope
            to those experiencing homelessness in Dallas-Fort Worth.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              Our Team
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Meet the <span className="gradient-text">people behind</span> Shelter Aid TX
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              A passionate group of students and mentors committed to making a difference.
            </p>
          </div>
        </div>

        {/* Team Cards */}
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden hover-lift">
                  <div className="aspect-square md:aspect-[3/4] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover object-top md:object-center ${i === 0 ? "scale-[1.5] translate-y-[10%] md:translate-y-0 md:scale-[1.8] md:origin-top" : ""} ${i === 2 ? "scale-125 -translate-y-[15%] md:translate-y-0 md:scale-[1.25] md:translate-y-[-10%]" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                      <p className="text-[#87CEEB] text-xs md:text-sm font-medium mb-0.5 md:mb-1">{member.title}</p>
                      <h3 className="font-display text-sm md:text-2xl font-bold md:mb-3">{member.name}</h3>
                      <p className="text-white/80 text-sm leading-relaxed hidden md:block">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] md:text-xs text-[#64748B] text-center mt-4">
            The team on this page is just part of the story. There are 12+ other members behind the mission now.
          </p>
        </div>

        {boardMembers.length > 0 && (
          <>
            {/* Board of Directors */}
        <div className="max-w-6xl mx-auto px-6 mt-16 text-center">
          <h3 className="font-display text-xl font-bold mb-6">Board of Directors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                className="glass-card rounded-full px-6 py-3"
              >
                <span className="font-medium">{member.name}</span>
                <span className="text-[#64748B] ml-2">• {member.title}</span>
              </div>
            ))}
          </div>
        </div>
          </>
        )}
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:pr-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
                Our Story
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                It started with{" "}
                <span className="gradient-text-warm">50 phone calls</span>
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  In the summer of 2023, we knew we wanted to help people experiencing homelessness
                  in DFW, we just did not know how. So we picked up the phone and started calling shelters.
                </p>
                <p>
                  After 50 calls, a pattern emerged: shoes. Shelter after shelter told us the same thing,
                  they needed shoes more than almost anything else. That was our answer.
                </p>
                <p>
                  We founded Shelter Aid TX as a 501(c)(3), and the rest is history. What started as
                  a simple question has grown into over 1,400 pairs donated and partnerships with
                  6 shelters across Dallas-Fort Worth.
                </p>
              </div>
            </div>
            <div className="pt-8 lg:w-[125%]">
              <Image
                src="/images/team-photo.jpeg"
                alt="Our founders: Vedant Subramanian (left), Harshdeep Bommareddy (center), and Arjun Subramanian (right)"
                width={1200}
                height={1200}
                className="w-full rounded-3xl"
              />
              <p className="text-xs text-[#64748B] italic mt-2 text-right">
                Our founders: Vedant Subramanian, Harshdeep Bommareddy, and Arjun Subramanian
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              What We Believe
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">core values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B9FD9]/10 to-[#D4A574]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#2B9FD9]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
              Our Journey
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              From idea to <span className="gradient-text-warm">impact</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2B9FD9] to-[#D4A574]" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#2B9FD9] -translate-x-1/2 ring-4 ring-white" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card rounded-2xl p-6">
                      <span className="text-sm font-bold text-[#2B9FD9]">{item.year}</span>
                      <h3 className="font-display text-lg font-bold mt-1 mb-2">{item.title}</h3>
                      <p className="text-[#64748B] text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to join us?
          </h2>
          <p className="text-[#64748B] text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to donate shoes, volunteer your time, or partner with us,
            we would love to have you on board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved">
              <Button className="bg-[#2B9FD9] hover:bg-[#1E87C4] text-white rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#2B9FD9]/20">
                Get Involved
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/#donate">
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-medium border-2 border-[#E2E8F0] hover:border-[#2B9FD9] hover:text-[#2B9FD9] transition-all duration-300"
              >
                Donate Shoes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
