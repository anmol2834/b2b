'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShoppingBag,
  Truck,
  Sliders,
  ShieldCheck,
  Headphones
} from 'lucide-react';

interface ArchitecturalHeroProps {
  onExploreProducts: () => void;
  onStartProject: () => void;
}

export function ArchitecturalHero({
  onExploreProducts,
  onStartProject,
}: ArchitecturalHeroProps) {

  const valueRibbonItems = [
    {
      icon: ShoppingBag,
      title: 'One Stop Solution',
      desc: 'Products + Procurement',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      desc: 'Reliable logistics network',
    },
    {
      icon: Sliders,
      title: 'Custom & Bulk Orders',
      desc: 'Tailored to your requirements',
    },
    {
      icon: ShieldCheck,
      title: 'Quality You Can Trust',
      desc: 'Sourced from trusted partners',
    },
    {
      icon: Headphones,
      title: 'End-to-End Support',
      desc: 'From inquiry to after-sales',
    },
  ];

  return (
    <section className="relative w-full bg-[#0D0E12] pt-24 lg:pt-28 text-white overflow-hidden">
      
      {/* Subtle Dark Luxury Ambient Lighting Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C59B27]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C59B27]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Dark Split Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: LUXURY TYPOGRAPHY & CALL TO ACTIONS
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tagline / Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-[#C59B27] font-tech text-xs sm:text-[13px] tracking-[0.2em] font-bold uppercase">
                ONE PARTNER. ENDLESS SOLUTIONS.
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-normal tracking-tight text-white leading-[1.12] mb-6"
            >
              Everything your <br />
              project needs. <br />
              <span className="text-[#C59B27] font-semibold italic">Sourced right.</span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base font-body text-gray-300 max-w-lg leading-relaxed mb-8"
            >
              Premium products and procurement solutions for hospitality, commercial, industrial and architectural spaces.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary Solid Gold Button */}
              <button
                type="button"
                onClick={onExploreProducts}
                className="px-6 sm:px-7 py-3.5 bg-[#C59B27] hover:bg-[#d8aa2b] text-[#0D0E12] text-xs font-tech font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#C59B27]/20 flex items-center gap-2 group whitespace-nowrap rounded-xs"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Outline Button */}
              <button
                type="button"
                onClick={onStartProject}
                className="px-6 sm:px-7 py-3.5 border border-white/30 hover:border-[#C59B27] bg-transparent text-white hover:text-[#C59B27] text-xs font-tech font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 group whitespace-nowrap rounded-xs"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: HIGH-END LUXURY INTERIOR VISUAL
              ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-w-2xl rounded-sm overflow-hidden border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group">
              
              {/* Main Luxury Bath & Interior Image */}
              <Image
                src="/verona_hero_bathroom.jpg"
                alt="Verona Luxury Architectural Bathroom & Bath Sourcing"
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 600px"
              />

              {/* Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

              {/* Subtle Corner Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#C59B27]/40 text-[#C59B27] px-3 py-1.5 text-[10px] font-tech tracking-widest uppercase font-semibold rounded-xs">
                ARCHITECTURAL SPECIFICATION
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM VALUE PROPOSITION STRIP (WHITE BAR UNDER HERO)
          ========================================================================= */}
      <div className="w-full bg-white border-t border-b border-gray-200 text-[#141413] py-5 shadow-xs relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {valueRibbonItems.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#E5D8B6] flex items-center justify-center shrink-0 group-hover:bg-[#C59B27] group-hover:border-[#C59B27] transition-colors duration-300">
                    <IconComp className="w-4 h-4 text-[#C59B27] group-hover:text-[#0D0E12] transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-tech text-xs sm:text-[13px] font-bold text-[#141413] leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-body text-gray-500 leading-tight mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
