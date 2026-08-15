'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TypographyMergeProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  startOffset?: number;      // Viewport ratio to start merge (default 1.0 = bottom of screen)
  endOffset?: number;        // Viewport ratio to complete merge (default 0.45 = near center of screen)
}

export function TypographyMerge({
  children,
  className = '',
  as: Component = 'h2',
  startOffset = 1.0,
  endOffset = 0.45,
}: TypographyMergeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  
  // Easing interpolation refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const requestRef = useRef<number | null>(null);

  // Split string into words to animate them as individual logical fragments
  useEffect(() => {
    if (typeof children === 'string') {
      setWords(children.split(/\s+/).filter(Boolean));
    }
  }, [children]);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const wordElements = container.querySelectorAll('.merge-word');
    if (wordElements.length === 0) return;

    // Apply the current progress to the DOM elements
    const renderTransforms = (progress: number) => {
      if (!container) return;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Smooth cubic ease-out to decelerate as words lock into the center layout
      const eased = 1 - Math.pow(1 - progress, 3);

      wordElements.forEach((wordEl, idx) => {
        const el = wordEl as HTMLElement;

        if (eased >= 0.995) {
          // Locked merged state
          el.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg) scale(1)';
          el.style.opacity = '1';
        } else {
          // Generate deterministic radial angles to shoot words outward off-screen
          const angle = (idx / wordElements.length) * 2 * Math.PI;
          
          // Outer bounds (viewport height and width + buffer margin to ensure they are off-screen)
          const scatterX = Math.cos(angle) * viewportWidth * 1.15;
          const scatterY = Math.sin(angle) * viewportHeight * 1.15;
          const rot = Math.sin(idx * 78.4) * 45; // Up to 45 degrees spin when off-screen
          const scale = 0.25 + (idx % 3) * 0.25;  // Variable sizes when flying in

          // Interpolate based on eased progress
          const currentX = scatterX * (1 - eased);
          const currentY = scatterY * (1 - eased);
          const currentRot = rot * (1 - eased);
          const currentScale = scale + (1 - scale) * eased;
          
          // Fade in dynamically only as it approaches the viewport center
          const opacity = eased; 

          el.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0px) rotate(${currentRot.toFixed(1)}deg) scale(${currentScale.toFixed(2)})`;
          el.style.opacity = opacity.toFixed(3);
        }
      });
    };

    // Interpolation loop to damp the speed of convergence for floaty/smooth movement
    const animationLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) < 0.001) {
        currentProgressRef.current = targetProgressRef.current;
        renderTransforms(currentProgressRef.current);
        isAnimatingRef.current = false;
        requestRef.current = null;
      } else {
        // Multiplier controls convergence rate (0.045 = slower, floatier, more elegant glide)
        currentProgressRef.current += diff * 0.045;
        renderTransforms(currentProgressRef.current);
        requestRef.current = requestAnimationFrame(animationLoop);
      }
    };

    // Calculate target progress from raw scroll
    const calculateTargetProgress = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate relative vertical center alignment progress
      const elementCenter = rect.top + rect.height / 2;
      const start = viewportHeight * startOffset;
      const end = viewportHeight * endOffset;

      let target = 0;
      if (elementCenter <= end) {
        target = 1.0; // Completed merge
      } else if (elementCenter >= start) {
        target = 0.0; // Fully scattered
      } else {
        target = (start - elementCenter) / (start - end);
      }

      targetProgressRef.current = target;

      // Start the animation loop if it is not currently running
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        requestRef.current = requestAnimationFrame(animationLoop);
      }
    };

    window.addEventListener('scroll', calculateTargetProgress, { passive: true });
    window.addEventListener('resize', calculateTargetProgress, { passive: true });

    // Initial check
    calculateTargetProgress();

    return () => {
      window.removeEventListener('scroll', calculateTargetProgress);
      window.removeEventListener('resize', calculateTargetProgress);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [words, prefersReducedMotion, startOffset, endOffset]);

  if (prefersReducedMotion) {
    return (
      <Component className={className}>
        {children}
      </Component>
    );
  }

  return (
    <Component ref={containerRef} className={`${className} inline-block w-full overflow-visible`}>
      <span className="flex flex-wrap items-center justify-start content-start gap-x-[0.25em] gap-y-[0.1em] overflow-visible">
        {words.map((word, index) => (
          <span
            key={index}
            className="merge-word inline-block relative transform-gpu will-change-transform origin-center select-none"
            style={{ display: 'inline-block' }}
          >
            {word}
          </span>
        ))}
      </span>
    </Component>
  );
}
