"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full py-12 sm:py-16 mt-20"
      style={{ backgroundColor: "rgba(135, 206, 235, 0.05)" }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
              Shelter Aid TX
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              A 501(c)3 nonprofit dedicated to donating shoes to shelters across
              Dallas-Fort Worth, providing warmth and dignity to those facing
              homelessness.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/shelteraidtx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] transition-all hover:scale-110 group"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-slate-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
                >
                  Our Impact
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-slate-900 mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              Have questions about donating shoes or partnering with us? Share a message through our
              contact form and we&apos;ll respond within two business days.
            </p>
            <Link
              href="/donate#contact-form"
              className="inline-flex items-center text-sm font-medium transition-colors hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              Open Contact Form
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="pt-8 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Shelter Aid TX. All rights reserved.
              501(c)3 Nonprofit Organization.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-600 hover:text-[var(--color-primary)] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
