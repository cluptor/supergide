import React from 'react';

export const Features: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 border-b border-[#E5E5E5] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#555555] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 bg-[#111111] inline-block" />
            <span>ARCHITECTURE // CORE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#111111] tracking-tight mb-3">
            Support that gets things done.
          </h2>
          <p className="text-base text-[#666666] max-w-2xl font-normal leading-relaxed">
            Your users don't always need another help article or chatbot answer. They need the task completed.
          </p>
        </div>

        {/* 3-Column Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E5E5E5] bg-white divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
          {/* CARD 1: Ask for an action */}
          <div className="flex flex-col p-8 group hover:bg-[#FCFCFC] transition-all relative hover:ring-1 hover:ring-[#111111]/20">
            {/* Monospace Technical Tag */}
            <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-10">
              [ 01 // UNDERSTAND THE REQUEST ]
            </div>

            {/* Stippled / Isometric Geometric Graphic */}
            <div className="h-44 w-full flex items-center justify-center mb-8 relative">
              <div className="relative anim-cube will-change-transform flex items-center justify-center">
                <svg className="w-32 h-32" fill="none" viewBox="0 0 120 120">
                  {/* Isometric Box 1 With Halftone Fill */}
                  <polygon
                    fill="#F4F4F5"
                    points="60,20 100,42 60,64 20,42"
                    stroke="#111111"
                    strokeWidth="1.2"
                  />
                  {/* Left side stippled pattern */}
                  <polygon
                    fill="#E4E4E7"
                    points="20,42 60,64 60,105 20,83"
                    stroke="#111111"
                    strokeWidth="1.2"
                  />
                  {/* Right side solid/dither */}
                  <polygon fill="#18181B" points="60,64 100,42 100,83 60,105" />
                  {/* Monospace interior indicator */}
                  <circle cx="60" cy="42" fill="#FFFFFF" r="5" stroke="#111111" strokeWidth="1" />
                  {/* Halftone Dots simulation inside face */}
                  <circle cx="35" cy="65" fill="#71717A" r="1.5" />
                  <circle cx="45" cy="70" fill="#71717A" r="1.5" />
                  <circle cx="35" cy="75" fill="#71717A" r="1.5" />
                  <circle cx="45" cy="80" fill="#71717A" r="1.5" />
                  <circle cx="35" cy="85" fill="#71717A" r="1.5" />
                  <circle cx="45" cy="90" fill="#71717A" r="1.5" />
                </svg>
              </div>
            </div>

            {/* Description */}
            <h3 className="text-lg font-medium text-[#111111] mb-2 tracking-tight">
              Ask for an action
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Users simply tell Supergide what they want in natural language. Example: 'Add Sarah to the growth workspace with admin permissions.'
            </p>
            <div className="mt-8 pt-4 border-t border-[#F0F0F0] flex items-center justify-between font-mono text-[10px] text-[#737373]">
              <span>INPUT: NATURAL LANGUAGE</span>
              <span>INTENT: PARSED</span>
            </div>
          </div>

          {/* CARD 2: Execute, don't explain */}
          <div className="flex flex-col p-8 group hover:bg-[#FCFCFC] transition-all relative hover:ring-1 hover:ring-[#111111]/20">
            {/* Monospace Technical Tag */}
            <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-10">
              [ 02 // COMPLETE THE WORKFLOW ]
            </div>

            {/* Stippled Slotted Cog/Sphere Graphic */}
            <div className="h-44 w-full flex items-center justify-center mb-8 relative">
              <div className="relative anim-stack will-change-transform flex items-center justify-center overflow-visible">
                {/* Laser scan line overlay */}
                <div
                  className="absolute inset-x-0 pointer-events-none overflow-hidden"
                  style={{ top: '15px', height: '95px' }}
                >
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#2563EB]/70 to-transparent scan-laser" />
                </div>
                <svg className="w-32 h-32" fill="none" viewBox="0 0 120 120">
                  {/* Sliced Horizontal Stipple Sphere/Cylinder */}
                  <ellipse cx="60" cy="25" fill="#18181B" rx="35" ry="8" />
                  <ellipse
                    cx="60"
                    cy="38"
                    fill="#E4E4E7"
                    rx="38"
                    ry="8"
                    stroke="#18181B"
                    strokeDasharray="1 3"
                    strokeWidth="1.5"
                  />
                  <ellipse cx="60" cy="51" fill="#18181B" rx="40" ry="8" />
                  <ellipse
                    cx="60"
                    cy="64"
                    fill="#F4F4F5"
                    rx="39"
                    ry="8"
                    stroke="#18181B"
                    strokeDasharray="1 2"
                    strokeWidth="1.5"
                  />
                  <ellipse cx="60" cy="77" fill="#18181B" rx="36" ry="8" />
                  <ellipse
                    cx="60"
                    cy="90"
                    fill="#E4E4E7"
                    rx="30"
                    ry="7"
                    stroke="#18181B"
                    strokeDasharray="1 4"
                    strokeWidth="1.5"
                  />
                  {/* Center Axis Line */}
                  <line
                    stroke="#71717A"
                    strokeDasharray="2 3"
                    strokeWidth="1"
                    x1="60"
                    x2="60"
                    y1="15"
                    y2="105"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <h3 className="text-lg font-medium text-[#111111] mb-2 tracking-tight">
              Execute, don't explain
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Supergide traverses the product DOM and executes verified workflows natively on behalf of the customer. Zero documentation friction.
            </p>
            <div className="mt-8 pt-4 border-t border-[#F0F0F0] flex items-center justify-between font-mono text-[10px] text-[#737373]">
              <span>RUNTIME: IN-APP SANDBOX</span>
              <span>CLICKS: 0</span>
            </div>
          </div>

          {/* CARD 3: Instant verification */}
          <div className="flex flex-col p-8 group hover:bg-[#FCFCFC] transition-all relative hover:ring-1 hover:ring-[#111111]/20">
            {/* Monospace Technical Tag */}
            <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-10">
              [ 03 // VERIFY & CONFIRM ]
            </div>

            {/* Stippled Jack/Orbital Cross Graphic */}
            <div className="h-44 w-full flex items-center justify-center mb-8 relative">
              <div className="relative flex items-center justify-center">
                <svg className="w-32 h-32" fill="none" viewBox="0 0 120 120">
                  {/* Central 3D Cross in Stipple Structure */}
                  <rect
                    fill="#E4E4E7"
                    height="90"
                    rx="3"
                    stroke="#18181B"
                    strokeWidth="1.2"
                    width="16"
                    x="52"
                    y="15"
                  />
                  <rect fill="#18181B" height="16" rx="3" width="90" x="15" y="52" />
                  {/* Diagonal Axis Jack Arms (with mechanical indexing oscillation) */}
                  <g className="anim-verify will-change-transform origin-center">
                    <rect
                      fill="#71717A"
                      height="56"
                      rx="2"
                      stroke="#18181B"
                      strokeWidth="1.2"
                      transform="rotate(45 38 60)"
                      width="12"
                      x="32"
                      y="32"
                    />
                  </g>
                  {/* Halftone dots overlay */}
                  <circle cx="60" cy="60" fill="#FFFFFF" r="4" />
                  <circle cx="60" cy="30" fill="#18181B" r="1.5" />
                  <circle cx="60" cy="90" fill="#18181B" r="1.5" />
                  <circle cx="30" cy="60" fill="#FFFFFF" r="1.5" />
                  <circle cx="90" cy="60" fill="#FFFFFF" r="1.5" />
                </svg>
              </div>
            </div>

            {/* Description */}
            <h3 className="text-lg font-medium text-[#111111] mb-2 tracking-tight">
              Instant verification
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Supergide confirms task completion and displays immediate proof to the user. Every action yields a deterministic, audit-logged outcome.
            </p>
            <div className="mt-8 pt-4 border-t border-[#F0F0F0] flex items-center justify-between font-mono text-[10px] text-[#737373]">
              <span>LATENCY: 1.4s VERIFIED</span>
              <span>AUDIT: PROVENANCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
