"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import {
  Menu,
  X,
  Package,
  Users,
  Calendar,
  Handshake,
  ArrowRight,
  Instagram,
  CheckCircle,
} from "lucide-react"
import ContactForm from "@/components/ContactForm"

const waysToHelp = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Help us sort donations, assist at events, or spread the word about our mission.",
    cta: "Join Our Team",
    id: "volunteer",
    inquiryValue: "volunteer",
  },
  {
    icon: Package,
    title: "Donate Shoes",
    description: "Give new or gently used shoes to help those in need. We accept all sizes for men, women, and children.",
    cta: "Start a Donation",
    id: "shoe-donation",
    inquiryValue: "shoe-donation",
  },
  {
    icon: Calendar,
    title: "Host a Shoe Drive",
    description: "Organize a collection event at your school, workplace, or community organization.",
    cta: "Plan a Drive",
    id: "host-drive",
    inquiryValue: "host-drive",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Businesses and organizations can make a lasting impact through corporate partnerships.",
    cta: "Become a Partner",
    id: "partnership",
    inquiryValue: "partnership",
  },
]

const donationGuidelines = [
  "New or gently used shoes in good condition",
  "All sizes welcome (men, women, children)",
  "Athletic shoes, casual shoes, boots, sandals",
  "Clean and free of major damage",
  "Pairs should be tied or banded together",
]

export default function GetInvolvedPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("volunteer")

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

  const inquiryOptions = [
    { value: "volunteer", label: "Volunteer Interest" },
    { value: "shoe-donation", label: "Donate Shoes" },
    { value: "host-drive", label: "Host a Shoe Drive" },
    { value: "partnership", label: "Partnership Inquiry" },
  ]

  const getFormConfig = () => {
    switch (activeTab) {
      case "shoe-donation":
        return {
          subject: "Shoe Donation",
          defaultInquiry: "shoe-donation",
          placeholder: "Tell us about your donation — shoe types, sizes, quantity, and your preferred dropoff/pickup location.",
        }
      case "host-drive":
        return {
          subject: "Shoe Drive Inquiry",
          defaultInquiry: "host-drive",
          placeholder: "Tell us about your organization and when you'd like to host a drive. We'll provide collection boxes and promotional materials.",
        }
      case "volunteer":
        return {
          subject: "Volunteer Interest",
          defaultInquiry: "volunteer",
          placeholder: "Tell us about yourself, your availability, and how you'd like to help.",
        }
      case "partnership":
        return {
          subject: "Partnership Inquiry",
          defaultInquiry: "partnership",
          placeholder: "Tell us about your organization and how you'd like to partner with Shelter Aid TX.",
        }
      default:
        return {
          subject: "General Inquiry",
          defaultInquiry: "volunteer",
          placeholder: "How can we help?",
        }
    }
  }

  const formConfig = getFormConfig()

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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Partners", href: "/partners" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    item.href === "/get-involved"
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4F8] via-[#E8F4F8]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
            Get Involved
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            Every shoe tells a{" "}
            <span className="gradient-text">story of hope</span>
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join us in providing warmth and dignity to those experiencing homelessness in DFW.
            There are many ways to make a difference.
          </p>
        </div>
      </section>

      {/* Ways to Help Cards */}
      <section className="py-12 px-6 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#64748B] mb-6">Select how you'd like to help</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {waysToHelp.map((way, i) => (
              <button
                key={way.id}
                onClick={() => setActiveTab(way.id)}
                className={`group relative p-6 md:p-8 rounded-3xl text-left transition-all duration-500 overflow-hidden ${
                  activeTab === way.id
                    ? "bg-gradient-to-br from-[#2B9FD9] to-[#1E87C4] text-white shadow-xl shadow-[#2B9FD9]/30 ring-4 ring-[#2B9FD9]/30"
                    : "bg-white border-2 border-[#E2E8F0] hover:border-[#2B9FD9] hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Selection checkmark */}
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeTab === way.id
                    ? "bg-white text-[#2B9FD9] scale-100"
                    : "bg-[#E2E8F0] scale-90 group-hover:bg-[#2B9FD9]/20"
                }`}>
                  {activeTab === way.id ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <div className="w-3 h-3 rounded-full border-2 border-[#94A3B8] group-hover:border-[#2B9FD9]" />
                  )}
                </div>

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    activeTab === way.id
                      ? "bg-white/20"
                      : "bg-gradient-to-br from-[#E8F4F8] to-[#D1E7F0] group-hover:from-[#2B9FD9]/10 group-hover:to-[#2B9FD9]/20"
                  }`}>
                    <way.icon className={`w-7 h-7 transition-colors duration-300 ${activeTab === way.id ? "text-white" : "text-[#2B9FD9]"}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl mb-2">{way.title}</h3>
                  <p className={`text-sm leading-relaxed hidden md:block transition-colors duration-300 ${activeTab === way.id ? "text-white/80" : "text-[#64748B]"}`}>
                    {way.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Info */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
                {waysToHelp.find(w => w.id === activeTab)?.title}
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {activeTab === "shoe-donation" && "Give shoes, change lives"}
                {activeTab === "host-drive" && "Host a collection event"}
                {activeTab === "volunteer" && "Join our team"}
                {activeTab === "partnership" && "Partner with us"}
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                {activeTab === "shoe-donation" && "Your donation goes directly to shelters across Dallas-Fort Worth. We accept new and gently used shoes in all sizes."}
                {activeTab === "host-drive" && "We'll provide everything you need — collection boxes, promotional materials, and pickup coordination. Perfect for schools, workplaces, and community groups."}
                {activeTab === "volunteer" && "Whether you have a few hours or want to be more involved, we'd love your help sorting donations, assisting at events, or spreading the word."}
                {activeTab === "partnership" && "Corporate partners help us scale our impact. From employee drives to sponsorships, there are many ways to get involved."}
              </p>

              {activeTab === "shoe-donation" && (
                <div className="bg-[#E8F4F8] rounded-2xl p-6">
                  <h3 className="font-display font-bold mb-4">What we accept</h3>
                  <ul className="space-y-3">
                    {donationGuidelines.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2B9FD9] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64748B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "host-drive" && (
                <div className="bg-[#E8F4F8] rounded-2xl p-6">
                  <h3 className="font-display font-bold mb-4">What we provide</h3>
                  <ul className="space-y-3">
                    {[
                      "Collection boxes and signage",
                      "Promotional flyers and social media graphics",
                      "Coordination and pickup scheduling",
                      "Impact report after your drive",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2B9FD9] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64748B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right - Contact Form */}
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <ContactForm
                subject={formConfig.subject}
                submitLabel="Send Message"
                successMessage="Thank you! We'll be in touch within 2 business days."
                inquiryOptions={inquiryOptions}
                minimal
                defaultInquiry={formConfig.defaultInquiry}
                messagePlaceholder={formConfig.placeholder}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Questions? We are here to help.
          </h2>
          <p className="text-[#64748B] text-lg mb-8 max-w-2xl mx-auto">
            Reach out anytime at{" "}
            <a href="mailto:shelteraidtx@gmail.com" className="text-[#2B9FD9] hover:underline font-medium">
              shelteraidtx@gmail.com
            </a>
            {" "}and we will get back to you within 2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/shelteraidtx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-medium border-2 border-[#E2E8F0] hover:border-[#2B9FD9] hover:text-[#2B9FD9] transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow us
              </Button>
            </a>
            <Link href="/who-we-are">
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-medium border-2 border-[#E2E8F0] hover:border-[#2B9FD9] hover:text-[#2B9FD9] transition-all duration-300"
              >
                Learn about us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
