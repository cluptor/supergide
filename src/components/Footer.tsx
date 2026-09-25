import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { CONTACT_EMAIL } from '../config';

const columns: { title: string; links: { label: string; to: string; placeholder?: boolean }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', to: '/#how-it-works' },
      { label: 'What it can do', to: '/#what-it-can-do' },
      { label: 'Trust', to: '/#trust' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/contact', placeholder: true },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', to: '/contact', placeholder: true },
      { label: 'Security', to: '/#trust' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line mt-auto">
      <div className="container-site py-14 lg:py-20 grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="col-span-2 sm:col-span-4 lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
            Support that gets it done. Your users ask, Supergide does it inside your product.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block text-[15px] text-blue hover:underline">
            {CONTACT_EMAIL}
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-[13px] font-semibold text-ink mb-4">{col.title}</h2>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[15px] text-body hover:text-blue transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-site py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13px] text-muted">
          <span>© {new Date().getFullYear()} Supergide</span>
          <span>Made for teams that would rather fix it than explain it.</span>
        </div>
      </div>
    </footer>
  );
}
