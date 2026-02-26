import { ContactInfo, GalleryItem, HeroProfile, SocialLink, WebProject } from "@/types/content";
import type { SkillCategory } from "@/types/content";

export const contact: ContactInfo = {
  email: "isteah.gffilsaime@gmail.com",
  phonePrimary: "+50932836938",
  phoneSecondary: "+50939934388",
};

export const heroProfile: HeroProfile = {
  name: "Gui Fiedly Fils-aime",
  title: "Creative Director & Founder",
  studio: "GF Digital Studio",
  business: "UP-TO-DATE Electronic & Shipping",
  location: "Haiti & remote",
  tagline:
    "I build sharp visual identities, responsive web experiences, and marketing assets that keep brands moving forward.",
  portrait: "/images/Gui.jpg",
  logo: "/images/GD.jpg",
  contact,
};

export const aboutText =
  "I lead GF Digital Studio, delivering sharp identity, print, and web assets that stay premium, fast, and mobile-perfect.";

export const focusAreas = [
  "Brand systems built to scale",
  "Mobile-first interfaces with smooth motion",
  "Campaign visuals for fast launches",
];

export const logoGallery: GalleryItem[] = [
  { title: "GeenWave", image: "/images/GeenWave%20Logo.jpg" },
  { title: "Jus Pressé", image: "/images/Logo%20jus.jpg" },
  { title: "MS", image: "/images/ms.jpg" },
  { title: "Ney", image: "/images/Ney.jpg" },
  { title: "Proxy Achat", image: "/images/Proxy%20achat.jpg" },
  { title: "UP-TO-DATE", image: "/images/UPTODATE%20logo.jpg" },
];

export const posterGallery: GalleryItem[] = [
  { title: "Alerty Jewelry", image: "/images/Alerty%20Jewelry%20flyer.jpg" },
  { title: "Ebook", image: "/images/ebook.jpg" },
  { title: "Profile", image: "/images/pdp.jpg" },
  { title: "Smart Projector", image: "/images/Smart%20Projector.jpg" },
];

export const webProjects: WebProject[] = [
  {
    title: "UP-TO-DATE Electronic",
    url: "https://uptodateelectronic.com",
    image: "/images/u.jpg",
    cta: "Visit site",
  },
  {
    title: "Sparkllex",
    url: "https://sparkllex.com",
    image: "/images/n.jpg",
    cta: "See live",
  },
  {
    title: "UpNext Growth",
    url: "https://upnextgrowth.vercel.app/",
    image: "/images/b.jpg",
    cta: "View project",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/uptodate.electronic",
  },
  {
    label: "Instagram Personal",
    href: "https://instagram.com/gui.fiedly",
  },
  {
    label: "Instagram GD Digital Studio",
    href: "https://instagram.com/gd.digital.studio",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/UpToDateElectronicStore",
  },
  {
    label: "Email",
    href: "mailto:isteah.gffilsaime@gmail.com",
  },
  {
    label: "Call",
    href: "tel:+50932836938",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/50932836938",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Academic & Analytical (ICT)",
    items: [
      "Business needs analysis and understanding",
      "Information systems modeling",
      "Database design (Microsoft Access: relations, queries, forms, reports)",
      "Writing complete, structured academic reports",
      "Project methodology (objectives, deliverables, constraints, timelines)",
      "Ability to explain, document, and simplify technical concepts",
    ],
  },
  {
    title: "Technical & Digital",
    items: [
      "Advanced office tools (Word, Excel, PowerPoint)",
      "Pivot tables, formulas, and simple automations",
      "Professional assets (reports, flyers, presentations)",
      "Intro to web development (site structure, front-end logic)",
      "Inventory and POS tools (e.g., Loyverse)",
      "Tracking systems (parcels, sales, statuses, databases)",
    ],
  },
  {
    title: "Entrepreneurial",
    items: [
      "Creation and management of multiple business projects",
      "Electronics online store (Up-to-date)",
      "Shipping USA → Haiti / Dominican Republic",
      "Personalization projects (printing, engraved jewelry)",
      "Leisure project (paintball)",
      "Business plans and budget estimates",
      "Brand naming and market positioning",
      "Partnerships (designers, commissions, collaboration)",
      "Solution-oriented vision rather than only products",
    ],
  },
  {
    title: "Organizational & Operational",
    items: [
      "Flow management (orders, parcels, clients, statuses)",
      "Simple, effective process structuring",
      "Sales and daily operations tracking",
      "From idea to concrete execution",
      "Adaptation to local constraints (logistics, limited resources)",
    ],
  },
  {
    title: "Communication & Writing",
    items: [
      "Professional writing (formal register)",
      "Company descriptions",
      "Professional letters",
      "Long, structured reports",
      "Institutional and academic tone",
      "Ability to request precise edits and iterate",
    ],
  },
  {
    title: "Languages",
    items: ["French", "Spanish", "English"],
  },
];
