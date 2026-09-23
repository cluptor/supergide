import React from 'react';
import { openWaitlistForm } from '../config';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/80 backdrop-blur-md border-b border-white/10">
      <div className="h-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group select-none"
          >
            <svg
              className="w-5 h-5 text-[#2563EB] fill-current inline-block transform transition-transform group-hover:scale-110 duration-150"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
            </svg>
            <span className="font-headline-md text-xl tracking-tight text-white font-semibold">
              Supergide
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => openWaitlistForm()}
            className="inline-flex items-center justify-center bg-white text-[#111111] font-body-md text-sm px-5 py-2 hover:bg-[#E5E5E5] transition-colors font-medium shadow-sm cursor-pointer"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  );
};
