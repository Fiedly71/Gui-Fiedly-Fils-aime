import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components";

const technologies = [
  { name: "Next.js", color: "text-white", bg: "bg-black" },
  { name: "React", color: "text-cyan-400", bg: "bg-cyan-950" },
  { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-950" },
  { name: "Tailwind CSS", color: "text-cyan-300", bg: "bg-cyan-900" },
  { name: "Node.js", color: "text-green-400", bg: "bg-green-950" },
  { name: "PostgreSQL", color: "text-blue-300", bg: "bg-blue-900" },
];

const features = [
  {
    title: "Performance optimale",
    description: "Sites ultra-rapides avec score Google PageSpeed 90+.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "SEO optimisé",
    description: "Référencement naturel pour être visible sur Google Haïti.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "100% Responsive",
    description: "Design parfait sur mobile, tablette et ordinateur.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sécurité HTTPS",
    description: "Certificat SSL gratuit et sécurité renforcée.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Hébergement inclus",
    description: "1 an d'hébergement gratuit avec chaque site.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Code source fourni",
    description: "Vous recevez tous les fichiers de code source.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const recentProjects = [
  {
    name: "UpToDate Electronic",
    url: "uptodateelectronic.com",
    image: "/images/projects/u.jpg",
  },
  {
    name: "Sparkllex",
    url: "sparkllex.com",
    image: "/images/projects/n.jpg",
  },
  {
    name: "UpNext Growth",
    url: "upnextgrowth.vercel.app",
    image: "/images/projects/b.jpg",
  },
];

export default function WebDevPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 glass rounded-full text-green-400 text-sm font-medium mb-6">
                  Développement moderne
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Sites Web
                  <br />
                  <span className="text-green-400">Ultra-Performants</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Technologies de pointe comme Next.js, React et Tailwind CSS pour des sites web 
                  rapides, sécurisés et optimisés pour le SEO haïtien.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/tarifs"
                    className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
                  >
                    Voir les tarifs
                  </Link>
                  <a
                    href={`https://wa.me/50932836938?text=${encodeURIComponent(
`🌐 *DEMANDE CRÉATION SITE WEB - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Services - Création de sites web (gdigitalstudio.com/services/web)

📦 *Service:* Création de site web professionnel

✅ *Ce que je recherche:*
• Un site moderne et responsive
• Design personnalisé
• Optimisé pour mobile
• Intégration réseaux sociaux

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Je souhaite créer un site web pour mon entreprise. Pouvez-vous me contacter pour discuter de mon projet?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all inline-flex items-center gap-2"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl"></div>
                  <div className="absolute inset-4 glass rounded-2xl flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/pic/u.jpg" 
                      alt="Site Ultra Performant" 
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

        {/* Technologies */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 mb-8">Technologies que nous maîtrisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`${tech.bg} px-6 py-3 rounded-xl flex items-center gap-2`}
                >
                  <div className={`w-2 h-2 rounded-full ${tech.color.replace('text-', 'bg-')}`}></div>
                  <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ce qui est inclus
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Chaque site que nous créons est optimisé pour la performance et le SEO
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-green-900/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nos créations récentes
              </h2>
              <p className="text-gray-400">
                Visitez les sites que nous avons récemment développés
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <a
                  key={index}
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1">{project.name}</h3>
                    <p className="text-green-400 text-sm">{project.url}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à avoir votre site web?
            </h2>
            <p className="text-gray-400 mb-8">
              En Haïti, 75% des entreprises perdent des clients car elles n&apos;ont pas de présence web. 
              Ne faites pas cette erreur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tarifs"
                className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-primary"
              >
                Voir les tarifs
              </Link>
              <a
                href={`https://wa.me/50932836938?text=${encodeURIComponent(
`🌐 *JE VEUX UN SITE WEB - G&D Digital Studio*
━━━━━━━━━━━━━━━━━━━━━━

📍 *Page:* Services - Création de sites web

━━━━━━━━━━━━━━━━━━━━━━

Bonjour! Je suis convaincu(e) et je veux créer mon site web avec vous. Contactez-moi pour démarrer!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-500/10 transition-all"
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
