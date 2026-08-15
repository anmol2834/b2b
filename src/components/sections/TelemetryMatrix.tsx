'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ScrollItemFade } from '@/components/core/ScrollItemFade';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Download
} from 'lucide-react';

interface EjectionCardProps {
  index: number;
  division: string;
  title: string;
  spec: string;
  metrics: string;
  image: string;
  badges: string[];
}

const PROOF_CARDS: EjectionCardProps[] = [
  {
    index: 1,
    division: 'Hospitality En-Suites',
    title: '5-Star Resort Concealed Shower Systems',
    spec: 'Thermostatic anti-scald forged brass cartridges, dual-volume ceiling rain showers, and PVD physical vapor deposition finishes.',
    metrics: '450 Key Luxury Resort',
    image: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
    badges: ['WRAS Approved', 'LEED Platinum', '500k Cycle Valve'],
  },
  {
    index: 2,
    division: 'Commercial Access',
    title: 'High-Throughput Facade Revolving Portals',
    spec: 'Curved laminated glass canopy with radar motion sensors, emergency breakout leaves, and integrated perimeter security curtains.',
    metrics: '60 Persons/Min Flow',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    badges: ['EN 16005 Safety', 'DIN 18650 Class 1', 'BMS Modbus Link'],
  },
  {
    index: 3,
    division: 'Commercial Hygiene',
    title: 'Touchless Infrared Dual-Sensor Faucets',
    spec: 'Solid DZR brass body, hermetically sealed infrared sensing array, 0.35 GPM pressure-compensating flow regulators.',
    metrics: '70% Water Reduction',
    image: '/senitary bath/sink-faucet.jpg',
    badges: ['NSF/ANSI 61', 'CE Certified', 'ADA Compliant'],
  },
  {
    index: 4,
    division: 'Industrial Hydraulics',
    title: 'Hydraulic Loading Dock Levelers & Shelters',
    spec: 'Heavy-duty 15-ton axle dynamic capacity, emergency velocity stop valves, and polyurethane insulated dock seals.',
    metrics: '15-Ton Dynamic Axle',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    badges: ['EN 1398 Tested', 'ATEX Proof Motor', 'ISO 9001 QA'],
  },
];

function AsymmetricalCard({ card, progress }: { card: EjectionCardProps; progress: MotionValue<number> }) {
  // Asymmetrical parallax tilt and drift based on card index
  const isEven = card.index % 2 === 0;
  
  // Calculate specific segment progress
  const start = (card.index - 1) * 0.22;
  const end = start + 0.35;

  const yDrift = useTransform(progress, [start, end], [25, -25]);
  const xDrift = useTransform(progress, [start, end], [0, isEven ? 14 : -14]);
  const rotateDrift = useTransform(progress, [start, end], [0, isEven ? 1.5 : -1.5]);

  return (
    <motion.div
      style={{ 
        y: yDrift, 
        x: xDrift, 
        rotate: rotateDrift 
      }}
      className="gpu-layer relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xl shadow-slate-900/5 flex flex-col md:flex-row gap-6 items-center group hover:border-accent-borderHover transition-colors duration-300"
    >
      {/* High-Resolution Project Photo */}
      <div className="relative w-full md:w-56 h-48 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-slate-200">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Index Watermark */}
        <span className="absolute bottom-3 left-3 text-xs font-tech text-white/90 font-bold bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
          0{card.index}
        </span>
      </div>

      {/* Technical Spec Metadata */}
      <div className="flex-1 flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-accent-primary">
              {card.division}
            </span>
            <span className="text-[10.5px] font-tech text-accent-secondary font-semibold bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
              {card.metrics}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-display font-bold text-[#0F172A] mb-2 group-hover:text-accent-primary transition-colors">
            {card.title}
          </h3>

          <p className="text-xs font-body text-slate-600 leading-relaxed mb-4">
            {card.spec}
          </p>
        </div>

        {/* Technical Badges */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <span
              key={badge}
              className="text-[9.5px] font-tech text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3 h-3 text-accent-primary shrink-0" />
              <span>{badge}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function TelemetryMatrix() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#F8FAFC] text-[#0F172A] px-4 sm:px-6 md:px-12 lg:px-20 py-24 border-b border-slate-200 overflow-hidden"
    >
      {/* Ambient Top Glow */}
      <div 
        className="pointer-events-none absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-[140px] opacity-10"
        style={{ backgroundColor: 'var(--accent-primary)' }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* =========================================================================
              LEFT TRACK: STICKY COMMAND & CREDIBILITY PILLAR (~5 Cols)
              ========================================================================= */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-28 space-y-6">
              <ScrollItemFade>
                {/* Telemetry Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-tech tracking-wider uppercase rounded-full border border-accent-border bg-accent-surface text-accent-primary font-semibold shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Master Supply Capacity</span>
                </div>

                {/* Master Title */}
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight leading-[1.12] mt-4">
                  Direct Multi-Brand Supply Capacity{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-800 to-accent-primary block mt-1">
                    Backed by Tier-1 Manufacturers.
                  </span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed mt-3">
                  We supply high-volume commercial fixtures, hotel guest supplies, automated entrances, and industrial equipment directly at institutional wholesale tier pricing with unified master invoicing.
                </p>

                {/* Procurement Telemetry Live HUD Card */}
                <div className="p-5 rounded-3xl border border-slate-200 bg-white space-y-4 shadow-xl shadow-slate-900/5 mt-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-tech text-slate-500">
                    <span>WHOLESALE DISTRIBUTION TELEMETRY</span>
                    <span className="text-accent-primary font-bold">VERIFIED CAPACITY</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/70">
                      <span className="text-[10px] font-tech uppercase text-slate-500 block mb-1">Catalog Scope</span>
                      <span className="text-lg font-display font-bold text-[#0F172A] block">50,000+</span>
                      <span className="text-[10px] font-tech text-slate-500">Ready Stock SKUs</span>
                    </div>

                    <div className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/70">
                      <span className="text-[10px] font-tech uppercase text-slate-500 block mb-1">Projects Supplied</span>
                      <span className="text-lg font-display font-bold text-[#0F172A] block">1,200+</span>
                      <span className="text-[10px] font-tech text-slate-500">Direct Deliveries</span>
                    </div>

                    <div className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/70">
                      <span className="text-[10px] font-tech uppercase text-slate-500 block mb-1">Authenticity</span>
                      <span className="text-lg font-display font-bold text-accent-primary block">100%</span>
                      <span className="text-[10px] font-tech text-slate-500">Genuine OEM Warranty</span>
                    </div>

                    <div className="p-3 rounded-2xl border border-slate-200/80 bg-slate-50/70">
                      <span className="text-[10px] font-tech uppercase text-slate-500 block mb-1">Pricing Advantage</span>
                      <span className="text-lg font-display font-bold text-accent-secondary block">Tier-1</span>
                      <span className="text-[10px] font-tech text-slate-500">Wholesale Volume Rates</span>
                    </div>
                  </div>

                  {/* PDF Download Button */}
                  <a
                    href="#compliance"
                    className="w-full py-2.5 px-4 rounded-xl border border-accent-border bg-accent-surface text-accent-primary hover:border-accent-primary text-xs font-tech font-bold flex items-center justify-between transition-colors shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Manufacturer Certification Registry</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollItemFade>
            </div>
          </div>

          {/* =========================================================================
              RIGHT TRACK: ASYMMETRICAL EJECTION PROOF MATRIX (~7 Cols)
              ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">
            {PROOF_CARDS.map((card) => (
              <AsymmetricalCard 
                key={card.index} 
                card={card} 
                progress={scrollYProgress} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
