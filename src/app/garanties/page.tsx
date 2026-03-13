import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Garanties | G&D Digital Studio",
  description: "Découvrez nos garanties: satisfaction garantie, support 30 jours, sécurité SSL, performance optimisée. Votre tranquillité d'esprit est notre priorité.",
};

const guarantees = [
  {
    icon: "✓",
    title: "Satisfaction Garantie",
    description: "Si vous n'êtes pas satisfait du résultat final, nous retravaillons le projet jusqu'à votre approbation complète.",
    details: [
      "Révisions illimitées sur la maquette",
      "2 cycles de révision après développement",
      "Communication transparente à chaque étape",
      "Validation à chaque phase du projet",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "⏱",
    title: "30 Jours de Support Gratuit",
    description: "Après la livraison, nous restons disponibles pendant 30 jours pour corriger tout bug ou ajustement mineur.",
    details: [
      "Réponse sous 24h maximum",
      "Corrections de bugs gratuites",
      "Ajustements mineurs inclus",
      "Formation à l'utilisation",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔒",
    title: "Sécurité SSL & HTTPS",
    description: "Tous nos sites sont livrés avec un certificat SSL valide pour protéger les données de vos utilisateurs.",
    details: [
      "Certificat SSL gratuit inclus",
      "Connexion sécurisée HTTPS",
      "Protection des données",
      "Conformité aux standards",
    ],
    color: "from-red-500 to-pink-500",
  },
  {
    icon: "⚡",
    title: "Performance 90+ Score",
    description: "Nous garantissons un score de performance Lighthouse de 90 ou plus pour une expérience utilisateur optimale.",
    details: [
      "Temps de chargement < 3 secondes",
      "Optimisation des images",
      "Code optimisé et minifié",
      "CDN pour la rapidité",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "📱",
    title: "Design 100% Responsive",
    description: "Votre site s'adapte parfaitement à tous les écrans: mobile, tablette et desktop.",
    details: [
      "Tests sur tous les appareils",
      "Navigation mobile optimisée",
      "Touch-friendly sur mobile",
      "Compatibilité tous navigateurs",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: "📄",
    title: "Code Source Inclus",
    description: "Vous êtes propriétaire de votre code. Nous vous fournissons l'accès complet au code source.",
    details: [
      "Code propre et documenté",
      "Accès GitHub/GitLab",
      "Documentation technique",
      "Liberté de modification",
    ],
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: "🌐",
    title: "Hébergement 1ère Année Offert",
    description: "Nous offrons l'hébergement de votre site pendant la première année.",
    details: [
      "Hébergement premium Vercel/AWS",
      "Nom de domaine assistance",
      "Configuration DNS incluse",
      "Renouvellement facile ensuite",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🔄",
    title: "Livraison dans les Délais",
    description: "Nous respectons les délais convenus. En cas de retard de notre fait, des compensations sont prévues.",
    details: [
      "Planning détaillé fourni",
      "Mises à jour régulières",
      "Compensation si retard",
      "Communication proactive",
    ],
    color: "from-pink-500 to-rose-500",
  },
];

export default function GarantiesPage() {
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
              Garanties
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos <span className="gradient-text">Garanties</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Votre tranquillité d'esprit est notre priorité. Découvrez nos engagements 
              pour chaque projet.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-white text-sm">+50 clients satisfaits</span>
            </div>
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-white text-sm">+100 projets livrés</span>
            </div>
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span className="text-white text-sm">5/5 note moyenne</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="glass rounded-2xl p-6 md:p-8 card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${guarantee.color} flex items-center justify-center text-2xl`}>
                    {guarantee.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{guarantee.title}</h3>
                    <p className="text-gray-400 text-sm">{guarantee.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {guarantee.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Badge */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Garantie Qualité G&D Digital Studio
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Chaque projet est soumis à notre processus de contrôle qualité rigoureux. 
              Nous ne livrons que des projets dont nous sommes fiers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                Tests automatisés
              </span>
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                Revue de code
              </span>
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                Tests utilisateurs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à travailler avec nous?
          </h2>
          <p className="text-gray-400 mb-8">
            Contactez-nous pour discuter de votre projet en toute confiance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/50932836938?text=${encodeURIComponent(
`✅ *DEMANDE DEPUIS PAGE GARANTIES - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Nos garanties (gdigitalstudio.com/garanties)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Vos garanties me rassurent. Je souhaite démarrer un projet avec vous.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:scale-105 transition-transform glow-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Discuter sur WhatsApp
            </a>
            <Link
              href="/temoignages"
              className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:scale-105 transition-transform"
            >
              Voir les témoignages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
