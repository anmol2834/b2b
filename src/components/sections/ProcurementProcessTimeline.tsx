'use client';

import React from 'react';

export function ProcurementProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Tell us what you need',
      detail: 'Share your BOQ, architectural drawings, specification schedule or custom requirement.',
    },
    {
      number: '02',
      title: 'We identify the right products',
      detail: 'Our engineering desk matches multi-brand specifications, compliance requirements, and lead times.',
    },
    {
      number: '03',
      title: 'You receive a quotation',
      detail: 'Factory-tier transparent volume pricing, delivery milestones, and formal submittal packages.',
    },
    {
      number: '04',
      title: 'We coordinate supply',
      detail: 'Consolidated bonded staging, quality audits, unified billing, and scheduled palletized delivery.',
    },
    {
      number: '05',
      title: 'Your project moves forward',
      detail: 'Direct manufacturer warranty coverage, spare parts facilitation, and long-term facility support.',
    },
  ];

  return (
    <section id="solutions" className="py-28 sm:py-36 bg-[#FAF9F5] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-3">
            THE PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.1]">
            Simple procurement.
            <br />
            Serious execution.
          </h2>
        </div>

        {/* 5-Step Minimal Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col justify-between pt-6 border-t border-[#E5E0D5]">
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-display font-light text-[#141413]">
                  {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <span className="hidden md:inline text-xs font-tech text-[#8E8981]">→</span>
                )}
              </div>

              <div>
                <h3 className="text-base font-display font-bold text-[#141413] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs font-body text-[#5C5852] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
