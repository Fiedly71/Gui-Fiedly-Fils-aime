import Link from "next/link";

const featuredServices = [
  { icon: "💳", title: "MonCash", desc: "Paiements mobiles" },
  { icon: "🎫", title: "Billetterie", desc: "Événements" },
  { icon: "🛒", title: "E-commerce", desc: "Boutiques en ligne" },
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Nos <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Digitalisez votre entreprise en Haïti
          </p>
        </div>

        {/* Services Preview - 3 items */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 md:p-6 text-center card-hover group"
            >
              <span className="text-2xl md:text-3xl block mb-2">{service.icon}</span>
              <p className="text-white text-xs md:text-sm font-medium">{service.title}</p>
              <span className="text-gray-400 text-[10px] md:text-xs">{service.desc}</span>
            </div>
          ))}
        </div>

        {/* +3 indicator */}
        <div className="flex justify-center mb-6">
          <div className="glass rounded-xl px-4 py-2 text-gray-400 text-xs">
            +3 autres solutions
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link 
            href="/solutions"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir toutes nos solutions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
