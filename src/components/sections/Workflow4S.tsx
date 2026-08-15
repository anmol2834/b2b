'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Search, Compass, Truck, Headset } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Source',
    icon: Search,
    desc: 'Direct OEM global manufacturing relationships with tiered wholesale volume pricing.',
  },
  {
    step: '02',
    title: 'Specify',
    icon: Compass,
    desc: 'Engineering support, BIM/CAD libraries, LEED / ADA compliance consulting for architects.',
  },
  {
    step: '03',
    title: 'Supply',
    icon: Truck,
    desc: 'Consolidated JIT regional warehousing, insured logistics & project milestone tracking.',
  },
  {
    step: '04',
    title: 'Support',
    icon: Headset,
    desc: 'Comprehensive SLA maintenance agreements, warranty lifecycle & on-site technicians.',
  },
];

export function Workflow4S() {
  return (
    <section id="workflow" className="py-24 bg-[#0d0f14]/60 border-y border-slate-800/80">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase">
            Operational Blueprint
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
            The 4S Enterprise Framework
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            From architectural specification to post-handover facility maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.step} className="relative overflow-hidden group">
                <span className="absolute top-4 right-4 text-3xl font-black text-slate-800 font-mono group-hover:text-slate-700 transition-colors">
                  {item.step}
                </span>
                <div className="p-3 rounded-xl bg-slate-800/50 w-fit mb-6 text-[#00E5FF]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
