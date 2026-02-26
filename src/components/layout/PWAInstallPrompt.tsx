"use client";

import { useState, useEffect } from "react";
import { X, Download, Smartphone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }

    // Check if user already dismissed or installed
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    const installed = localStorage.getItem("pwa-installed");
    
    if (dismissed || installed) return;

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(isIOSDevice);

    // Check if already in standalone mode
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    if (isStandalone) {
      localStorage.setItem("pwa-installed", "true");
      return;
    }

    // Show iOS instructions after delay
    if (isIOSDevice) {
      setTimeout(() => setShowPrompt(true), 3000);
      return;
    }

    // Listen for beforeinstallprompt event (Android/Desktop)
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      localStorage.setItem("pwa-installed", "true");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  const handleShowIOSInstructions = () => {
    setShowIOSInstructions(true);
  };

  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-6 sm:max-w-sm"
      >
        <div className="rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-3 rounded-full p-1 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-300">
              <Smartphone size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white">
                Installer l&apos;application
              </h3>
              <p className="text-sm text-slate-300">
                Ajoutez GF Digital Studio sur votre écran d&apos;accueil pour un accès rapide.
              </p>
            </div>
          </div>

          {isIOS ? (
            <div className="mt-4">
              {showIOSInstructions ? (
                <div className="space-y-3 rounded-xl bg-white/5 p-4 text-sm text-slate-200">
                  <p className="font-semibold text-white">Pour installer sur iOS:</p>
                  <ol className="list-inside list-decimal space-y-2">
                    <li>Appuyez sur le bouton <span className="inline-flex items-center gap-1 rounded bg-white/10 px-1.5 py-0.5">Partager <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></span></li>
                    <li>Faites défiler et appuyez sur <span className="rounded bg-white/10 px-1.5 py-0.5">&quot;Sur l&apos;écran d&apos;accueil&quot;</span></li>
                    <li>Appuyez sur <span className="rounded bg-white/10 px-1.5 py-0.5">&quot;Ajouter&quot;</span></li>
                  </ol>
                </div>
              ) : (
                <button
                  onClick={handleShowIOSInstructions}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30"
                >
                  <Download size={18} />
                  Comment installer
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={handleInstall}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30"
            >
              <Download size={18} />
              Installer maintenant
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
