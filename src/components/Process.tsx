"use client";

import Link from "next/link";

const steps = [
  { number: "01", title: "Consultation", color: "from-blue-500 to-cyan-500" },
  { number: "02", title: "Maquette", color: "from-purple-500 to-pink-500" },
  { number: "03", title: "Développement", color: "from-green-500 to-emerald-500" },
  { number: "04", title: "Tests", color: "from-amber-500 to-orange-500" },
  { number: "05", title: "Livraison", color: "from-indigo-500 to-purple-500" },
];

export default function Process() {
  return (
    <section id="processus" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Notre <span className="gradient-text">processus</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            5 étapes simples pour concrétiser votre projet
          </p>
        </div>

        {/* Compact steps - horizontal on mobile */}
        <div className="flex justify-between items-center gap-1 md:gap-4 mb-6 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center min-w-[60px] md:min-w-[100px]">
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs md:text-base font-bold mb-2`}>
                {step.number}
              </div>
              <span className="text-white text-[10px] md:text-sm font-medium text-center">{step.title}</span>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent" style={{ left: '60%', top: '50%' }}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            href="/processus"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir le processus détaillé
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
