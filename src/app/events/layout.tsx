import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Join Shelter Aid TX at upcoming shoe drives and community events across Dallas-Fort Worth. Help us collect shoes for local homeless shelters.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Upcoming Events | Shelter Aid TX",
    description: "Community shoe drives and volunteer events supporting DFW homeless shelters.",
    url: "https://shelteraidtx.org/events",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
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
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
