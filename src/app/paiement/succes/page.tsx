import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paiement Réussi | G&D Digital Studio",
  description: "Votre paiement a été effectué avec succès. Merci pour votre confiance!",
};

export default function PaiementSuccesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a1a] to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
            <svg className="w-12 h-12 text-green-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Paiement <span className="gradient-text">Réussi!</span>
          </h1>
          
          {/* Message */}
          <p className="text-gray-400 mb-8">
            Merci pour votre confiance! Votre paiement a été traité avec succès. 
            Notre équipe va maintenant préparer votre projet.
          </p>
          
          {/* Important Notice */}
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4 mb-8">
            <p className="text-indigo-300 text-sm">
              <strong>Important:</strong> Pour confirmer votre paiement et démarrer votre projet, 
              veuillez contacter notre équipe via WhatsApp avec votre reçu de paiement.
            </p>
          </div>
          
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/50932836938?text=Bonjour!%20Je%20viens%20d%27effectuer%20un%20paiement%20sur%20votre%20site.%20Voici%20mon%20re%C3%A7u%20pour%20confirmation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-semibold transition-colors mb-4"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Confirmer avec un Agent G&D Digital
          </a>
          
          {/* Secondary Links */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
            <span className="hidden sm:block text-gray-600">•</span>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              Voir nos services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-6 mt-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Powered by Stripe</span>
          </div>
        </div>
      </div>
    </main>
  );
}
