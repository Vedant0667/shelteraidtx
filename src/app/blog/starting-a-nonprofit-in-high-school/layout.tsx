import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Starting a Nonprofit in High School",
  description:
    "Students behind Shelter Aid TX, a Dallas-Fort Worth nonprofit, on starting a 501(c)(3) in high school: the paperwork was easy, earning shelters' trust was not.",
  alternates: {
    canonical: "/blog/starting-a-nonprofit-in-high-school",
  },
  openGraph: {
    type: "article",
    publishedTime: "2025-10-26",
    modifiedTime: "2026-10-06",
    title: "Starting a Nonprofit in High School | Shelter Aid TX",
    description:
      "Students behind Shelter Aid TX, a Dallas-Fort Worth nonprofit, on starting a 501(c)(3) in high school: the paperwork was easy, earning shelters' trust was not.",
    url: "https://shelteraidtx.org/blog/starting-a-nonprofit-in-high-school",
    images: [
      {
        url: "https://shelteraidtx.org/images/form-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Starting a Nonprofit in High School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starting a Nonprofit in High School | Shelter Aid TX",
    description:
      "Students behind Shelter Aid TX, a Dallas-Fort Worth nonprofit, on starting a 501(c)(3) in high school: the paperwork was easy, earning shelters' trust was not.",
    images: ["https://shelteraidtx.org/images/form-blog.jpg"],
  },
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

