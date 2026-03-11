import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stack Technique | GF Digital Studio",
  description: "Découvrez les technologies modernes que nous utilisons: Next.js, React, Node.js, MongoDB, et plus. Solutions complètes pour votre projet digital en Haïti.",
};

const frontendTech = [
  { name: "Next.js 14", description: "Framework React avec rendu côté serveur", icon: "⚡" },
  { name: "React 18", description: "Bibliothèque UI la plus populaire", icon: "⚛️" },
  { name: "TypeScript", description: "JavaScript typé pour moins de bugs", icon: "📘" },
  { name: "Tailwind CSS", description: "Styles utilitaires modernes", icon: "🎨" },
  { name: "Framer Motion", description: "Animations fluides et élégantes", icon: "✨" },
  { name: "PWA", description: "Applications web progressives", icon: "📱" },
];

const backendTech = [
  { name: "Node.js", description: "Environnement JavaScript côté serveur", icon: "🟢" },
  { name: "Express.js", description: "Framework web minimaliste", icon: "🚀" },
  { name: "MongoDB", description: "Base de données NoSQL flexible", icon: "🍃" },
  { name: "PostgreSQL", description: "Base de données relationnelle robuste", icon: "🐘" },
  { name: "Prisma", description: "ORM moderne pour TypeScript", icon: "💎" },
  { name: "REST & GraphQL", description: "APIs performantes et flexibles", icon: "🔗" },
];

const devopsTech = [
  { name: "Vercel", description: "Déploiement instantané Next.js", icon: "▲" },
  { name: "Docker", description: "Conteneurisation des applications", icon: "🐳" },
  { name: "GitHub Actions", description: "CI/CD automatisé", icon: "🔄" },
  { name: "Cloudflare", description: "CDN et protection DDoS", icon: "☁️" },
  { name: "AWS S3", description: "Stockage fichiers et médias", icon: "📦" },
  { name: "SSL/TLS", description: "Certificats de sécurité HTTPS", icon: "🔒" },
];

const integrations = [
  { name: "MonCash API", description: "Paiement mobile haïtien #1", icon: "💳", highlight: true },
  { name: "Stripe", description: "Paiements internationaux", icon: "💰" },
  { name: "Twilio SMS", description: "Notifications SMS", icon: "📲" },
  { name: "SendGrid", description: "Emails transactionnels", icon: "✉️" },
  { name: "Google Analytics", description: "Suivi du trafic", icon: "📊" },
  { name: "WhatsApp API", description: "Messagerie business", icon: "💬" },
];

export default function TechPage() {
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
              Technologies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre <span className="gradient-text">Stack Technique</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies modernes et éprouvées pour des applications 
              performantes, sécurisées et évolutives.
            </p>
          </div>
        </div>
      </section>

      {/* Frontend */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frontend</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {frontendTech.map((tech, index) => (
              <div key={index} className="glass rounded-xl p-5 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Backend & Base de données</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {backendTech.map((tech, index) => (
              <div key={index} className="glass rounded-xl p-5 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">DevOps & Infrastructure</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {devopsTech.map((tech, index) => (
              <div key={index} className="glass rounded-xl p-5 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Intégrations & APIs</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {integrations.map((tech, index) => (
              <div key={index} className={`glass rounded-xl p-5 card-hover ${tech.highlight ? 'ring-2 ring-indigo-500/50' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  {tech.highlight && (
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">Populaire</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Besoin d'une solution technique?
            </h2>
            <p className="text-gray-400 mb-8">
              Discutons de votre projet et trouvons les meilleures technologies pour vos besoins.
            </p>
            <a
              href="https://wa.me/50932836938?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20mon%20projet%20technique."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:scale-105 transition-transform glow-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
