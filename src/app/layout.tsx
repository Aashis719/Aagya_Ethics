import type { Metadata } from "next";
import { cormorant, outfit } from "@/lib/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Aagya Ethics | Premium Ethnic Wear",
  description:
    "Elegance woven in every thread. Discover exquisite, ethically curated kurthas and ethnic wear. Premium quality traditional clothing for the modern woman.",
  keywords: [
    "Aagya Ethics",
    "premium kurthas",
    "ethnic wear Australia",
    "luxury kurtha",
    "traditional wear",
    "women's ethnic fashion",
    "silk embroidered kurtha",
    "velvet kurtha",
    "designer kurtha",
    "Indian fashion Australia",
    "premium ethnic clothing",
    "modern kurthas",
    "ethically sourced fashion",
    "handcrafted kurthas",
    "luxury ethnic wear",
    "traditional clothing Australia",
    "wedding kurtha",
    "festive wear",
    "Aagya",
    "premium quality ethnic wear" ,
    "Aagya kurtha"
  ],
  authors: [{ name: "Aagya Ethics" }],
  metadataBase: new URL("https://aagyaethics.com"),
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Aagya Ethics | Premium Ethnic Wear",
    description:
      "Elegance woven in every thread. Discover our collection of premium kurthas crafted for the modern woman.",
    type: "website",
    locale: "en_AU",
    url: "https://aagyaethics.com",
    siteName: "Aagya Ethics",
    images: [
      {
        url: "/images/AE.png",
        width: 1200,
        height: 630,
        alt: "Aagya Ethics - Premium Ethnic Wear",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Aagya Ethics | Premium Ethnic Wear",
    description:
      "Elegance woven in every thread. Discover our collection of premium kurthas crafted for the modern woman.",
    images: ["/images/AE.png"],
    creator: "@AagyaEthics",
    site: "@AagyaEthics",
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  category: "fashion",
  
  // Verification and other tags
  other: {
    "fb:app_id": "your-facebook-app-id", // Replace with actual Facebook App ID when available
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
