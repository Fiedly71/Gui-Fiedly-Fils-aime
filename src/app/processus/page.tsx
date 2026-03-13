import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre Processus | G&D Digital Studio",
  description: "Découvrez notre processus de travail en 5 étapes: consultation, maquette, développement, tests et livraison. Votre projet digital en Haïti entre de bonnes mains.",
};

const steps = [
  {
    number: "01",
    title: "Consultation Gratuite",
    description: "Nous discutons de votre projet, vos objectifs et vos besoins. Cette étape est gratuite et sans engagement.",
    details: [
      "Appel ou rencontre de 30 minutes",
      "Analyse de vos besoins",
      "Recommandations personnalisées",
      "Devis détaillé gratuit",
    ],
    duration: "1-2 jours",
    color: "from-blue-500 to-cyan-500",
    icon: "💬",
  },
  {
    number: "02",
    title: "Maquette & Design",
    description: "Création des maquettes visuelles de votre projet. Vous validez le design avant tout développement.",
    details: [
      "Wireframes et prototypes",
      "Design UI/UX moderne",
      "Révisions illimitées",
      "Validation client",
    ],
    duration: "3-5 jours",
    color: "from-purple-500 to-pink-500",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Développement",
    description: "Notre équipe développe votre projet avec les technologies les plus modernes et performantes.",
    details: [
      "Code propre et maintenable",
      "Technologies modernes (Next.js, React)",
      "Responsive design",
      "Intégrations (MonCash, etc.)",
    ],
    duration: "1-3 semaines",
    color: "from-green-500 to-emerald-500",
    icon: "💻",
  },
  {
    number: "04",
    title: "Tests & Révisions",
    description: "Tests approfondis sur tous les appareils. Corrections et ajustements selon vos retours.",
    details: [
      "Tests sur mobile, tablette, desktop",
      "Tests de performance",
      "Corrections de bugs",
      "Ajustements finaux",
    ],
    duration: "2-3 jours",
    color: "from-amber-500 to-orange-500",
    icon: "🔍",
  },
  {
    number: "05",
    title: "Livraison & Support",
    description: "Mise en ligne de votre projet et formation à l'utilisation. Support inclus pendant 30 jours.",
    details: [
      "Déploiement sécurisé",
      "Formation à l'administration",
      "Documentation complète",
      "30 jours de support gratuit",
    ],
    duration: "1-2 jours",
    color: "from-indigo-500 to-purple-500",
    icon: "🚀",
  },
];

export default function ProcessusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a1a] to-gray-900">
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <span className="inline-block px-4 py-2 glass rounded-full text-indigo-400 text-sm font-medium mb-6">
              Processus
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre <span className="gradient-text">Processus</span> de Travail
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              5 étapes simples et transparentes pour concrétiser votre projet digital. 
              Du premier contact à la mise en ligne.
            </p>
          </div>

          {/* Timeline indicator */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <span className="text-gray-400 text-sm">Durée moyenne:</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              2-4 semaines
            </span>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[39px] top-[100px] w-0.5 h-[calc(100%+32px)] bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                )}
                
                <div className="glass rounded-2xl p-6 md:p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number badge */}
                    <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <span className="text-white text-2xl md:text-3xl font-bold">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-2xl">{step.icon}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                        <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{step.description}</p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Questions sur notre processus
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Puis-je voir l'avancement?</h3>
              <p className="text-gray-400 text-sm">Oui! Vous avez accès à un aperçu en direct pendant tout le développement.</p>
            </div>
            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Combien de révisions?</h3>
              <p className="text-gray-400 text-sm">Révisions illimitées sur la maquette, et 2 cycles de révision après développement.</p>
            </div>
            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Et après la livraison?</h3>
              <p className="text-gray-400 text-sm">30 jours de support gratuit, puis options de maintenance disponibles.</p>
            </div>
            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Paiement comment?</h3>
              <p className="text-gray-400 text-sm">50% à la signature, 50% à la livraison. Stripe (carte bancaire) accepté.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à démarrer votre projet?
            </h2>
            <p className="text-gray-400 mb-8">
              Consultation gratuite et devis sous 24h. Sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`🚀 *DEMANDE DEPUIS PAGE PROCESSUS - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Notre processus (gdigitalstudio.com/processus)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! J'ai compris votre processus de travail et je suis prêt(e) à démarrer un projet avec vous.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:scale-105 transition-transform glow-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Démarrer maintenant
              </a>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:scale-105 transition-transform"
              >
                Voir nos solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
