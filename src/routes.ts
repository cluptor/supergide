export const SITE_URL = 'https://www.supergide.com';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'Supergide – Support that gets it done',
    description: 'Your users ask for what they need. Supergide does it for them, right inside your product.',
  },
  {
    path: '/pricing',
    title: 'Pricing – Supergide',
    description: 'Supergide is in early access. Pricing depends on your product and volume, so we walk through it with you.',
  },
  {
    path: '/contact',
    title: 'Contact – Supergide',
    description: 'Questions, partnerships, or a walkthrough. Get in touch with the Supergide team.',
  },
  {
    path: '/privacy',
    title: 'Privacy – Supergide',
    description: 'How Supergide handles the data it sees.',
  },
  {
    path: '/terms',
    title: 'Terms – Supergide',
    description: 'Terms of service for Supergide.',
  },
  {
    path: '/404',
    title: 'Page not found – Supergide',
    description: 'This page does not exist.',
  },
];
