import Image from "next/image";
import Link from "next/link";
import { Instagram, ExternalLink } from "lucide-react";
import {
  aboutText,
  focusAreas,
  heroProfile,
} from "@/data/content";

function FiverrIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="12" fill="#1DBF73" />
      <path
        d="M9.5 16.5h2v-3h2v-2h-2v-1H14v-2h-3.5C9 8.5 8 9.4 8 10.8v4.7c0 .5.4 1 .9 1z"
        fill="white"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950 px-6 py-14 shadow-2xl shadow-black/30 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-24 -top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {heroProfile.studio}
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {heroProfile.business}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              {heroProfile.location}
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-lg shadow-cyan-500/10 md:hidden">
                <Image
                  src="/images/Gui2.jpg"
                  alt={heroProfile.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl">
                {heroProfile.name}
              </h1>
            </div>
            <p className="text-lg text-slate-200 sm:text-xl">
              {heroProfile.tagline}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Studio lead
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {heroProfile.title}
              </div>
              <div className="text-sm text-slate-300">{heroProfile.studio}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Operations
              </div>
              <div className="mt-2 text-lg font-semibold text-white">{heroProfile.business}</div>
              <div className="text-sm text-slate-300">Design, shipping, and electronics retail</div>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-200">{aboutText}</p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-100">
            <Link
              href="https://instagram.com/uptodate.electronic"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pink-300/50 bg-pink-400/10 px-4 py-2 font-semibold tracking-[0.08em] text-pink-50 transition hover:border-pink-200 hover:bg-pink-400/20"
            >
              <Instagram size={18} />
              @uptodate.electronic
            </Link>
            <Link
              href="https://instagram.com/gui.fiedly"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pink-300/50 bg-pink-400/10 px-4 py-2 font-semibold tracking-[0.08em] text-pink-50 transition hover:border-pink-200 hover:bg-pink-400/20"
            >
              <Instagram size={18} />
              @gui.fiedly
            </Link>
            <Link
              href="https://linktr.ee/UpToDateElectronicStore"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold tracking-[0.08em] text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <ExternalLink size={18} />
              Linktree
            </Link>
            <Link
              href="https://www.fiverr.com/s/YR83RzK"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-400/10 px-4 py-2 font-semibold tracking-[0.08em] text-emerald-50 transition hover:border-emerald-200 hover:bg-emerald-400/20"
            >
              <FiverrIcon className="h-4 w-4" />
              Fiverr
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[240px] w-[240px] overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-2xl shadow-cyan-500/10 ring-2 ring-white/10 sm:h-[300px] sm:w-[300px] md:block md:h-[420px] md:w-full md:max-w-[420px] md:rounded-3xl">
          <Image
            src={heroProfile.portrait}
            alt={heroProfile.name}
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white md:bottom-4 md:left-4 md:inline-flex md:translate-x-0">
            {heroProfile.name}
          </div>
        </div>
      </div>
    </section>
  );
}
