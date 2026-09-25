import type { ReactNode } from 'react';
import { Sparkle } from '../Logo';

/** Feature card: copy on top, a Supergide panel anchored to the bottom edge and cropped, like Notion's feature cards. */
export function MockCard({
  eyebrow,
  title,
  text,
  children,
  tone = 'sand',
  panelTitle = 'Supergide',
}: {
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
  tone?: 'sand' | 'white';
  panelTitle?: string;
}) {
  return (
    <div className={`${tone === 'sand' ? 'card' : 'bg-white rounded-xl border border-line'} flex flex-col overflow-hidden`}>
      <div className="p-6 md:p-5 lg:p-7 pb-0 md:pb-0 lg:pb-0">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="h-card mt-1">{title}</h3>
        <p className="mt-1.5 text-[15px] text-body leading-relaxed">{text}</p>
      </div>
      <div className="pt-7 px-6 md:px-5 lg:px-7 mt-auto" aria-hidden="true">
        <div className="bg-white rounded-t-lg border border-b-0 border-line shadow-frame">
          <div className="flex items-center gap-2 px-4 h-10 border-b border-line">
            <Sparkle className="w-3.5 h-3.5 text-blue" />
            <span className="text-[12px] font-semibold text-ink">{panelTitle}</span>
          </div>
          <div className="p-3 pb-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
