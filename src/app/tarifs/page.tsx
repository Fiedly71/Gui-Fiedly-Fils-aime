"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components";

const packs = [
  {
    name: "PACK BASIC",
    subtitle: "Présence Digitale",
    description: "Idéal pour les entrepreneurs qui débutent",
    price: "300$ - 700$",
    priceNote: "USD",
    features: [
      "Site d'une seule à 5 pages maximum",
      "Design moderne et adapté aux mobiles",
      "Formulaire de contact simple",
      "2 pages produits avec bouton WhatsApp",
      "Livraison en 3 jours",
      "Dossier complet avec fichiers de codes",
    ],
    notIncluded: [
      "Intégration paiement",
      "SEO avancé",
      "Support 24/7",
    ],
    popular: false,
    gradient: "from-gray-600 to-gray-700",
    delivery: "3 jours",
  },
  {
    name: "PACK STANDARD",
    subtitle: "Croissance Business",
    description: "La solution complète pour les entreprises en croissance",
    price: "700$ - 1500$",
    priceNote: "USD",
    features: [
      "Site multipages (jusqu'à 8 pages)",
      "Intégration MonCash, PayPal, Stripe",
      "Formulaire de contact simple ou complexe",
      "Optimisation SEO pour Google",
      "Configuration hébergement incluse",
      "Livraison en 7 jours",
      "Dossier complet avec fichiers de codes",
    ],
    notIncluded: [
      "Support 24/7",
    ],
    popular: true,
    gradient: "from-indigo-500 to-cyan-500",
    delivery: "7 jours",
  },
  {
    name: "PACK PREMIUM",
    subtitle: "Leader Digital",
    description: "Application web complète pour dominer votre secteur",
    price: "1500$ - 2500$",
    priceNote: "USD",
    features: [
      "Jusqu'à 10 pages + fonctionnalités complexes",
      "Intégration MonCash, PayPal, Stripe",
      "Système de gestion de contenu autonome",
      "Optimisation vitesse + sécurité HTTPS",
      "Support technique 24h/24 & 7j/7",
      "Optimisation SEO avancée",
      "Livraison en 21 jours",
      "Dossier complet avec fichiers de codes",
      "Fonctionnalités sur mesure",
    ],
    notIncluded: [],
    popular: false,
    gradient: "from-pink-500 to-purple-600",
    delivery: "21 jours",
  },
];

const mobileApps = [
  {
    name: "App Mobile Simple",
    price: "1 500$ - 3 000$",
    features: [
      "Application iOS et Android",
      "Interface utilisateur intuitive",
      "Fonctionnalités de base",
      "Publication sur les stores",
    ],
  },
  {
    name: "App Mobile Complexe",
    price: "3 000$ - 6 000$",
    features: [
      "Application iOS et Android",
      "Base de données avancée",
      "Intégration API tierces",
      "Paiement intégré",
      "Notifications push",
      "Support prioritaire",
    ],
  },
];

const maintenance = {
  price: "50$ - 150$",
  period: "par mois",
  features: [
    "Mises à jour régulières",
    "Sécurité et monitoring",
    "Corrections techniques",
    "Sauvegardes automatiques",
  ],
};

export default function TarifsPage() {
  const [activeTab, setActiveTab] = useState<"sites" | "apps" | "maintenance">("sites");

  const whatsappMessage = encodeURIComponent(
    "Bonjour G&D Digital Studio! Je suis intéressé(e) par vos services. Pouvez-vous me donner plus d'informations?"
  );
  const whatsappLink = `https://wa.me/50932836938?text=${whatsappMessage}`;

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
                Tarifs Transparents
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Investissez dans votre
                <br />
                <span className="gradient-text">succès digital</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                En Haïti, 75% des entreprises perdent des clients chaque jour car elles n&apos;ont pas de présence web. 
                Ne faites pas partie de cette statistique.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 glow-primary"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Commander via WhatsApp
                </a>
                <Link
                  href="#paiement"
                  className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
                >
                  Payer en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveTab("sites")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "sites"
                    ? "gradient-bg text-white glow-primary"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                Sites Web
              </button>
              <button
                onClick={() => setActiveTab("apps")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "apps"
                    ? "gradient-bg text-white glow-primary"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                Applications Mobiles
              </button>
              <button
                onClick={() => setActiveTab("maintenance")}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === "maintenance"
                    ? "gradient-bg text-white glow-primary"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                Maintenance
              </button>
            </div>
          </div>
        </section>

        {/* Sites Web Pricing */}
        {activeTab === "sites" && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packs.map((pack, index) => (
                  <div
                    key={index}
                    className={`relative glass rounded-3xl p-8 ${
                      pack.popular ? "ring-2 ring-indigo-500" : ""
                    }`}
                  >
                    {pack.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="gradient-bg text-white text-sm font-semibold px-4 py-1 rounded-full">
                          Le plus populaire
                        </span>
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pack.gradient} flex items-center justify-center mb-6`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{pack.name}</h3>
                    <p className="text-indigo-400 text-sm font-medium mb-2">{pack.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-6">{pack.description}</p>

                    <div className="mb-6">
                      <span className="text-3xl font-bold text-white">{pack.price}</span>
                      <span className="text-gray-400 ml-2">{pack.priceNote}</span>
                    </div>

                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 text-sm text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Livraison: {pack.delivery}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {pack.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                          <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/50932836938?text=${encodeURIComponent(`Bonjour! Je suis intéressé(e) par le ${pack.name} (${pack.price}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                        pack.popular
                          ? "gradient-bg text-white hover:opacity-90"
                          : "border border-gray-600 text-white hover:border-indigo-500 hover:bg-indigo-500/10"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Commander
                    </a>
                  </div>
                ))}
              </div>

              {/* Bonus */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 glass px-6 py-4 rounded-2xl">
                  <span className="text-2xl">🎁</span>
                  <span className="text-white font-medium">
                    OFFRE : 1 an d&apos;hébergement gratuit (votre-site.com) avec chaque Pack!
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Mobile Apps Pricing */}
        {activeTab === "apps" && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                {mobileApps.map((app, index) => (
                  <div key={index} className="glass rounded-3xl p-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{app.name}</h3>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-white">{app.price}</span>
                      <span className="text-gray-400 ml-2">USD</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/50932836938?text=${encodeURIComponent(`Bonjour! Je suis intéressé(e) par ${app.name} (${app.price}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-gray-600 text-white hover:border-green-500 hover:bg-green-500/10"
                    >
                      Demander un devis
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Maintenance Pricing */}
        {activeTab === "maintenance" && (
          <section className="py-12">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass rounded-3xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Maintenance & Support</h3>
                <p className="text-gray-400 mb-6">Gardez votre site performant et sécurisé</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{maintenance.price}</span>
                  <span className="text-gray-400 ml-2">{maintenance.period}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {maintenance.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/50932836938?text=${encodeURIComponent(`Bonjour! Je suis intéressé(e) par votre service de maintenance (${maintenance.price}/mois).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
                >
                  Souscrire
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Payment Section */}
        <section id="paiement" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Méthodes de <span className="gradient-text">Paiement</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Choisissez la méthode qui vous convient le mieux
              </p>
              <div className="inline-block p-4 bg-indigo-500/20 border border-indigo-500/30 rounded-xl max-w-lg mx-auto">
                <p className="text-indigo-200 text-sm">
                  💡 <strong>Service adapté à votre budget:</strong> Le montant que vous choisissez détermine le niveau de service que vous recevrez.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Commander via Form */}
              <a href="/commander" className="glass rounded-2xl p-6 hover:border-indigo-500/50 border border-transparent transition-all block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#635BFF] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Carte Bancaire</h3>
                    <p className="text-sm text-gray-400">Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">Visa</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">MC</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">Amex</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">Apple Pay</span>
                </div>
                <span className="inline-flex items-center gap-2 bg-[#635BFF] hover:bg-[#5046e5] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Commander →
                </span>
              </a>

              {/* MonCash */}
              <a 
                href="https://wa.me/50932836938?text=Bonjour%2C%20je%20souhaite%20payer%20via%20MonCash"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:border-yellow-500/50 border border-transparent transition-all block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">MonCash</h3>
                    <p className="text-sm text-gray-400">Paiement mobile Haïti</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Payez facilement avec votre compte MonCash Digicel.
                </p>
                <span className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Payer via MonCash →
                </span>
              </a>

              {/* WhatsApp */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">WhatsApp</h3>
                    <p className="text-sm text-gray-400">Discutez avec nous</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Personnalisez votre commande en discutant directement.
                </p>
                <a
                  href="https://wa.me/50932836938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-sm font-medium hover:underline"
                >
                  Nous contacter →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-cyan-900/30"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à franchir le pas?
            </h2>
            <p className="text-gray-400 mb-8">
              Rejoignez les +30 entreprises haïtiennes qui nous font confiance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/50932836938"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 glow-primary"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Démarrer maintenant
              </a>
              <Link
                href="/"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
