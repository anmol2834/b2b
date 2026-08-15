'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollItemFadeProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  scaleEffect?: boolean;
}

export function ScrollItemFade({
  children,
  className = '',
  yOffset = 24,
  scaleEffect = false,
}: ScrollItemFadeProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  // Fade In when entering viewport, Lock 100% solid & crisp in active reading zone, Fade Out smoothly when exiting
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.08, 1, 1, 0.12]);
  const y = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [yOffset, 0, 0, -yOffset]);
  const scale = useTransform(
    smoothProgress,
    [0, 0.15, 0.85, 1],
    scaleEffect ? [0.97, 1, 1, 0.97] : [1, 1, 1, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
        willChange: 'opacity, transform',
      }}
      className={`gpu-layer ${className}`}
    >
      {children}
    </motion.div>
  );
}
