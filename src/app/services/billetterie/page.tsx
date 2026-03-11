import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";

const features = [
  {
    title: "QR Code unique",
    description: "Chaque ticket possède un QR code unique impossible à dupliquer ou falsifier.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Validation instantanée",
    description: "Scannez et validez les tickets en moins d'une seconde à l'entrée.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Anti-fraude",
    description: "Système de détection de fraude avancé pour protéger vos événements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Statistiques temps réel",
    description: "Suivez les ventes et entrées en direct avec des tableaux de bord détaillés.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Paiement intégré",
    description: "MonCash, PayPal, carte bancaire - vos clients choisissent leur méthode.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Multi-événements",
    description: "Gérez plusieurs événements simultanément depuis une seule plateforme.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const useCases = [
  { title: "Concerts & Festivals", icon: "🎵" },
  { title: "Conférences", icon: "🎤" },
  { title: "Événements sportifs", icon: "⚽" },
  { title: "Soirées & Galas", icon: "🎉" },
  { title: "Cinémas", icon: "🎬" },
  { title: "Expositions", icon: "🎨" },
];

export default function BilletteriePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-blue-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 glass rounded-full text-cyan-400 text-sm font-medium mb-6">
                  Gestion d&apos;événements
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Billetterie
                  <br />
                  <span className="text-cyan-400">QR Code</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Des tickets numériques avec QR codes uniques pour vos événements. 
                  Validation instantanée à l&apos;entrée, anti-fraude intégré et statistiques en temps réel.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/tarifs"
                    className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
                  >
                    Voir les tarifs
                  </Link>
                  <a
                    href="https://wa.me/50932836938?text=Bonjour! Je suis intéressé par votre système de billetterie QR Code."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all inline-flex items-center gap-2"
                  >
                    Demander une démo
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl"></div>
                  <div className="absolute inset-4 glass rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/pic/bi.jpg" 
                      alt="Billetterie" 
                      width={280} 
                      height={280}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fonctionnalités complètes
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tout ce dont vous avez besoin pour gérer vos événements de A à Z
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-900/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pour tous types d&apos;événements
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center card-hover">
                  <span className="text-4xl mb-3 block">{useCase.icon}</span>
                  <p className="text-white font-medium text-sm">{useCase.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à digitaliser vos événements?
            </h2>
            <p className="text-gray-400 mb-8">
              Zero fraude, validation instantanée. Rejoignez les organisateurs qui nous font confiance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tarifs"
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
              >
                Voir les tarifs
              </Link>
              <a
                href="https://wa.me/50932836938"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
