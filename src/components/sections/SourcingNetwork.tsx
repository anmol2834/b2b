'use client';

import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Factory, Layers } from 'lucide-react';
import { TypographyMerge } from '@/components/core/TypographyMerge';

interface SourcingNetworkProps {
  onRequestQuote: () => void;
}

export function SourcingNetwork({ onRequestQuote }: SourcingNetworkProps) {
  const sourcingTiers = [
    {
      region: 'GERMANY & SWITZERLAND',
      category: 'Sanitary Engineering & Concealed Systems',
      standards: 'WRAS • DIN 4109 • EN 1111',
    },
    {
      region: 'JAPAN & SCANDINAVIA',
      category: 'Sensor Washrooms & Facade Access Automation',
      standards: 'LEED Platinum • EN 16005',
    },
    {
      region: 'ITALY & SPAIN',
      category: 'Architectural Ceramics, Finishes & Brassware',
      standards: 'ISO 9001 • CE Certified',
    },
    {
      region: 'GLOBAL OEM & TIER-1',
      category: 'Hospitality FF&E & Logistics Facilities MRO',
      standards: 'OEKO-TEX 100 • OSHA 1910',
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#F3EFE6] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-3">
              OUR SOURCING NETWORK
            </div>
            <TypographyMerge
              as="h2"
              className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.1] mb-6"
            >
              The right product isn&apos;t always from one brand.
            </TypographyMerge>
            <p className="text-sm sm:text-base font-body text-[#5C5852] leading-relaxed mb-8">
              We work across categories and sourcing networks to help identify products that fit your project&apos;s requirements.
            </p>

            <button
              type="button"
              onClick={onRequestQuote}
              className="px-7 py-3.5 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#A8824C] transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Explore Brands</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Architecture Grid */}
          <div className="lg:col-span-6 space-y-4">
            {sourcingTiers.map((tier, idx) => (
              <div
                key={tier.region}
                className="p-5 bg-white border border-[#E5E0D5] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-tech text-[#8E8981]">0{idx + 1}</span>
                    <span className="text-xs font-tech font-bold text-[#141413] tracking-wider uppercase">
                      {tier.region}
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold text-[#5C5852]">
                    {tier.category}
                  </h4>
                </div>
                <span className="text-[11px] font-tech text-[#A8824C] font-semibold hidden sm:inline">
                  {tier.standards}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
