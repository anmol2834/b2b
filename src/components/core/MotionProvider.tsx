'use client';

import React, { createContext, useContext } from 'react';
import { MotionValue } from 'framer-motion';
import {
  globalScrollY,
  globalProgress,
  globalVelocity,
  globalScrollDirection,
} from '@/engine/MotionValues';

export interface MotionContextValue {
  scrollY: MotionValue<number>;
  progress: MotionValue<number>;
  velocity: MotionValue<number>;
  scrollDirection: MotionValue<number>;
}

const MotionContext = createContext<MotionContextValue>({
  scrollY: globalScrollY,
  progress: globalProgress,
  velocity: globalVelocity,
  scrollDirection: globalScrollDirection,
});

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionContext.Provider
      value={{
        scrollY: globalScrollY,
        progress: globalProgress,
        velocity: globalVelocity,
        scrollDirection: globalScrollDirection,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useGlobalMotion() {
  return useContext(MotionContext);
}
