import React, { useState } from 'react';
import { openWaitlistForm } from '../config';

export const BottomCTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    openWaitlistForm(email.trim());
  };

  return (
    <section className="w-full bg-[#111111] text-white py-20 relative overflow-hidden">
      {/* Subtle Stipple Mask on Dark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-4 text-white">
          Ready to let your product execute for itself?
        </h2>
        <p className="text-base text-[#A1A1AA] max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Join forward-thinking product teams offering zero-click workflows to their customers.
        </p>

        {/* Minimal High-Precision Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@company.com"
            className="flex-1 bg-[#1C1C1E] border border-[#333333] px-4 py-3 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-white transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-[#111111] text-sm font-medium hover:bg-[#E5E5E5] transition-colors shrink-0 font-sans flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Request Early Access</span>
            <span className="font-mono text-xs">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};
