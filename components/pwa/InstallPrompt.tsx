'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Vérifier si c'est iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Vérifier si l'app est déjà installée
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const hasDeclined = localStorage.getItem('pwa-install-declined');

    if (isStandalone || hasDeclined) {
      return;
    }

    // Pour Android/Chrome - écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Attendre 3 secondes avant d'afficher
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Pour iOS, afficher les instructions après un délai
    if (isIOSDevice && !isStandalone) {
      setTimeout(() => setShowPrompt(true), 5000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        setShowIOSInstructions(true);
      }
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('App installée');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowIOSInstructions(false);
    localStorage.setItem('pwa-install-declined', 'true');
  };

  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-6 md:max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone size={20} />
                <span className="font-semibold text-sm">Installer l&apos;Application</span>
              </div>
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {showIOSInstructions ? (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Pour installer sur iOS :
                  </p>
                  <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                    <li>Appuyez sur le bouton <strong>Partager</strong> <span className="inline-block w-5 h-5 bg-gray-200 rounded text-center text-xs leading-5">↑</span></li>
                    <li>Faites défiler et appuyez sur <strong>&quot;Sur l&apos;écran d&apos;accueil&quot;</strong></li>
                    <li>Appuyez sur <strong>Ajouter</strong></li>
                  </ol>
                  <button
                    onClick={handleDismiss}
                    className="w-full mt-2 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    J&apos;ai compris
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    Ajoutez GF Digital Studio sur votre écran d&apos;accueil pour un accès rapide !
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleDismiss}
                      className="flex-1 py-2.5 text-sm font-medium text-gray-500 hover:text-black transition-colors border border-gray-300 rounded-lg"
                    >
                      Plus tard
                    </button>
                    <button
                      onClick={handleInstall}
                      className="flex-1 py-2.5 text-sm font-semibold text-white bg-black hover:bg-gray-800 transition-colors rounded-lg flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Installer
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
