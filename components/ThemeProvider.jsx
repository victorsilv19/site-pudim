'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setThemeState(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const applyTheme = (themeName) => {
    const root = document.documentElement;
    const isDark = themeName === 'dark';

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply CSS variables
    const themes = {
      light: {
        '--color-primary': '#ec4899',
        '--color-secondary': '#f97316',
        '--color-accent': '#06b6d4',
        '--color-bg': '#ffffff',
        '--color-fg': '#1f2937',
      },
      dark: {
        '--color-primary': '#ec4899',
        '--color-secondary': '#f97316',
        '--color-accent': '#06b6d4',
        '--color-bg': '#111827',
        '--color-fg': '#f3f4f6',
      },
    };

    const colors = themes[themeName];
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
}
