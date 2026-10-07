import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Shelter Aid TX, a Dallas-Fort Worth nonprofit, collects, uses, and protects the information you send through this website, and the choices you have.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    siteName: "Shelter Aid TX",
    locale: "en_US",
    type: "website",
    title: "Privacy Policy | Shelter Aid TX",
    description:
      "How Shelter Aid TX, a Dallas-Fort Worth nonprofit, collects, uses, and protects the information you send through this website, and the choices you have.",
    url: "https://www.shelteraidtx.org/privacy",
    images: [
      {
        url: "https://www.shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Shelter Aid TX",
    description:
      "How Shelter Aid TX, a Dallas-Fort Worth nonprofit, collects, uses, and protects the information you send through this website, and the choices you have.",
    images: ["https://www.shelteraidtx.org/og-image.jpg"],
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

