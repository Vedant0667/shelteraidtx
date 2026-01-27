"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/SiteFooter"
import { ArrowRight, Calendar, Menu, X } from "lucide-react"

const posts = [
  {
    slug: "/blog/starting-a-nonprofit-in-high-school",
    title: "Starting a Nonprofit in High School: What's Actually Hard (and What Isn't)",
    excerpt:
      "Paperwork was the easy part. Getting people to take us seriously was the real challenge. Here's what actually worked.",
    date: "October 26, 2025",
    category: "Building a Student Nonprofit",
    image: "/images/form-blog.jpg",
    featured: true,
  },
]

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in")
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const featuredPost = posts.find((post) => post.featured) ?? posts[0]
  const otherPosts = posts.filter((post) => post.slug !== featuredPost.slug)

  return (
    <div className="relative min-h-screen bg-[#FAFBFC] text-[#0F172A] overflow-x-hidden">
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

      <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4F8] via-[#E8F4F8]/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2B9FD9] pulse-dot" />
            Stories & Updates
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            Lessons from the <span className="gradient-text">front lines</span>
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real notes on building a student-led nonprofit, partnering with shelters, and turning
            small actions into consistent impact.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-20 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <Link href={featuredPost.slug} className="group block">
            <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B9FD9]/10 via-transparent to-[#D4A574]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[260px] lg:min-h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative p-8 md:p-12 flex flex-col">
                  <div className="inline-flex items-center gap-2 w-fit rounded-full bg-[#E8F4F8] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#2B9FD9] mb-6">
                    Featured
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#64748B] leading-relaxed mb-8">{featuredPost.excerpt}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#2B9FD9]" />
                      {featuredPost.date}
                    </span>
                    <span className="rounded-full border border-[#E2E8F0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                      {featuredPost.category}
                    </span>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center text-sm font-semibold text-[#2B9FD9]">
                      Read the story
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {otherPosts.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={post.slug} className="group block">
                  <article className="glass-card rounded-3xl overflow-hidden hover-lift h-full">
                    <div className="relative h-56">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#64748B] mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[#2B9FD9]" />
                        {post.date}
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3 text-balance">
                        {post.title}
                      </h3>
                      <p className="text-[#64748B] leading-relaxed">{post.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

