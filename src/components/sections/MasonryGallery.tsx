import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "@/types/content";
import { ArrowUpRight } from "lucide-react";

type MasonryGalleryProps = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  items: GalleryItem[];
  bookMessage?: string;
};

export function MasonryGallery({ id, title, eyebrow, description, items, bookMessage }: MasonryGalleryProps) {
  const whatsappUrl = bookMessage
    ? `https://wa.me/50939934388?text=${encodeURIComponent(bookMessage)}`
    : "https://wa.me/50939934388";
  return (
    <section id={id} className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-10 shadow-xl shadow-black/20 sm:px-10 sm:py-14">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{eyebrow}</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </div>
        <p className="max-w-2xl text-base text-slate-200">{description}</p>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20"
          >
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                priority={id === "logos"}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">…and more</div>

      {bookMessage && (
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-pink-300/50 bg-pink-400/10 px-6 py-3 font-semibold tracking-[0.08em] text-pink-50 transition hover:border-pink-200 hover:bg-pink-400/20"
        >
          Book yours
          <ArrowUpRight size={18} />
        </Link>
      )}
    </section>
  );
}
