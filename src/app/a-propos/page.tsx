import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";

export const metadata = {
  title: "À Propos | G&D Digital Studio - Notre Histoire",
  description: "Découvrez l'histoire de G&D Digital Studio, studio de développement web basé au Cap-Haïtien. Notre mission: démocratiser l'accès aux technologies digitales en Haïti.",
};

const team = [
  {
    name: "Gui-Fiedly Fils-Aimé",
    role: "Fondateur & Lead Developer",
    bio: "Passionné de technologie et entrepreneur, Gui-Fiedly a fondé G&D Digital Studio avec la vision de transformer le paysage digital haïtien.",
    image: "/images/team/founder.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/gui-fiedly-fils-aime-8aab203a8",
      instagram: "https://instagram.com/gd.digital.studio",
    },
  },
];

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description: "Nous adoptons les dernières technologies pour offrir des solutions modernes et performantes.",
  },
  {
    icon: "🤝",
    title: "Proximité",
    description: "Nous travaillons en étroite collaboration avec nos clients, comme de véritables partenaires.",
  },
  {
    icon: "⚡",
    title: "Excellence",
    description: "Chaque projet est traité avec le plus grand soin pour garantir une qualité irréprochable.",
  },
  {
    icon: "🌍",
    title: "Impact local",
    description: "Nous contribuons au développement de l'écosystème digital haïtien.",
  },
];

const milestones = [
  { year: "2023", event: "Création de G&D Digital Studio au Cap-Haïtien" },
  { year: "2023", event: "Premier projet d'intégration MonCash" },
  { year: "2024", event: "Lancement de notre solution de billetterie QR Code" },
  { year: "2024", event: "50+ projets livrés" },
  { year: "2025", event: "Expansion vers la diaspora haïtienne" },
  { year: "2026", event: "Lancement de formations en développement web" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 glass rounded-full text-indigo-400 text-sm font-medium mb-6">
                À Propos de Nous
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Créer l&apos;avenir digital
                <br />
                <span className="gradient-text">d&apos;Haïti</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                G&D Digital Studio est né d&apos;une vision simple : rendre les technologies 
                digitales accessibles à toutes les entreprises haïtiennes, quelle que soit 
                leur taille ou leur budget.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl mb-6">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Notre Mission</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Accompagner les entrepreneurs et entreprises haïtiennes dans leur 
                  transformation digitale en créant des solutions web innovantes, 
                  accessibles et adaptées aux réalités locales.
                </p>
              </div>
              
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-3xl mb-6">
                  🔭
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Notre Vision</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Devenir le partenaire digital de référence en Haïti et pour la diaspora, 
                  en contribuant à l&apos;émergence d&apos;un écosystème technologique 
                  haïtien dynamique et innovant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nos Valeurs
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Les principes qui guident chacune de nos actions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center card-hover">
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Notre Parcours
              </h2>
              <p className="text-gray-400 text-lg">
                Les étapes clés de notre histoire.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1/2 shadow-lg shadow-indigo-500/50"></div>
                    
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="glass rounded-xl p-4 inline-block">
                        <span className="text-indigo-400 font-bold">{milestone.year}</span>
                        <p className="text-white mt-1">{milestone.event}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                L&apos;Équipe
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Les personnes passionnées derrière G&D Digital Studio.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {team.map((member, index) => (
                <div key={index} className="glass rounded-3xl p-8 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.socials.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Discutons de votre projet et voyons comment nous pouvons vous aider.
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
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`👋 *CONTACT DEPUIS À PROPOS - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* À propos (gdigitalstudio.com/a-propos)

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! J'ai lu votre histoire et je suis convaincu(e). Je souhaite travailler avec vous.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
