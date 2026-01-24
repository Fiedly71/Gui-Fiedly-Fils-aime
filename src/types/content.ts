export type ContactInfo = {
  email: string;
  phonePrimary: string;
  phoneSecondary?: string;
};

export type HeroProfile = {
  name: string;
  title: string;
  studio: string;
  business: string;
  location?: string;
  tagline: string;
  portrait: string;
  logo: string;
  contact: ContactInfo;
};

export type GalleryItem = {
  title: string;
  image: string;
};

export type WebProject = {
  title: string;
  url: string;
  image: string;
  cta?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};
