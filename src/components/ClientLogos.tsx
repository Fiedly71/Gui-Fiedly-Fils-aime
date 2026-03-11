"use client";

import { useEffect, useRef } from "react";

// Placeholder client names - replace with actual client logos
const clients = [
  { name: "Restaurant Lakay", industry: "Restauration" },
  { name: "Événements Plus", industry: "Événementiel" },
  { name: "MarchéHT", industry: "E-commerce" },
  { name: "Cap Transport", industry: "Transport" },
  { name: "Haiti Tech", industry: "Technologie" },
  { name: "Lakay Shop", industry: "Commerce" },
  { name: "Event Master", industry: "Événementiel" },
  { name: "DigiPay HT", industry: "Fintech" },
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Ils nous font confiance
          </p>
        </div>

        {/* Scrolling logos */}
        <div 
          ref={scrollRef}
          className="flex gap-12 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Double the clients for infinite scroll effect */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 glass px-8 py-4 rounded-xl flex items-center gap-4 min-w-[200px]"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {client.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold whitespace-nowrap">{client.name}</p>
                <p className="text-gray-400 text-sm">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold gradient-text">50+</p>
            <p className="text-gray-400 mt-2">Projets livrés</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold gradient-text">100%</p>
            <p className="text-gray-400 mt-2">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold gradient-text">3+</p>
            <p className="text-gray-400 mt-2">Années d&apos;expérience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold gradient-text">24/7</p>
            <p className="text-gray-400 mt-2">Support client</p>
          </div>
        </div>
      </div>
    </section>
  );
}
