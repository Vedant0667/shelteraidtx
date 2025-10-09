import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "optional",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shelteraidtx.org"),
  title: "Shelter Aid TX - Donate Shoes to Shelters | Help Homeless in DFW",
  description: "Shelter Aid TX is a nonprofit donating shoes to shelters across DFW. Help homeless individuals with shoe donations. Support shelter donation partners and make a difference in Dallas-Fort Worth communities.",
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
    title: "Shelter Aid TX - Donate Shoes to Shelters Across DFW",
    description: "We are a nonprofit that donates shoes to shelters across DFW. Join us in helping homeless individuals through shoe donations and support.",
    siteName: "Shelter Aid TX",
  },
  twitter: {
    card: "summary",
    title: "Shelter Aid TX - Donate Shoes to Help Homeless Shelters",
    description: "Join our nonprofit mission to donate shoes to shelters across DFW. Every pair makes a difference.",
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
  description: "We are a nonprofit that donates shoes to shelters across DFW",
  url: "https://shelteraidtx.org",
  logo: "https://shelteraidtx.org/logo.png",
  sameAs: ["https://instagram.com/shelteraidtx"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressLocality: "Dallas-Fort Worth",
  },
  areaServed: {
    "@type": "Place",
    name: "Dallas-Fort Worth, Texas",
  },
  knowsAbout: ["shoe donation", "homeless shelters", "nonprofit partnerships", "community support"],
  nonprofitStatus: "501(c)(3)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
