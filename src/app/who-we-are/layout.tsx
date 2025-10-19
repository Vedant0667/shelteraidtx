import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Meet the student-led team behind Shelter Aid TX, a 501(c)(3) nonprofit delivering shoes to Dallas-Fort Worth homeless shelters since October 2023.",
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are | Shelter Aid TX",
    description: "Student-led nonprofit team donating shoes to DFW homeless shelters.",
    url: "https://shelteraidtx.org/who-we-are",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Shelter Aid TX",
    description: "Student-led nonprofit team donating shoes to DFW homeless shelters.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
