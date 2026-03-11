import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton, PWAInstallPrompt } from "@/components";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

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
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: "GF Digital Studio | Développement Web & Solutions Digitales - Cap-Haïtien",
  description: "Studio de développement web et d'entrepreneuriat digital basé au Cap-Haïtien. Experts en paiement MonCash, billetterie QR Code, plateformes e-commerce. Next.js, React, Tailwind CSS.",
  keywords: ["développement web", "Haïti", "Cap-Haïtien", "MonCash", "QR Code", "billetterie", "e-commerce", "Next.js", "React"],
  authors: [{ name: "GF Digital Studio" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/images/logos/gd.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logos/gd.png", type: "image/png" },
    ],
    shortcut: "/images/logos/gd.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GF Digital",
  },
  openGraph: {
    title: "GF Digital Studio | Votre Partenaire Tech en Haïti",
    description: "Création de sites web, applications mobiles, intégration MonCash et solutions digitales en Haïti. Plus de 50 clients satisfaits.",
    type: "website",
    locale: "fr_HT",
    url: "https://gfdigitalstudio.com",
    siteName: "GF Digital Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GF Digital Studio - Agence Web au Cap-Haïtien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GF Digital Studio | Solutions Digitales en Haïti",
    description: "Experts MonCash, e-commerce, billetterie QR Code. Votre partenaire digital au Cap-Haïtien.",
    images: ["/twitter-image.png"],
    creator: "@gfdigitalstudio",
  },
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
  alternates: {
    canonical: "https://gfdigitalstudio.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Schema.org structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GF Digital Studio",
  "image": "https://gfdigitalstudio.com/images/logos/gd.png",
  "description": "Studio de développement web et d'entrepreneuriat digital basé au Cap-Haïtien, Haïti. Experts en intégration MonCash, billetterie QR Code, et solutions e-commerce.",
  "@id": "https://gfdigitalstudio.com",
  "url": "https://gfdigitalstudio.com",
  "telephone": "+50932836938",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cap-Haïtien",
    "addressCountry": "HT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.7577,
    "longitude": -72.2030
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://instagram.com/gd.digital.studio",
    "https://www.linkedin.com/in/gui-fiedly-fils-aime-8aab203a8",
    "https://wa.me/50932836938"
  ],
  "priceRange": "$$$",
  "currenciesAccepted": "USD, HTG",
  "paymentAccepted": "Stripe, Visa, Mastercard, WhatsApp",
  "areaServed": ["Haïti", "Diaspora haïtienne"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de développement web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intégration MonCash"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Billetterie QR Code"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce & Restauration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Web Moderne"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <CookieConsent />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
