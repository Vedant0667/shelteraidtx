"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import {
  Menu,
  X,
  ArrowRight,
  Heart,
  Package,
} from "lucide-react"

const shelterPartners = [
  { name: "Family Gateway", logo: "/images/shelters/family-gateway.png" },
  { name: "Hope Restored Missions", logo: "/images/shelters/hope-restored.png" },
  { name: "AITF Services", logo: "/images/shelters/aitf.png" },
  { name: "Our Daily Bread", logo: "/images/shelters/our-daily-bread.png" },
  { name: "Journey to Dream", logo: "/images/shelters/journey-to-dream.png" },
  { name: "Genesis Women's Shelter", logo: "/images/shelters/genesis.png" },
  { name: "Family Place", logo: "/images/shelters/family-place.png" },
]

const collectionPartners = [
  { name: "Greenhill School", logo: "/images/greenhill.jpg" },
  { name: "Fleet Feet Plano", logo: "/images/fleetfeet.png" },
  { name: "CISV Dallas Chapter", logo: "/images/cisv.png" },
  { name: "Fleet Feet Preston/Forest", logo: "/images/fleetfeet.png" },
  { name: "Prince of Peace XC", logo: "/images/shelters/POP-logo.png" },
  { name: "B&B Consignment", logo: "/images/partners/collection/b-and-b-consignment.png" },
  { name: "Indy Clover Plano", logo: "/images/partners/collection/indy-clover-plano.png" },
  { name: "Lamplighter School", logo: "/images/partners/collection/lamplighter-school.png" },
  { name: "Levine School", logo: "/images/partners/collection/levine-school.png" },
  { name: "Promenade Optical", logo: "/images/partners/collection/promenade-optical.png" },
  { name: "SAS Store", logo: "/images/partners/collection/sas-store.png" },
  { name: "Sneaker Haven Allen", logo: "/images/partners/collection/sneaker-haven-allen.png" },
  { name: "Sneaker Haven Dallas", logo: "/images/partners/collection/sneaker-haven-dallas.png" },
  { name: "Tradehome Shoes", logo: "/images/partners/collection/tradehome-shoes.png" },
  { name: "Local Dallas Neighborhoods", logo: "/images/partners/collection/local-dallas-neighborhoods.webp" },
]

export default function PartnersPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<"shelters" | "collection">("collection")

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
                    item.href === "/partners"
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

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4F8] via-[#E8F4F8]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
            Our Partners
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            The people who make it{" "}
            <span className="gradient-text">possible</span>
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From collection to delivery, our partners are the backbone of everything we do.
          </p>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="py-8 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-full p-1.5 shadow-lg border border-[#E2E8F0] flex">
            <button
              onClick={() => setActiveSection("collection")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full font-medium transition-all duration-300 ${
                activeSection === "collection"
                  ? "bg-[#D4A574] text-white shadow-md"
                  : "text-[#64748B] hover:text-[#D4A574]"
              }`}
            >
              <Package className="w-5 h-5" />
              <span>Collection</span>
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                activeSection === "collection" ? "bg-white/20" : "bg-[#F5E6D3]"
              }`}>
                {collectionPartners.length}
              </span>
            </button>
            <button
              onClick={() => setActiveSection("shelters")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full font-medium transition-all duration-300 ${
                activeSection === "shelters"
                  ? "bg-[#2B9FD9] text-white shadow-md"
                  : "text-[#64748B] hover:text-[#2B9FD9]"
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Shelters</span>
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                activeSection === "shelters" ? "bg-white/20" : "bg-[#E8F4F8]"
              }`}>
                {shelterPartners.length}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Partner Content */}
      <section className="py-12 md:py-20 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            {activeSection === "shelters" ? (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Where donations <span className="gradient-text">find homes</span>
                </h2>
                <p className="text-[#64748B] max-w-xl mx-auto">
                  Every pair of shoes we collect goes directly to these shelters serving those experiencing homelessness across DFW.
                </p>
              </>
            ) : (
              <>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Where shoes are <span className="gradient-text-warm">collected</span>
                </h2>
                <p className="text-[#64748B] max-w-xl mx-auto">
                  Schools, businesses, and community organizations hosting shoe drives and collection events.
                </p>
              </>
            )}
          </div>

          {/* Partner Grid */}
          <div className={`grid gap-6 ${
            activeSection === "shelters"
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-2 md:grid-cols-5"
          }`}>
            {(activeSection === "shelters" ? shelterPartners : collectionPartners).map((partner, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl border border-[#E2E8F0] p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${
                  activeSection === "shelters" ? "bg-[#2B9FD9]/20" : "bg-[#D4A574]/20"
                }`} />

                <div className="flex items-center justify-center rounded-2xl mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border border-[#E2E8F0] bg-white">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display font-bold text-center text-sm md:text-base">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
            Join Us
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Want to become a partner?
          </h2>
          <p className="text-[#64748B] text-lg mb-10 max-w-xl mx-auto">
            Whether you are a shelter needing shoes or an organization wanting to host a drive, we would love to work with you.
          </p>
          <Link href="/get-involved?tab=partnership#contact">
            <Button className="bg-[#2B9FD9] hover:bg-[#1E87C4] text-white rounded-full px-10 py-6 text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#2B9FD9]/20 hover:scale-105">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

