import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND } from "@/content/siteContent";

export const viewport: Viewport = {
  themeColor: "#D4EC26",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://khairyhybrid.app"
  ),
  title: `${BRAND.name} | ${BRAND.slogan} — Hybrid Athlete Training & Nutrition`,
  description:
    "Achieve your highest level of fitness with the Khairy Hybrid Method. Structured training, practical nutrition, and direct mentorship. BEYOND YOUR LIMITS STARTS HERE.",
  keywords: [
    "Khairy Hybrid",
    "Train Beyond Limits",
    "Hybrid Athlete",
    "Training App",
    "Hybrid Training",
    "Endurance & Strength",
    "Nutrition 101",
    "Fitness Community",
  ],
  authors: [{ name: BRAND.name }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: `${BRAND.name} App — ${BRAND.slogan}`,
    description:
      "Develop the strength, endurance, and habits that help you Train Beyond Limits in every area of life.",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: `${BRAND.name} Hero`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,500;0,600;0,700;1,700;1,900&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5F3F0] text-[#2A2A2A] font-body selection:bg-[#D4EC26] selection:text-black antialiased">
        {children}
      </body>
    </html>
  );
}
