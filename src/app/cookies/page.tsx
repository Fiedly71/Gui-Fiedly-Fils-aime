import Link from "next/link";
import { Header, Footer } from "@/components";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Politique de <span className="gradient-text">Cookies</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-400 mb-6">
              Dernière mise à jour : Mars 2026
            </p>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p className="text-gray-300 leading-relaxed">
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette ou smartphone) 
                lorsque vous visitez un site web. Les cookies permettent au site de reconnaître votre appareil et 
                de mémoriser certaines informations sur vos préférences ou actions passées.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">2. Types de cookies que nous utilisons</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🔒 Cookies essentiels</h3>
                  <p className="text-gray-300">
                    Ces cookies sont nécessaires au fonctionnement du site. Ils permettent la navigation et 
                    l&apos;utilisation des fonctionnalités de base. Sans ces cookies, le site ne peut pas fonctionner correctement.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 text-sm">
                    <li>Session utilisateur</li>
                    <li>Préférences de consentement aux cookies</li>
                    <li>Sécurité et authentification</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">📊 Cookies analytiques</h3>
                  <p className="text-gray-300">
                    Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site 
                    en collectant des informations de manière anonyme.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 text-sm">
                    <li>Pages visitées</li>
                    <li>Durée des visites</li>
                    <li>Source du trafic</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">⚙️ Cookies fonctionnels</h3>
                  <p className="text-gray-300">
                    Ces cookies permettent de mémoriser vos choix et préférences pour personnaliser votre expérience.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-2 text-sm">
                    <li>Langue préférée</li>
                    <li>Thème d&apos;affichage</li>
                    <li>Formulaires pré-remplis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Durée de conservation</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-300 text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4">Type de cookie</th>
                      <th className="text-left py-3 px-4">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Cookies de session</td>
                      <td className="py-3 px-4">Supprimés à la fermeture du navigateur</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Cookies de consentement</td>
                      <td className="py-3 px-4">12 mois</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4">Cookies analytiques</td>
                      <td className="py-3 px-4">24 mois</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cookies fonctionnels</td>
                      <td className="py-3 px-4">6 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Gérer vos préférences</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vous pouvez contrôler et gérer les cookies de plusieurs manières :
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Via la bannière de cookies :</strong> Lors de votre première visite, vous pouvez accepter ou refuser les cookies non essentiels.</li>
                <li><strong>Via les paramètres de votre navigateur :</strong> Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies.</li>
                <li><strong>Via notre formulaire de contact :</strong> Contactez-nous pour demander la suppression de vos données.</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Paramètres du navigateur</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Voici comment gérer les cookies dans les navigateurs populaires :
              </p>
              <ul className="text-gray-300 space-y-2">
                <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                <li><strong>Edge :</strong> Paramètres → Cookies et autorisations du site</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Impact du refus des cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Si vous choisissez de refuser certains cookies, certaines fonctionnalités du site peuvent être 
                limitées. Les cookies essentiels ne peuvent pas être désactivés car ils sont nécessaires au 
                fonctionnement de base du site.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">7. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                Nous pouvons mettre à jour cette politique de cookies périodiquement. Toute modification sera 
                publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter 
                régulièrement cette page.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Pour toute question concernant notre utilisation des cookies :
              </p>
              <div className="mt-4 text-gray-300">
                <p><strong>Email :</strong> isteah.gffilsaime@gmail.com</p>
                <p><strong>WhatsApp :</strong> +509 32 83 69 38</p>
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
