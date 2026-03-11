const technologies = [
  { name: "Next.js", color: "text-white" },
  { name: "React", color: "text-cyan-400" },
  { name: "Tailwind CSS", color: "text-cyan-300" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "MonCash API", color: "text-yellow-400" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "Vercel", color: "text-white" },
];

const stats = [
  { value: "50+", label: "Projets Réalisés" },
  { value: "30+", label: "Clients Satisfaits" },
  { value: "99%", label: "Disponibilité" },
  { value: "24/7", label: "Support" },
];

export default function TrustBadges() {
  return (
    <section className="py-10 md:py-16 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust text */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-gray-400 text-base md:text-lg">
            <span className="text-white font-semibold">+50 Projets</span> réalisés avec les technologies modernes
          </p>
        </div>

        {/* Marquee logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-4 sm:mx-8 flex-shrink-0"
              >
                <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 glass rounded-xl">
                  <div className={`w-3 h-3 rounded-full ${tech.color.replace('text-', 'bg-')}`}></div>
                  <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - Desktop grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Stats - Mobile marquee */}
        <div className="md:hidden mt-10 relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm whitespace-nowrap">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
