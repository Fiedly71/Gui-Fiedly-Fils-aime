import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Guide Digital - Tout savoir sur le Business en Ligne | G&D Digital Studio",
  description: "Découvrez l'e-commerce, les types de sites web, les applications mobiles et les avantages du digital pour votre entreprise. Guide complet pour entrepreneurs.",
  keywords: "e-commerce, site web, application mobile, business en ligne, digital, Haiti, entrepreneur",
};

const siteTypes = [
  {
    icon: "🏪",
    title: "Site Vitrine",
    description: "Présentez votre entreprise, vos services et vos coordonnées. Idéal pour les professionnels, artisans, et entreprises de services.",
    examples: ["Restaurants", "Cabinets médicaux", "Agences immobilières", "Consultants"],
    price: "À partir de $300",
    features: ["Pages de présentation", "Galerie photos", "Formulaire de contact", "Réseaux sociaux"],
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Vendez vos produits en ligne 24h/24. Gestion des stocks, paiements sécurisés et livraison intégrée.",
    examples: ["Boutiques de vêtements", "Épiceries", "Artisanat", "Électronique"],
    price: "À partir de $700",
    features: ["Catalogue produits", "Panier d'achat", "Paiement en ligne", "Gestion des stocks"],
  },
  {
    icon: "📰",
    title: "Blog / Magazine",
    description: "Partagez du contenu, des actualités et des articles. Parfait pour le marketing de contenu et le SEO.",
    examples: ["Médias", "Influenceurs", "Experts", "Organisations"],
    price: "À partir de $400",
    features: ["Articles illimités", "Catégories", "Commentaires", "Newsletter"],
  },
  {
    icon: "🎓",
    title: "Plateforme E-learning",
    description: "Créez et vendez des cours en ligne. Vidéos, quiz, certificats et suivi des étudiants.",
    examples: ["Formateurs", "Écoles", "Coachs", "Experts"],
    price: "À partir de $1,200",
    features: ["Cours vidéo", "Quiz interactifs", "Certificats", "Espace étudiant"],
  },
  {
    icon: "📅",
    title: "Site de Réservation",
    description: "Permettez à vos clients de réserver en ligne. Calendrier, disponibilités et confirmations automatiques.",
    examples: ["Hôtels", "Salons de beauté", "Restaurants", "Médecins"],
    price: "À partir de $600",
    features: ["Calendrier en ligne", "Réservations", "Rappels SMS", "Paiements d'acompte"],
  },
  {
    icon: "🎫",
    title: "Billetterie Événements",
    description: "Vendez des billets avec QR Code pour vos événements. Anti-fraude et statistiques en temps réel.",
    examples: ["Concerts", "Festivals", "Conférences", "Spectacles"],
    price: "À partir de $800",
    features: ["Billets QR Code", "Validation scanner", "Statistiques live", "Multi-événements"],
  },
];

const appTypes = [
  {
    icon: "📱",
    title: "Application Mobile Native",
    description: "Application installée sur le téléphone du client. Accès hors-ligne, notifications push, performance optimale.",
    platforms: ["iOS (iPhone/iPad)", "Android"],
    price: "À partir de $1,500",
    advantages: ["Performance maximale", "Accès hors-ligne", "Notifications push", "Intégration hardware"],
  },
  {
    icon: "🌐",
    title: "Progressive Web App (PWA)",
    description: "Site web qui fonctionne comme une app. Installable, rapide, fonctionne sur tous les appareils.",
    platforms: ["Tous les navigateurs", "Tous les appareils"],
    price: "À partir de $500",
    advantages: ["Moins cher qu'une app native", "Pas de store nécessaire", "Mise à jour instantanée", "SEO optimisé"],
  },
];

const businessModels = [
  {
    icon: "💰",
    title: "Vente de Produits",
    description: "Vendez des produits physiques ou numériques directement à vos clients.",
    examples: "Vêtements, électronique, e-books, musique, logiciels",
  },
  {
    icon: "🔄",
    title: "Abonnement",
    description: "Revenus récurrents avec des abonnements mensuels ou annuels.",
    examples: "SaaS, streaming, box mensuelles, membership",
  },
  {
    icon: "🎯",
    title: "Services en Ligne",
    description: "Offrez vos services à distance sans frontières géographiques.",
    examples: "Consulting, coaching, design, développement",
  },
  {
    icon: "📊",
    title: "Marketplace",
    description: "Connectez vendeurs et acheteurs et prenez une commission sur chaque vente.",
    examples: "Etsy, Airbnb, Uber (modèle similaire)",
  },
  {
    icon: "📢",
    title: "Publicité & Affiliation",
    description: "Monétisez votre audience avec de la publicité ou des liens d'affiliation.",
    examples: "Blogs, médias, influenceurs, comparateurs",
  },
  {
    icon: "🎓",
    title: "Formation & Cours",
    description: "Vendez vos connaissances sous forme de cours en ligne.",
    examples: "E-learning, webinaires, coaching de groupe",
  },
];

const websiteAdvantages = [
  {
    icon: "🌍",
    title: "Visibilité Mondiale",
    description: "Votre entreprise accessible partout dans le monde, 24h/24, 7j/7. Plus besoin d'être physiquement présent pour vendre.",
    stat: "4.9 milliards",
    statLabel: "d'utilisateurs internet dans le monde",
  },
  {
    icon: "💵",
    title: "Coûts Réduits",
    description: "Pas de loyer commercial, moins d'employés nécessaires. Un site coûte moins cher qu'un local physique.",
    stat: "70%",
    statLabel: "d'économies vs local physique",
  },
  {
    icon: "📈",
    title: "Croissance Illimitée",
    description: "Contrairement à un magasin physique, un site peut servir des milliers de clients simultanément.",
    stat: "∞",
    statLabel: "capacité de clients",
  },
  {
    icon: "📊",
    title: "Données & Analytics",
    description: "Comprenez vos clients: ce qu'ils regardent, achètent, et quand. Décisions basées sur des données réelles.",
    stat: "100%",
    statLabel: "de traçabilité des actions",
  },
  {
    icon: "🎯",
    title: "Marketing Ciblé",
    description: "Publicités ciblées sur les personnes intéressées par vos produits. Pas de gaspillage publicitaire.",
    stat: "10x",
    statLabel: "plus efficace que pub traditionnelle",
  },
  {
    icon: "🤖",
    title: "Automatisation",
    description: "Commandes, factures, emails, notifications... Tout peut être automatisé pour vous faire gagner du temps.",
    stat: "24/7",
    statLabel: "fonctionne même quand vous dormez",
  },
];

const ecommerceTypes = [
  {
    type: "B2C",
    title: "Business to Consumer",
    description: "Vente directe aux consommateurs finaux",
    example: "Amazon, Zara, votre boutique en ligne",
    icon: "🛍️",
  },
  {
    type: "B2B",
    title: "Business to Business",
    description: "Vente entre entreprises",
    example: "Alibaba, grossistes, fournisseurs",
    icon: "🏢",
  },
  {
    type: "C2C",
    title: "Consumer to Consumer",
    description: "Vente entre particuliers",
    example: "eBay, Facebook Marketplace, Leboncoin",
    icon: "🤝",
  },
  {
    type: "D2C",
    title: "Direct to Consumer",
    description: "Marques vendant directement sans intermédiaire",
    example: "Nike.com, Apple Store, Tesla",
    icon: "🎯",
  },
];

const haitiStats = [
  { value: "75%", label: "des entreprises haïtiennes n'ont pas de site web" },
  { value: "6M+", label: "d'Haïtiens utilisent internet" },
  { value: "85%", label: "via smartphone" },
  { value: "$2B+", label: "de transferts diaspora/an" },
];

export default function GuideDigitalPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-block px-4 py-2 glass rounded-full text-indigo-400 text-sm font-medium mb-6">
                📚 Guide Complet
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tout savoir sur le
                <br />
                <span className="gradient-text">Business Digital</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                E-commerce, sites web, applications mobiles... Découvrez comment le digital peut 
                transformer votre entreprise et vous ouvrir des portes vers le monde entier.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#ecommerce"
                  className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
                >
                  Qu'est-ce que l'e-commerce?
                </Link>
                <Link
                  href="#avantages"
                  className="border border-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
                >
                  Les avantages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Haiti Stats */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
                Le Digital en <span className="gradient-text">Haïti</span> 🇭🇹
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {haitiStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Section */}
        <section id="ecommerce" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 glass rounded-full text-pink-400 text-sm font-medium mb-4">
                🛒 E-commerce
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Qu'est-ce que <span className="gradient-text">l'E-commerce</span>?
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                L'e-commerce (commerce électronique) c'est tout simplement vendre et acheter 
                des produits ou services sur internet. Aucun local physique nécessaire.
              </p>
            </div>

            {/* E-commerce Types */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {ecommerceTypes.map((item, index) => (
                <div key={index} className="glass rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="text-indigo-400 text-xs font-bold">{item.type}</span>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  <p className="text-gray-500 text-xs">Ex: {item.example}</p>
                </div>
              ))}
            </div>

            {/* What you need */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Ce qu'il faut pour lancer un e-commerce
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl">
                    🌐
                  </div>
                  <h4 className="text-white font-semibold mb-2">Site Web</h4>
                  <p className="text-gray-400 text-sm">Une boutique en ligne professionnelle avec catalogue et panier d'achat</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl">
                    💳
                  </div>
                  <h4 className="text-white font-semibold mb-2">Paiement</h4>
                  <p className="text-gray-400 text-sm">MonCash, Stripe, cartes bancaires pour recevoir les paiements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-2xl">
                    🚚
                  </div>
                  <h4 className="text-white font-semibold mb-2">Livraison</h4>
                  <p className="text-gray-400 text-sm">Système de livraison ou partenariat avec des livreurs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de Sites */}
        <section id="types-sites" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 glass rounded-full text-cyan-400 text-sm font-medium mb-4">
                🌐 Sites Web
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Les différents <span className="gradient-text">Types de Sites</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Chaque type de site répond à un besoin spécifique. Voici les principales catégories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteTypes.map((site, index) => (
                <div key={index} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{site.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-lg">{site.title}</h3>
                      <span className="text-indigo-400 text-sm">{site.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{site.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-2">Idéal pour:</p>
                    <div className="flex flex-wrap gap-1">
                      {site.examples.map((ex, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{ex}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-xs mb-2">Fonctionnalités:</p>
                    <ul className="space-y-1">
                      {site.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Mobiles */}
        <section id="applications" className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 glass rounded-full text-green-400 text-sm font-medium mb-4">
                📱 Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications <span className="gradient-text">Mobiles</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                85% des Haïtiens accèdent à internet via leur téléphone. Une app mobile vous rapproche de vos clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {appTypes.map((app, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{app.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{app.title}</h3>
                      <span className="text-indigo-400 text-sm">{app.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-2">Plateformes:</p>
                    <div className="flex flex-wrap gap-2">
                      {app.platforms.map((p, i) => (
                        <span key={i} className="px-2 py-1 bg-indigo-500/20 rounded text-xs text-indigo-300">{p}</span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {app.advantages.map((adv, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages d'avoir un site */}
        <section id="avantages" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-green-900/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 glass rounded-full text-green-400 text-sm font-medium mb-4">
                ✅ Avantages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pourquoi avoir un <span className="gradient-text">Site Web</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Un site web n'est plus un luxe, c'est une nécessité pour toute entreprise qui veut grandir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteAdvantages.map((adv, index) => (
                <div key={index} className="glass rounded-2xl p-6 card-hover">
                  <span className="text-3xl mb-4 block">{adv.icon}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{adv.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{adv.description}</p>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-2xl font-bold text-indigo-400">{adv.stat}</div>
                    <div className="text-xs text-gray-500">{adv.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Models */}
        <section id="business-models" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 glass rounded-full text-purple-400 text-sm font-medium mb-4">
                💼 Modèles d'Affaires
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comment <span className="gradient-text">Gagner de l'Argent</span> en Ligne?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Il existe plusieurs façons de monétiser votre présence en ligne. Voici les plus populaires.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessModels.map((model, index) => (
                <div key={index} className="glass rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{model.icon}</span>
                    <h3 className="text-white font-semibold">{model.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{model.description}</p>
                  <p className="text-gray-500 text-xs">
                    <span className="text-indigo-400">Exemples:</span> {model.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20"></div>
              <div className="relative z-10">
                <span className="text-5xl mb-6 block">🚀</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Prêt à passer au Digital?
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  Que vous vouliez un simple site vitrine ou une app mobile complète, 
                  nous avons la solution adaptée à votre budget et vos besoins.
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
`📚 *DEPUIS GUIDE DIGITAL - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Guide Digital (gdigitalstudio.com/guide-digital)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! J'ai lu votre guide sur le digital et je souhaite en savoir plus pour mon projet.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-green-500 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-500/10 transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    Discuter avec un expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
