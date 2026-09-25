import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { openWaitlist } from '../config';

const links = [
  { to: '/#product', label: 'Product' },
  { to: '/#how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-line/70">
      <div className="container-site h-[60px] flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded text-[15px] font-medium text-ink hover:bg-sand transition-colors"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact" className="btn-ghost">
            Talk to us
          </Link>
          <button type="button" className="btn-primary" onClick={() => openWaitlist()}>
            Get early access
          </button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-sand"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-5 h-5 text-ink" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-line bg-white">
          <nav className="container-site py-3 flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-[16px] font-medium text-ink border-b border-line/60 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 pb-2">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-secondary flex-1">
                Talk to us
              </Link>
              <button type="button" className="btn-primary flex-1" onClick={() => openWaitlist()}>
                Get early access
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
