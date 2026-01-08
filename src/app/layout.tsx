import type { Metadata } from "next";
import { cormorant, outfit } from "@/lib/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Aagya Ethics | Premium Ethnic Wear",
  description:
    "Discover exquisite, ethically curated kurthas and ethnic wear. A brand offering premium quality traditional clothing for the modern woman.",
  keywords: [
    "ethnic wear",
    "kurtha",
    "Indian fashion",
    "Australian fashion",
    "premium clothing",
    "traditional wear",
    "women's fashion",
    "Aagya Ethics",
    "premium kurthas",
    "traditional clothing",
    "modern kurthas",
    "ethically sourced",
    "fair trade",
    "handmade kurthas",
    "premium quality",
    "traditional wear",
    "Aagya"
  ],
  authors: [{ name: "Aagya Ethics" }],
  openGraph: {
    title: "Aagya Ethics | Premium Ethnic Wear",
    description:
      "Elegance woven in every thread. Discover our collection of premium kurthas.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} font-body antialiased bg-cream text-text-primary`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
