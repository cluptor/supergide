import { ReactNode } from 'react';

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  tone = 'white',
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  tone?: 'white' | 'sand';
  className?: string;
}) {
  return (
    <section id={id} className={`${tone === 'sand' ? 'bg-sand' : 'bg-white'} py-16 sm:py-24 scroll-mt-16 ${className}`}>
      <div className="container-site">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="h-section">{title}</h2>
          {lede && <p className="lede mt-4 max-w-2xl">{lede}</p>}
        </div>
        {children && <div className="mt-10 sm:mt-14">{children}</div>}
      </div>
    </section>
  );
}
