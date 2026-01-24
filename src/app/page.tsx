import { HeroSection } from "@/components/sections/HeroSection";
import { MasonryGallery } from "@/components/sections/MasonryGallery";
import { WebProjects } from "@/components/sections/WebProjects";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { logoGallery, posterGallery, webProjects } from "@/data/content";
import Image from "next/image";
import { MobileFeatureImage } from "@/components/sections/MobileFeatureImage";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
      <Navbar />
      <FloatingWhatsApp />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <HeroSection />

        <div
          id="about"
          className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/20 sm:grid-cols-2 sm:p-8"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">Website Development</p>
            <h2 className="text-2xl font-semibold text-white">Website Features</h2>
            <p className="text-sm text-slate-200">
              High-performance builds, premium UI, mobile-first usability, and secure hosting—ready to launch and grow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Performance optimized",
              "SEO optimization (Google visibility)",
              "High-end design",
              "Mobile-friendly",
              "HTTPS-secured site",
              "Hosting included (1 year)",
              "24/7 technical support",
              "Front-end",
              "Back-end",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-only preview image placed lower in the section */}
        <MobileFeatureImage src="/images/web.jpg" alt="Website preview" />

        {/* 3rd section: Live websites */}
        <WebProjects 
          projects={webProjects} 
          bookMessage="Hi! I'm interested in getting a professional website developed by GF Digital Studio."
        />

        <MasonryGallery
          id="logos"
          title="Logos & Marks"
          eyebrow="Identity"
          description="Core marks crafted for retailers and founders—balanced forms that stay crisp across print and digital."
          items={logoGallery}
          bookMessage="Hi! I'm interested in getting a logo designed by GF Digital Studio."
        />

        {/* New section between logos and posters */}
        <SkillsSection />

        <MasonryGallery
          id="posters"
          title="Posters & Campaigns"
          eyebrow="Campaign"
          description="Impactful layouts ready for social drops, storefront displays, and quick-turn launches."
          items={posterGallery}
          bookMessage="Hi! I'm interested in getting a professional poster or campaign design from GF Digital Studio."
        />

        {/* Contact form section before footer */}
        <ContactFormSection />
      </main>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
