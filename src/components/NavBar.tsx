"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// FEATURE FLAG: Set to true when banking details are ready
const DONATIONS_ENABLED = false;

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Shelter Aid TX"
              width={180}
              height={40}
              className="h-10 w-auto brightness-0 saturate-100"
              style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(174deg) brightness(92%) contrast(91%)' }}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/who-we-are"
              className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Who We Are
            </Link>
            <Link
              href="/our-work"
              className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/get-involved"
              className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/partners"
              className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Partners
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/donate"
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium shadow-lg transition-all ${
                DONATIONS_ENABLED
                  ? 'text-white hover:shadow-xl'
                  : 'text-slate-500 bg-slate-200 cursor-not-allowed hover:shadow-lg'
              }`}
              style={DONATIONS_ENABLED ? {
                background:
                  "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
              } : {}}
            >
              {DONATIONS_ENABLED ? 'Donate Now' : (
                <>
                  Donate Now
                  <span className="text-xs bg-slate-300 px-2 py-0.5 rounded-full">Soon</span>
                </>
              )}
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            aria-label="Open navigation menu"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden mt-4 space-y-2">
          <a
            href="/who-we-are"
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
          >
            Who We Are
          </a>
          <a
            href="/our-work"
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
          >
            Our Work
          </a>
          <a
            href="/get-involved"
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
          >
            Get Involved
          </a>
          <a
            href="/partners"
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
          >
            Partners
          </a>
          <a
            href="/blog"
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[var(--color-primary)] transition-colors"
          >
            Blog
          </a>
          <Link
            href="/donate"
            className={`block mt-4 text-center rounded-full px-6 py-2.5 text-sm font-medium shadow-lg ${
              DONATIONS_ENABLED
                ? 'text-white'
                : 'text-slate-500 bg-slate-200 cursor-not-allowed'
            }`}
            style={DONATIONS_ENABLED ? {
              background:
                "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))",
            } : {}}
          >
            {DONATIONS_ENABLED ? 'Donate Now' : 'Donate Now (Coming Soon)'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
