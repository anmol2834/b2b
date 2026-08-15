'use client';

import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface FinalMinimalCTAProps {
  onRequestQuote: () => void;
}

export function FinalMinimalCTA({ onRequestQuote }: FinalMinimalCTAProps) {
  return (
    <section className="py-32 sm:py-48 bg-[#F3EFE6] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-[#141413] tracking-tight leading-[1.05] mb-6">
          Have a requirement?
        </h2>

        {/* Supporting Line */}
        <p className="text-lg sm:text-2xl font-body text-[#5C5852] mb-12">
          Tell us what you&apos;re looking for.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={onRequestQuote}
            className="px-9 py-4 bg-[#141413] text-[#FAF9F5] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#A8824C] transition-all duration-300 shadow-md active:scale-95"
          >
            Request a Quote
          </button>

          <a
            href="https://wa.me/?text=Hello%20Vertex%20Supply%20Team%2C%20I%20have%20a%20bulk%20supply%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 border border-[#141413] bg-transparent text-[#141413] text-xs font-tech font-semibold tracking-widest uppercase hover:bg-[#141413] hover:text-[#FAF9F5] transition-all duration-300 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Division Strip */}
        <div className="text-xs font-tech text-[#8E8981] tracking-widest uppercase">
          Sanitary • Hospitality • Entrance • Industrial
        </div>

      </div>
    </section>
  );
}
