import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
