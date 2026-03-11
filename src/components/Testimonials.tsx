import Link from "next/link";

const testimonials = [
  {
    name: "Jean-Pierre D.",
    avatar: "JP",
    text: "GF Digital Studio a transformé notre restaurant. Les ventes ont augmenté de 40%!",
    company: "Restaurant Lakay",
  },
  {
    name: "Marie-Claire B.",
    avatar: "MB",
    text: "L'intégration MonCash était exactement ce dont nous avions besoin. Excellent!",
    company: "Boutique Élégance",
  },
  {
    name: "Roberto C.",
    avatar: "RC",
    text: "Système de billetterie QR parfait. Zero fraude, validation instantanée!",
    company: "Événements Plus",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="gradient-text">Témoignages</span>
          </h2>
          <p className="text-gray-400 text-sm">
            +50 entreprises nous font confiance
          </p>
        </div>

        {/* Compact Grid - 3 testimonials */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-6">
          <Link 
            href="/temoignages"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir tous les témoignages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
