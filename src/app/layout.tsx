import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { PWAInstallPrompt } from "@/components/layout/PWAInstallPrompt";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b1020",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Gui Fiedly Fils-aime | GF Digital Studio",
  description:
    "Portfolio of Gui Fiedly Fils-aime — Founder of GF Digital Studio and UP-TO-DATE Electronic & Shipping.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GF Digital",
  },
  icons: {
    icon: [
      { url: "/images/GD.jpg", type: "image/jpeg", sizes: "any" }
    ],
    shortcut: "/images/GD.jpg",
    apple: "/images/GD.jpg",
  },
  openGraph: {
    title: "Gui Fiedly Fils-aime | GF Digital Studio",
    description:
      "Branding, posters, and responsive web experiences crafted by Gui Fiedly Fils-aime.",
    images: ["/images/GD.jpg"],
    url: "https://uptodateelectronic.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 font-sans`}
      >
        {children}
        <PWAInstallPrompt />
        <Analytics />
      </body>
    </html>
  );
}
