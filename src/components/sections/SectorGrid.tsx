'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Building2, Hotel, Factory, Plane, Landmark, Stethoscope } from 'lucide-react';

const SECTORS = [
  { name: 'Commercial Real Estate & Grade-A Offices', icon: Building2, desc: 'Touchless sanitary, speed gates, energy-efficient building fixtures.' },
  { name: 'Luxury Hospitality & Resorts', icon: Hotel, desc: 'Curated FF&E, guestroom minibars, luxury banquet systems.' },
  { name: 'Manufacturing & Industrial Facilities', icon: Factory, desc: 'Heavy MRO supplies, ergonomic material handling, safety gear.' },
  { name: 'Airports & Transport Hubs', icon: Plane, desc: 'High-throughput sensor washrooms and automated access security.' },
  { name: 'Healthcare & Cleanroom Environments', icon: Stethoscope, desc: 'Antimicrobial sanitaryware, hermetic doors & compliant hardware.' },
  { name: 'Government & Institutional Buildings', icon: Landmark, desc: 'High-durability fixtures, certified access control & public safety.' },
];

export function SectorGrid() {
  return (
    <section id="sectors" className="py-24">
      <Container size="xl">
        <div className="mb-16">
          <span className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            Engineered for Demanding Sector Environments
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-base md:text-lg">
            Every vertical is configured to meet precise statutory standards, LEED criteria, and lifecycle durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <Card key={sector.name} className="group">
                <div className="p-3 rounded-xl bg-slate-800/40 w-fit mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{sector.name}</h3>
                <p className="text-sm text-slate-400">{sector.desc}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
