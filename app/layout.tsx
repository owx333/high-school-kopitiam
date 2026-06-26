import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { seoByLanguage } from "../lib/content";
import { siteImages } from "../src/data/siteImages";

export const metadata: Metadata = {
  title: seoByLanguage.zh.title,
  description: seoByLanguage.zh.description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  keywords: [
    "High School Kopitiam",
    "JB Cafe",
    "Mount Austin Cafe",
    "Johor Bahru Cafe",
    "Campus Cafe",
    "School Theme Cafe",
    "JB Food",
    "JB Kopitiam"
  ],
  openGraph: {
    title: seoByLanguage.en.title,
    description: seoByLanguage.en.description,
    type: "website",
    locale: "zh_MY"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-MY">
      <head>
        <link rel="preload" as="image" href={siteImages.hero.desktop} />
        <link rel="preload" as="image" href={siteImages.hero.mobile} media="(max-width: 640px)" />
      </head>
      <body>{children}</body>
    </html>
  );
}
