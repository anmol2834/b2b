'use client';

import React from 'react';
import { TypographyMerge } from '@/components/core/TypographyMerge';

export function ProcurementProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Submit Specifications',
      detail: 'Share your project BOQ, brand schedule list, or required manufacturer product codes.',
    },
    {
      number: '02',
      title: 'Direct Brand Matching',
      detail: 'We cross-reference requirements with our direct factory distribution agreements for volume discounts.',
    },
    {
      number: '03',
      title: 'Wholesale Quotation',
      detail: 'Receive transparent factory-tier bulk quotes, compliance certificates, and logistical timelines.',
    },
    {
      number: '04',
      title: 'Freight Consolidation',
      detail: 'We gather products from global brand factories into bonded staging warehouses for a single unified delivery.',
    },
    {
      number: '05',
      title: 'Factory-Backed Delivery',
      detail: 'Secure handover at site with direct manufacturer warranties, complete submittal files, and OEM support.',
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
          <TypographyMerge
            as="h2"
            className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.1]"
          >
            Simple bulk ordering. Reliable logistics.
          </TypographyMerge>
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
