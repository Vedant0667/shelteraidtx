"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import { ArrowLeft, Calendar, Menu, X } from "lucide-react"

export default function BlogPostPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseUrl = "https://shelteraidtx.org"

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Starting a Nonprofit in High School: What's Actually Hard (and What Isn't)",
    description:
      "What it actually takes to start a student nonprofit: building trust, staying consistent, and delivering real results for shelter partners.",
    image: `${baseUrl}/images/form-blog.jpg`,
    author: {
      "@type": "Organization",
      name: "Shelter Aid TX",
    },
    publisher: {
      "@type": "Organization",
      name: "Shelter Aid TX",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/main-logo.png`,
      },
    },
    datePublished: "2025-10-26",
    dateModified: "2026-01-27",
    mainEntityOfPage: `${baseUrl}/blog/starting-a-nonprofit-in-high-school`,
  }

  return (
    <div className="relative min-h-screen bg-[#FAFBFC] text-[#0F172A] overflow-x-hidden">
      <Script
        id="blogposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 bg-white/90 backdrop-blur-xl shadow-lg" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <Image
                src="/images/main-logo.png"
                alt="Shelter Aid TX"
                width={160}
                height={50}
                className="transition-transform duration-300 group-hover:scale-105 h-11 w-auto"
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
                    item.href === "/blog"
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

      <main className="pt-32 md:pt-40 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#2B9FD9] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-4">
              <Calendar className="w-3.5 h-3.5 text-[#2B9FD9]" />
              October 26, 2025
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
              Starting a Nonprofit in High School: What's Actually Hard (and What Isn't)
            </h1>
            <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl">
              Starting a student nonprofit looks intimidating from the outside, mostly because of the
              legal and administrative steps. In practice, the slower work is earning trust, keeping
              momentum, and proving you can deliver consistently over time.
            </p>
          </div>

          <div className="relative w-full h-[320px] md:h-[440px] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xl mb-12">
            <Image
              src="/images/form-blog.jpg"
              alt="Shelter Aid TX blog post"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="glass-card rounded-3xl p-6 md:p-10 mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">The Easy Part: Paperwork</h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                Filing for 501(c)(3) status takes focus, but it is usually a bounded task: forms,
                patience, and careful reading. Texas keeps it fairly approachable, and there are
                plenty of free resources that walk through the process step by step.
              </p>
              <p className="text-[#475569] leading-relaxed">
                The paperwork is important because it enables the work, but it is rarely the main
                constraint on impact.
              </p>
            </section>

            <section className="glass-card rounded-3xl p-6 md:p-10 mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                The Hard Part: Being Taken Seriously
              </h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                The tougher part shows up after the forms are filed. Reaching out to shelters does
                not always lead to a quick "yes," and momentum can fade without steady follow-through.
                Messages get missed, plans shift, and credibility has to be earned through delivery.
                Trust builds when the work shows up on time and in the way it was promised.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Progress tends to feel slow early on, and then it accelerates once people have seen
                consistent results.
              </p>
            </section>

            <section className="glass-card rounded-3xl p-6 md:p-10 mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">What Actually Worked</h2>
              <ul className="space-y-3 text-[#475569] leading-relaxed">
                <li>
                  <strong>Start small on purpose:</strong> Early wins do not have to be huge. They
                  just have to be real and repeatable.
                </li>
                <li>
                  <strong>Be consistent:</strong> Follow up, show up, and do what you said you would
                  do, especially when it would be easier to let something slide.
                </li>
                <li>
                  <strong>Let the work speak:</strong> Completed work communicates reliability more
                  clearly than any single pitch.
                </li>
              </ul>
            </section>

            <div className="rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-[#E8F4F8] via-white to-[#F5E6D3]/60 p-6 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Advice for Students</h3>
              <p className="text-[#475569] leading-relaxed mb-6">
                Do not wait for perfect conditions. Start with what you have, keep the promises you
                make, and build a rhythm that you can sustain. Over time, consistency does most of
                the heavy lifting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-involved?tab=volunteer#contact">
                  <Button className="bg-[#2B9FD9] hover:bg-[#1E87C4] text-white rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#2B9FD9]/20">
                    Get Involved
                  </Button>
                </Link>
                <Link href="/#donate">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-4 text-base font-semibold border-2 border-[#E2E8F0] hover:border-[#2B9FD9] hover:text-[#2B9FD9] transition-all duration-300"
                  >
                    Donate Shoes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
