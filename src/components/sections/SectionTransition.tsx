'use client';

import React from 'react';

export function SectionTransition() {
  return (
    <section className="py-32 sm:py-44 bg-[#F3EFE6] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="text-[11px] font-tech uppercase tracking-widest text-[#A8824C] font-semibold mb-6">
          END-TO-END PROCUREMENT
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#141413] tracking-tight leading-tight mb-8">
          From specification to supply.
        </h2>

        <p className="text-base sm:text-xl font-body text-[#5C5852] max-w-2xl mx-auto leading-relaxed">
          We help businesses source the products their spaces need — across multiple categories, brands and project requirements.
        </p>

        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-[#A8824C]" />
          <span className="w-1.5 h-1.5 bg-[#A8824C]" />
          <span className="h-[1px] w-12 bg-[#A8824C]" />
        </div>

      </div>
    </section>
  );
}
