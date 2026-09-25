type P = { className?: string };
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const Check = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base} strokeWidth={2.2}><path d="M4 10.5l4 4 8-9" /></svg>
);
export const Arrow = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base} strokeWidth={2}><path d="M4 10h12M11 5l5 5-5 5" /></svg>
);
export const Mic = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><rect x="7" y="2.5" width="6" height="10" rx="3" /><path d="M4.5 9.5a5.5 5.5 0 0 0 11 0M10 15v2.5M7.5 17.5h5" /></svg>
);
export const Paperclip = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M13.5 6.5l-6 6a1.8 1.8 0 0 0 2.5 2.5l6.5-6.5a3.5 3.5 0 0 0-5-5L5 10a5.2 5.2 0 0 0 7.4 7.4l5.1-5.1" /></svg>
);
export const Keyboard = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><rect x="2" y="5" width="16" height="10" rx="2" /><path d="M5 8h1M8 8h1M11 8h1M14 8h1M5 11h1M8 11h4M14 11h1" /></svg>
);
export const Send = ({ className = 'w-4 h-4' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M10 16V4M5 9l5-5 5 5" /></svg>
);
export const Users = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><circle cx="8" cy="7" r="3" /><path d="M2.5 16.5a5.5 5.5 0 0 1 11 0M13.5 4.5a3 3 0 0 1 0 5.5M17.5 16.5a4.5 4.5 0 0 0-3-4.2" /></svg>
);
export const Card = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><rect x="2" y="4.5" width="16" height="11" rx="2" /><path d="M2 8.5h16M5.5 12.5h3" /></svg>
);
export const Sliders = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M3 6h9M15 6h2M3 14h2M8 14h9" /><circle cx="13.5" cy="6" r="1.8" /><circle cx="6.5" cy="14" r="1.8" /></svg>
);
export const Chart = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M3 17h14M5 14V9M9 14V5M13 14v-4M17 14V7" /></svg>
);
export const Plug = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M7 3v4M13 3v4M5 7h10v3a5 5 0 0 1-10 0V7zM10 15v2.5" /></svg>
);
export const Database = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><ellipse cx="10" cy="5" rx="6.5" ry="2.5" /><path d="M3.5 5v10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V5M3.5 10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" /></svg>
);
export const Shield = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M10 2.5l6.5 2.5v5c0 3.8-2.8 6.4-6.5 7.5-3.7-1.1-6.5-3.7-6.5-7.5V5L10 2.5z" /><path d="M7.5 10l1.8 1.8L12.8 8" /></svg>
);
export const List = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M7 5h10M7 10h10M7 15h10M3.5 5h.01M3.5 10h.01M3.5 15h.01" strokeWidth={2} /></svg>
);
export const Hand = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M7 11V4.5a1.5 1.5 0 0 1 3 0V10M10 9.5V3.5a1.5 1.5 0 0 1 3 0V10M13 9.5V5.5a1.5 1.5 0 0 1 3 0V12a5.5 5.5 0 0 1-5.5 5.5H9.8a5 5 0 0 1-4-2L3.6 12.6a1.4 1.4 0 0 1 2.2-1.7L7 12" /></svg>
);
export const Ticket = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M3 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1.5 1.5 0 0 0 0 3V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.5a1.5 1.5 0 0 0 0-3V7z" /><path d="M8 6v8" strokeDasharray="1.5 1.5" /></svg>
);
export const Clock = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><circle cx="10" cy="10" r="7" /><path d="M10 6v4l2.5 1.5" /></svg>
);
export const Book = ({ className = 'w-5 h-5' }: P) => (
  <svg className={className} viewBox="0 0 20 20" {...base}><path d="M3 4.5A1.5 1.5 0 0 1 4.5 3H9a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 0 9 15H4.5A1.5 1.5 0 0 0 3 16.5v-12zM17 4.5A1.5 1.5 0 0 0 15.5 3H11a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 1 11 15h4.5a1.5 1.5 0 0 1 1.5 1.5v-12z" /></svg>
);
