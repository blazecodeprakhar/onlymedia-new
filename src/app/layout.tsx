import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from '@/lib/lenis'


const openRunde = localFont({
  src: [
    {
      path: "../../public/fonts/OpenRunde-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenRunde-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenRunde-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenRunde-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-runde",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnlyMedia - Run your freelance business like a pro",
  description: "All-in-one platform for managing clients, projects, and payments without the chaos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openRunde.variable}`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
