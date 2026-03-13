import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Solutions | G&D Digital Studio",
  description: "Découvrez nos solutions digitales: intégration MonCash, billetterie QR Code, e-commerce, développement web et mobile pour les entreprises en Haïti.",
};

const services = [
  {
    image: "/images/pic/mc.png",
    title: "Intégration MonCash",
    description: "Experts dans l'intégration de systèmes de paiement locaux, permettant à vos clients de payer via MonCash en toute simplicité. Notre solution est sécurisée, rapide et facile à intégrer.",
    features: ["Paiement sécurisé SSL", "Transactions en temps réel", "Tableau de bord admin", "Notifications SMS", "Support 24/7", "API robuste"],
    price: "À partir de 15,000 HTG",
    icon: "💳",
  },
  {
    image: "/images/pic/bi.jpg",
    title: "Billetterie QR Code",
    description: "Plateformes de billetterie sécurisées avec génération de tickets par QR Code unique pour vos événements. Fini la fraude et les tickets contrefaits!",
    features: ["QR Code unique", "Validation instantanée", "Anti-fraude intégré", "Statistiques live", "Paiement MonCash", "Multi-événements"],
    price: "À partir de 25,000 HTG",
    icon: "🎫",
  },
  {
    image: "/images/pic/e.jpg",
    title: "E-commerce & Restauration",
    description: "Interfaces de commande en ligne pour la restauration, incluant la gestion des adresses de livraison et le suivi en temps réel. Augmentez vos ventes!",
    features: ["Commande en ligne", "Suivi livraison GPS", "Gestion menu facile", "Panier intelligent", "Historique commandes", "Notifications push"],
    price: "À partir de 35,000 HTG",
    icon: "🛒",
  },
  {
    image: "/images/pic/u.jpg",
    title: "Développement Web Moderne",
    description: "Technologies les plus récentes comme Next.js, React et Tailwind CSS pour garantir des sites ultra-rapides et sécurisés qui se démarquent.",
    features: ["Performance optimale", "SEO friendly", "Design responsive", "PWA support", "Analytics intégrés", "Maintenance incluse"],
    price: "À partir de 20,000 HTG",
    icon: "💻",
  },
  {
    image: "/images/pic/bi.jpg",
    title: "Applications Mobiles",
    description: "Applications mobiles natives et cross-platform pour iOS et Android. Atteignez vos clients directement sur leurs téléphones.",
    features: ["iOS & Android", "Push notifications", "Mode hors-ligne", "Performance native", "Mises à jour OTA", "Support continu"],
    price: "À partir de 50,000 HTG",
    icon: "📱",
  },
  {
    image: "/images/pic/mc.png",
    title: "Identité Visuelle",
    description: "Logos, chartes graphiques et supports marketing pour construire une marque forte et mémorable en Haïti.",
    features: ["Logo professionnel", "Charte graphique", "Cartes de visite", "Réseaux sociaux", "Flyers & affiches", "Brand guidelines"],
    price: "À partir de 5,000 HTG",
    icon: "🎨",
  },
];

export default function SolutionsPage() {
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
              Nos Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Solutions <span className="gradient-text">Digitales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Des solutions complètes pour digitaliser votre entreprise et conquérir le marché haïtien. 
              Expertise locale, technologies modernes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 md:p-8 card-hover group"
              >
                {/* Icon & Image */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-indigo-400 font-semibold block mb-2">{service.price}</span>
                  <p className="text-gray-500 text-xs mb-4">💡 Le montant choisi détermine le niveau de service</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="/commander"
                      className="flex-1 inline-flex items-center justify-center gap-1 text-white bg-[#635BFF] hover:bg-[#5046e5] px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Commander
                    </a>
                    <a
                      href={`https://wa.me/50932836938?text=${encodeURIComponent(
`📋 *DEMANDE - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Solutions (gdigitalstudio.com/solutions)

${service.icon} *Service:* ${service.title}
💰 *Prix:* ${service.price}

📝 *Description:*
${service.description}

✅ *Fonctionnalités:*
${service.features.map(f => `• ${f}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Ce service m'intéresse. Pouvez-vous me donner plus d'informations?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 text-white bg-green-600 hover:bg-green-500 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      Discuter
                    </a>
                  </div>
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
              Vous avez un projet en tête?
            </h2>
            <p className="text-gray-400 mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`📋 *DEMANDE DEVIS - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Solutions (gdigitalstudio.com/solutions)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! J'ai consulté vos solutions et j'ai un projet en tête. Je souhaite obtenir un devis personnalisé.

Merci de me contacter pour discuter de mes besoins.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp: +509 32 83 69 38
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                Formulaire de contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
