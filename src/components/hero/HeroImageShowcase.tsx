'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Pause, 
  Play,
  ArrowUpRight
} from 'lucide-react';

export interface CategorySlide {
  url: string;
  title: string;
  spec: string;
  tag: string;
  projectType: string;
}

export const CATEGORY_GALLERIES: Record<string, CategorySlide[]> = {
  sanitary: [
    {
      url: '/senitary bath/modern-bathroom-with-blue-tile-glass-shower.jpg',
      title: 'Luxury Hotel En-Suite Rain Shower',
      spec: 'Concealed Thermostatic Column • Anti-Scald Cartridge • WRAS Certified',
      tag: '5-STAR HOSPITALITY',
      projectType: 'Grand Hyatt En-Suite Package',
    },
    {
      url: '/senitary bath/sink-faucet.jpg',
      title: 'Precision Touchless Sensor Faucet',
      spec: 'Infrared Dual-Sensor • 0.35 GPM LEED Flow • Solid Brass Matte Black',
      tag: 'COMMERCIAL GRADE',
      projectType: 'Commercial Tower Washroom Spec',
    },
    {
      url: '/senitary bath/pexels-artbovich-6933779.jpg',
      title: 'Minimalist Monolith Vanity Unit',
      spec: 'Vitreous China • Custom Solid Surface Resin • Anti-Microbial Glaze',
      tag: 'ARCHITECTURAL RESIDENCE',
      projectType: 'Luxury Villa Master Bathroom',
    },
    {
      url: '/senitary bath/pexels-matreding-11299685.jpg',
      title: 'High-Traffic Commercial Stall Suite',
      spec: 'Concealed Dual-Flush Cisterns • Rimless Wall-Hung Bowls • ADA Compliant',
      tag: 'AIRPORT & TRANSIT',
      projectType: 'International Terminal Concourse',
    },
    {
      url: '/senitary bath/small-bathroom-with-modern-style-ai-generated.jpg',
      title: 'Boutique Guest Bath Package',
      spec: 'Acoustic Sound Isolation • Brushed Brass Trim • Water-Saving Aerator',
      tag: 'BOUTIQUE RESORT',
      projectType: 'Island Resort Guest Chalets',
    },
    {
      url: '/senitary bath/pexels-artbovich-7534282.jpg',
      title: 'Freestanding Bathtub & Floor Spout',
      spec: 'Floor-Mounted Spout • Ceramic Disc Valve • 10-Year Post-Handover SLA',
      tag: 'PRESIDENTIAL SUITE',
      projectType: 'Penthouse Presidential Suite',
    },
  ],
  hospitality: [
    {
      url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      title: 'Presidential Suite Luxury Bedding & FF&E',
      spec: '400+ Thread Count Egyptian Cotton • Hypoallergenic Microfiber Insert',
      tag: '5-STAR LUXURY',
      projectType: 'Ritz-Carlton Presidential Suite',
    },
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      title: 'Custom Private-Label Organic Amenity Pack',
      spec: 'Biodegradable Wheat-Straw Dispenser • Essential Oil Formulation',
      tag: 'ECO CERTIFIED',
      projectType: 'Eco-Resort Custom Brand Pack',
    },
    {
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      title: 'Acoustic Guestroom Smart Minibar & Safe',
      spec: 'Zero-Decibel Absorption Cooling • 17-Inch Laptop Digital Safe Box',
      tag: 'ROOM TECHNOLOGY',
      projectType: 'Business Hotel 450-Room Rollout',
    },
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      title: 'Fine Dining Tableware & Banquet Set',
      spec: '18/10 Stainless Steel Flatware • Bone China Reinforced Rim Plates',
      tag: 'F&B BANQUET',
      projectType: 'Convention Center Grand Ballroom',
    },
  ],
  entrance: [
    {
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      title: 'High-Capacity Automatic Revolving Door',
      spec: 'EN 16005 Safety Standard • Integrated Air Curtain • Breakout Wings',
      tag: 'FACADE AUTOMATION',
      projectType: 'Airport Terminal 3 Main Entrance',
    },
    {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      title: 'Optical Speed Turnstile & Access Gate',
      spec: 'Brushless Servo Motor • 0.2s Rapid Retraction • Biometric Reader Housing',
      tag: 'ACCESS CONTROL',
      projectType: 'Corporate Headquarters Concourse',
    },
    {
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      title: 'High-Speed Spiral Cleanroom Door',
      spec: 'Class 1 Cleanroom Certified • Non-Contact Roll-Up • 2.5 m/s Cycle',
      tag: 'CLEANROOM / PHARMA',
      projectType: 'Bio-Pharmaceutical R&D Facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      title: 'Heavy-Duty Commercial Recessed Air Curtain',
      spec: 'Centrifugal Double-Inlet Blower • Modbus BMS Integration • High Velocity',
      tag: 'HVAC & BARRIER',
      projectType: 'Flagship Luxury Mall Portals',
    },
  ],
  industrial: [
    {
      url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      title: 'Heavy Hydraulic Loading Dock Leveler',
      spec: '15-Ton Dynamic Capacity • Anti-Slip Tear Plate • Emergency Velocity Fuse',
      tag: 'LOGISTICS & MRO',
      projectType: 'Mega Distribution Fulfillment Hub',
    },
    {
      url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      title: 'High-Flow Industrial Pumping Station',
      spec: 'Multistage Stainless Steel Impellers • VFD Energy Optimizer • Dual Redundancy',
      tag: 'FACILITY HYDRAULICS',
      projectType: 'Municipal Water & Cooling Grid',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      title: 'Heavy Pneumatic Actuated Ball Valves',
      spec: 'ANSI 600 Class • Fire-Safe API 607 • Double-Acting Rack & Pinion',
      tag: 'FLOW CONTROL',
      projectType: 'Petrochemical Facility Piping Matrix',
    },
    {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      title: 'Heavy-Duty Safety Guardrail & Impact System',
      spec: 'Polymer Memory Core • 20,000J Kinetic Absorption • Zero Floor Damage',
      tag: 'WAREHOUSE SAFETY',
      projectType: 'Automated AGV Logistics Floor',
    },
  ],
};

interface HeroImageShowcaseProps {
  activeCategory: string;
  onRequestQuote: (category: string) => void;
}

export function HeroImageShowcase({ 
  activeCategory, 
  onRequestQuote 
}: HeroImageShowcaseProps) {
  const slides = CATEGORY_GALLERIES[activeCategory] || CATEGORY_GALLERIES.sanitary;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto slideshow ticker (4.5s per image)
  const SLIDE_DURATION = 4500;
  const TICK_INTERVAL = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const [prevCategory, setPrevCategory] = useState(activeCategory);
  if (activeCategory !== prevCategory) {
    setPrevCategory(activeCategory);
    setCurrentIndex(0);
    setProgress(0);
  }

  // Slideshow progress tick
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const safeIndex = currentIndex < slides.length ? currentIndex : 0;
  const currentSlide = slides[safeIndex];

  return (
    <div 
      className="gpu-layer group relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-900/5 transition-all duration-300"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Top Ambient Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-30 overflow-hidden">
        <div 
          className="h-full transition-all duration-75 ease-linear"
          style={{ 
            width: `${progress}%`,
            backgroundColor: 'var(--accent-primary)' 
          }}
        />
      </div>

      {/* Main Image Viewport with Smooth Crossfade */}
      <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden bg-slate-100">
        {slides.map((slide, index) => {
          const isActive = index === safeIndex;
          return (
            <div
              key={slide.url + index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Image with subtle zoom */}
              <Image
                src={slide.url}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />

              {/* Gradient Vignette Overlays for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Top Telemetry Overlay (Slide Counter) */}
        <div className="absolute top-4 right-4 z-20 flex items-center justify-end pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-black/50 backdrop-blur-md text-[10px] font-tech text-slate-300">
            <span>{String(safeIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{String(slides.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Center-Left Hero Image Callout */}
        <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
          <div className="max-w-lg">
            <h3 className="text-base sm:text-xl font-display font-bold text-white leading-tight drop-shadow-md">
              {currentSlide.title}
            </h3>
            <p className="text-[11px] sm:text-xs font-body text-slate-200 mt-1 flex items-center gap-1.5 drop-shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-primary shrink-0" />
              <span className="truncate">{currentSlide.spec}</span>
            </p>
          </div>
        </div>

        {/* Play/Pause Indicator on hover */}
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="p-1.5 rounded-lg bg-black/60 border border-white/10 text-slate-300 text-[10px] font-tech flex items-center gap-1 backdrop-blur-xs">
            {isPlaying ? <Play className="w-3 h-3 text-accent-primary" /> : <Pause className="w-3 h-3 text-accent-secondary" />}
            <span>{isPlaying ? 'AUTO' : 'PAUSED'}</span>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Thumbnail Strip & Slide Controls */}
      <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 z-20">
        
        {/* Navigation Arrow Left */}
        <button
          type="button"
          onClick={prevSlide}
          className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-accent-border hover:bg-slate-100 transition-all active:scale-95 shrink-0 shadow-xs"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Thumbnail Filmstrip */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
          {slides.map((slide, idx) => {
            const isActive = idx === safeIndex;
            return (
              <button
                key={slide.url + idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`relative w-12 h-9 sm:w-16 sm:h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  isActive 
                    ? 'border-accent-primary shadow-sm scale-105' 
                    : 'border-slate-300 opacity-60 hover:opacity-100 hover:border-slate-400'
                }`}
              >
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            );
          })}
        </div>

        {/* Navigation Arrow Right & Quote Trigger */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-accent-border hover:bg-slate-100 transition-all active:scale-95 shrink-0 shadow-xs"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onRequestQuote(activeCategory)}
            className="hidden sm:flex p-2 rounded-xl border border-accent-border bg-accent-surface text-accent-primary hover:border-accent-primary transition-all active:scale-95 items-center gap-1 text-[11px] font-tech font-bold"
            title="Inquire bulk pricing on active item"
          >
            <span>Inquire Bulk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
