"use client";

import { useState } from "react";
import { skillCategories } from "@/data/content";
import { BadgeCheck } from "lucide-react";

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillCategories[activeIndex];

  return (
    <section id="skills" className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-10 shadow-xl shadow-black/20 sm:px-10 sm:py-14">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Capabilities</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Skills</h2>
        </div>
        <p className="max-w-2xl text-base text-slate-200">A clear view of my academic, technical, and entrepreneurial strengths.</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900/90 to-transparent sm:hidden" />
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 scrollbar-hide">
          <div className="flex gap-2 whitespace-nowrap">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
                  i === activeIndex
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cyan-400"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-white/40 sm:hidden">Faites defiler</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {active.items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <BadgeCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
            <span className="text-sm font-medium text-white/95">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
