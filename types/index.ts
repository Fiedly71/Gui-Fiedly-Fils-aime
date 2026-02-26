export interface WebProject {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
}

export interface DesignProject {
  id: string;
  title: string;
  category: 'logo' | 'poster';
  image: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phones: string[];
}
