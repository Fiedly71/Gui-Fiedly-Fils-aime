"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Combien coûte un site web ?",
    answer: "À partir de 500 USD pour un site vitrine, 1,500 USD pour e-commerce.",
  },
  {
    question: "Combien de temps pour créer un site ?",
    answer: "1-2 semaines pour un site vitrine, 2-4 semaines pour e-commerce.",
  },
  {
    question: "L'hébergement est-il inclus ?",
    answer: "Oui, première année offerte. Ensuite 50-150 USD/an.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
        </div>

        {/* Compact FAQ Items */}
        <div className="space-y-2 md:space-y-3 mb-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium text-sm md:text-base pr-4">{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
                <p className="px-4 md:px-6 pb-3 md:pb-4 text-gray-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir toutes les questions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
