"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const blogPosts = [
  {
    slug: "starting-a-nonprofit-in-high-school",
    title: "Starting a Nonprofit in High School: What's Actually Hard (and What Isn't)",
    excerpt: "Let's start simple: founding a nonprofit in high school is hard. But not for the reasons people think. It's not your age, it's not the official paperwork, and it's definitely not because you need more experience. It's hard because focus is rare.",
    date: "2025-01-15",
    author: "Vedant Subramanian",
    image: "/images/form-blog.jpg",
    category: "Building a Student Nonprofit",
    series: "Post #1",
  },
];

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-12">
          <div className="mx-auto max-w-7xl px-5">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
                Our Blog
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Stories, updates, and insights from our mission to combat homelessness in North Texas
              </p>
            </MotionDiv>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <MotionDiv
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full">
                            {post.category}
                          </span>
                          {post.series && (
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-full">
                              {post.series}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-3 text-sm text-slate-500">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <h2 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                          <span className="text-sm text-slate-500">{post.author}</span>
                          <span className="text-[var(--color-primary)] font-semibold group-hover:translate-x-1 transition-transform">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </MotionDiv>
              ))}
            </div>

            {/* Empty State if no posts */}
            {blogPosts.length === 0 && (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-slate-500">
                  No blog posts yet. Check back soon for updates!
                </p>
              </MotionDiv>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
