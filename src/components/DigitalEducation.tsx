"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const topics = [
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Vendez en ligne 24h/24, 7j/7 sans local commercial",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: "🌐",
    title: "Sites Vitrine",
    description: "Présentez votre entreprise au monde entier",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: "📱",
    title: "Applications",
    description: "Atteignez vos clients sur leurs téléphones",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: "💼",
    title: "Business Digital",
    description: "Automatisez et développez votre activité",
    color: "from-purple-500 to-violet-600",
  },
];

const keyBenefits = [
  "Disponible 24h/24",
  "Clientèle mondiale",
  "Coûts réduits",
  "Croissance rapide",
];

export default function DigitalEducation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="apprendre" className="py-12 md:py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 glass rounded-full text-indigo-400 text-xs font-medium mb-4">
            📚 Guide Digital
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Pourquoi passer au <span className="gradient-text">Digital</span> ?
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Découvrez comment le digital peut transformer votre business
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 text-center card-hover"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease-out ${index * 0.1}s, transform 0.4s ease-out ${index * 0.1}s`,
              }}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-2xl`}>
                {topic.icon}
              </div>
              <h3 className="text-white text-sm md:text-base font-semibold mb-1">{topic.title}</h3>
              <p className="text-gray-400 text-[10px] md:text-xs">{topic.description}</p>
            </div>
          ))}
        </div>

        {/* Key Benefits Strip */}
        <div 
          className="glass rounded-xl p-4 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease-out 0.4s, transform 0.4s ease-out 0.4s",
          }}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-xs md:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s",
          }}
        >
          <Link 
            href="/guide-digital"
            className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all text-sm glow-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Tout savoir sur le digital
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
