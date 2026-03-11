"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId) return null;
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Custom hook for tracking events
export function useGoogleAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
        page_path: url,
      });
    }
  };

  return { trackEvent, trackPageView };
}

// Event tracking helpers
export const analyticsEvents = {
  // Contact events
  whatsappClick: () => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "click", {
        event_category: "contact",
        event_label: "whatsapp_button",
      });
    }
  },
  
  // Order events
  orderStarted: (service?: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "begin_checkout", {
        event_category: "orders",
        event_label: service || "general",
      });
    }
  },
  
  // Portfolio events
  portfolioView: (projectName: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "view_item", {
        event_category: "portfolio",
        event_label: projectName,
      });
    }
  },
  
  // Newsletter events
  newsletterSubscribe: () => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "sign_up", {
        event_category: "newsletter",
        event_label: "email_subscribe",
      });
    }
  },
  
  // CTA events
  ctaClick: (ctaName: string) => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "click", {
        event_category: "cta",
        event_label: ctaName,
      });
    }
  },
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      ...args: (string | Record<string, unknown>)[]
    ) => void;
    dataLayer: unknown[];
  }
}
