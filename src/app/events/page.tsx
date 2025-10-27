"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MotionDiv, fadeInUp } from "@/components/Motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Script from "next/script";
import Link from "next/link";

const upcomingEvents = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Community Shoe Drive - Plano",
    description: "Join us for a community shoe drive event at Fleet Feet Plano. Donate new or gently used shoes to support homeless shelters across Dallas-Fort Worth.",
    startDate: "2025-02-15T10:00:00-06:00",
    endDate: "2025-02-15T16:00:00-06:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Fleet Feet Plano",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5800 Legacy Dr",
        addressLocality: "Plano",
        addressRegion: "TX",
        postalCode: "75024",
        addressCountry: "US"
      }
    },
    organizer: {
      "@type": "NonprofitOrganization",
      name: "Shelter Aid TX",
      url: "https://shelteraidtx.org",
      email: "shelteraidtx@gmail.com"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://shelteraidtx.org/events"
    },
    image: "https://shelteraidtx.org/og-image.jpg"
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Volunteer Sorting Day - Dallas",
    description: "Help us sort and prepare shoe donations for delivery to Dallas homeless shelters. All volunteers welcome - no experience necessary.",
    startDate: "2025-03-08T09:00:00-06:00",
    endDate: "2025-03-08T13:00:00-06:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Shelter Aid TX Warehouse",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5900 Balcones Dr Ste 100",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78731",
        addressCountry: "US"
      }
    },
    organizer: {
      "@type": "NonprofitOrganization",
      name: "Shelter Aid TX",
      url: "https://shelteraidtx.org",
      email: "shelteraidtx@gmail.com"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://shelteraidtx.org/events"
    },
    image: "https://shelteraidtx.org/og-image.jpg"
  }
];

export default function EventsPage() {
  return (
    <>
      {upcomingEvents.map((event, index) => (
        <Script
          key={index}
          id={`event-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
        />
      ))}
      <NavBar />
      <main className="pt-8 sm:pt-16">
        {/* Hero Section */}
        <section className="relative w-full py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-5xl px-5">
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Events", url: "/events" },
              ]}
            />
            <MotionDiv {...fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-secondary)] mb-6">
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-[var(--color-primary)]">
                  Get Involved
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Upcoming Events
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Join us at shoe drives, volunteer days, and community events supporting Dallas-Fort Worth homeless shelters.
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Events Section */}
        <section className="relative w-full py-12 sm:py-16 bg-slate-50">
          <div className="mx-auto max-w-5xl px-5">
            <div className="space-y-12">
              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-8"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-semibold uppercase">Feb</span>
                    <span className="text-3xl font-bold">15</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Community Shoe Drive - Plano
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Join us for a community shoe drive at Fleet Feet Plano. Donate new or gently used shoes to support homeless shelters across Dallas-Fort Worth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        10:00 AM - 4:00 PM CST
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        Fleet Feet Plano, 5800 Legacy Dr
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                      Free Event
                    </span>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-8"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-amber-600 flex flex-col items-center justify-center text-white">
                    <span className="text-sm font-semibold uppercase">Mar</span>
                    <span className="text-3xl font-bold">08</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Volunteer Sorting Day - Dallas
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Help us sort and prepare shoe donations for delivery to Dallas homeless shelters. All volunteers welcome - no experience necessary.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        9:00 AM - 1:00 PM CST
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        Shelter Aid TX Warehouse, Austin
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                      Free Event
                    </span>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-5xl px-5">
            <MotionDiv
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-slate-600 mb-6 text-lg">
                Want to host your own shoe drive or volunteer at future events?
              </p>
              <Link
                href="/donate#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display text-lg font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(to right, var(--color-primary-gradient-start), var(--color-primary-gradient-end))"
                }}
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </MotionDiv>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
