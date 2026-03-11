import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";

// Portfolio case studies data
const caseStudies = {
  "restaurant-lakay": {
    title: "Restaurant Lakay",
    subtitle: "Plateforme de commande en ligne avec MonCash",
    category: "E-commerce & Restauration",
    duration: "3 semaines",
    year: "2025",
    client: "Restaurant Lakay, Cap-Haïtien",
    heroImage: "/images/portfolio/restaurant.jpg",
    challenge: `Restaurant Lakay avait besoin d'une solution moderne pour permettre à leurs clients de commander en ligne. 
    Le défi principal était d'intégrer MonCash comme moyen de paiement tout en offrant une expérience utilisateur fluide 
    et un système de gestion des commandes efficace pour le personnel.`,
    solution: `Nous avons développé une application web complète avec Next.js incluant :
    - Un menu digital interactif avec photos et descriptions
    - Un panier d'achat intelligent avec calcul automatique
    - Intégration MonCash pour les paiements instantanés
    - Système de gestion des adresses de livraison
    - Notifications en temps réel pour le suivi des commandes
    - Panneau d'administration pour la gestion du menu et des commandes`,
    results: [
      { metric: "+45%", label: "Augmentation des commandes" },
      { metric: "2 min", label: "Temps moyen de commande" },
      { metric: "98%", label: "Satisfaction client" },
      { metric: "24/7", label: "Disponibilité du service" },
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "MonCash API", "PostgreSQL", "Vercel"],
    testimonial: {
      quote: "G&D Digital Studio a transformé notre façon de servir nos clients. Les commandes en ligne ont explosé !",
      author: "Jean-Pierre Louis",
      role: "Propriétaire, Restaurant Lakay",
    },
    features: [
      "Menu digital dynamique",
      "Paiement MonCash intégré",
      "Suivi de livraison en temps réel",
      "Panneau admin complet",
      "Notifications SMS",
      "Rapports de ventes",
    ],
  },
  "evenements-plus": {
    title: "Événements Plus",
    subtitle: "Billetterie digitale avec QR Codes",
    category: "Billetterie & Événementiel",
    duration: "4 semaines",
    year: "2024",
    client: "Événements Plus, Port-au-Prince",
    heroImage: "/images/portfolio/events.jpg",
    challenge: `Événements Plus organisait des concerts et festivals mais faisait face à des problèmes de fraude 
    avec les tickets papier. Ils avaient besoin d'une solution sécurisée et moderne pour la vente et la validation 
    des billets tout en intégrant les paiements locaux.`,
    solution: `Nous avons créé une plateforme de billetterie complète :
    - Génération de tickets avec QR codes uniques et sécurisés
    - Application de scan pour validation instantanée à l'entrée
    - Intégration MonCash et paiement par carte
    - Tableau de bord avec statistiques en temps réel
    - Système anti-fraude avec vérification multiple
    - Gestion multi-événements`,
    results: [
      { metric: "0%", label: "Fraude détectée" },
      { metric: "3 sec", label: "Temps de validation" },
      { metric: "+60%", label: "Ventes en ligne" },
      { metric: "15K+", label: "Tickets vendus" },
    ],
    technologies: ["Next.js", "React Native", "QR Code API", "MonCash", "Stripe", "Firebase"],
    testimonial: {
      quote: "Fini les faux tickets ! La validation par QR code a révolutionné nos événements.",
      author: "Marie Sanon",
      role: "Directrice, Événements Plus",
    },
    features: [
      "QR codes uniques",
      "App de scan mobile",
      "Multi-paiements",
      "Anti-fraude intégré",
      "Stats temps réel",
      "Multi-événements",
    ],
  },
  "marche-ht": {
    title: "MarchéHT",
    subtitle: "Marketplace e-commerce multi-vendeurs",
    category: "E-commerce",
    duration: "8 semaines",
    year: "2025",
    client: "MarchéHT, Haïti",
    heroImage: "/images/portfolio/marketplace.jpg",
    challenge: `MarchéHT voulait créer la première marketplace haïtienne permettant aux petits commerçants 
    de vendre en ligne. Le défi était de créer une plateforme scalable supportant plusieurs vendeurs, 
    avec gestion des commissions et intégration des paiements locaux.`,
    solution: `Nous avons développé une marketplace robuste :
    - Système multi-vendeurs avec dashboards individuels
    - Gestion automatique des commissions
    - Intégration MonCash, Natcash et cartes bancaires
    - Système de notation et avis
    - Messagerie intégrée acheteur-vendeur
    - Logistique et suivi des livraisons`,
    results: [
      { metric: "50+", label: "Vendeurs actifs" },
      { metric: "1000+", label: "Produits listés" },
      { metric: "HTG 2M+", label: "Volume mensuel" },
      { metric: "4.8/5", label: "Note moyenne" },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MonCash", "Stripe Connect", "AWS"],
    testimonial: {
      quote: "MarchéHT a donné une vitrine digitale à des centaines de petits commerçants haïtiens.",
      author: "Paul André Charles",
      role: "Fondateur, MarchéHT",
    },
    features: [
      "Multi-vendeurs",
      "Gestion commissions",
      "Chat intégré",
      "Système d'avis",
      "Multi-paiements",
      "Analytics vendeurs",
    ],
  },
  "digipay-ht": {
    title: "DigiPay HT",
    subtitle: "Application de paiement mobile",
    category: "Fintech",
    duration: "12 semaines",
    year: "2024",
    client: "DigiPay HT, Haïti",
    heroImage: "/images/portfolio/fintech.jpg",
    challenge: `DigiPay HT avait besoin d'une application permettant aux utilisateurs d'effectuer des 
    transferts d'argent, payer des factures et gérer leurs finances. L'application devait être 
    sécurisée, rapide et accessible même sur des connexions lentes.`,
    solution: `Nous avons créé une application fintech complète :
    - Transferts P2P instantanés
    - Paiement de factures (électricité, eau, téléphone)
    - Historique des transactions détaillé
    - Authentification biométrique
    - Mode hors-ligne pour les zones à faible connectivité
    - Intégration avec les banques locales`,
    results: [
      { metric: "10K+", label: "Utilisateurs actifs" },
      { metric: "< 2 sec", label: "Temps de transaction" },
      { metric: "99.9%", label: "Uptime" },
      { metric: "HTG 50M+", label: "Transactions mensuelles" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "Biometrics API"],
    testimonial: {
      quote: "Une application fiable et rapide. Nos utilisateurs adorent la simplicité d'utilisation.",
      author: "Jacques Beauvais",
      role: "CEO, DigiPay HT",
    },
    features: [
      "Transferts P2P",
      "Paiement factures",
      "Sécurité biométrique",
      "Mode hors-ligne",
      "Multi-banques",
      "Notifications push",
    ],
  },
};

type CaseStudyKey = keyof typeof caseStudies;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as CaseStudyKey];
  if (!study) return { title: "Projet non trouvé" };
  
  return {
    title: `${study.title} | Étude de cas - G&D Digital Studio`,
    description: study.subtitle,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as CaseStudyKey];
  
  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={[
              { label: "Portfolio", href: "/#portfolio" },
              { label: study.title }
            ]} />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 glass rounded-full text-indigo-400 text-sm font-medium mb-6">
                  {study.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {study.title}
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  {study.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Client</p>
                    <p className="text-white font-medium">{study.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Durée</p>
                    <p className="text-white font-medium">{study.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Année</p>
                    <p className="text-white font-medium">{study.year}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">🖥️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass rounded-3xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xl mb-6">
                  ⚡
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Le Défi</h2>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {study.challenge}
                </p>
              </div>

              <div className="glass rounded-3xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl mb-6">
                  💡
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Notre Solution</h2>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {study.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Résultats obtenus
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center">
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {result.metric}
                  </p>
                  <p className="text-gray-400">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Tech */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Fonctionnalités clés</h2>
                <div className="grid grid-cols-2 gap-4">
                  {study.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 glass rounded-xl p-4">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Technologies utilisées</h2>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 md:py-24 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <svg className="w-12 h-12 text-indigo-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                &quot;{study.testimonial.quote}&quot;
              </blockquote>
              <div>
                <p className="text-white font-semibold">{study.testimonial.author}</p>
                <p className="text-gray-400">{study.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Discutons de comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/commander"
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                Démarrer un projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/#portfolio"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
              >
                Voir d&apos;autres projets
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
