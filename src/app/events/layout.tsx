import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Shoe Drives and Events in DFW",
  description: "See upcoming Shelter Aid TX shoe drives and community events across Dallas-Fort Worth, or host your own drive to collect shoes for local homeless shelters.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    siteName: "Shelter Aid TX",
    locale: "en_US",
    type: "website",
    title: "Upcoming Events | Shelter Aid TX",
    description: "Community shoe drives and volunteer events supporting DFW homeless shelters.",
    url: "https://www.shelteraidtx.org/events",
    images: [
      {
        url: "https://www.shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Events | Shelter Aid TX",
    description: "Community shoe drives and volunteer events supporting DFW homeless shelters.",
    images: ["https://www.shelteraidtx.org/og-image.jpg"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
