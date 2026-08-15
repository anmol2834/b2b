'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

const CLIENTS = [
  'Marriott International',
  'Hilton Worldwide',
  'Hyatt Hotels',
  'L&T Construction',
  'DLF Commercial',
  'Tata Projects',
  'Godrej Properties',
  'Schneider Electric',
];

export function TrustTicker() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-[#0d0f14]/50">
      <Container size="xl">
        <p className="text-center text-xs font-mono tracking-widest text-slate-500 uppercase mb-8">
          Trusted by Industry Leaders & Global Hospitality Chains
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70">
          {CLIENTS.map((client) => (
            <span
              key={client}
              className="text-sm md:text-base font-semibold tracking-wider text-slate-400 font-mono hover:text-white transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
