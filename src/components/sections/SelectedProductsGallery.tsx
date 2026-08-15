'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProductSpecItem, DIVISIONS } from '@/config/divisions';
import { TypographyMerge } from '@/components/core/TypographyMerge';

export function SelectedProductsGallery() {
  // Select exactly 6 iconic products across divisions
  const selectedProducts: ProductSpecItem[] = [
    DIVISIONS.sanitary.products[0], // Concealed Thermostatic Shower (san-01)
    DIVISIONS.sanitary.products[1], // Touchless Sensor Faucet (san-02)
    DIVISIONS.entrance.products[0], // 3-Wing Revolving Door (ent-01)
    DIVISIONS.hospitality.products[0], // 400TC Egyptian Cotton (hosp-01)
    DIVISIONS.entrance.products[1], // Optical Speed Turnstile (ent-02)
    DIVISIONS.industrial.products[0], // Hydraulic Dock Leveler (ind-01)
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#FAF9F5] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-3">
              CURATED SPECIFICATIONS
            </div>
            <TypographyMerge
              as="h2"
              className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight"
            >
              Selected Products.
            </TypographyMerge>
          </div>
          <p className="text-xs sm:text-sm font-body text-[#5C5852] max-w-md">
            Engineered fixtures and architectural assets specified in premier commercial and luxury developments worldwide.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid (2 Large, 4 Medium Rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Row 1: Large Feature (7 cols) + Tall Feature (5 cols) */}
          <Link
            href={`/products/${selectedProducts[0].id}`}
            className="md:col-span-7 group border border-[#E5E0D5] bg-white p-6 sm:p-8 cursor-pointer hover:border-[#141413] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[320px] sm:h-[400px] bg-[#EBE6DC] overflow-hidden border border-[#E5E0D5] mb-6">
                <Image
                  src={selectedProducts[0].image}
                  alt={selectedProducts[0].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
                <div className="absolute top-4 left-4 bg-[#141413] text-[#FAF9F5] px-2.5 py-1 text-[10px] font-tech font-bold uppercase tracking-wider">
                  {selectedProducts[0].category}
                </div>
              </div>

              <div className="text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                {selectedProducts[0].code} • {selectedProducts[0].moq}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#141413] mb-2 group-hover:text-[#A8824C] transition-colors break-words">
                {selectedProducts[0].name}
              </h3>
              <p className="text-xs sm:text-sm font-body text-[#5C5852] leading-relaxed break-words">
                {selectedProducts[0].summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech font-semibold text-[#141413] group-hover:text-[#A8824C] transition-colors">
              <span>View Product Specification →</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href={`/products/${selectedProducts[1].id}`}
            className="md:col-span-5 group border border-[#E5E0D5] bg-white p-6 sm:p-8 cursor-pointer hover:border-[#141413] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-[320px] sm:h-[400px] bg-[#EBE6DC] overflow-hidden border border-[#E5E0D5] mb-6">
                <Image
                  src={selectedProducts[1].image}
                  alt={selectedProducts[1].name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute top-4 left-4 bg-[#141413] text-[#FAF9F5] px-2.5 py-1 text-[10px] font-tech font-bold uppercase tracking-wider">
                  {selectedProducts[1].category}
                </div>
              </div>

              <div className="text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                {selectedProducts[1].code} • {selectedProducts[1].moq}
              </div>
              <h3 className="text-xl font-display font-bold text-[#141413] mb-2 group-hover:text-[#A8824C] transition-colors break-words">
                {selectedProducts[1].name}
              </h3>
              <p className="text-xs font-body text-[#5C5852] leading-relaxed break-words">
                {selectedProducts[1].summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech font-semibold text-[#141413] group-hover:text-[#A8824C] transition-colors">
              <span>View Product Specification →</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Row 2: 4-Item Grid in 2 Columns */}
          {selectedProducts.slice(2, 6).map((prod) => (
            <Link
              key={prod.id}
              href={`/products/${prod.id}`}
              className="md:col-span-6 group border border-[#E5E0D5] bg-white p-6 cursor-pointer hover:border-[#141413] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-[240px] sm:h-[280px] bg-[#EBE6DC] overflow-hidden border border-[#E5E0D5] mb-5">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute top-3 left-3 bg-[#141413] text-[#FAF9F5] px-2 py-0.5 text-[10px] font-tech font-bold uppercase tracking-wider">
                    {prod.category}
                  </div>
                </div>

                <div className="text-[10px] font-tech text-[#8E8981] uppercase tracking-wider mb-1">
                  {prod.code} • {prod.moq}
                </div>
                <h4 className="text-lg font-display font-bold text-[#141413] mb-1.5 group-hover:text-[#A8824C] transition-colors leading-snug break-words">
                  {prod.name}
                </h4>
                <p className="text-xs font-body text-[#5C5852] line-clamp-2 leading-relaxed break-words">
                  {prod.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech font-semibold text-[#141413] group-hover:text-[#A8824C] transition-colors">
                <span>View Product Specification →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
