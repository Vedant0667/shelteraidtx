import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Libre_Baskerville } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shelter Aid TX: Shoes for Those Who Need Them Most",
  description:
    "Student-led 501(c)(3) nonprofit providing warmth, dignity, and hope to those experiencing homelessness in Dallas-Fort Worth through shoe donations.",
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
    "volunteer",
  ],
  authors: [{ name: "Shelter Aid TX" }],
  creator: "Shelter Aid TX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shelteraidtx.org",
    siteName: "Shelter Aid TX",
    title: "Shelter Aid TX: Shoes for Those Who Need Them Most",
    description:
      "Student-led 501(c)(3) nonprofit providing warmth, dignity, and hope to those experiencing homelessness in Dallas-Fort Worth.",
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
    title: "Shelter Aid TX: Shoes for Those Who Need Them Most",
    description:
      "Student-led nonprofit providing warmth, dignity, and hope to those experiencing homelessness in DFW.",
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
  themeColor: "#2B9FD9",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="font-sans antialiased bg-[#FAFBFC] text-[#0F172A]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
