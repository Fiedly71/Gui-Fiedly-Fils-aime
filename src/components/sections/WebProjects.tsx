import Image from "next/image";
import Link from "next/link";
import { WebProject } from "@/types/content";
import { ArrowUpRight } from "lucide-react";

type WebProjectsProps = {
  projects: WebProject[];
  bookMessage?: string;
};

export function WebProjects({ projects, bookMessage }: WebProjectsProps) {
  const whatsappUrl = bookMessage
    ? `https://wa.me/50932836938?text=${encodeURIComponent(bookMessage)}`
    : "https://wa.me/50932836938";
  return (
    <section id="web" className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-10 shadow-xl shadow-black/20 sm:px-10 sm:py-14">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Web — GF Digital Studio</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Live websites</h2>
        </div>
        <p className="max-w-2xl text-base text-slate-200">
          Sites designed and developed by GF Digital Studio. Responsive builds with fast handoff—previewed below with quick links to the live experiences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:shadow-cyan-500/20"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                GF Digital Studio
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {project.cta ?? "Open"}
              </div>
            </div>
            <div className="border-t border-white/10 px-5 py-4">
              <div className="text-lg font-semibold text-white">{project.title}</div>
              <div className="text-sm text-cyan-200">{project.url.replace(/^https?:\/\//, "")}</div>
            </div>
          </Link>
        ))}
      </div>

      {bookMessage && (
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-green-300/50 bg-green-400/10 px-6 py-3 font-semibold tracking-[0.08em] text-green-50 transition hover:border-green-200 hover:bg-green-400/20"
        >
          Book yours
          <ArrowUpRight size={18} />
        </Link>
      )}

      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">…and more</div>
    </section>
  );
}
