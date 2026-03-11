import Image from "next/image";
import Link from "next/link";

const featuredFeatures = [
  {
    title: "MonCash",
    tag: "Paiement",
    image: "/images/pic/mc.png",
  },
  {
    title: "Billetterie QR",
    tag: "Événements",
    image: "/images/pic/bi.jpg",
  },
  {
    title: "E-commerce",
    tag: "Boutique",
    image: "/images/pic/e.jpg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Nos <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Frontend, Backend & Admin inclus
          </p>
        </div>

        {/* Features Preview - 3 items */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          {featuredFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative aspect-square md:aspect-video overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 md:p-3">
                  <div>
                    <p className="text-white text-xs md:text-sm font-medium truncate">{feature.title}</p>
                    <span className="text-indigo-300 text-[10px] md:text-xs">{feature.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* +1 indicator */}
        <div className="flex justify-center mb-6">
          <div className="glass rounded-xl px-4 py-2 text-gray-400 text-xs">
            +1 autre solution
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
