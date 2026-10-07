import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Mono, Epilogue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// One sans family for everything (headings and body), plus a mono for small
// labels: the stowr-landing system, in Shelter Aid's colors.
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shelteraidtx.org"),
  title: {
    default: "Shelter Aid TX: Shoe Donations for DFW Homeless Shelters",
    template: "%s | Shelter Aid TX",
  },
  description:
    "Shelter Aid TX is a student-led 501(c)(3) in Dallas-Fort Worth. We collect new and gently used shoes and deliver them to homeless shelters across DFW.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "shoe donation",
    "homeless shelter",
    "Dallas-Fort Worth",
    "DFW nonprofit",
    "student nonprofit",
    "501(c)(3)",
    "donate shoes",
    "donate online",
    "donate to homeless shelters",
    "volunteer",
  ],
  authors: [{ name: "Shelter Aid TX" }],
  creator: "Shelter Aid TX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shelteraidtx.org",
    siteName: "Shelter Aid TX",
    title: "Shelter Aid TX: Shoe Donations for DFW Homeless Shelters",
    description:
      "Shelter Aid TX is a student-led 501(c)(3) in Dallas-Fort Worth. We collect new and gently used shoes and deliver them to homeless shelters across DFW.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelter Aid TX: Shoe Donations for DFW Homeless Shelters",
    description:
      "Shelter Aid TX is a student-led 501(c)(3) in Dallas-Fort Worth. We collect new and gently used shoes and deliver them to homeless shelters across DFW.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fbf8f2",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
