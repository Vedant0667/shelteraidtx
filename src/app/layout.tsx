import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shelteraidtx.org"),
  title: {
    default: "Shelter Aid TX - Donate Shoes to DFW Homeless Shelters",
    template: "%s | Shelter Aid TX"
  },
  description: "501(c)(3) nonprofit matching shoe donations to Dallas-Fort Worth shelters. Donate shoes, volunteer, or fund our mission to help the homeless.",
  keywords: [
    "donation",
    "shoes",
    "donate shoes",
    "help shelters",
    "nonprofit donation partners",
    "homeless shelters DFW",
    "Dallas Fort Worth charity",
    "shoe donation Texas",
  ],
  authors: [{ name: "Shelter Aid TX" }],
  creator: "Shelter Aid TX",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://shelteraidtx.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shelteraidtx.org",
    title: "Shelter Aid TX - Donate Shoes to DFW Homeless Shelters",
    description: "501(c)(3) nonprofit matching shoe donations to Dallas-Fort Worth shelters. Donate shoes, volunteer, or fund our mission.",
    siteName: "Shelter Aid TX",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX - Supporting DFW Homeless Shelters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelter Aid TX - Donate Shoes to DFW Shelters",
    description: "Student-led 501(c)(3) providing shoes to homeless shelters across Dallas-Fort Worth.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: "Shelter Aid TX",
  description: "Student-led 501(c)(3) nonprofit donating shoes to homeless shelters across Dallas-Fort Worth",
  url: "https://shelteraidtx.org",
  logo: "https://shelteraidtx.org/logo.png",
  email: "shelteraidtx@gmail.com",
  sameAs: [
    "https://www.instagram.com/shelteraidtx",
    "https://www.linkedin.com/company/shelter-aid-tx"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5900 Balcones Dr Ste 100",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78731",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "Dallas-Fort Worth Metroplex, Texas",
  },
  foundingDate: "2023-10",
  taxID: "93-3584886",
  nonprofitStatus: "501(c)(3)",
  founder: [
    {
      "@type": "Person",
      name: "Vedant Subramanian",
      jobTitle: "President & Founder"
    },
    {
      "@type": "Person",
      name: "Harshdeep Bommareddy",
      jobTitle: "Vice President & Treasurer"
    },
    {
      "@type": "Person",
      name: "Arjun Subramanian",
      jobTitle: "Executive Director"
    }
  ],
  member: [
    {
      "@type": "Person",
      name: "Vikram Sampath",
      jobTitle: "Secretary"
    },
    {
      "@type": "Person",
      name: "Srikanth Subramanian",
      jobTitle: "Director"
    },
    {
      "@type": "Person",
      name: "T.K. Subramanian",
      jobTitle: "Director"
    },
    {
      "@type": "Person",
      name: "Arti Baskaran",
      jobTitle: "Director"
    },
    {
      "@type": "Person",
      name: "Aarav Nesargi",
      jobTitle: "Intern"
    }
  ],
  knowsAbout: ["shoe donation", "homeless shelters", "nonprofit partnerships", "community support"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
