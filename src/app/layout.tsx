import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gui Fiedly Fils-aime | GF Digital Studio",
  description:
    "Portfolio of Gui Fiedly Fils-aime — Founder of GF Digital Studio and UP-TO-DATE Electronic & Shipping.",
  icons: {
    icon: "/images/GD.jpg",
    shortcut: "/images/GD.jpg",
  },
  openGraph: {
    title: "Gui Fiedly Fils-aime | GF Digital Studio",
    description:
      "Branding, posters, and responsive web experiences crafted by Gui Fiedly Fils-aime.",
    images: ["/images/Gui.jpg"],
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
      </body>
    </html>
  );
}
