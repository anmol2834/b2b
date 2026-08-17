'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Simplified animation states
type SplashState = 
  | 'INITIAL'
  | 'FRAGMENTED'
  | 'CONVERGING'
  | 'VERTEX_REVEAL'
  | 'STABILIZED';

interface VertexSplashProps {
  onComplete: () => void;
}

export function VertexSplash({ onComplete }: VertexSplashProps) {
  const [state, setState] = useState<SplashState>('INITIAL');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Centralized timing configuration (ms)
  const config = {
    fragmentedDuration: 600,
    convergenceDuration: 1000,
    revealDuration: 600,
    stabilizedDuration: 750,
    failsafeTimeout: 3500,
  };

  // Check reduced motion and failsafe timeout
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setState('STABILIZED');
    } else {
      setState('FRAGMENTED');
    }

    // Failsafe timer to force exit in case of unexpected delays
    const failsafe = setTimeout(() => {
      onComplete();
    }, config.failsafeTimeout);

    return () => clearTimeout(failsafe);
  }, [onComplete]);

  // Sequencer loop
  useEffect(() => {
    if (prefersReducedMotion) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(exitTimer);
    }

    if (state === 'FRAGMENTED') {
      const timer = setTimeout(() => {
        setState('CONVERGING');
      }, config.fragmentedDuration);
      return () => clearTimeout(timer);
    }

    if (state === 'CONVERGING') {
      const timer = setTimeout(() => {
        setState('VERTEX_REVEAL');
      }, config.convergenceDuration);
      return () => clearTimeout(timer);
    }

    if (state === 'VERTEX_REVEAL') {
      const timer = setTimeout(() => {
        setState('STABILIZED');
      }, config.revealDuration);
      return () => clearTimeout(timer);
    }

    if (state === 'STABILIZED') {
      const timer = setTimeout(() => {
        onComplete(); // Handover exit animation to parent AnimatePresence
      }, config.stabilizedDuration);
      return () => clearTimeout(timer);
    }
  }, [state, prefersReducedMotion, onComplete]);

  // Lock body scroll while splash is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const fragments = [
    { label: 'SANITARY', code: 'SPEC-SAN-01', x: -160, y: -160 },
    { label: 'HOSPITALITY', code: 'SPEC-HOS-01', x: 160, y: -160 },
    { label: 'ENTRANCE', code: 'SPEC-ENT-01', x: -160, y: 160 },
    { label: 'INDUSTRIAL', code: 'SPEC-IND-01', x: 160, y: 160 },
  ];

  const metadata = [
    { label: 'BOQ MATCHED', x: -240, y: 20 },
    { label: 'OEM SOURCE', x: 240, y: -40 },
    { label: 'CONSOLIDATED Freight', x: -80, y: -260 },
    { label: 'SINGLE CONTRACT', x: 80, y: 260 },
  ];

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1, y: '0%' }}
      exit={{ y: '-100%', opacity: 0.95 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#141413] text-[#FAF9F5] select-none overflow-hidden"
    >
      {/* Main Visual Staging Container */}
      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">

        {/* PHASE 01 & 02: Fragmented streams converging */}
        {state !== 'VERTEX_REVEAL' && state !== 'STABILIZED' && !prefersReducedMotion && (
          <>
            {fragments.map((frag) => {
              const isConverging = state === 'CONVERGING';
              return (
                <motion.div
                  key={frag.label}
                  initial={{ 
                    x: frag.x, 
                    y: frag.y, 
                    opacity: 0,
                    scale: 0.85
                  }}
                  animate={{ 
                    x: isConverging ? 0 : frag.x, 
                    y: isConverging ? 0 : frag.y, 
                    opacity: isConverging ? [0.8, 1, 0] : 0.85,
                    scale: isConverging ? 0.95 : 0.85
                  }}
                  transition={{ 
                    duration: isConverging ? config.convergenceDuration / 1000 : 0.4, 
                    ease: [0.25, 1, 0.5, 1] 
                  }}
                  className="absolute text-center flex flex-col items-center justify-center pointer-events-none"
                >
                  <span className="font-tech text-[10px] tracking-widest text-[#A8824C] font-semibold mb-1">
                    {frag.code}
                  </span>
                  <span className="font-display font-bold text-xs sm:text-sm tracking-widest text-[#FAF9F5]">
                    {frag.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Sub-Metadata floating text */}
            {metadata.map((meta) => {
              const isConverging = state === 'CONVERGING';
              return (
                <motion.div
                  key={meta.label}
                  initial={{ 
                    x: meta.x, 
                    y: meta.y, 
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    x: isConverging ? 0 : meta.x, 
                    y: isConverging ? 0 : meta.y, 
                    opacity: isConverging ? 0 : 0.35,
                  }}
                  transition={{ 
                    duration: isConverging ? config.convergenceDuration / 1000 * 0.8 : 0.5, 
                    ease: [0.25, 1, 0.5, 1] 
                      }}
                      className="absolute font-tech text-[8px] sm:text-[9px] tracking-widest text-[#8E8981] uppercase pointer-events-none whitespace-nowrap"
                    >
                      {meta.label}
                    </motion.div>
                  );
                })}
              </>
            )}

            {/* PHASE 03: The Vertex Convergence & Geometric Line Fulfill */}
            {(state === 'VERTEX_REVEAL' || state === 'STABILIZED' || prefersReducedMotion) && (
              <div className="flex flex-col items-center justify-center text-center">
                
                {/* Visual Consolidation Line */}
                {!prefersReducedMotion && (
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: state === 'STABILIZED' ? 240 : 80, 
                      opacity: state === 'STABILIZED' ? [0.3, 0.45, 0] : 0.3 
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="h-[1px] bg-[#A8824C] mb-8"
                  />
                )}

                {/* The Consolidated Brand Symbol V */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: config.revealDuration / 1000, ease: [0.16, 1, 0.3, 1] }}
                  className="w-14 h-14 border border-[#FAF9F5] bg-transparent flex items-center justify-center mb-6"
                >
                  <span className="font-display font-extrabold text-2xl tracking-wider text-[#FAF9F5]">V</span>
                </motion.div>

                {/* The Brand Name Resolves */}
                <motion.h1
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#FAF9F5]"
                >
                  VERTEX
                </motion.h1>

                {/* Wholesale sub-label */}
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-[9px] sm:text-[10px] font-tech text-[#FAF9F5] tracking-[0.25em] uppercase mt-2"
                >
                  WHOLESALE B2B SUPPLY
                </motion.p>
              </div>
            )}
          </div>
        </motion.div>
  );
}
