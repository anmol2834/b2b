'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FileText, PackageCheck } from 'lucide-react';
import { DIVISIONS } from '@/config/divisions';

interface AlternatingScrollMatrixProps {
  onRequestQuote: (divisionId?: string) => void;
}

export function AlternatingScrollMatrix({
  onRequestQuote,
}: AlternatingScrollMatrixProps) {
  const leftStickyDossiers = [
    {
      title: '5-Star Resort Concealed Shower Engineering',
      code: 'SPEC-SAN-01',
      category: 'HOSPITALITY EN-SUITES',
      image: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
      spec: 'Solid forged brass thermostatic cartridge CW617N with 38°C anti-scald lock and dual volume flow regulators.',
      compliance: 'WRAS Approved • EN 1111 • LEED Platinum 0.35 GPM',
      productId: 'san-01',
    },
    {
      title: 'Commercial Touchless Washroom Infrastructure',
      code: 'SPEC-SAN-02',
      category: 'COMMERCIAL REAL ESTATE',
      image: '/senitary bath/sink-faucet.jpg',
      spec: 'Hermetically sealed dual-infrared sensor array with pressure-compensating aerator and vandal-resistant brass body.',
      compliance: 'NSF/ANSI 61 • CE Marking • 500k Actuation Rating',
      productId: 'san-02',
    },
    {
      title: 'High-Throughput Facade Revolving Portals',
      code: 'SPEC-ENT-01',
      category: 'FACADE & ACCESS AUTOMATION',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      spec: 'Curved laminated glass canopy with radar activation, emergency breakout wings, and night security shield.',
      compliance: 'EN 16005 Safety • DIN 18650 • BMS Modbus Integration',
      productId: 'ent-01',
    },
  ];

  const rightStickyDossiers = [
    {
      title: 'Consolidated Bonded Warehouse Staging',
      tag: '01. LOGISTICS MILESTONES',
      desc: 'Buffer staging in regional bonded warehouses for up to 60 days to match construction progress, ensuring zero site storage damage.',
      metric: '60-Day Buffer SLA',
    },
    {
      title: 'Palletized Single-Shipment Dispatch',
      tag: '02. PACKAGING & FREIGHT',
      desc: 'All fixtures, valves, and hardware consolidated into color-coded floor-by-floor palletized crates with complete barcode manifests.',
      metric: 'Floor-By-Floor Sorting',
    },
    {
      title: 'Direct Factory Warranty Facilitation',
      tag: '03. OEM GUARANTEE',
      desc: 'Unified single-contract warranty backed directly by European and global manufacturers with genuine OEM spare parts availability.',
      metric: '10-Year Post Handover',
    },
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#FAF9F5] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* =========================================================================
            PHASE A: LEFT STICKY (TEXT & SUMMARY) × RIGHT SCROLL (CARDS)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left: Sticky Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6 z-10">
            <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C]">
              PHASE 01 • SPECIFICATION INTEGRITY
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#141413] tracking-tight leading-[1.15] break-words">
              Architectural Submittal Dossiers & Compliance.
            </h3>
            <p className="text-sm font-body text-[#5C5852] leading-relaxed break-words">
              Every item supplied is cross-verified against architectural specifications, LEED credits, and international fire and acoustic standards before tender sign-off.
            </p>

            <div className="pt-4 border-t border-[#E5E0D5] flex items-center gap-2 text-xs font-tech text-[#141413]">
              <FileText className="w-4 h-4 text-[#A8824C] shrink-0" />
              <span>Full BIM Revit & CAD Submittals Available</span>
            </div>

            <button
              type="button"
              onClick={() => onRequestQuote()}
              className="px-6 py-3 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-semibold uppercase tracking-widest hover:bg-[#A8824C] transition-colors"
            >
              Request Spec Dossier
            </button>
          </div>

          {/* Right: Scrolling Cards */}
          <div className="lg:col-span-7 space-y-8 min-w-0">
            {leftStickyDossiers.map((item) => (
              <Link
                key={item.code}
                href={`/products/${item.productId}`}
                className="group block border border-[#E5E0D5] bg-white p-6 sm:p-8 cursor-pointer hover:border-[#141413] transition-all duration-300 shadow-xs"
              >
                <div className="relative w-full h-56 sm:h-64 bg-[#EBE6DC] overflow-hidden border border-[#E5E0D5] mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute top-3 left-3 bg-[#141413] text-[#FAF9F5] px-2.5 py-1 text-[10px] font-tech font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                  <span>{item.code}</span>
                  <span className="text-[#A8824C] font-semibold">{item.compliance}</span>
                </div>

                <h4 className="text-xl font-display font-bold text-[#141413] mb-2 group-hover:text-[#A8824C] transition-colors break-words">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-body text-[#5C5852] leading-relaxed mb-4 break-words">
                  {item.spec}
                </p>

                <div className="pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech font-semibold text-[#141413] group-hover:text-[#A8824C] transition-colors">
                  <span>View Technical Product Page →</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* =========================================================================
            PHASE B: LEFT SCROLL (LOGISTICS TILES) × RIGHT STICKY (SUPPLY DISPATCH)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 border-t border-[#E5E0D5] relative">
          
          {/* Left: Scrolling Logistics Tiles */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 min-w-0">
            {rightStickyDossiers.map((item) => (
              <div
                key={item.tag}
                className="p-6 sm:p-8 bg-white border border-[#E5E0D5] hover:border-[#141413] transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-tech px-2.5 py-1 bg-[#FAF9F5] border border-[#E5E0D5] text-[#141413] font-semibold">
                    {item.metric}
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold text-[#141413] mb-2 break-words">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-body text-[#5C5852] leading-relaxed break-words">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Sticky Panel */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start space-y-6 z-10">
            <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C]">
              PHASE 02 • PALLETIZED DISPATCH
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#141413] tracking-tight leading-[1.15] break-words">
              Zero-Friction Warehouse Staging & Handover.
            </h3>
            <p className="text-sm font-body text-[#5C5852] leading-relaxed break-words">
              We eliminate site congestion by scheduling multi-brand container offloading strictly aligned with your general contractor&apos;s installation sequence.
            </p>

            <div className="p-4 bg-[#F3EFE6] border border-[#E5E0D5] space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech text-[#141413] font-bold">
                <PackageCheck className="w-4 h-4 text-[#A8824C] shrink-0" />
                <span>Consolidated PO & Invoicing</span>
              </div>
              <p className="text-xs font-body text-[#5C5852] text-xs">
                10+ factory suppliers managed through a single master distributor invoice.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
