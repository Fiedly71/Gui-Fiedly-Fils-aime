import Link from "next/link";
import { Header, Footer } from "@/components";

export default function ConditionsUtilisationPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Conditions Générales <span className="gradient-text">d&apos;Utilisation</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-400 mb-6">
              Dernière mise à jour : Mars 2026
            </p>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptation des conditions</h2>
              <p className="text-gray-300 leading-relaxed">
                En accédant et en utilisant le site web de G&D Digital Studio, vous acceptez d&apos;être lié par ces 
                Conditions Générales d&apos;Utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas 
                utiliser notre site ou nos services.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">2. Services proposés</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                G&D Digital Studio propose les services suivants :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Création de sites web vitrine et e-commerce</li>
                <li>Intégration de systèmes de paiement (MonCash, Stripe)</li>
                <li>Développement de plateformes de billetterie avec QR Code</li>
                <li>Création de logos et supports graphiques</li>
                <li>Maintenance et hébergement de sites web</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Processus de commande</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>3.1 Demande de devis :</strong> Les demandes peuvent être soumises via notre formulaire en ligne ou par WhatsApp.</p>
                <p><strong>3.2 Validation :</strong> Après discussion des besoins, un devis détaillé vous sera fourni.</p>
                <p><strong>3.3 Acompte :</strong> Un acompte de 50% est requis pour démarrer tout projet.</p>
                <p><strong>3.4 Livraison :</strong> Le solde est dû à la livraison finale du projet.</p>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Paiements</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les modes de paiement acceptés sont :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Stripe :</strong> Visa, Mastercard, Amex (lien de paiement sécurisé)</li>
                <li><strong>WhatsApp :</strong> Contactez-nous au +509 32 83 69 38 pour discuter du paiement</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Délais de livraison</h2>
              <p className="text-gray-300 leading-relaxed">
                Les délais de livraison varient selon la complexité du projet. Un calendrier sera établi 
                lors de la validation du devis. Les retards dus à des éléments non fournis par le client 
                (textes, images, validations) prolongeront les délais initiaux.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Propriété intellectuelle</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>6.1</strong> À la réception du paiement complet, tous les droits sur les livrables (code source, designs) vous sont transférés.</p>
                <p><strong>6.2</strong> G&D Digital Studio se réserve le droit d&apos;afficher les projets réalisés dans son portfolio, sauf demande contraire écrite.</p>
                <p><strong>6.3</strong> Vous garantissez que tout contenu fourni (textes, images, logos) ne viole pas les droits de tiers.</p>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">7. Révisions et modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                Chaque projet inclut un nombre défini de révisions (généralement 2-3). Les modifications 
                supplémentaires ou changements majeurs après validation peuvent entraîner des frais 
                additionnels convenus à l&apos;avance.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">8. Garantie et support</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>8.1</strong> Un support technique gratuit de 30 jours est inclus après la livraison pour corriger tout bug.</p>
                <p><strong>8.2</strong> L&apos;hébergement inclus dans certains packs est valable pour 1 an. Le renouvellement est à la charge du client.</p>
                <p><strong>8.3</strong> Nous ne sommes pas responsables des problèmes causés par des modifications effectuées par des tiers.</p>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">9. Annulation et remboursement</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>9.1</strong> L&apos;acompte initial n&apos;est pas remboursable une fois le travail commencé.</p>
                <p><strong>9.2</strong> En cas d&apos;annulation avant le début du projet, l&apos;acompte peut être remboursé à 80%.</p>
                <p><strong>9.3</strong> Les paiements pour les services d&apos;hébergement ne sont pas remboursables.</p>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">10. Limitation de responsabilité</h2>
              <p className="text-gray-300 leading-relaxed">
                G&D Digital Studio ne peut être tenu responsable des pertes indirectes, y compris les pertes 
                de profits, de données ou d&apos;opportunités commerciales résultant de l&apos;utilisation ou de 
                l&apos;impossibilité d&apos;utiliser nos services.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">11. Loi applicable</h2>
              <p className="text-gray-300 leading-relaxed">
                Ces conditions sont régies par les lois de la République d&apos;Haïti. Tout litige sera soumis 
                à la juridiction des tribunaux compétents du Cap-Haïtien, Haïti.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">12. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Pour toute question concernant ces conditions :
              </p>
              <div className="mt-4 text-gray-300">
                <p><strong>Email :</strong> isteah.gffilsaime@gmail.com</p>
                <p><strong>WhatsApp :</strong> +509 32 83 69 38</p>
                <p><strong>Adresse :</strong> Cap-Haïtien, Haïti</p>
              </div>
            </section>

            <div className="flex gap-4 mt-8">
              <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                ← Retour à l&apos;accueil
              </Link>
              <Link href="/politique-confidentialite" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Politique de confidentialité →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
