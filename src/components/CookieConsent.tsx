"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 border border-gray-700 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🍪</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-white font-bold mb-2">
                Nous utilisons des cookies
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic 
                et personnaliser le contenu. En cliquant sur &quot;Accepter tout&quot;, vous consentez à l&apos;utilisation 
                de tous les cookies. Vous pouvez également choisir d&apos;accepter uniquement les cookies essentiels.{" "}
                <Link href="/cookies" className="text-indigo-400 hover:text-indigo-300 underline">
                  En savoir plus
                </Link>
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={acceptEssential}
                className="px-5 py-2.5 glass rounded-xl text-gray-300 hover:text-white text-sm font-medium transition-colors border border-gray-600 hover:border-gray-500"
              >
                Essentiels uniquement
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 gradient-bg rounded-xl text-white text-sm font-medium transition-all hover:opacity-90 glow-primary"
              >
                Accepter tout
              </button>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-700">
            <Link href="/politique-confidentialite" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Conditions d&apos;utilisation
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
              Politique de cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
