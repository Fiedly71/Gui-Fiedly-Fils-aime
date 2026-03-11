"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/images/projects/b.jpg",
    title: "UpNext Growth",
    description: "Plateforme de croissance digitale avec dashboard analytique et intégration API",
    link: "https://upnextgrowth.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Analytics"],
  },
  {
    image: "/images/projects/n.jpg",
    title: "Sparkllex",
    description: "Site e-commerce moderne avec système de livraison et paiement en ligne",
    link: "https://sparkllex.com",
    tags: ["E-commerce", "Livraison", "Paiement"],
  },
  {
    image: "/images/projects/u.jpg",
    title: "UpToDate Electronic",
    description: "Boutique électronique avec intégration MonCash et gestion de stock",
    link: "https://uptodateelectronic.com",
    tags: ["E-commerce", "MonCash", "Inventaire"],
  },
];

const logos = [
  { image: "/images/logos/GD.jpg", name: "GD" },
  { image: "/images/logos/GeenWave Logo.jpg", name: "GeenWave" },
  { image: "/images/logos/Logo jus.jpg", name: "Logo Jus" },
  { image: "/images/logos/ms.jpg", name: "MS" },
  { image: "/images/logos/NEY'S CREAMY SHAKE.png", name: "Ney's Creamy Shake" },
  { image: "/images/logos/Ney.jpg", name: "Ney" },
  { image: "/images/logos/nj.jpg", name: "NJ" },
  { image: "/images/logos/Proxy achat.jpg", name: "Proxy Achat" },
  { image: "/images/logos/UPTODATE logo.jpg", name: "UpToDate" },
];

const affiches = [
  { image: "/images/affiches/Alerty Jewelry flyer.jpg", name: "Alerty Jewelry" },
  { image: "/images/affiches/ebook.jpg", name: "E-book" },
  { image: "/images/affiches/pdp.jpg", name: "PDP" },
  { image: "/images/affiches/Smart Projector.jpg", name: "Smart Projector" },
];

type Tab = "projects" | "logos" | "affiches";

export default function RealisationsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll(".portfolio-item");
      elements?.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeTab]);

  useEffect(() => {
    setVisibleItems(new Set());
  }, [activeTab]);

  const tabs = [
    { id: "projects" as Tab, label: "Sites Web", count: `${projects.length}+` },
    { id: "logos" as Tab, label: "Logos", count: `${logos.length}+` },
    { id: "affiches" as Tab, label: "Affiches", count: `${affiches.length}+` },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0a0a1a] to-gray-900" ref={sectionRef}>
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <span className="inline-block px-4 py-2 glass rounded-full text-indigo-400 text-sm font-medium mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos <span className="gradient-text">Réalisations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez nos projets web, logos et affiches créés pour nos clients en Haïti et ailleurs.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "gradient-bg text-white glow-primary"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                {tab.label}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-white/10 text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Grid */}
          {activeTab === "projects" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const isVisible = visibleItems.has(index);
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-index={index}
                    className="portfolio-item group glass rounded-2xl overflow-hidden card-hover"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(30px)",
                      transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
                    }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-sm flex items-center gap-2">
                          Voir le site
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* Logos Grid */}
          {activeTab === "logos" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {logos.map((logo, index) => {
                const isVisible = visibleItems.has(index);
                return (
                  <div
                    key={index}
                    data-index={index}
                    className="portfolio-item glass rounded-2xl p-6 flex flex-col items-center justify-center aspect-square card-hover"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                      transition: `opacity 0.4s ease-out ${index * 0.05}s, transform 0.4s ease-out ${index * 0.05}s`,
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-white text-sm mt-3 text-center">{logo.name}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Affiches Grid */}
          {activeTab === "affiches" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {affiches.map((affiche, index) => {
                const isVisible = visibleItems.has(index);
                return (
                  <div
                    key={index}
                    data-index={index}
                    className="portfolio-item glass rounded-2xl overflow-hidden card-hover group"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(30px)",
                      transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
                    }}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={affiche.image}
                        alt={affiche.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white text-sm text-center">{affiche.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <p className="text-center text-gray-400 mt-8 text-sm">et plus...</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous aimez ce que vous voyez?
            </h2>
            <p className="text-gray-400 mb-8">
              Commandez votre projet dès maintenant et rejoignez nos clients satisfaits!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/50932836938?text=Bonjour%2C%20je%20souhaite%20commander%20un%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:scale-105 transition-transform glow-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Commander un Projet
              </a>
              <a
                href="https://wa.me/50932836938"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-xl font-medium hover:scale-105 transition-transform border border-green-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
