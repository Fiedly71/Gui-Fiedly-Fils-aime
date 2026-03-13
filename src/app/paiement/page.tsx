import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paiement | G&D Digital Studio",
  description: "Payez vos services en toute sécurité via Stripe. Visa, Mastercard, Apple Pay acceptés.",
};

const paymentMethod = {
  name: "Commander un Service",
  description: "Remplissez le formulaire pour choisir votre service et montant",
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  color: "bg-[#635BFF]",
  hoverColor: "hover:bg-[#5046e5]",
  link: "/commander",
};

const packages = [
  { name: "Logo simple", price: "5,000 HTG", usd: "~$40 USD" },
  { name: "Site vitrine", price: "15,000 HTG", usd: "~$115 USD" },
  { name: "Site E-commerce", price: "35,000 HTG", usd: "~$270 USD" },
  { name: "Intégration MonCash", price: "15,000 HTG", usd: "~$115 USD" },
  { name: "Billetterie QR", price: "25,000 HTG", usd: "~$190 USD" },
  { name: "Application Mobile", price: "50,000 HTG", usd: "~$385 USD" },
];

export default function PaiementPage() {
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
              💳 Paiement Sécurisé
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Payer en <span className="gradient-text">toute sécurité</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Remplissez le formulaire pour commander votre service.
              Le montant que vous choisissez détermine le niveau de service que vous recevrez.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-indigo-500/20 border border-indigo-500/30 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="text-white font-semibold mb-1">Service adapté à votre budget</h4>
                <p className="text-indigo-200 text-sm">
                  Vous choisissez librement le montant à payer. Plus votre investissement est important, 
                  plus votre service sera complet et personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Method */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={paymentMethod.link}
            className="glass rounded-2xl p-8 card-hover group block"
          >
            <div className={`w-16 h-16 ${paymentMethod.color} ${paymentMethod.hoverColor} rounded-2xl flex items-center justify-center text-white mb-6 transition-colors mx-auto`}>
              {paymentMethod.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">{paymentMethod.name}</h3>
            <p className="text-gray-400 mb-4 text-center">{paymentMethod.description}</p>
            
            {/* Card Icons */}
            <div className="flex justify-center gap-2 mb-6">
              <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg">Visa</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg">Mastercard</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg">Amex</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg">Apple Pay</span>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-[#635BFF] hover:bg-[#5046e5] text-white font-medium px-6 py-3 rounded-xl transition-colors justify-center w-full">
              Remplir le formulaire
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
          
          {/* WhatsApp Option */}
          <a
            href={`https://wa.me/50932836938?text=${encodeURIComponent(
`💳 *DEMANDE PAIEMENT - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Paiement (gdigitalstudio.com/paiement)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Je souhaite discuter des options de paiement avant de commander.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 glass rounded-2xl p-6 card-hover group block text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Préférez discuter avant ?</p>
                <p className="text-gray-400 text-sm">Contactez-nous sur WhatsApp</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Packages Reference */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Référence des tarifs
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-white font-medium mb-1">{pkg.name}</p>
                  <p className="text-indigo-400 font-bold">{pkg.price}</p>
                  <p className="text-gray-500 text-sm">{pkg.usd}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              * Les prix peuvent varier selon les spécifications du projet
            </p>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Paiement 100% sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Cryptage SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Visa, Mastercard, Amex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Besoin d'aide pour payer?
            </h2>
            <p className="text-gray-400 mb-8">
              Contactez-nous pour discuter des options de paiement ou obtenir une facture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`🆘 *AIDE PAIEMENT - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Paiement - Besoin d'aide (gdigitalstudio.com/paiement)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! J'ai besoin d'aide pour effectuer un paiement. Pouvez-vous m'assister?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:isteah.gffilsaime@gmail.com?subject=Demande de paiement"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
