import { Link } from 'react-router-dom';

export function Sparkle({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
      />
    </svg>
  );
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 text-ink ${className}`} aria-label="Supergide home">
      <Sparkle className="w-5 h-5 text-blue" />
      <span className="text-[19px] font-bold tracking-[-0.02em]">Supergide</span>
    </Link>
  );
}
