import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import PageLoader from "@/components/PageLoader";
import SmoothScrollManager from "@/components/SmoothScrollManager";
import ScrollToTop from "@/components/ScrollToTop";
import { metadata } from "./metadata";

const openRunde = localFont({
  src: [
    { path: "../../public/fonts/OpenRunde-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/OpenRunde-Medium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/OpenRunde-Semibold.woff", weight: "600", style: "normal" },
    { path: "../../public/fonts/OpenRunde-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-open-runde",
  display: "swap",
});

export { metadata };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openRunde.variable}`}>
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
