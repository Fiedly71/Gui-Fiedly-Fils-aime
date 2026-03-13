import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Témoignages | G&D Digital Studio",
  description: "Découvrez ce que nos clients disent de G&D Digital Studio. Plus de 50 entreprises nous font confiance en Haïti.",
};

const testimonials = [
  {
    name: "Jean-Pierre Duval",
    avatar: "JP",
    text: "G&D Digital Studio a transformé notre restaurant avec leur système de commande en ligne. Les clients adorent et nos ventes ont augmenté de 40%!",
    verified: true,
    company: "Restaurant Lakay",
    service: "E-commerce Restaurant",
  },
  {
    name: "Marie-Claire Baptiste",
    avatar: "MB",
    text: "L'intégration MonCash était exactement ce dont nous avions besoin. Professionnels, rapides et le support est excellent.",
    verified: true,
    company: "Boutique Élégance",
    service: "Intégration MonCash",
  },
  {
    name: "Roberto Charles",
    avatar: "RC",
    text: "Notre festival a utilisé leur système de billetterie QR Code. Zero fraude, validation instantanée. Je recommande à 100%!",
    verified: false,
    company: "Événements Plus",
    service: "Billetterie QR",
  },
  {
    name: "Sophia Jean-Louis",
    avatar: "SJ",
    text: "Enfin une équipe tech qui comprend le marché haïtien. Leur expertise MonCash est inégalée au Cap-Haïtien.",
    verified: true,
    company: "SJ Fashion",
    service: "Site E-commerce",
  },
  {
    name: "Emmanuel Pierre",
    avatar: "EP",
    text: "Site web livré en 2 semaines, rapide et moderne. G&D Digital Studio c'est le futur du digital en Haïti.",
    verified: false,
    company: "Pierre & Fils",
    service: "Site Web",
  },
  {
    name: "Carole Estimé",
    avatar: "CE",
    text: "Meilleure décision pour notre boutique en ligne. L'équipe est réactive et le résultat dépasse nos attentes.",
    verified: true,
    company: "Carole's Collections",
    service: "E-commerce",
  },
  {
    name: "Patrick Métellus",
    avatar: "PM",
    text: "Application mobile impeccable pour notre service de livraison. Les clients peuvent commander et payer via MonCash facilement.",
    verified: true,
    company: "Express Delivery HT",
    service: "App Mobile",
  },
  {
    name: "Nathalie Desrosiers",
    avatar: "ND",
    text: "Le dashboard admin qu'ils ont créé nous fait gagner des heures chaque jour. Suivi des commandes en temps réel, c'est génial!",
    verified: true,
    company: "Marché HT",
    service: "Dashboard Admin",
  },
  {
    name: "Yves Saint-Jean",
    avatar: "YS",
    text: "Notre clinique avait besoin d'un système de rendez-vous en ligne. G&D Digital a livré une solution parfaite avec rappels SMS.",
    verified: false,
    company: "Clinique Santé Plus",
    service: "Système RDV",
  },
  {
    name: "Fabienne Toussaint",
    avatar: "FT",
    text: "Le logo et l'identité visuelle qu'ils ont créés pour notre marque sont magnifiques. Très créatifs et professionnels!",
    verified: true,
    company: "Toussaint Beauty",
    service: "Identité Visuelle",
  },
  {
    name: "Marc-André Joseph",
    avatar: "MJ",
    text: "J'ai fait appel à eux pour 3 projets différents. Toujours la même qualité, toujours dans les délais. Partenaire de confiance.",
    verified: true,
    company: "Joseph Imports",
    service: "Multi-projets",
  },
  {
    name: "Guerline Bien-Aimé",
    avatar: "GB",
    text: "Notre école utilise maintenant un portail parents-élèves grâce à G&D Digital. Communication simplifiée, paiements en ligne!",
    verified: false,
    company: "École Excellence",
    service: "Portail Scolaire",
  },
];

export default function TemoignagesPage() {
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
              Témoignages
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ce que disent nos <span className="gradient-text">Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Plus de 50 entreprises nous font confiance en Haïti. Découvrez leurs témoignages.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">50+</p>
              <p className="text-gray-400 text-sm">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">100+</p>
              <p className="text-gray-400 text-sm">Projets livrés</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">5/5</p>
              <p className="text-gray-400 text-sm">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 card-hover"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{testimonial.name}</span>
                      {testimonial.verified && (
                        <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">{testimonial.company}</span>
                  </div>
                </div>

                {/* Service Badge */}
                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full mb-4">
                  {testimonial.service}
                </span>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Rejoignez nos clients satisfaits!
            </h2>
            <p className="text-gray-400 mb-8">
              Commencez votre projet avec nous et bénéficiez de notre expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/commander"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:scale-105 transition-transform glow-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Démarrer un Projet
              </Link>
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
