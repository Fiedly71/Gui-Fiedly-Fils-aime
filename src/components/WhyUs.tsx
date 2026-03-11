const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance Garantie",
    description: "Sites ultra-rapides optimisés pour le marché haïtien avec une excellente disponibilité.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Partenariat Stratégique",
    description: "Au-delà du code, nous sommes des facilitateurs de croissance pour votre entreprise.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Support Continu",
    description: "Support technique continu pour maintenir la stabilité de vos serveurs et outils digitaux.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Sécurité Avancée",
    description: "Protection des données et transactions sécurisées pour tous vos projets.",
  },
];

const stats = [
  { value: "50+", label: "Projets Réalisés" },
  { value: "30+", label: "Clients Satisfaits" },
  { value: "99%", label: "Disponibilité" },
  { value: "24/7", label: "Support" },
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Pourquoi Nous Choisir
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Plus qu&apos;un prestataire,
              <br />
              <span className="gradient-text">votre partenaire digital</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Au-delà du code, nous sommes des facilitateurs de croissance. Que ce soit 
              à travers des partenariats stratégiques ou du support technique continu, 
              nous nous engageons à maintenir la stabilité de vos serveurs et la 
              performance de vos outils digitaux sur le long terme.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="gradient-bg rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-8">Nos Chiffres Parlent</h3>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/90 text-center">
                &quot;Notre mission est de transformer chaque entreprise haïtienne en 
                une success story digitale.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
