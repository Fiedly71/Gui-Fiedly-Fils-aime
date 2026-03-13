"use client";

import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    name: "Tarifs & Paiements",
    icon: "💰",
    faqs: [
      {
        question: "Combien coûte un site web?",
        answer: "Nos tarifs varient selon la complexité du projet: Site vitrine à partir de 500 USD, Site e-commerce à partir de 1,500 USD, Application web sur mesure à partir de 3,000 USD. Contactez-nous pour un devis personnalisé gratuit.",
      },
      {
        question: "Quels modes de paiement acceptez-vous?",
        answer: "Nous acceptons Stripe (cartes Visa/Mastercard) pour les paiements internationaux. Contactez-nous via WhatsApp pour finaliser votre paiement. Nous proposons un paiement en 2 fois: 50% à la signature, 50% à la livraison.",
      },
      {
        question: "Y a-t-il des frais cachés?",
        answer: "Non, absolument pas. Le devis que nous fournissons est complet et détaillé. Il inclut le développement, les révisions, et la première année d'hébergement. Tout frais supplémentaire éventuel sera discuté et approuvé avant.",
      },
      {
        question: "L'hébergement est-il inclus?",
        answer: "Oui, la première année d'hébergement est offerte. Ensuite, les frais d'hébergement varient de 50 à 150 USD par an selon la taille et le trafic de votre site.",
      },
      {
        question: "Proposez-vous des facilités de paiement?",
        answer: "Oui, pour les projets de plus de 1,000 USD, nous pouvons proposer un paiement en 3 ou 4 fois sans frais supplémentaires. Discutons-en ensemble.",
      },
    ],
  },
  {
    name: "Développement",
    icon: "💻",
    faqs: [
      {
        question: "Combien de temps pour créer un site?",
        answer: "Les délais dépendent du type de projet: Site vitrine 1-2 semaines, Site e-commerce 2-4 semaines, Application web 4-8 semaines. Nous fournissons un planning détaillé dès le début du projet.",
      },
      {
        question: "Quelles technologies utilisez-vous?",
        answer: "Nous utilisons les technologies les plus modernes: Next.js 14, React 18, TypeScript, Tailwind CSS pour le frontend. Node.js, MongoDB, PostgreSQL pour le backend. Voir notre page Technologies pour plus de détails.",
      },
      {
        question: "Mon site sera-t-il responsive (mobile)?",
        answer: "Oui, absolument! Tous nos sites sont conçus 'mobile-first' et s'adaptent parfaitement à tous les écrans: smartphones, tablettes et ordinateurs.",
      },
      {
        question: "Puis-je voir l'avancement de mon projet?",
        answer: "Oui, vous avez accès à un lien de prévisualisation pendant tout le développement. Vous pouvez suivre l'avancement en temps réel et donner vos retours.",
      },
      {
        question: "Puis-je demander des modifications après la livraison?",
        answer: "Oui, vous bénéficiez de 30 jours de support gratuit après la livraison pour les ajustements mineurs et corrections de bugs. Au-delà, nous proposons des forfaits de maintenance.",
      },
    ],
  },
  {
    name: "MonCash & Paiements",
    icon: "💳",
    faqs: [
      {
        question: "Comment fonctionne l'intégration MonCash?",
        answer: "Nous intégrons l'API MonCash de Digicel à votre site. Vos clients peuvent payer directement via leur compte MonCash. Vous recevez les paiements sur votre compte MonCash business.",
      },
      {
        question: "Faut-il un compte MonCash business?",
        answer: "Oui, pour recevoir des paiements, vous avez besoin d'un compte MonCash business. Nous pouvons vous accompagner dans les démarches d'ouverture si nécessaire.",
      },
      {
        question: "MonCash prend-il des frais?",
        answer: "Oui, MonCash prélève une commission sur chaque transaction (généralement 1-2%). Ces frais sont fixés par Digicel, pas par nous.",
      },
      {
        question: "Pouvez-vous intégrer d'autres moyens de paiement?",
        answer: "Oui! Nous intégrons aussi Stripe, PayPal, et les cartes bancaires pour les paiements internationaux. Nous pouvons combiner plusieurs méthodes de paiement.",
      },
    ],
  },
  {
    name: "Support & Maintenance",
    icon: "🛠️",
    faqs: [
      {
        question: "Que comprend le support de 30 jours?",
        answer: "Le support gratuit de 30 jours inclut: correction de bugs, ajustements mineurs, formation à l'utilisation, réponse à vos questions. Réponse garantie sous 24h.",
      },
      {
        question: "Proposez-vous des forfaits de maintenance?",
        answer: "Oui, nous proposons des forfaits mensuels de maintenance à partir de 50 USD/mois incluant: mises à jour de sécurité, sauvegardes, support prioritaire, et modifications mineures.",
      },
      {
        question: "Que faire si mon site a un problème urgent?",
        answer: "Contactez-nous immédiatement via WhatsApp. Pour les clients avec forfait maintenance, nous garantissons une intervention sous 4h pour les urgences.",
      },
      {
        question: "Puis-je gérer mon site moi-même?",
        answer: "Oui! Nous livrons toujours un panneau d'administration facile à utiliser. Nous fournissons aussi une formation et une documentation pour que vous soyez autonome.",
      },
    ],
  },
  {
    name: "Général",
    icon: "❓",
    faqs: [
      {
        question: "Où êtes-vous basés?",
        answer: "Nous sommes basés au Cap-Haïtien, Haïti. Nous travaillons avec des clients dans toute Haïti et à l'international (diaspora, Caraïbes).",
      },
      {
        question: "Travaillez-vous à distance?",
        answer: "Oui, nous travaillons principalement à distance via WhatsApp, appels vidéo et emails. Nous pouvons aussi organiser des rencontres en personne au Cap-Haïtien.",
      },
      {
        question: "Dois-je fournir le contenu (textes, images)?",
        answer: "Idéalement oui, car vous connaissez mieux votre entreprise. Cependant, nous pouvons vous aider à rédiger le contenu et fournir des images de stock si nécessaire.",
      },
      {
        question: "Le code source m'appartient-il?",
        answer: "Oui, vous êtes propriétaire à 100% du code source de votre projet. Nous vous fournissons l'accès complet au code et à la documentation.",
      },
      {
        question: "Pouvez-vous refaire un site existant?",
        answer: "Oui, nous réalisons régulièrement des refontes de sites existants. Nous pouvons migrer votre contenu et améliorer le design et les performances.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

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
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Questions <span className="gradient-text">Fréquentes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos services, 
              tarifs, et processus de travail.
            </p>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenQuestion(0);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === index
                    ? "gradient-bg text-white glow-primary"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                <span>{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-2xl">{faqCategories[activeCategory].icon}</span>
            {faqCategories[activeCategory].name}
          </h2>
          
          <div className="space-y-3">
            {faqCategories[activeCategory].faqs.map((faq, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-5 pb-4 text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="text-4xl mb-4">🤔</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous n'avez pas trouvé votre réponse?
            </h2>
            <p className="text-gray-400 mb-8">
              Contactez-nous directement, nous répondons sous 24h maximum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`❓ *QUESTION - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* FAQ (gdigitalstudio.com/faq)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! J'ai lu la FAQ mais j'ai encore une question. Pouvez-vous m'aider?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp: +509 32 83 69 38
              </a>
              <a
                href="mailto:contact@gfdigitalstudio.com"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
