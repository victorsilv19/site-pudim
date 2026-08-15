'use client';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl shadow-lg shadow-primary/20">
            🍮
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">Pudim Artesanal</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Foz do Iguaçu - PR</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:45999409316"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            📞 Chamar
          </a>
        </div>
      </div>
    </header>
  );
}
