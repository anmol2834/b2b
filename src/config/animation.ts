export const ANIMATION_BUDGET = {
  high: {
    enableSpline: true,
    enableParallax: true,
    enableBlurEffects: true,
    maxSimultaneousTransforms: 12,
  },
  medium: {
    enableSpline: false, // Fallback to optimized WebP/SVG for mid-tier
    enableParallax: true,
    enableBlurEffects: false,
    maxSimultaneousTransforms: 6,
  },
  low: {
    enableSpline: false,
    enableParallax: false,
    enableBlurEffects: false,
    maxSimultaneousTransforms: 2,
  },
} as const;

export const SPRING_CONFIGS = {
  snappy: { stiffness: 400, damping: 30 },
  smooth: { stiffness: 100, damping: 20 },
  gentle: { stiffness: 60, damping: 15 },
} as const;
