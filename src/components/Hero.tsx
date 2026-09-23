import React, { useState } from 'react';
import { openWaitlistForm, openDemoForm } from '../config';

const SAMPLE_INTENTS = [
  { text: '"Export monthly report & update billing threshold"', latency: '1.4s' },
  { text: '"Add Sarah to the growth workspace with admin permissions"', latency: '1.2s' },
  { text: '"Provision staging API keys & configure webhook URL"', latency: '1.6s' },
  { text: '"Upgrade team plan to Enterprise and assign 10 seats"', latency: '1.1s' },
];

export const Hero: React.FC = () => {
  const [intentIndex, setIntentIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const currentIntent = SAMPLE_INTENTS[intentIndex];

  const handleNextIntent = () => {
    setIsSwitching(true);
    setTimeout(() => {
      setIntentIndex((prev) => (prev + 1) % SAMPLE_INTENTS.length);
      setIsSwitching(false);
    }, 150);
  };

  return (
    <section className="relative w-full border-b border-[#E5E5E5] overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-[#FAFAFA]">
      {/* Background technical watermark grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 80%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Announcement Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-[#E0E0E0] shadow-sm rounded-none text-xs tracking-wider">
            <span className="bg-[#111111] text-white font-mono text-[10px] px-1.5 py-0.5 tracking-wider font-semibold">
              IN-APP
            </span>
            <span className="font-mono text-[11px] text-[#555555] tracking-widest uppercase">
              AUTONOMOUS AGENT
            </span>
            <span className="text-[#2563EB] text-xs">✦</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#111111] leading-[1.08] mb-6">
            Turn customer requests into
            <br />
            <span className="font-normal text-[#737373]">completed actions.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#555555] font-normal leading-relaxed mb-8">
            SuperGuide lets users ask for what they need and gets the task done inside your product
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openWaitlistForm()}
              className="w-full sm:w-auto px-6 py-3 bg-[#111111] text-white text-sm font-medium tracking-tight hover:bg-[#262626] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Join Waitlist</span>
              <span className="font-mono text-xs">→</span>
            </button>
            <button
              type="button"
              onClick={() => openDemoForm()}
              className="w-full sm:w-auto px-6 py-3 bg-white text-[#111111] border border-[#D4D4D4] text-sm font-medium tracking-tight hover:border-[#111111] hover:bg-[#F5F5F5] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Demo</span>
            </button>
          </div>
        </div>

        {/* Halftone Procedural Graphic & Live Action Card */}
        <div className="relative mt-12 sm:mt-16 w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Crosshair guides in cardinal points */}
          <div className="absolute -top-3 left-4 text-[#888888] font-mono text-xs select-none">+</div>
          <div className="absolute -top-3 right-4 text-[#888888] font-mono text-xs select-none">+</div>
          <div className="absolute -bottom-3 left-4 text-[#888888] font-mono text-xs select-none">+</div>
          <div className="absolute -bottom-3 right-4 text-[#888888] font-mono text-xs select-none">+</div>

          {/* The Circular Stippled Halftone Arc (Vector Stippling Field) */}
          <div className="w-full flex justify-center items-center py-2 sm:py-6 overflow-hidden">
            <svg
              className="w-full max-w-2xl h-auto select-none"
              fill="none"
              viewBox="0 0 800 360"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="dot-grid"
                  patternUnits="userSpaceOnUse"
                  width="16"
                  height="16"
                  x="0"
                  y="0"
                >
                  <circle cx="2" cy="2" fill="#D4D4D4" r="1" />
                </pattern>
                <radialGradient id="halftone-mask" cx="50%" cy="100%" r="90%">
                  <stop offset="0%" stopColor="#111111" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#222222" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#666666" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#999999" stopOpacity="0" />
                </radialGradient>
                <mask id="arc-mask">
                  <path
                    d="M 120 340 A 280 230 0 0 1 680 340"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeWidth="110"
                  />
                </mask>
              </defs>

              {/* Base decorative coordinates */}
              <text
                fill="#9CA3AF"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                letterSpacing="0.1em"
                x="30"
                y="40"
              >
                GRID_SYS // STIPPLE_MESH_V4
              </text>
              <text
                fill="#9CA3AF"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                letterSpacing="0.1em"
                x="670"
                y="40"
              >
                LATENCY: 1.4MS
              </text>

              {/* Radiating Concentric Hairline Rings */}
              <path
                d="M 160 340 A 240 190 0 0 1 640 340"
                fill="none"
                stroke="#E5E7EB"
                strokeDasharray="2 4"
                strokeWidth="1"
              />
              <path
                d="M 100 340 A 300 240 0 0 1 700 340"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <path
                d="M 50 340 A 350 280 0 0 1 750 340"
                fill="none"
                stroke="#F0F0F0"
                strokeDasharray="1 6"
                strokeWidth="1"
              />

              {/* The Stipple Density Arch */}
              <g mask="url(#arc-mask)">
                {/* Outer Halftone Orbit Band 1 */}
                <path
                  d="M 80 340 A 320 250 0 0 1 720 340"
                  opacity="0.15"
                  stroke="#000000"
                  strokeDasharray="1 5"
                  strokeLinecap="round"
                  strokeWidth="120"
                />
                {/* Middle Dense Stipple Ring */}
                <path
                  d="M 110 340 A 290 230 0 0 1 690 340"
                  opacity="0.45"
                  stroke="#111111"
                  strokeDasharray="1.5 3.5"
                  strokeLinecap="round"
                  strokeWidth="80"
                />
                {/* Core High Density Focal Vortex */}
                <path
                  d="M 130 340 A 270 210 0 0 1 670 340"
                  opacity="0.85"
                  stroke="#050505"
                  strokeDasharray="1 2.2"
                  strokeLinecap="round"
                  strokeWidth="44"
                />
                {/* Concentrated Black Mass Rim */}
                <path
                  d="M 140 340 A 260 200 0 0 1 660 340"
                  opacity="0.9"
                  stroke="#1A1A1A"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                  strokeWidth="22"
                />
              </g>

              {/* Apex Cobalt Star Marker */}
              <circle cx="400" cy="140" fill="#FFFFFF" r="14" stroke="#E5E5E5" strokeWidth="1" />
              <path
                d="M400 133 L402 138 L407 140 L402 142 L400 147 L398 142 L393 140 L398 138 Z"
                fill="#2563EB"
              />
            </svg>
          </div>

          {/* Floating Interactive Execution Strip Over Halftone */}
          <div
            onClick={handleNextIntent}
            title="Click to cycle sample intent workflow"
            className="w-full max-w-xl -mt-16 sm:-mt-20 bg-white border border-[#D8D8D8] shadow-lg p-3 sm:p-4 flex items-center justify-between gap-3 text-xs cursor-pointer hover:border-[#111111] transition-all select-none"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse shrink-0" />
              <span className="font-mono text-[#737373] shrink-0 uppercase text-[10px]">
                INTENT:
              </span>
              <span
                className={`font-medium text-[#111111] truncate transition-opacity duration-150 ${
                  isSwitching ? 'opacity-30' : 'opacity-100'
                }`}
              >
                {currentIntent.text}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="bg-[#F4F4F5] border border-[#E4E4E7] font-mono text-[10px] text-[#52525B] px-2 py-0.5 font-medium">
                DISPATCHED IN {currentIntent.latency}
              </span>
              <span className="text-[#16A34A] font-mono text-xs font-bold">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
