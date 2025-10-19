import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Donate shoes, volunteer, or host a shoe drive with Shelter Aid TX. Join our mission to support Dallas-Fort Worth homeless shelters.",
  alternates: {
    canonical: "/get-involved",
  },
  openGraph: {
    title: "Get Involved | Shelter Aid TX",
    description: "Donate shoes, volunteer, or host a drive to support DFW homeless shelters.",
    url: "https://shelteraidtx.org/get-involved",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Get Involved with Shelter Aid TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved | Shelter Aid TX",
    description: "Donate shoes, volunteer, or host a drive to support DFW homeless shelters.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
