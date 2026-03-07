import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // @ts-ignore
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
