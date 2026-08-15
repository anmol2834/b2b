'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ArchitecturalHeroProps {
  onExploreProducts: () => void;
  onStartProject: () => void;
}

export function ArchitecturalHero({
  onExploreProducts,
  onStartProject,
}: ArchitecturalHeroProps) {
  const [activeVisualTab, setActiveVisualTab] = useState<'sanitary' | 'entrance' | 'hospitality' | 'industrial'>('sanitary');
  
  const heroVisuals = {
    sanitary: {
      image: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
      label: 'ARCHITECTURAL SANITARY & FAUCETS',
      detail: 'Forged Solid Brass CW617N • WRAS Certified • 0.35 GPM LEED Flow',
    },
    entrance: {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      label: 'AUTOMATED GLASS PORTALS',
      detail: 'EN 16005 Safety Compliance • Biometric Turnstiles • Radar Actuation',
    },
    hospitality: {
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      label: 'LUXURY HOSPITALITY FF&E',
      detail: '400TC Egyptian Cotton Sateen • Custom Botanical Amenity Dispensers',
    },
    industrial: {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      label: 'FACILITIES & INDUSTRIAL MRO',
      detail: '15-Ton Hydraulic Loading Levelers • ATEX Flow Control Actuators',
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] pt-28 pb-12 flex flex-col justify-between border-b border-[#E5E0D5] bg-[#FAF9F5] overflow-hidden">
      
      {/* Main Split Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* =========================================================================
              LEFT SIDE: EDITORIAL TYPOGRAPHY & CALL TO ACTION
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-extrabold tracking-tight text-[#141413] leading-[1.08] mb-6">
              Everything Your Project Needs. <span className="text-[#A8824C]">Sourced Right.</span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg font-body text-[#5C5852] max-w-xl leading-relaxed mb-8">
              Premium brand sourcing and consolidated B2B wholesale supply for hospitality, commercial, and industrial projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onExploreProducts}
                className="px-6 sm:px-7 py-3.5 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#A8824C] transition-all duration-300 shadow-sm whitespace-nowrap"
              >
                Explore Products
              </button>

              <button
                type="button"
                onClick={onStartProject}
                className="px-6 sm:px-7 py-3.5 border border-[#141413] bg-transparent text-[#141413] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#141413] hover:text-[#FAF9F5] transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT SIDE: ART-DIRECTED ARCHITECTURAL COMPOSITION
              ========================================================================= */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#E5E0D5] bg-white p-3 shadow-xl">
              
              {/* Main Image Viewport */}
              <div className="relative w-full h-[360px] sm:h-[460px] overflow-hidden bg-[#EBE6DC]">
                <Image
                  src={heroVisuals[activeVisualTab].image}
                  alt={heroVisuals[activeVisualTab].label}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 600px"
                />

                {/* Subtle Image Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                {/* Top Label Pin */}
                <div className="absolute top-4 left-4 bg-[#141413]/90 text-[#FAF9F5] px-3 py-1 text-[10px] font-tech font-semibold tracking-widest uppercase backdrop-blur-xs">
                  {heroVisuals[activeVisualTab].label}
                </div>

                {/* Bottom Architectural Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-tech text-white/90">
                    {heroVisuals[activeVisualTab].detail}
                  </div>
                </div>
              </div>

              {/* Composition Switcher Tabs */}
              <div className="mt-3 grid grid-cols-4 gap-1 pt-1 border-t border-[#E5E0D5]/70">
                {(['sanitary', 'hospitality', 'entrance', 'industrial'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveVisualTab(tab)}
                    className={`py-1.5 text-[10px] font-tech uppercase tracking-wider transition-all text-center ${
                      activeVisualTab === tab
                        ? 'bg-[#141413] text-[#FAF9F5] font-bold'
                        : 'bg-[#FAF9F5] text-[#5C5852] hover:bg-[#EBE6DC]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          HERO MICRO-DETAIL: BOTTOM HORIZONTAL INFORMATION STRIP
          ========================================================================= */}
      <div className="w-full border-t border-[#E5E0D5] pt-6 mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-3 text-[11px] font-tech text-[#5C5852] tracking-widest uppercase">
            <span className="hover:text-[#141413] transition-colors">SANITARY FIXTURES</span>
            <span className="text-[#D8D2C5]">/</span>
            <span className="hover:text-[#141413] transition-colors">HOTEL AMENITIES</span>
            <span className="text-[#D8D2C5]">/</span>
            <span className="hover:text-[#141413] transition-colors">ENTRANCE SOLUTIONS</span>
            <span className="text-[#D8D2C5]">/</span>
            <span className="hover:text-[#141413] transition-colors">INDUSTRIAL SOLUTIONS</span>
          </div>
        </div>
      </div>

    </section>
  );
}
