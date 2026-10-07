import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate, Volunteer, or Host a Drive in DFW",
  description: "Donate shoes or money, host a shoe drive, volunteer, or partner with Shelter Aid TX, a 501(c)(3) getting shoes to Dallas-Fort Worth homeless shelters.",
  alternates: {
    canonical: "/get-involved",
  },
  openGraph: {
    siteName: "Shelter Aid TX",
    locale: "en_US",
    type: "website",
    title: "Get Involved | Shelter Aid TX",
    description: "Donate shoes or money, host a drive, volunteer, or partner with us to get shoes to DFW homeless shelters.",
    url: "https://www.shelteraidtx.org/get-involved",
    images: [
      {
        url: "https://www.shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Get Involved with Shelter Aid TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved | Shelter Aid TX",
    description: "Donate shoes or money, host a drive, volunteer, or partner with us to get shoes to DFW homeless shelters.",
    images: ["https://www.shelteraidtx.org/og-image.jpg"],
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
