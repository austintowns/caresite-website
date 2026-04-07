import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caresite.io — Google Review Management for Skilled Nursing Facilities",
  description:
    "The only Google review platform built exclusively for skilled nursing facilities. HIPAA-safe SMS campaigns, AI dispute assistance, and sentiment-gated review flow. Starting at $149/mo.",
  openGraph: {
    title: "Caresite.io — Reviews Built for Skilled Nursing",
    description:
      "Stop losing families to bad reviews. The only reputation platform designed for SNF compliance, workflows, and outcomes.",
    type: "website",
    url: "https://caresite.io",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Caresite.io" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caresite.io — Google Review Management for SNFs",
    description:
      "HIPAA-safe review campaigns, AI dispute detection, and real-time analytics — built exclusively for skilled nursing facilities.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
