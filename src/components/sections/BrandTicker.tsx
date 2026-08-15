'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const TOP_RAIL_BRANDS = [
  { name: 'GROHE', origin: 'Germany', category: 'Commercial Sanitary' },
  { name: 'KOHLER', origin: 'USA', category: 'Luxury Hospitality Bath' },
  { name: 'TOTO', origin: 'Japan', category: 'Washlet & Sensor Systems' },
  { name: 'GEBERIT', origin: 'Switzerland', category: 'Concealed Cisterns' },
  { name: 'VILLEROY & BOCH', origin: 'Germany', category: 'Architectural Ceramics' },
  { name: 'HANSGROHE', origin: 'Germany', category: 'Thermostatic Mixers' },
  { name: 'DURAVIT', origin: 'Germany', category: 'Vitreous Bathroom Suites' },
  { name: 'DORNBRACHT', origin: 'Germany', category: 'High-End Fixtures' },
  { name: 'SAMSONITE PRO', origin: 'USA', category: 'Hospitality Luggage FF&E' },
  { name: 'DIVERSEY', origin: 'USA', category: 'Institutional Hygiene' },
];

const BOTTOM_RAIL_BRANDS = [
  { name: 'ASSA ABLOY', origin: 'Sweden', category: 'Automated Portals & Locks' },
  { name: 'RECORD DOORS', origin: 'Switzerland', category: 'Hermetic & Revolving Doors' },
  { name: 'BOON EDAM', origin: 'Netherlands', category: 'High-Security Speed Gates' },
  { name: 'DORMAKABA', origin: 'Germany', category: 'Access Control Automation' },
  { name: 'KONE DOORS', origin: 'Finland', category: 'Commercial Turnstiles' },
  { name: 'DANFOSS', origin: 'Denmark', category: 'Industrial Flow & Drives' },
  { name: 'GRUNDFOS', origin: 'Denmark', category: 'Multistage Pumping Stations' },
  { name: 'EMERSON', origin: 'USA', category: 'Heavy Industrial Actuators' },
  { name: 'SCHNEIDER', origin: 'France', category: 'Building MEP Automation' },
  { name: 'SIEMENS', origin: 'Germany', category: 'HVAC & Facility Controls' },
];

export function BrandTicker() {
  // Duplicate arrays for seamless 360 infinite loop
  const topLoop = [...TOP_RAIL_BRANDS, ...TOP_RAIL_BRANDS];
  const bottomLoop = [...BOTTOM_RAIL_BRANDS, ...BOTTOM_RAIL_BRANDS];

  return (
    <section className="relative w-full py-16 bg-[#0E1015] border-y border-white/[0.08] overflow-hidden">
      
      {/* Header Eyebrow */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-tech tracking-wider uppercase text-slate-400">
            <ShieldCheck className="w-4 h-4 text-accent-primary" />
            <span className="font-bold text-white">Direct Distribution Partner</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Wholesale Institutional Multi-Brand Supply</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-tech text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-secondary" />
            <span>Volume Discounts & Direct Manufacturer Warranties</span>
          </div>
        </div>
      </div>

      {/* Marquee Rail Container with Left/Right Edge Fades */}
      <div className="relative w-full overflow-hidden pause-on-hover">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0E1015] to-transparent z-10" />
        
        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0E1015] to-transparent z-10" />

        {/* Top Rail: Right to Left */}
        <div className="animate-marquee-left flex items-center gap-4 py-2.5 mb-3">
          {topLoop.map((brand, idx) => (
            <div
              key={`top-${brand.name}-${idx}`}
              className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-accent-borderHover hover:shadow-b2b-glow transition-all duration-300 cursor-default shrink-0"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-slate-200 group-hover:text-white tracking-wider">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-tech text-slate-500 group-hover:text-accent-primary transition-colors">
                    [{brand.origin}]
                  </span>
                </div>
                <span className="text-[10px] font-tech text-slate-400 group-hover:text-slate-300">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rail: Left to Right */}
        <div className="animate-marquee-right flex items-center gap-4 py-2.5">
          {bottomLoop.map((brand, idx) => (
            <div
              key={`bottom-${brand.name}-${idx}`}
              className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-accent-borderHover hover:shadow-b2b-glow transition-all duration-300 cursor-default shrink-0"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-slate-200 group-hover:text-white tracking-wider">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-tech text-slate-500 group-hover:text-accent-secondary transition-colors">
                    [{brand.origin}]
                  </span>
                </div>
                <span className="text-[10px] font-tech text-slate-400 group-hover:text-slate-300">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
