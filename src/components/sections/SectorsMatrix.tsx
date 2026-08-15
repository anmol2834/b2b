'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { 
  Building, 
  Hotel, 
  Factory, 
  Plane, 
  Home, 
  HeartPulse, 
  ShieldCheck, 
  ArrowUpRight, 
  Download, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

export interface SectorItem {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  typologies: string[];
  crossDivisionBundle: string[];
  telemetry: {
    projectsCount: string;
    avgSavings: string;
    compliance: string;
  };
  specPins: { label: string; detail: string }[];
}

const SECTOR_DATA: SectorItem[] = [
  {
    id: 'hospitality',
    number: '01',
    title: 'Hospitality & Luxury Resorts',
    category: '5-Star Hotels & Beachfront Resorts',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    typologies: ['5-Star Hotels', 'Luxury Beach Resorts', 'Boutique Heritage Stays', 'Michelin-Starred Restaurants'],
    crossDivisionBundle: [
      'Custom Botanical Wet Amenities & FSC Packaging',
      '400TC Egyptian Cotton Sateen Bedding & Bath Linens',
      'Concealed Thermostatic Rain Shower Columns (WRAS)',
      'High-Capacity Curved Glass Revolving Portals (EN 16005)',
    ],
    telemetry: {
      projectsCount: '240+ Properties',
      avgSavings: '18% BOQ Consolidation',
      compliance: 'LEED Gold & OEKO-TEX 100',
    },
    specPins: [
      { label: 'Bath Hardware', detail: 'Solid brass CW617N with PVD brushed gold' },
      { label: 'Private Label', detail: 'Certified organic botanical formulation' },
      { label: 'Acoustics', detail: 'DIN 4109 Class 1 silent drainage' },
    ],
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Corporate Towers & IT Parks',
    category: 'Grade-A Commercial Real Estate',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    typologies: ['Grade-A IT Parks', 'Corporate Global HQs', 'Co-Working Campuses', 'Financial District Hubs'],
    crossDivisionBundle: [
      'Dual-Sensor Infrared Touchless Basin Faucets (0.35 GPM)',
      'Optical Speed Turnstiles & Biometric Concourse Gates',
      'High-Traffic Rimless Vitreous China Urinal Suites',
      'Energy-Saving Recessed High-Velocity Air Curtains',
    ],
    telemetry: {
      projectsCount: '380+ Towers',
      avgSavings: '22% Water Conservation',
      compliance: 'LEED Platinum & ADA Compliant',
    },
    specPins: [
      { label: 'Throughput', detail: '60 persons/min access gate capacity' },
      { label: 'Sensor SLA', detail: '500,000 continuous cycle tested' },
      { label: 'BMS Link', detail: 'BACnet / Modbus protocol ready' },
    ],
  },
  {
    id: 'residential',
    number: '03',
    title: 'Residential & High-Rise Towers',
    category: 'Premium Real Estate Developments',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    typologies: ['High-Rise Residential Towers', 'Gated Villa Estates', 'Serviced Luxury Penthouses'],
    crossDivisionBundle: [
      'Architectural Sanitaryware Suites & Floor-Mounted Spouts',
      'Acoustic In-Wall Concealed Cistern Frames (400kg Rated)',
      'Motorized Sliding Residential Entrances & Access Intercoms',
      'Custom Vanity Solid-Surface Basins & Monolith Mixers',
    ],
    telemetry: {
      projectsCount: '450+ Complexes',
      avgSavings: 'Single-Source Invoice',
      compliance: 'ISO 9001 & WRAS Certified',
    },
    specPins: [
      { label: 'Structural', detail: '400kg wall-hung load safety rated' },
      { label: 'Finish QA', detail: '240h salt-spray corrosion tested' },
      { label: 'Warranty', detail: '10-year direct manufacturer SLA' },
    ],
  },
  {
    id: 'healthcare',
    number: '04',
    title: 'Healthcare & Medical Cleanrooms',
    category: 'Hospitals & Specialized Laboratories',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    typologies: ['Multi-Specialty Hospitals', 'Clean-Room Research Labs', 'Medical Universities', 'Surgical Centers'],
    crossDivisionBundle: [
      'ADA-Compliant Assisted Living Grab Bars & Safety Fixtures',
      'Anti-Microbial Nano-Glaze Vitreous China Sanitary Suites',
      'Hermetically Sealed High-Speed Cleanroom Spiral Doors',
      'Hospital-Grade Disinfectant & Sanitization Dispenser Fleet',
    ],
    telemetry: {
      projectsCount: '160+ Medical Centers',
      avgSavings: 'Zero-Lead Certified',
      compliance: 'EN 16005 & Cleanroom Class 4',
    },
    specPins: [
      { label: 'Hygiene', detail: 'Anti-microbial surface glaze coating' },
      { label: 'Safety', detail: 'Anti-panic breakout safety mechanism' },
      { label: 'Water QA', detail: 'NSF/ANSI 61 zero-lead certified' },
    ],
  },
  {
    id: 'industrial',
    number: '05',
    title: 'Industrial Logistics & Manufacturing',
    category: 'Automated Hubs & Heavy Plants',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    typologies: ['Automated Logistics Hubs', 'Cold-Chain Distribution Depots', 'Manufacturing Facilities', 'Port Freight Terminals'],
    crossDivisionBundle: [
      'Electro-Hydraulic Telescopic Dock Levelers (15-Ton Axle Load)',
      'Thermally Broken Insulated Sectional Overhead Doors',
      'Heavy-Duty Motorized Flow Control Valves & Actuators',
      'Impact-Absorbing Memory Polymer Safety Guardrails',
    ],
    telemetry: {
      projectsCount: '290+ Facilities',
      avgSavings: '15-Ton Dynamic Load',
      compliance: 'EN 1398 & ATEX Zone 1/21',
    },
    specPins: [
      { label: 'Axle Load', detail: '15-ton dynamic vehicle test certified' },
      { label: 'Weather', detail: 'Inflatable IP65 dock seal enclosure' },
      { label: 'Impact', detail: '24,000J forklift kinetic barrier' },
    ],
  },
  {
    id: 'infrastructure',
    number: '06',
    title: 'Infrastructure & Aviation Transit',
    category: 'Airports, Metro & Transit Terminals',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    typologies: ['International Airports', 'Metro Transit Stations', 'Mega Convention Centers', 'Government Concourse Halls'],
    crossDivisionBundle: [
      'Vandal-Proof High-Traffic Stainless & Vitreous Urinal Suites',
      'Heavy-Duty 4-Wing Automatic Revolving Glass Portals',
      'High-Volume Vertical Multistage Booster Pumping Stations',
      'Motorized Barrier Gates with Emergency BMS Integration',
    ],
    telemetry: {
      projectsCount: '85+ Mega Projects',
      avgSavings: '2M Cycle Durability',
      compliance: 'EN 16005 & UL 325 Certified',
    },
    specPins: [
      { label: 'Transit SLA', detail: '24/7 continuous duty concourse rating' },
      { label: 'Vandal Proof', detail: 'Concealed tamper-proof fasteners' },
      { label: 'Fire Rating', detail: 'EI 60 / EI 120 fire curtain ready' },
    ],
  },
];

function SectorCard({ 
  sector, 
  progress, 
  index, 
  onSelect 
}: { 
  sector: SectorItem; 
  progress: MotionValue<number>; 
  index: number; 
  onSelect: () => void; 
}) {
  const isEven = index % 2 === 0;
  const start = index * 0.14;
  const end = start + 0.28;

  const yParallax = useTransform(progress, [start, end], [25, -25]);
  const xParallax = useTransform(progress, [start, end], [0, isEven ? 12 : -12]);

  const Icon = sector.icon;

  return (
    <motion.div
      style={{ y: yParallax, x: xParallax }}
      className="gpu-layer relative rounded-3xl border border-slate-200 bg-white shadow-b2b-card-light hover:shadow-b2b-glow hover:border-accent-borderHover transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group overflow-hidden"
    >
      {/* Top Sector Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl border border-accent-border bg-accent-surface text-accent-primary group-hover:scale-105 transition-transform">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-accent-primary">
                SECTOR {sector.number} • {sector.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] leading-tight">
                {sector.title}
              </h3>
            </div>
          </div>

          <span className="text-2xl font-tech font-bold text-slate-200 group-hover:text-accent-primary transition-colors">
            {sector.number}
          </span>
        </div>

        {/* High-Resolution Sector Project Image */}
        <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 mb-6">
          <Image
            src={sector.image}
            alt={sector.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Typologies Pill Strip on Image */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
            {sector.typologies.slice(0, 3).map((typ) => (
              <span
                key={typ}
                className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10.5px] font-tech text-white border border-white/10"
              >
                {typ}
              </span>
            ))}
          </div>
        </div>

        {/* Cross-Division Consolidated Supply Bundle */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-tech font-bold uppercase tracking-wider text-slate-700 mb-2">
            <span className="flex items-center gap-1.5 text-accent-primary">
              <Layers className="w-3.5 h-3.5" />
              Consolidated Multi-Division Bundle
            </span>
            <span className="text-[10px] text-slate-500 font-normal">Single Master Invoice</span>
          </div>

          <div className="space-y-1.5">
            {sector.crossDivisionBundle.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-body text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specification Pins */}
        <div className="p-3.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] space-y-1.5 mb-6">
          <span className="text-[10px] font-tech uppercase tracking-widest text-slate-400 block mb-1">
            Technical Specification Pins
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {sector.specPins.map((pin) => (
              <div key={pin.label} className="text-left">
                <span className="text-[9.5px] font-tech font-bold text-accent-primary block uppercase">
                  {pin.label}
                </span>
                <span className="text-[10.5px] font-body text-slate-500 truncate block">
                  {pin.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Strip */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-tech text-slate-500">
          <ShieldCheck className="w-4 h-4 text-accent-primary" />
          <span>{sector.telemetry.compliance}</span>
        </div>

        <button
          type="button"
          onClick={onSelect}
          className="px-4 py-2 rounded-xl border border-accent-border bg-accent-surface text-accent-primary hover:border-accent-primary font-tech font-bold text-xs flex items-center gap-1.5 transition-colors"
        >
          <span>Request Sector Volume Rates</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export function SectorsMatrix({ onRequestQuote }: { onRequestQuote?: (sectorId?: string) => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const filteredSectors = activeFilter === 'all' 
    ? SECTOR_DATA 
    : SECTOR_DATA.filter((s) => s.id === activeFilter);

  return (
    <section 
      id="sectors" 
      ref={containerRef}
      className="perf-section-cv relative bg-[#FFFFFF] text-[#0F172A] px-4 sm:px-6 md:px-12 lg:px-20 py-24 arch-grid-light border-b border-slate-200"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Master Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-tech uppercase tracking-wider rounded-full border border-accent-border bg-accent-surface text-accent-primary font-semibold">
              <Building className="w-3.5 h-3.5" />
              Cross-Sector Bulk Supply Capacity
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0F172A] tracking-tight leading-[1.12]">
              Direct Multi-Brand Supply Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-slate-800 to-accent-primary">
                Six Strategic Industry Sectors.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mt-2 font-body leading-relaxed">
              Supplying architectural sanitaryware, hotel FF&E, automated access, and industrial facilities under unified bulk invoices.
            </p>
          </div>

          <a
            href="#compliance"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:border-accent-border text-xs font-tech text-slate-700 transition-colors shadow-sm w-fit shrink-0"
          >
            <Download className="w-4 h-4 text-accent-primary" />
            <span>Download Cross-Sector Wholesale Schedule (PDF)</span>
          </a>
        </div>

        {/* Sector Filter Rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-tech font-bold transition-all whitespace-nowrap ${
              activeFilter === 'all'
                ? 'border border-accent-border bg-accent-surface text-accent-primary shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
            }`}
          >
            All 6 Sectors
          </button>

          {SECTOR_DATA.map((s) => {
            const Icon = s.icon;
            const isActive = activeFilter === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveFilter(s.id)}
                className={`px-4 py-2 rounded-xl text-xs font-tech font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border border-accent-border bg-accent-surface text-accent-primary shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical 2-Column Sector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {filteredSectors.map((sector, idx) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              progress={scrollYProgress}
              index={idx}
              onSelect={() => onRequestQuote?.(sector.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
