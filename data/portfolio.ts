import { WebProject, DesignProject, ContactInfo } from '@/types';

export const webProjects: WebProject[] = [
  {
    id: 'uptodate',
    title: 'UP-TO-DATE ELECTRONIC',
    url: 'https://uptodateelectronic.com',
    image: '/images/uptodate web.jpg',
    description: 'Full-featured e-commerce platform for electronics and shipping services'
  },
  {
    id: 'sparkllex',
    title: 'Sparkllex',
    url: 'https://sparkllex.com',
    image: '/images/sparkllex web.jpg',
    description: 'Modern web application with premium user experience'
  },
  {
    id: 'upnextgrowth',
    title: 'UpNext Growth',
    url: 'https://upnextgrowth.vercel.app/',
    image: '/images/upnextgrowth web.jpg',
    description: 'Digital marketing and growth agency platform'
  }
];

export const designProjects: DesignProject[] = [
  {
    id: 'greenwave',
    title: 'GreenWave Logo',
    category: 'logo',
    image: '/images/GeenWave Logo.jpg',
    description: 'Brand identity design'
  },
  {
    id: 'logo-jus',
    title: 'Jus Logo',
    category: 'logo',
    image: '/images/Logo jus.jpg',
    description: 'Professional logo design'
  },
  {
    id: 'ney',
    title: 'Ney Brand',
    category: 'logo',
    image: '/images/Ney.jpg',
    description: 'Modern brand identity'
  },
  {
    id: 'ms',
    title: 'MS Logo',
    category: 'logo',
    image: '/images/ms.jpg',
    description: 'Corporate logo design'
  },
  {
    id: 'nj',
    title: 'NJ Brand',
    category: 'logo',
    image: '/images/nj.jpg',
    description: 'Creative brand identity'
  },
  {
    id: 'alerty',
    title: 'Alerty Jewelry Flyer',
    category: 'poster',
    image: '/images/Alerty Jewelry flyer.jpg',
    description: 'Marketing material design'
  },
  {
    id: 'ebook',
    title: 'eBook Design',
    category: 'poster',
    image: '/images/ebook.jpg',
    description: 'Digital publication design'
  },
  {
    id: 'pdp',
    title: 'PDP Poster',
    category: 'poster',
    image: '/images/pdp.jpg',
    description: 'Product promotional design'
  },
  {
    id: 'projector',
    title: 'Smart Projector',
    category: 'poster',
    image: '/images/Smart Projector.jpg',
    description: 'Tech product marketing'
  }
];

export const contactInfo: ContactInfo = {
  email: 'isteah.gffilsaime@gmail.com',
  phones: ['+509 3283-6938', '+509 3993-4388']
};
