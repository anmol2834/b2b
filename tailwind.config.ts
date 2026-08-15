import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme$="-dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkCanvas: '#0A0B0E',
        darkSurface: '#12141A',
        darkElevated: '#1A1D26',
        darkBorder: '#232733',
        lightCanvas: '#F8FAFC',
        lightSurface: '#FFFFFF',
        lightElevated: '#F1F5F9',
        lightBorder: '#E2E8F0',
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          surface: 'var(--accent-surface)',
          border: 'var(--accent-border)',
          borderHover: 'var(--accent-border-hover)',
        },
      },
      boxShadow: {
        'b2b-glow': '0 0 30px -5px var(--glow-color)',
        'b2b-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'b2b-card-light': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        tech: ['var(--font-tech)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
