import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gfdigitalstudio.com';
  
  const routes = [
    '',
    '/tarifs',
    '/commander',
    '/a-propos',
    '/blog',
    '/services/moncash',
    '/services/billetterie',
    '/services/ecommerce',
    '/services/web',
    '/politique-confidentialite',
    '/conditions-utilisation',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.6,
  }));
}
