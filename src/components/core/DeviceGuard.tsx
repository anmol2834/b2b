'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { detectDeviceCapabilities, DeviceTelemetry, PerformanceTier } from '@/engine/DeviceTier';
import { ANIMATION_BUDGET } from '@/config/animation';

interface DeviceContextValue extends DeviceTelemetry {
  budget: (typeof ANIMATION_BUDGET)[PerformanceTier];
}

const defaultTelemetry: DeviceTelemetry = {
  tier: 'high',
  prefersReducedMotion: false,
  hardwareConcurrency: 8,
  deviceMemory: 8,
  isTouch: false,
};

let cachedTelemetry: DeviceTelemetry | null = null;

function getDeviceSnapshot(): DeviceTelemetry {
  if (!cachedTelemetry) {
    cachedTelemetry = detectDeviceCapabilities();
  }
  return cachedTelemetry;
}

function getServerSnapshot(): DeviceTelemetry {
  return defaultTelemetry;
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handler = () => {
    cachedTelemetry = detectDeviceCapabilities();
    callback();
  };

  mql.addEventListener('change', handler);
  return () => mql.removeEventListener('change', handler);
}

const DeviceContext = createContext<DeviceContextValue>({
  ...defaultTelemetry,
  budget: ANIMATION_BUDGET.high,
});

export function DeviceGuard({ children }: { children: React.ReactNode }) {
  const telemetry = useSyncExternalStore(subscribe, getDeviceSnapshot, getServerSnapshot);

  const value: DeviceContextValue = {
    ...telemetry,
    budget: ANIMATION_BUDGET[telemetry.tier],
  };

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}

export function useDeviceTelemetry() {
  return useContext(DeviceContext);
}
