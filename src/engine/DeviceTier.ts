export type PerformanceTier = 'high' | 'medium' | 'low';

export interface DeviceTelemetry {
  tier: PerformanceTier;
  prefersReducedMotion: boolean;
  hardwareConcurrency: number;
  deviceMemory: number;
  isTouch: boolean;
}

export function detectDeviceCapabilities(): DeviceTelemetry {
  if (typeof window === 'undefined') {
    return {
      tier: 'high',
      prefersReducedMotion: false,
      hardwareConcurrency: 8,
      deviceMemory: 8,
      isTouch: false,
    };
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  let tier: PerformanceTier = 'high';

  if (prefersReduced || cores <= 2 || memory <= 2) {
    tier = 'low';
  } else if (cores <= 4 || memory <= 4) {
    tier = 'medium';
  } else {
    tier = 'high';
  }

  return {
    tier,
    prefersReducedMotion: prefersReduced,
    hardwareConcurrency: cores,
    deviceMemory: memory,
    isTouch,
  };
}
