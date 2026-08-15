'use client';

import { useTheme } from '@/components/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function Header() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">🍮</span>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Pudim Artesanal</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Foz do Iguaçu - PR</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Selector */}
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setTheme('light')}
              className={`p-2 rounded-full transition-all ${
                theme === 'light'
                  ? 'bg-white dark:bg-gray-700 text-primary shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
              title="Tema claro"
            >
              <Sun className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-full transition-all ${
                theme === 'dark'
                  ? 'bg-gray-700 text-accent shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
              title="Tema escuro"
            >
              <Moon className="w-5 h-5" />
            </button>
          </div>

          {/* Phone */}
          <a
            href="tel:45999409316"
            className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold text-sm"
          >
            📞 Chamar
          </a>
        </div>
      </div>
    </header>
  );
}
