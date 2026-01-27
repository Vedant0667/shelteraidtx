import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Shelter Aid TX collects, uses, and protects information submitted through this website.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Shelter Aid TX",
    description:
      "Learn how Shelter Aid TX collects, uses, and protects information submitted through this website.",
    url: "https://shelteraidtx.org/privacy",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
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
      "Learn how Shelter Aid TX collects, uses, and protects information submitted through this website.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

