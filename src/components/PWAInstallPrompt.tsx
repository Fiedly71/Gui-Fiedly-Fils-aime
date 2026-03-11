"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed or dismissed permanently
    const isInstalled = localStorage.getItem("pwa-installed") === "true";
    const isDismissedPermanently = localStorage.getItem("pwa-dismissed-permanently") === "true";
    
    if (isInstalled || isDismissedPermanently) {
      return;
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(isIOSDevice);

    // Check if running as PWA already
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    if (isStandalone) {
      localStorage.setItem("pwa-installed", "true");
      return;
    }

    // Count visits
    let visitCount = parseInt(localStorage.getItem("pwa-visit-count") || "0", 10);
    visitCount++;
    localStorage.setItem("pwa-visit-count", visitCount.toString());

    // Show prompt every 5 visits
    if (visitCount % 5 === 0) {
      // Small delay before showing
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    }

    // Listen for beforeinstallprompt event (Chrome/Edge/Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        localStorage.setItem("pwa-installed", "true");
      }
      setDeferredPrompt(null);
    }
    setShowPrompt(false);
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  const handleNeverShow = () => {
    localStorage.setItem("pwa-dismissed-permanently", "true");
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md glass rounded-2xl p-6 shadow-2xl animate-slideUp">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
            <Image
              src="/images/logos/gd.png"
              alt="GF Digital Studio"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Installer GF Digital</h3>
            <p className="text-gray-400 text-sm">Accès rapide depuis votre écran</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</span>
            Accès instantané sans ouvrir le navigateur
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</span>
            Notifications pour les offres spéciales
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</span>
            Fonctionne même hors connexion
          </div>
        </div>

        {/* iOS Instructions */}
        {isIOS && (
          <div className="mb-4 p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
            <p className="text-blue-300 text-sm">
              <strong>Sur iPhone/iPad:</strong> Appuyez sur{" "}
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Partager
              </span>{" "}
              puis <strong>&quot;Sur l&apos;écran d&apos;accueil&quot;</strong>
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          {!isIOS && deferredPrompt && (
            <button
              onClick={handleInstall}
              className="w-full gradient-bg text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Installer l&apos;application
            </button>
          )}
          
          <button
            onClick={handleClose}
            className="w-full glass text-white py-3 rounded-xl font-medium hover:bg-white/10 transition-all"
          >
            Plus tard
          </button>
          
          <button
            onClick={handleNeverShow}
            className="w-full text-gray-500 text-sm hover:text-gray-300 transition-colors"
          >
            Ne plus afficher
          </button>
        </div>
      </div>
    </div>
  );
}
