import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";

const features = [
  {
    title: "Paiement sécurisé",
    description: "Transactions cryptées et sécurisées selon les standards internationaux.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Temps réel",
    description: "Confirmation instantanée des paiements, sans délai d'attente.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Tableau de bord",
    description: "Suivez toutes vos transactions en temps réel avec des statistiques détaillées.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "API Simple",
    description: "Intégration facile avec documentation complète et support technique.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const steps = [
  { number: "01", title: "Consultation", description: "Nous analysons vos besoins et votre flux de paiement actuel." },
  { number: "02", title: "Développement", description: "Notre équipe intègre MonCash à votre plateforme." },
  { number: "03", title: "Tests", description: "Tests rigoureux en environnement sandbox puis production." },
  { number: "04", title: "Lancement", description: "Mise en ligne et accompagnement pour vos premières transactions." },
];

export default function MonCashPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-indigo-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 glass rounded-full text-yellow-400 text-sm font-medium mb-6">
                  Intégration de paiement
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Intégration
                  <br />
                  <span className="text-yellow-400">MonCash</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Acceptez les paiements mobiles de vos clients haïtiens en toute simplicité. 
                  Notre intégration MonCash certifiée garantit des transactions sécurisées et instantanées.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/tarifs"
                    className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
                  >
                    Voir les tarifs
                  </Link>
                  <a
                    href={`https://wa.me/50932836938?text=${encodeURIComponent(
`💳 *DEMANDE INTÉGRATION MONCASH - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Services - Intégration MonCash (gdigitalstudio.com/services/moncash)

📦 *Service:* Intégration paiement MonCash

✅ *Ce que je recherche:*
• Intégration API MonCash
• Paiement sécurisé
• Notifications automatiques
• Dashboard de suivi

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Je souhaite intégrer MonCash sur mon site/application. Pouvez-vous me guider?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-yellow-500 hover:bg-yellow-500/10 transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Nous contacter
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl"></div>
                  <div className="absolute inset-4 glass rounded-2xl flex items-center justify-center overflow-hidden p-6">
                    <Image 
                      src="/images/pic/mc.png" 
                      alt="MonCash" 
                      width={200} 
                      height={200}
                      className="object-contain"
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
                Pourquoi choisir notre intégration?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Nous sommes experts dans l&apos;intégration MonCash avec plus de 50 projets réalisés.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-900/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Notre processus
              </h2>
              <p className="text-gray-400">
                De la consultation au lancement en quelques étapes simples
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-yellow-500/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à accepter les paiements MonCash?
            </h2>
            <p className="text-gray-400 mb-8">
              Contactez-nous dès maintenant pour discuter de votre projet
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tarifs"
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
              >
                Voir les tarifs
              </Link>
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`💳 *JE VEUX INTÉGRER MONCASH - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Services - Intégration MonCash

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Je veux intégrer MonCash sur mon site ou application. Démarrons!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500/10 transition-all"
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
