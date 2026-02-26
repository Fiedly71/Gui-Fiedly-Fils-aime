import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "@/components/pwa/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Gui Fiedly Fils-aime | GD Digital Studio - Full-Stack Developer & Web Designer",
  description: "Professional portfolio of Gui Fiedly Fils-aime, founder of GD Digital Studio (Graphics & Development). Full-stack developer and web designer specializing in modern web applications and brand identity design.",
  keywords: ["Web Developer", "Full-Stack Developer", "Web Designer", "Brand Identity", "GD Digital Studio", "Graphics & Development", "Gui Fiedly"],
  authors: [{ name: "Gui Fiedly Fils-aime" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GD Digital Studio",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "GD Digital Studio",
    title: "Gui Fiedly Fils-aime | GD Digital Studio",
    description: "Full-Stack Developer & Web Designer - Graphics & Development Studio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GD Digital Studio - Gui Fiedly Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gui Fiedly | GD Digital Studio",
    description: "Full-Stack Developer & Web Designer - Graphics & Development",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
