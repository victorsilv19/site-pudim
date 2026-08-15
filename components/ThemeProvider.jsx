'use client';

import { useEffect } from 'react';

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Force light theme always
    const root = document.documentElement;
    root.classList.remove('dark');

    // Apply CSS variables for light theme only
    const colors = {
      '--color-primary': '#ec4899',
      '--color-secondary': '#f97316',
      '--color-accent': '#06b6d4',
      '--color-bg': '#ffffff',
      '--color-fg': '#1f2937',
    };

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return children;
}
