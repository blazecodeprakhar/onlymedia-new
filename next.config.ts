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
  // Disable Next.js automatic scroll-to-top on route change.
  // This lets Lenis and the browser manage scroll position natively,
  // preventing the "fly to top before navigating" UX issue.
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
