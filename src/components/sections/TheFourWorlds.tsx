'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TypographyMerge } from '@/components/core/TypographyMerge';

export function TheFourWorlds() {
  const worlds = [
    {
      number: '01',
      id: 'sanitary',
      productId: 'san-01',
      title: 'SANITARY',
      subtitle: 'Premium sanitary fixtures, faucets, showers and commercial bathroom solutions.',
      image: '/senitary bath/sink-faucet.jpg',
      cta: 'Explore Sanitary →',
    },
    {
      number: '02',
      id: 'hospitality',
      productId: 'hosp-01',
      title: 'HOSPITALITY',
      subtitle: 'Hotel amenities, guest-room supplies, housekeeping and hospitality products.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      cta: 'Explore Hospitality →',
    },
    {
      number: '03',
      id: 'entrance',
      productId: 'ent-01',
      title: 'ENTRANCE',
      subtitle: 'Automatic doors, architectural hardware, access control and entrance systems.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      cta: 'Explore Entrance →',
    },
    {
      number: '04',
      id: 'industrial',
      productId: 'ind-01',
      title: 'INDUSTRIAL',
      subtitle: 'MRO, safety, hardware, storage, tools and industrial facility products.',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      cta: 'Explore Industrial →',
    },
  ];

  return (
    <section id="categories" className="py-28 sm:py-36 bg-[#FAF9F5] border-b border-[#E5E0D5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] font-tech font-bold uppercase tracking-widest text-[#A8824C] mb-3">
            WHAT WE SUPPLY
          </div>
          <TypographyMerge
            as="h2"
            className="text-3xl sm:text-5xl font-display font-bold text-[#141413] tracking-tight leading-[1.1]"
          >
            Four categories. One wholesale supply channel.
          </TypographyMerge>
        </div>

        {/* Four Gallery Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {worlds.map((world) => (
            <Link
              key={world.id}
              href={`/products/${world.productId}`}
              className="group border border-[#E5E0D5] bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-[#141413] transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Large Category Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-display font-light text-[#8E8981] group-hover:text-[#141413] transition-colors">
                    {world.number}
                  </span>
                  <span className="text-[11px] font-tech tracking-widest uppercase text-[#A8824C] font-semibold">
                    DIVISION {world.number}
                  </span>
                </div>

                {/* Museum-Grade Photography Viewport */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-[#EBE6DC] mb-6 border border-[#E5E0D5]">
                  <Image
                    src={world.image}
                    alt={world.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Title & Editorial Description */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#141413] mb-2 group-hover:text-[#A8824C] transition-colors break-words">
                  {world.number} — {world.title}
                </h3>
                <p className="text-xs sm:text-sm font-body text-[#5C5852] leading-relaxed break-words">
                  {world.subtitle}
                </p>
              </div>

              {/* Minimal Text CTA */}
              <div className="mt-8 pt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs font-tech font-semibold tracking-wider text-[#141413] group-hover:text-[#A8824C] transition-colors">
                <span>{world.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
