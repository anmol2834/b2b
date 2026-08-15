'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare, UploadCloud } from 'lucide-react';

interface ProjectProcurementBannerProps {
  onUploadBOQ: () => void;
  onTalkToExpert: () => void;
}

export function ProjectProcurementBanner({
  onUploadBOQ,
  onTalkToExpert,
}: ProjectProcurementBannerProps) {
  return (
    <section id="supply-chain" className="relative py-32 sm:py-44 overflow-hidden border-b border-[#E5E0D5]">
      
      {/* Full-width Architectural Background Image */}
      <div className="absolute inset-0 bg-[#141413]">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
          alt="Architectural Bulk Supply"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-4">
            BULK ORDER FULFILLMENT
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FAF9F5] tracking-tight leading-[1.08] mb-6">
            Send us the specification.
            <br />
            We will supply in bulk.
          </h2>

          {/* Supporting text */}
          <p className="text-base sm:text-lg font-body text-slate-300 max-w-xl leading-relaxed mb-10">
            Upload your BOQ or brand requirement sheet. We arrange manufacturer-direct B2B supply contracts, coordinate bulk freight logistics, and guarantee on-schedule delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onUploadBOQ}
              className="px-8 py-4 bg-[#FAF9F5] text-[#141413] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#A8824C] hover:text-[#FAF9F5] transition-all duration-300 flex items-center gap-2 shadow-lg group"
            >
              <span>Upload Your BOQ</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onTalkToExpert}
              className="px-8 py-4 border border-white/30 text-[#FAF9F5] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Talk to B2B Supply Desk</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
