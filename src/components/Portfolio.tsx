"use client";

import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    image: "/images/projects/b.jpg",
    title: "UpNext Growth",
    tag: "Web App",
  },
  {
    image: "/images/projects/n.jpg",
    title: "Sparkllex",
    tag: "E-commerce",
  },
  {
    image: "/images/projects/u.jpg",
    title: "UpToDate",
    tag: "Boutique",
  },
];

const featuredLogos = [
  { image: "/images/logos/GD.jpg" },
  { image: "/images/logos/GeenWave Logo.jpg" },
  { image: "/images/logos/NEY'S CREAMY SHAKE.png" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Nos <span className="gradient-text">Réalisations</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Sites web, logos et designs
          </p>
        </div>

        {/* Projects Preview - 3 items */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative aspect-square md:aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 md:p-3">
                  <div>
                    <p className="text-white text-xs md:text-sm font-medium truncate">{project.title}</p>
                    <span className="text-indigo-300 text-[10px] md:text-xs">{project.tag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos Preview - 3 items */}
        <div className="flex justify-center gap-3 md:gap-4 mb-6">
          {featuredLogos.map((logo, index) => (
            <div
              key={index}
              className="glass rounded-xl p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.image}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          <div className="glass rounded-xl p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-gray-400 text-xs">
            +6
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link 
            href="/realisations"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            Voir toutes nos réalisations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
