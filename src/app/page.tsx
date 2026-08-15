'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { ArchitecturalHero } from '@/components/sections/ArchitecturalHero';
import { TheFourWorlds } from '@/components/sections/TheFourWorlds';
import { SectionTransition } from '@/components/sections/SectionTransition';
import { IndustriesInteractive } from '@/components/sections/IndustriesInteractive';
import { ProjectProcurementBanner } from '@/components/sections/ProjectProcurementBanner';
import { ProcurementProcessTimeline } from '@/components/sections/ProcurementProcessTimeline';
import { WhyPartnerWithUs } from '@/components/sections/WhyPartnerWithUs';
import { SelectedProductsGallery } from '@/components/sections/SelectedProductsGallery';
import { SourcingNetwork } from '@/components/sections/SourcingNetwork';
import { AlternatingScrollMatrix } from '@/components/sections/AlternatingScrollMatrix';
import { BOQEngine } from '@/components/sections/BOQEngine';
import { FinalMinimalCTA } from '@/components/sections/FinalMinimalCTA';
import { ArchitecturalFooter } from '@/components/sections/ArchitecturalFooter';
import { QuoteModal } from '@/components/navigation/QuoteModal';

export default function LuxuryArchitecturalB2BPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDivision, setQuoteDivision] = useState<string | undefined>();

  const handleOpenQuote = (divisionId?: string) => {
    setQuoteDivision(divisionId);
    setIsQuoteModalOpen(true);
  };

  const scrollToBOQ = () => {
    const el = document.getElementById('boq-uploader');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenQuote();
    }
  };

  const scrollToCategories = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#FAF9F5] text-[#141413] selection:bg-[#B3884D] selection:text-white overflow-x-clip font-body">
      
      {/* 1. Global Clean Sticky Header */}
      <Header />

      {/* 2. Hero Section (85–95vh Editorial Split) */}
      <ArchitecturalHero
        onExploreProducts={scrollToCategories}
        onStartProject={scrollToBOQ}
      />

      {/* 3. The Four Worlds (01 Sanitary, 02 Hospitality, 03 Entrance, 04 Industrial) */}
      <TheFourWorlds />

      {/* 4. Section Transition ("From specification to supply.") */}
      <SectionTransition />

      {/* 5. Industries Section (Interactive Hover Reveal) */}
      <IndustriesInteractive />

      {/* 6. Project Procurement Banner (Full-Width Architectural Backdrop) */}
      <ProjectProcurementBanner
        onUploadBOQ={scrollToBOQ}
        onTalkToExpert={() => handleOpenQuote()}
      />

      {/* 7. Procurement Process (5-Step Horizontal Timeline) */}
      <ProcurementProcessTimeline />

      {/* 8. Why Us ("One requirement. Multiple possibilities.") */}
      <WhyPartnerWithUs />

      {/* 9. Selected Products (6 Curated Items Linking to Dedicated Product Routes) */}
      <SelectedProductsGallery />

      {/* 10. Sourcing Network ("The right product isn't always from one brand.") */}
      <SourcingNetwork onRequestQuote={() => handleOpenQuote()} />

      {/* 11. Alternating Scroll & Specification Dossiers */}
      <AlternatingScrollMatrix
        onRequestQuote={handleOpenQuote}
      />

      {/* 12. BOQ Requirement Engine & Drag-and-Drop Uploader */}
      <BOQEngine />

      {/* 13. Final Minimalist Closing CTA */}
      <FinalMinimalCTA onRequestQuote={() => handleOpenQuote()} />

      {/* 14. Luxury Architectural Footer */}
      <ArchitecturalFooter onRequestQuote={handleOpenQuote} />

      {/* Global Quotation / RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultDivision={quoteDivision}
      />
    </main>
  );
}
