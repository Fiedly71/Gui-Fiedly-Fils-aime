"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const capabilities = [
  {
    category: "Frontend",
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
    highlights: ["Next.js", "React", "Tailwind"],
  },
  {
    category: "Backend",
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
    highlights: ["API REST", "Database", "Auth"],
  },
  {
    category: "Admin",
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    highlights: ["Dashboard", "Analytics", "CMS"],
  },
];

export default function TechStack() {
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
    <section id="technologies" className="py-12 md:py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Solutions <span className="gradient-text">complètes</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Frontend, Backend et panneau d&apos;administration inclus
          </p>
        </div>

        {/* Compact 3-column grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="glass rounded-xl md:rounded-2xl p-3 md:p-6 text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease-out ${index * 0.1}s, transform 0.4s ease-out ${index * 0.1}s`,
              }}
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 mx-auto rounded-xl bg-gradient-to-r ${cap.color} flex items-center justify-center text-white mb-2 md:mb-4`}>
                {cap.icon}
              </div>
              <h3 className="text-white font-bold text-xs md:text-lg mb-1 md:mb-3">{cap.category}</h3>
              <div className="hidden md:flex flex-wrap gap-1 justify-center">
                {cap.highlights.map((h, i) => (
                  <span key={i} className="text-[10px] md:text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            href="/tech"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir notre stack technique
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
