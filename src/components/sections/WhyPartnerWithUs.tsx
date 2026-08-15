'use client';

import React from 'react';
import { TypographyMerge } from '@/components/core/TypographyMerge';

export function WhyPartnerWithUs() {
  const principles = [
    {
      label: 'MULTI-CATEGORY',
      title: 'Integrated Sourcing',
      desc: 'Source across multiple professional product categories from sanitaryware to automated doors under a single unified purchase agreement.',
    },
    {
      label: 'PROJECT-FOCUSED',
      title: 'Specification Alignment',
      desc: 'Built around actual project requirements, schedule milestones, and architectural compliance rather than just individual products.',
    },
    {
      label: 'B2B PROCUREMENT',
      title: 'Institutional Terms',
      desc: 'Designed specifically for bulk orders, commercial submittal dossiers, factory-direct volume pricing, and consolidated palletized dispatch.',
    },
    {
      label: 'HUMAN SUPPORT',
      title: 'Dedicated Account Desk',
      desc: 'Talk to an experienced technical procurement specialist who understands blueprints and engineering specs when requirements get complex.',
    },
  ];

  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#F3EFE6] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-3">
            WHY PARTNER WITH US
          </div>
          <TypographyMerge
            as="h2"
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#141413] tracking-tight leading-[1.08]"
          >
            One requirement. Multiple possibilities.
          </TypographyMerge>
        </div>

        {/* 4 Concise Principles in Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.label}
              className="border-t border-[#141413] pt-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] block mb-2">
                  {principle.label}
                </span>
                <h3 className="text-xl font-display font-bold text-[#141413] mb-3">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm font-body text-[#5C5852] leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
