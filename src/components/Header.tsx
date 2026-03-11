"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Sites Web", href: "/services/web", icon: "💻" },
  { name: "MonCash", href: "/services/moncash", icon: "💵" },
  { name: "E-Commerce", href: "/services/ecommerce", icon: "🛒" },
  { name: "Billetterie QR", href: "/services/billetterie", icon: "🎟️" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800/50" : "bg-[#0a0a0a]"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/logos/gd.png" 
              alt="GF Digital Studio Logo" 
              width={80} 
              height={80}
              className=""
            />
            <span className="font-bold text-xl text-white">Digital Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Accueil
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass rounded-xl py-2 shadow-xl border border-gray-700/50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span className="text-sm font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              À propos
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/tarifs"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Tarifs
            </Link>
            <Link
              href="/commander"
              className="gradient-bg text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all glow-primary"
            >
              Commander
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              
              {/* Services mobile submenu */}
              <div className="py-2">
                <p className="text-white font-medium mb-2">Services</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{service.icon}</span>
                      <span className="text-sm">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                href="/tarifs"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="/#portfolio"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/a-propos"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/commander"
                className="gradient-bg text-white px-6 py-3 rounded-xl text-center font-semibold hover:opacity-90 transition-opacity mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Commander un Projet
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
