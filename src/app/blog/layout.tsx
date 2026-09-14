import type { Metadata } from "next"

export const metadata: Metadata = {
  // A plain string here would null out the root layout's title template for
  // every post underneath, so the template is re-declared alongside the default.
  title: {
    default: "Blog: Notes from a Student-Led DFW Nonprofit",
    template: "%s | Shelter Aid TX",
  },
  description:
    "Stories, lessons, and updates from Shelter Aid TX, a student-led nonprofit serving homeless shelters across Dallas-Fort Worth.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Blog | Shelter Aid TX",
    description:
      "Stories, lessons, and updates from Shelter Aid TX, a student-led nonprofit serving homeless shelters across Dallas-Fort Worth.",
    url: "https://shelteraidtx.org/blog",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Shelter Aid TX",
    description:
      "Stories, lessons, and updates from Shelter Aid TX, a student-led nonprofit serving homeless shelters across Dallas-Fort Worth.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

