"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Linkedin,
  Heart,
  Users,
  Package,
  Handshake,
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import ContactForm from "@/components/ContactForm"

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericStr = value.replace(/[^0-9.]/g, "")
          const targetNum = Number.parseFloat(numericStr)
          const unit = value.replace(/[0-9.]/g, "")

          let current = 0
          const duration = 2000
          const steps = 60
          const increment = targetNum / steps
          const stepDuration = duration / steps

          const interval = setInterval(() => {
            current += increment
            if (current >= targetNum) {
              setDisplayValue(`${targetNum}${unit}`)
              clearInterval(interval)
            } else {
              setDisplayValue(`${Math.floor(current)}${unit}`)
            }
          }, stepDuration)

          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-display text-5xl md:text-7xl font-bold text-[#0F172A]">
      {displayValue}
      {suffix}
    </div>
  )
}

// Hero counter with large display
function HeroCounter({ value, suffix, display }: { value: string; suffix: string; display: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const targetNum = Number.parseFloat(value)

          let current = 0
          const duration = 2000
          const steps = 60
          const increment = targetNum / steps
          const stepDuration = duration / steps

          const interval = setInterval(() => {
            current += increment
            if (current >= targetNum) {
              setDisplayValue(display)
              setIsComplete(true)
              clearInterval(interval)
            } else {
              setDisplayValue(`${Math.floor(current)}`)
            }
          }, stepDuration)

          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, display])

  return (
    <div ref={ref} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] tracking-tight">
      {displayValue}
      {(isComplete || suffix) && <span>{suffix}</span>}
    </div>
  )
}

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedStep, setSelectedStep] = useState(0)
  const [stepFade, setStepFade] = useState(true)
  const [autoRotationKey, setAutoRotationKey] = useState(0)
  const [dynamicWordIndex, setDynamicWordIndex] = useState(0)
  const [wordFade, setWordFade] = useState(true)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const dynamicWords = ["warmth", "dignity", "comfort", "hope", "care"]

  // Word cycling effect
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordFade(false)
      setTimeout(() => {
        setDynamicWordIndex((prev) => (prev + 1) % dynamicWords.length)
        setWordFade(true)
      }, 300)
    }, 3000)

    return () => clearInterval(wordInterval)
  }, [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Page load animation
  useEffect(() => {
    setIsLoaded(true)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  // Auto-rotate steps
  useEffect(() => {
    const interval = setInterval(() => {
      setStepFade(false)
      setTimeout(() => {
        setSelectedStep((prev) => (prev + 1) % 4)
        setStepFade(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRotationKey])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const steps = [
    {
      title: "Collect Donations",
      desc: "We gather new and gently used shoes from individuals, schools, and community organizations",
      icon: Package,
      image: "/images/stock-5513.jpg",
    },
    {
      title: "Sort & Organize",
      desc: "Our volunteers sort donations by size, type, and condition to ensure quality",
      icon: Users,
      image: "/images/process-img.jpeg",
    },
    {
      title: "Partner with Shelters",
      desc: "We work directly with local shelters to understand their specific needs",
      icon: Handshake,
      image: "/images/stock-4430.jpg",
    },
    {
      title: "Make an Impact",
      desc: "Shoes are distributed to those who need them most, providing comfort and dignity",
      icon: Heart,
      image: "/images/team-photo.jpeg",
    },
  ]

  const faqs = [
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes! Shelter Aid TX is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. Our EIN is 93-3584886.",
    },
    {
      question: "Where do the shoes go?",
      answer:
        "All donated shoes go directly to our shelter partners in the Dallas-Fort Worth area, including Family Gateway, Hope Restored Missions, AITF Services, Our Daily Bread, Journey to Dream, and Genesis Women's Shelter.",
    },
    {
      question: "What types of shoes do you accept?",
      answer:
        "We accept all types of clean, gently used shoes in good condition, including athletic shoes, casual shoes, boots, and sandals. We welcome all sizes for men, women, and children.",
    },
    {
      question: "How can I donate shoes?",
      answer:
        "You can drop off shoes at one of our partner locations, organize a shoe drive at your school or workplace, or request a volunteer pickup for donations of 30 or more pairs.",
    },
    {
      question: "Can I make a monetary donation?",
      answer:
        "Yes! Monetary donations help us cover operational costs and expand our reach. All funds go directly to supporting our mission.",
    },
    {
      question: "How can I volunteer or partner with you?",
      answer:
        "We're always looking for volunteers and partners! Fill out our contact form with your interest, and we'll get back to you within 2 business days to discuss opportunities.",
    },
  ]

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

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
  ]

  return (
    <div className="relative min-h-screen bg-[#FAFBFC] text-[#0F172A] overflow-x-hidden">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#E8F4F8] shadow-lg"
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
                  className="text-sm font-medium text-[#64748B] hover:text-[#2B9FD9] transition-colors duration-300"
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
              <Link href="#donate">
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
            <Link href="#donate" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#2B9FD9] hover:bg-[#1E87C4] text-white rounded-full py-4 text-lg font-medium">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-[#FAFBFC]" />

        {/* Light blue gradient from top - extends above to blend with navbar */}
        <div className="absolute -top-20 left-0 right-0 h-[500px] bg-gradient-to-b from-[#E8F4F8] via-[#E8F4F8] via-40% to-transparent" />

        <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
          {/* Badge */}
          <div
            className="isolate inline-flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/40 rounded-full px-5 py-2.5 mb-8 stagger-reveal shadow-xl ring-1 ring-black/5"
          >
            <span className="w-2 h-2 rounded-full bg-[#2B9FD9] pulse-dot" />
            <span className="text-sm font-medium text-[#0F172A]">
              Student-led 501(c)(3) nonprofit in DFW
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[1.1]">
            <span className="stagger-reveal block" style={{ animationDelay: "100ms" }}>
              Give shoes.
            </span>
            <span className="stagger-reveal block" style={{ animationDelay: "200ms" }}>
              Give{" "}
              <span
                className={`inline-block text-[#2B9FD9] transition-all duration-500 ${
                  wordFade ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                }`}
              >
                <AnimatedText key={dynamicWordIndex} text={dynamicWords[dynamicWordIndex]} delay={0} />
              </span>
              .
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed stagger-reveal"
            style={{ animationDelay: "300ms" }}
          >
            We collect and distribute shoes to homeless shelters across Dallas-Fort Worth,
            providing warmth, dignity, and hope, one pair at a time.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center stagger-reveal"
            style={{ animationDelay: "400ms" }}
          >
            <Link href="/#donate">
              <Button className="isolate bg-white/10 backdrop-blur-2xl hover:bg-white/20 text-[#0F172A] rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-white/40 ring-1 ring-black/5 shadow-xl">
                Donate Shoes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="isolate bg-white/10 backdrop-blur-2xl rounded-full px-8 py-6 text-base font-semibold border border-white/40 hover:bg-white/20 text-[#0F172A] transition-all duration-300 ring-1 ring-black/5 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              See How It Works
            </Button>
          </div>

          {/* Quick stats */}
          <div
            className="mt-20 grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto stagger-reveal"
            style={{ animationDelay: "500ms" }}
          >
            {[
              { value: "1200", suffix: "+", label: "Shoes Donated", display: "1.2k" },
              { value: "22", suffix: "", label: "Community Partners", display: "22" },
              { value: "100", suffix: "%", label: "Community-Funded", display: "100" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <HeroCounter value={stat.value} suffix={stat.suffix} display={stat.display} />
                <div className="text-xs md:text-sm text-[#64748B] mt-2 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#64748B]" />
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="py-12 border-y border-[#E2E8F0] bg-white">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-medium">
            Trusted by shelters across DFW
          </p>
        </div>
        <div className="logo-marquee">
          <div className="logo-marquee-content">
            {[...shelterPartners, ...shelterPartners].map((partner, i) => (
              <div key={i} className="px-8 md:px-12 flex items-center justify-center flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 md:py-32 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              Our Impact
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Making a{" "}
              <span className="gradient-text">real difference</span>
              <br />
              in our community
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
              Since 2023, we've been working tirelessly to provide shoes and essential items
              to those experiencing homelessness in the Dallas-Fort Worth area.
            </p>
          </div>

          {/* Press mention */}
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#E8F4F8] to-[#F5E6D3] border border-[#E2E8F0]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm uppercase tracking-[0.15em] text-[#64748B] mb-4">
                  <Sparkles className="w-5 h-5 text-[#D4A574]" />
                  Featured In
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">The Dallas Morning News</h3>
                <p className="text-[#64748B] text-lg leading-relaxed max-w-xl">
                  Our work has been recognized by local media for making a meaningful impact in the DFW community.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/screenshot.png"
                  alt="Dallas Morning News feature"
                  width={450}
                  height={300}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          {/* Centered header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              How It Works
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              From your closet to{" "}
              <span className="gradient-text">someone in need</span>
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed max-w-2xl mx-auto">
              Our simple four-step process ensures every donation makes the maximum impact.
              We handle everything from collection to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left side - steps */}
            <div className="space-y-4">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setStepFade(false)
                      setTimeout(() => {
                        setSelectedStep(i)
                        setStepFade(true)
                        setAutoRotationKey((prev) => prev + 1)
                      }, 300)
                    }}
                    className={`relative w-full text-left p-5 rounded-xl transition-all duration-300 ${
                      selectedStep === i
                        ? "bg-[#E8F4F8] border-2 border-[#2B9FD9]"
                        : "bg-[#FAFBFC] border-2 border-transparent hover:border-[#E2E8F0]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          selectedStep === i
                            ? "bg-[#2B9FD9] text-white"
                            : "bg-[#E2E8F0] text-[#64748B]"
                        }`}
                      >
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-[#64748B]">Step {i + 1}</span>
                        </div>
                        <h3 className="text-lg font-bold mt-1">{step.title}</h3>
                        <p className="text-sm text-[#64748B] mt-1">{step.desc}</p>
                      </div>
                    </div>
                    {selectedStep === i && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E2E8F0] rounded-b-xl overflow-hidden">
                        <div className="h-full bg-[#2B9FD9] progress-bar" />
                      </div>
                    )}
                  </button>
                ))}
            </div>

            {/* Right side - image */}
            <div className="relative h-full">
              <div className="h-full rounded-3xl overflow-hidden bg-[#E8F4F8] shadow-2xl">
                <Image
                  src="/images/process-img.jpeg"
                  alt="Shelter Aid TX donation process"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
              Testimonials
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Hear from our{" "}
              <span className="gradient-text-warm">shelter partners</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              The impact of your donations, in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Journey to Dream",
                person: "Ravain Owens, Director",
                quote: "Thank you Shelter Aid TX. We appreciate your kindness",
                video: "https://player.vimeo.com/video/961584844?h=1bc1d3e8dd&title=0&byline=0&portrait=0",
              },
              {
                name: "Our Daily Bread",
                person: "Our Daily Bread Team",
                quote: "We are thankful for the donation and for all of your help",
                video: "https://player.vimeo.com/video/1030946527?h=7062cd25fc&title=0&byline=0&portrait=0",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-[#E8F4F8] to-white rounded-2xl border border-[#E2E8F0] hover-lift pt-8 px-6 pb-6"
              >
                <div className="aspect-[9/16] max-h-[500px] mx-auto relative rounded-xl overflow-hidden shadow-2xl mb-6">
                  <iframe
                    src={testimonial.video}
                    title={`${testimonial.name} testimonial`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg italic text-[#64748B] mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-[#64748B]">{testimonial.person}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-24 md:py-32 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
              Donate
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to{" "}
              <span className="gradient-text-warm">make a difference</span>?
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you have shoes to give or want to support our mission financially, we'd love to hear from you.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Contact form for shoe donations */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
                  Shoe Donations
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Donate Shoes</h3>
                <p className="text-[#64748B] leading-relaxed">
                  Fill out the form below and we will coordinate pickup or drop-off details.
                </p>
              </div>
              <ContactForm
                subject="Shoe Donation Inquiry"
                submitLabel="Send Message"
                successMessage="Thank you! We'll be in touch within 2 business days to coordinate your donation."
                inquiryOptions={[
                  { value: "shoe-donation", label: "Donate Shoes" },
                  { value: "host-drive", label: "Host a Shoe Drive" },
                  { value: "volunteer", label: "Volunteer Interest" },
                ]}
                minimal
                defaultInquiry="shoe-donation"
                messagePlaceholder="Tell us about your donation, including shoe sizes, quantity, and preferred pickup or drop-off details."
              />
            </div>

            {/* Right - Monetary donations coming soon */}
            <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Background gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8]/50 to-[#F5E6D3]/50 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
                  Coming Soon
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Monetary Donations
                </h3>
                <p className="text-[#64748B] text-lg mb-8 leading-relaxed max-w-sm">
                  Online payments will be available soon. All donations are tax-deductible (EIN: 93-3584886).
                </p>

                <p className="text-sm text-[#64748B]">
                  Questions? Email us at{" "}
                  <a href="mailto:shelteraidtx@gmail.com" className="text-[#2B9FD9] hover:underline font-medium">
                    shelteraidtx@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 md:py-32 px-6 bg-white animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
              Collection Partners
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Helping us{" "}
              <span className="gradient-text">collect shoes</span>
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Schools, businesses, and community organizations across DFW host shoe drives
              and collection events with us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {collectionPartners.map((partner, i) => (
              <div
                key={i}
                className="aspect-square bg-[#FAFBFC] rounded-xl border border-[#E2E8F0] p-6 flex items-center justify-center hover-lift group"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/partners">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-medium border-2 border-[#E2E8F0] hover:border-[#2B9FD9] hover:text-[#2B9FD9] transition-all duration-300"
              >
                View All Partners
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6 animate-on-scroll">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] pulse-dot" />
              FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Got{" "}
              <span className="gradient-text-warm">questions</span>?
            </h2>
            <p className="text-[#64748B] text-lg">
              Everything you need to know about donating and getting involved.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:border-[#2B9FD9]/30"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#64748B] transition-transform duration-300 ${
                      openFaqIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#64748B] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#E2E8F0] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center mb-4 rounded-2xl border border-[#E2E8F0] px-4 py-3 bg-white shadow-sm"
              >
                <Image
                  src="/images/main-logo.png"
                  alt="Shelter Aid TX"
                  width={180}
                  height={56}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                Student-led 501(c)(3) nonprofit providing shoes to shelters across Dallas-Fort Worth.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/shelteraidtx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAFBFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#2B9FD9] hover:border-[#2B9FD9] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/shelter-aid-tx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FAFBFC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#2B9FD9] hover:border-[#2B9FD9] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Who We Are", href: "/who-we-are" },
                  { label: "Our Work", href: "/our-work" },
                  { label: "Get Involved", href: "/get-involved" },
                  { label: "Partners", href: "/partners" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748B] hover:text-[#2B9FD9] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: "Donate", href: "/#donate" },
                  { label: "Blog", href: "/blog" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748B] hover:text-[#2B9FD9] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-[#64748B]">
                  <Mail className="w-4 h-4" />
                  shelteraidtx@gmail.com
                </li>
                <li className="flex items-start gap-2 text-sm text-[#64748B]">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  Dallas-Fort Worth, TX
                </li>
                <li className="flex items-start gap-2 text-sm text-[#64748B]">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  5900 Balcones Dr Ste 100, Austin, TX 78731
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#FAFBFC] rounded-lg border border-[#E2E8F0]">
                <p className="text-xs text-[#64748B]">
                  <span className="font-medium">EIN:</span> 93-3584886
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#64748B]">
              © {new Date().getFullYear()} Shelter Aid TX. All rights reserved.
            </p>
            <p className="text-xs text-[#94A3B8]">
              Made with <Heart className="w-3 h-3 inline text-[#D4A574]" /> by students in DFW
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
