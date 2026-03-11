"use client";

import Link from "next/link";

const guarantees = [
  { icon: "✓", title: "Satisfaction garantie", color: "text-green-400" },
  { icon: "⏱", title: "30 jours support", color: "text-blue-400" },
  { icon: "🔒", title: "SSL & Sécurité", color: "text-red-400" },
  { icon: "⚡", title: "Performance 90+", color: "text-amber-400" },
];

export default function Guarantees() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Nos <span className="gradient-text">garanties</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Votre tranquillité d&apos;esprit, notre priorité
          </p>
        </div>

        {/* Compact guarantees row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6">
          {guarantees.map((g, index) => (
            <div key={index} className="glass rounded-xl md:rounded-2xl p-3 md:p-5 text-center">
              <span className={`text-2xl md:text-3xl ${g.color} mb-2 block`}>{g.icon}</span>
              <span className="text-white text-xs md:text-sm font-medium">{g.title}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            href="/garanties"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir toutes nos garanties
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
