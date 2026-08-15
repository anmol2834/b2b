'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface IndustryData {
  id: string;
  name: string;
  scope: string;
  image: string;
  keyProducts: string;
}

const INDUSTRIES: IndustryData[] = [
  {
    id: 'hotels',
    name: 'HOTELS',
    scope: '5-Star Luxury Resorts & Boutique Suites',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Organic amenities, 400TC bed linens, thermostatic showers, minibar units.',
  },
  {
    id: 'restaurants',
    name: 'RESTAURANTS',
    scope: 'Fine Dining Venues & Commercial Kitchens',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Commercial banquet flatware, hygienic wall cladding, washroom sensor faucets.',
  },
  {
    id: 'commercial',
    name: 'COMMERCIAL',
    scope: 'Grade-A Office Towers & IT Campuses',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Touchless basin faucets, optical turnstiles, acoustic cistern frames.',
  },
  {
    id: 'construction',
    name: 'CONSTRUCTION',
    scope: 'General Contracting & High-Rise Real Estate',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Concealed plumbing manifolds, architectural door portals, heavy drainage.',
  },
  {
    id: 'architecture',
    name: 'ARCHITECTURE',
    scope: 'Design Studios, Masterplanners & Specifiers',
    image: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
    keyProducts: 'BIM Revit library models, bespoke finish matching, LEED compliant fixtures.',
  },
  {
    id: 'healthcare',
    name: 'HEALTHCARE',
    scope: 'Hospitals, Cleanrooms & Research Labs',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Antimicrobial vitreous china, hermetic cleanroom doors, anti-ligature valves.',
  },
  {
    id: 'manufacturing',
    name: 'MANUFACTURING',
    scope: 'Industrial Plants & Automated Warehouses',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Hydraulic dock levelers, process control valves, centrifugal booster pumps.',
  },
  {
    id: 'facilities',
    name: 'FACILITIES',
    scope: 'Asset Management & Ongoing MRO Operations',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    keyProducts: 'Impact-absorbing safety rails, OEM spare cartridges, housekeeping fleets.',
  },
];

interface IndustriesInteractiveProps {
  onSelectIndustry?: (industryId: string) => void;
}

export function IndustriesInteractive({ onSelectIndustry }: IndustriesInteractiveProps) {
  const [activeIndustry, setActiveIndustry] = useState<IndustryData>(INDUSTRIES[0]);

  return (
    <section id="industries" className="py-28 sm:py-36 bg-[#FAF9F5] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-3">
            BUILT AROUND YOUR INDUSTRY
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.1]">
            Different spaces.
            <br />
            Different requirements.
          </h2>
        </div>

        {/* Split Typographic & Preview Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Typographic Industry List */}
          <div className="lg:col-span-7 divide-y divide-[#E5E0D5] border-y border-[#E5E0D5]">
            {INDUSTRIES.map((industry, index) => {
              const isHovered = activeIndustry.id === industry.id;
              return (
                <div
                  key={industry.id}
                  onMouseEnter={() => setActiveIndustry(industry)}
                  onClick={() => onSelectIndustry && onSelectIndustry(industry.id)}
                  className={`py-5 sm:py-6 flex items-center justify-between cursor-pointer transition-all duration-200 group ${
                    isHovered ? 'pl-4 sm:pl-6 bg-[#F3EFE6]' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs font-tech text-[#8E8981]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight transition-colors ${
                        isHovered ? 'text-[#141413]' : 'text-[#8E8981] group-hover:text-[#141413]'
                      }`}
                    >
                      {industry.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pr-2">
                    <span className="hidden sm:inline text-xs font-body text-[#5C5852]">
                      {industry.scope}
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${
                        isHovered ? 'text-[#A8824C] translate-x-0.5 -translate-y-0.5' : 'text-[#8E8981]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Contextual Image Reveal & Scope Dossier */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="border border-[#E5E0D5] bg-white p-4 shadow-xl">
              {/* Context Image */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-[#EBE6DC] overflow-hidden border border-[#E5E0D5]">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#A8824C] block mb-1">
                    TARGET INDUSTRY PROFILE
                  </span>
                  <h4 className="text-xl font-display font-bold">
                    {activeIndustry.name}
                  </h4>
                  <p className="text-xs font-body text-white/90 mt-1">
                    {activeIndustry.scope}
                  </p>
                </div>
              </div>

              {/* Sourcing Summary */}
              <div className="mt-4 p-4 bg-[#FAF9F5] border border-[#E5E0D5]">
                <div className="text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                  Primary Supply Package
                </div>
                <div className="text-xs font-body text-[#141413] leading-relaxed">
                  {activeIndustry.keyProducts}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
