import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shelter and Collection Partners in DFW",
  description: "The Dallas-Fort Worth schools, shops, and community groups that collect shoes with Shelter Aid TX, and the homeless shelters that receive every pair.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    siteName: "Shelter Aid TX",
    locale: "en_US",
    type: "website",
    title: "Partners | Shelter Aid TX",
    description: "DFW homeless shelters and community partners working with Shelter Aid TX.",
    url: "https://www.shelteraidtx.org/partners",
    images: [
      {
        url: "https://www.shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Shelter Aid TX",
    description: "DFW homeless shelters and community partners working with Shelter Aid TX.",
    images: ["https://www.shelteraidtx.org/og-image.jpg"],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
