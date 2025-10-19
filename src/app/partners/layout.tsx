import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Meet the Dallas-Fort Worth homeless shelters and community organizations partnering with Shelter Aid TX to deliver shoes to those in need.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Our Partners | Shelter Aid TX",
    description: "DFW homeless shelters and community partners working with Shelter Aid TX.",
    url: "https://shelteraidtx.org/partners",
    images: [
      {
        url: "https://shelteraidtx.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shelter Aid TX Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Partners | Shelter Aid TX",
    description: "DFW homeless shelters and community partners working with Shelter Aid TX.",
    images: ["https://shelteraidtx.org/og-image.jpg"],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
