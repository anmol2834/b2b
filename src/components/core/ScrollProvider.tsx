'use client';

import React, { useEffect } from 'react';
import { ScrollEngine } from '@/engine/ScrollEngine';

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const engine = ScrollEngine.getInstance();
    engine.init();

    return () => {
      engine.destroy();
    };
  }, []);

  return <>{children}</>;
}
