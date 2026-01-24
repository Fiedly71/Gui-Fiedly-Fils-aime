"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Logos", href: "#logos" },
  { label: "Posters", href: "#posters" },
  { label: "Web", href: "#web" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <Image
              src="/images/GD.jpg"
              alt="GF Digital Studio"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            GF Digital Studio
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative pb-1 transition hover:text-white"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-white transition group-hover:scale-x-100" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-white/5 transition hover:border-white/30 hover:bg-white/10"
          >
            Book a project
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className="space-y-3 border-t border-white/5 bg-slate-950/90 px-6 pb-8 pt-4 backdrop-blur">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-lg font-semibold text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
                onClick={() => setOpen(false)}
              >
                Book a project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
