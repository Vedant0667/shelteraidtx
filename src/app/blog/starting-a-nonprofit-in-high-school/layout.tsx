import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Starting a Nonprofit in High School",
  description:
    "Students behind Shelter Aid TX, a Dallas-Fort Worth nonprofit, on starting a 501(c)(3) in high school: the paperwork was easy, earning shelters' trust was not.",
  alternates: {
    canonical: "/blog/starting-a-nonprofit-in-high-school",
  },
  openGraph: {
    siteName: "Shelter Aid TX",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-10-26T00:00:00-05:00",
    modifiedTime: "2026-10-07T00:00:00-05:00",
    title: "Starting a Nonprofit in High School | Shelter Aid TX",
    description:
      "Students behind Shelter Aid TX, a Dallas-Fort Worth nonprofit, on starting a 501(c)(3) in high school: the paperwork was easy, earning shelters' trust was not.",
    url: "https://www.shelteraidtx.org/blog/starting-a-nonprofit-in-high-school",
    images: [
      {
        url: "https://www.shelteraidtx.org/images/form-blog.jpg",
        width: 540,
        height: 360,
        alt: "Starting a Nonprofit in High School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starting a Nonprofit in High School | Shelter Aid TX",
    description:
      "Students behind Shelter Aid TX, a Dallas-Fort Worth nonprofit, on starting a 501(c)(3) in high school: the paperwork was easy, earning shelters' trust was not.",
    images: ["https://www.shelteraidtx.org/images/form-blog.jpg"],
  },
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

