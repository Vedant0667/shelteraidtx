import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms that govern use of the Shelter Aid TX website, including appropriate use, liability limits, and governing law.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Shelter Aid TX",
    description:
      "Read the terms that govern use of the Shelter Aid TX website, including appropriate use, liability limits, and governing law.",
    url: "https://shelteraidtx.org/terms",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Shelter Aid TX",
    description:
      "Read the terms that govern use of the Shelter Aid TX website, including appropriate use, liability limits, and governing law.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

