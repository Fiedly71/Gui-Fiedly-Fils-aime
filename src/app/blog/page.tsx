import Link from "next/link";
import { Header, Footer } from "@/components";

export const metadata = {
  title: "Blog | G&D Digital Studio - Conseils & Actualités",
  description: "Découvrez nos articles sur le développement web, les paiements digitaux en Haïti, et les tendances technologiques.",
};

const blogPosts = [
  {
    slug: "integration-moncash-guide-complet",
    title: "Guide complet : Intégrer MonCash à votre site web",
    excerpt: "Découvrez étape par étape comment intégrer le paiement MonCash à votre site web ou application en Haïti.",
    category: "Tutoriel",
    date: "10 Mars 2026",
    readTime: "8 min",
    image: "/images/blog/moncash.jpg",
  },
  {
    slug: "pourquoi-site-web-entreprise-haiti",
    title: "Pourquoi votre entreprise haïtienne a besoin d'un site web en 2026",
    excerpt: "Les avantages concrets d'avoir une présence en ligne pour les entreprises en Haïti et comment en tirer profit.",
    category: "Business",
    date: "5 Mars 2026",
    readTime: "5 min",
    image: "/images/blog/business.jpg",
  },
  {
    slug: "tendances-ecommerce-haiti-2026",
    title: "Les tendances e-commerce en Haïti pour 2026",
    excerpt: "Analyse des comportements d'achat en ligne des consommateurs haïtiens et opportunités pour les entrepreneurs.",
    category: "E-commerce",
    date: "28 Février 2026",
    readTime: "6 min",
    image: "/images/blog/ecommerce.jpg",
  },
  {
    slug: "billetterie-digitale-evenements",
    title: "Comment la billetterie digitale révolutionne les événements en Haïti",
    excerpt: "QR codes, validation instantanée, anti-fraude : découvrez comment organiser des événements professionnels.",
    category: "Événementiel",
    date: "20 Février 2026",
    readTime: "4 min",
    image: "/images/blog/events.jpg",
  },
  {
    slug: "nextjs-vs-wordpress-choix",
    title: "Next.js vs WordPress : Quel choix pour votre site en 2026 ?",
    excerpt: "Comparaison détaillée entre les deux technologies pour vous aider à choisir la meilleure solution.",
    category: "Technologie",
    date: "15 Février 2026",
    readTime: "7 min",
    image: "/images/blog/tech.jpg",
  },
  {
    slug: "paiements-digitaux-diaspora",
    title: "Faciliter les paiements de la diaspora vers Haïti",
    excerpt: "Les solutions modernes pour permettre à la diaspora haïtienne de payer facilement des services en Haïti.",
    category: "Paiements",
    date: "10 Février 2026",
    readTime: "5 min",
    image: "/images/blog/diaspora.jpg",
  },
];

const categories = ["Tous", "Tutoriel", "Business", "E-commerce", "Événementiel", "Technologie", "Paiements"];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 glass rounded-full text-cyan-400 text-sm font-medium mb-6">
                Blog & Ressources
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Conseils &
                <br />
                <span className="gradient-text">Actualités</span>
              </h1>
              <p className="text-xl text-gray-400">
                Articles, tutoriels et insights sur le développement web 
                et l&apos;économie digitale en Haïti.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    index === 0
                      ? "bg-indigo-500 text-white"
                      : "glass text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="glass rounded-2xl overflow-hidden card-hover group">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📝</span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-indigo-400 text-sm font-medium hover:underline"
                      >
                        Lire l&apos;article →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all">
                Charger plus d&apos;articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ne manquez aucun article
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos derniers conseils et actualités.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-white/90 transition-all"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
