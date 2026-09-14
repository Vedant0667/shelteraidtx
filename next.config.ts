import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/our-work", destination: "/", permanent: true }]
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
