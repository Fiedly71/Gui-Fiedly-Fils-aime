import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";

const features = [
  {
    title: "Commande en ligne",
    description: "Vos clients commandent facilement depuis leur téléphone ou ordinateur.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Suivi de livraison",
    description: "Vos clients suivent leur commande en temps réel jusqu'à la livraison.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Multi-adresses",
    description: "Gestion de plusieurs adresses de livraison par client.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Paiement MonCash",
    description: "Intégration MonCash native pour les paiements mobiles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Gestion des stocks",
    description: "Inventaire automatisé avec alertes de rupture de stock.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Notifications",
    description: "SMS et WhatsApp automatiques pour chaque étape de la commande.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Restaurants", icon: "🍽️", description: "Commande et livraison de repas" },
  { name: "Épiceries", icon: "🛒", description: "Vente de produits alimentaires" },
  { name: "Boutiques", icon: "👗", description: "Mode et accessoires" },
  { name: "Électronique", icon: "📱", description: "Gadgets et appareils" },
];

export default function EcommercePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-transparent to-rose-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 glass rounded-full text-pink-400 text-sm font-medium mb-6">
                  E-commerce
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  E-commerce &
                  <br />
                  <span className="text-pink-400">Livraison</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Plateformes de commande pour restaurants et commerces avec gestion des adresses 
                  de livraison, suivi en temps réel et notifications automatiques.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/tarifs"
                    className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
                  >
                    Voir les tarifs
                  </Link>
                  <a
                    href="https://wa.me/50932836938?text=Bonjour! Je suis intéressé par une plateforme e-commerce."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-pink-500 hover:bg-pink-500/10 transition-all inline-flex items-center gap-2"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl"></div>
                  <div className="absolute inset-4 glass rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/pic/e.jpg" 
                      alt="E-commerce" 
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
                Tout pour vendre en ligne
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une solution complète adaptée au marché haïtien avec MonCash intégré
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-pink-900/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pour tous les secteurs
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="glass rounded-2xl p-8 text-center card-hover">
                  <span className="text-5xl mb-4 block">{industry.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">💬</div>
                <div>
                  <p className="text-xl text-white italic mb-4">
                    &quot;G&D Digital Studio a transformé notre restaurant avec leur système de commande en ligne. 
                    Les clients adorent et nos ventes ont augmenté de 40%!&quot;
                  </p>
                  <p className="text-gray-400">— Client Restaurant, Cap-Haïtien</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à vendre en ligne?
            </h2>
            <p className="text-gray-400 mb-8">
              Rejoignez les commerces haïtiens qui vendent 24/7 grâce à notre plateforme
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
                className="border border-pink-500 text-pink-400 px-8 py-4 rounded-xl font-semibold hover:bg-pink-500/10 transition-all"
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
