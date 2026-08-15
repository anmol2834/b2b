'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback } from 'react';

export type ThemeType = 
  | 'titanium-dark'
  | 'enterprise-light'
  | 'emerald-forest'
  | 'sunset-ochre'
  | 'cyber-industrial';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'app-b2b-theme';
const DEFAULT_THEME: ThemeType = 'titanium-dark';

let currentTheme: ThemeType = DEFAULT_THEME;
const listeners = new Set<() => void>();

function getThemeSnapshot(): ThemeType {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeType;
    if (saved && saved !== currentTheme) {
      currentTheme = saved;
      document.documentElement.setAttribute('data-theme', saved);
    }
  }
  return currentTheme;
}

function getServerSnapshot(): ThemeType {
  return DEFAULT_THEME;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: ThemeType) => {
    currentTheme = newTheme;
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
    listeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
