import Link from "next/link";
import { Header, Footer } from "@/components";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Politique de <span className="gradient-text">Confidentialité</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-400 mb-6">
              Dernière mise à jour : Mars 2026
            </p>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                G&D Digital Studio (&quot;nous&quot;, &quot;notre&quot;, &quot;nos&quot;) s&apos;engage à protéger la vie privée de ses utilisateurs. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons 
                vos informations personnelles lorsque vous visitez notre site web ou utilisez nos services.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">2. Informations que nous collectons</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous pouvons collecter les types d&apos;informations suivants :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Informations personnelles :</strong> Nom, adresse e-mail, numéro de téléphone, nom de l&apos;entreprise</li>
                <li><strong>Informations de paiement :</strong> Détails de transaction MonCash ou carte bancaire (traitées de manière sécurisée par nos partenaires de paiement)</li>
                <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées, durée de visite</li>
                <li><strong>Informations de projet :</strong> Détails fournis via nos formulaires de demande de service</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Utilisation des informations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Fournir et améliorer nos services de développement web</li>
                <li>Communiquer avec vous concernant vos projets</li>
                <li>Traiter les paiements et les transactions</li>
                <li>Envoyer des mises à jour importantes sur nos services</li>
                <li>Répondre à vos demandes et questions</li>
                <li>Améliorer l&apos;expérience utilisateur sur notre site</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Partage des informations</h2>
              <p className="text-gray-300 leading-relaxed">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement avec :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li><strong>Partenaires de paiement :</strong> Stripe pour le traitement sécurisé des paiements par carte</li>
                <li><strong>Services d&apos;hébergement :</strong> Vercel, pour héberger les sites que nous créons</li>
                <li><strong>Obligations légales :</strong> Si requis par la loi haïtienne ou internationale</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Sécurité des données</h2>
              <p className="text-gray-300 leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles, 
                notamment le cryptage SSL/TLS, des serveurs sécurisés et des pratiques de stockage conformes aux normes 
                de l&apos;industrie. Cependant, aucune méthode de transmission sur Internet n&apos;est 100% sécurisée.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Vos droits</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vous avez le droit de :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Accéder à vos données personnelles</li>
                <li>Demander la correction de données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">7. Conservation des données</h2>
              <p className="text-gray-300 leading-relaxed">
                Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services 
                ou pour respecter nos obligations légales. Les données de projet sont généralement conservées pendant 
                3 ans après la fin du projet pour référence et support.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, 
                contactez-nous à :
              </p>
              <div className="mt-4 text-gray-300">
                <p><strong>Email :</strong> isteah.gffilsaime@gmail.com</p>
                <p><strong>Téléphone :</strong> +509 32 83 69 38</p>
                <p><strong>Adresse :</strong> Cap-Haïtien, Haïti</p>
              </div>
            </section>

            <div className="flex gap-4 mt-8">
              <Link href="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                ← Retour à l&apos;accueil
              </Link>
              <Link href="/cookies" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Politique de cookies →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
