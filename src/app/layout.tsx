import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import PageLoader from "@/components/PageLoader";
import SmoothScrollManager from "@/components/SmoothScrollManager";
import ScrollToTop from "@/components/ScrollToTop";
import FontErrorObserver from "@/components/FontErrorObserver";
import { metadata } from "./metadata";

// 1. Choose 2-3 complementary fonts & Import fonts using optimal methods
// Primary font for headings (Outfit - modern sans-serif)
const fontPrimary = Outfit({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap", // Implement font-display: swap for performance
});

// Secondary font for body text (Inter - highly readable)
const fontSecondary = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

// Optional accent font for special elements (JetBrains Mono)
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export { metadata };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontPrimary.variable} ${fontSecondary.variable} ${fontMono.variable} antialiased`}>
        <FontErrorObserver />
        <LenisProvider>
          <PageLoader />
          <SmoothScrollManager />
          <ScrollToTop />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
