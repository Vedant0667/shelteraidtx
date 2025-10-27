"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function StartingNonprofitPage() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen bg-gradient-to-b from-white to-slate-50">
        <article className="relative w-full pt-32 pb-16">
          <div className="mx-auto max-w-4xl px-5">
            {/* Header */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full">
                    Building a Student Nonprofit
                  </span>
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
                    Post #1
                  </span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Starting a Nonprofit in High School: What&apos;s Actually Hard (and What Isn&apos;t)
                </h1>
                <div className="flex items-center gap-4 text-slate-600">
                  <time className="text-sm">
                    {new Date("2025-10-26").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm">Vedant Subramanian</span>
                </div>
              </div>
            </MotionDiv>

            {/* Featured Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/form-blog.jpg"
                  alt="Starting a Nonprofit in High School"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </MotionDiv>

            {/* Content */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <div className="text-lg leading-relaxed text-slate-700 space-y-6">
                <p>
                  Let&apos;s start simple: founding a nonprofit in high school is hard. But not for the reasons people think. It&apos;s not your age, it&apos;s not the official paperwork, and it&apos;s definitely not because you need more experience. It&apos;s hard because focus is rare.
                </p>

                <h2 className="font-display text-3xl font-bold text-slate-900 mt-12 mb-4">Filling out forms</h2>
                <p>
                  I know, I know, SCARY. The truth is that it&apos;s just typing, printing, and reading fine print. Every single thing you need is online. Your state has a checklist. The IRS has one too. Between AI tools and a quick Google search, you can find step-by-step guides for every part of the process. You don&apos;t need a lawyer; you need two free hours and some common sense. Think of it like a short onboarding sprint. Fill out the forms, get two adults to sign off, open a bank account, and move on. It&apos;s boring, but boring is progress.
                </p>

                <h2 className="font-display text-3xl font-bold text-slate-900 mt-12 mb-4">Defining a cause</h2>
                <p>
                  This is where most people trip. They rush into a mission because it sounds noble, not because it&apos;s real. Don&apos;t pick a problem because it sounds groundbreaking; pick one because it actually exists and because you can do something about it. Emphasis on you. You are not sending humanitarian aid planes to another continent next week. But you can make a real dent in your community if you stop guessing and start asking. Talk to the people you want to help. Ask what they actually need. Then get to work.
                </p>
                <p>
                  If you&apos;re in high school, your secret weapon isn&apos;t experience; it&apos;s access. You have classmates who need service hours, teachers who will back a student-led idea, and parents or alumni who will donate supplies faster than cash. That is your ecosystem. Use it. Don&apos;t try to build a massive movement. Build one loop that works: collect, organize, deliver, repeat.
                </p>

                <h2 className="font-display text-3xl font-bold text-slate-900 mt-12 mb-4">Sustainability</h2>
                <p>
                  This is the one everyone forgets until it&apos;s too late. Your nonprofit shouldn&apos;t collapse when you get busy, go to college, or just want to breathe. Ask yourself early, will this thing survive without me? If the answer is no, fix it now. Train underclassmen, document everything, and automate what you can. Write the playbook once so no one ever has to message you for instructions. A good founder builds something that keeps running even when they are not watching.
                </p>
                <p>
                  For me, that meant building tools instead of just teams. I&apos;m developing a sorting app and an internal company dashboard that handle everything from inventory management to partner tracking to volunteer scheduling. Every pair of shoes we collect is logged, categorized, and routed through the portal. It might sound technical, but it&apos;s really just structure that makes succession easier. When the next team takes over, they won&apos;t be starting from scratch. They&apos;ll open the dashboard, see the data, and keep moving. That kind of automation keeps a student nonprofit alive long after the founder graduates.
                </p>
                <p>
                  Most people fail because they chase attention over structure. They want followers before systems and logos before logistics. Don&apos;t. The nonprofits that last are the ones that keep showing up week after week, delivering what they promised, and getting a little better each time.
                </p>
                <p>
                  So yes, founding a nonprofit as a high schooler is hard. But it&apos;s not too hard. The forms are simple, the mission becomes clear once you actually talk to people, and sustainability is just planning ahead. Build something repeatable. Keep it scrappy, honest, and useful. Then hand it off when you&apos;re ready. That&apos;s how you make something real.
                </p>
              </div>
            </MotionDiv>

            {/* Back to Blog */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-slate-200"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
              >
                ← Back to Blog
              </Link>
            </MotionDiv>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
