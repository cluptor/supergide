import { ReactNode } from 'react';

export function Legal({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <h1 className="h-section">{title}</h1>
          <p className="mt-2 text-[13px] text-muted">Last updated {updated}</p>
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-body [&_h2]:text-ink [&_h2]:font-semibold [&_h2]:text-[17px] [&_h2]:mt-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
