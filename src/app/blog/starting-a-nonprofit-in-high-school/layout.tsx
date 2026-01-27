import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Starting a Nonprofit in High School",
  description:
    "What it actually takes to start a student nonprofit: building trust, staying consistent, and delivering real results for shelter partners.",
  alternates: {
    canonical: "/blog/starting-a-nonprofit-in-high-school",
  },
  openGraph: {
    title: "Starting a Nonprofit in High School | Shelter Aid TX",
    description:
      "What it actually takes to start a student nonprofit: building trust, staying consistent, and delivering real results for shelter partners.",
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
      "What it actually takes to start a student nonprofit: building trust, staying consistent, and delivering real results for shelter partners.",
    images: ["https://shelteraidtx.org/images/form-blog.jpg"],
  },
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

