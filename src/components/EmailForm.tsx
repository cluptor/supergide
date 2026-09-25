import { FormEvent, useState } from 'react';
import { openWaitlist } from '../config';

export function EmailForm({ label = 'Get early access', light = false }: { label?: string; light?: boolean }) {
  const [email, setEmail] = useState('');

  function submit(e: FormEvent) {
    e.preventDefault();
    openWaitlist(email.trim() || undefined);
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <label htmlFor={`email-${label.replace(/\s+/g, '-')}`} className="sr-only">
        Work email
      </label>
      <input
        id={`email-${label.replace(/\s+/g, '-')}`}
        type="email"
        required
        autoComplete="email"
        placeholder="name@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 h-10 px-3 rounded border text-[15px] text-ink placeholder:text-faint focus:border-blue focus:outline-none ${
          light ? 'bg-white border-line' : 'bg-white border-line'
        }`}
      />
      <button type="submit" className="btn-primary">
        {label}
      </button>
    </form>
  );
}
