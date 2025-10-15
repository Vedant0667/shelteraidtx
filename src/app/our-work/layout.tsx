import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Discover how Shelter Aid TX delivers shoes to Dallas-Fort Worth homeless shelters through donation programs, community partnerships, and volunteer coordination.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Shelter Aid TX",
    description: "Shoe donation programs and community partnerships supporting DFW homeless shelters.",
    url: "https://shelteraidtx.org/our-work",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Shelter Aid TX",
    description: "Shoe donation programs and community partnerships supporting DFW homeless shelters.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
