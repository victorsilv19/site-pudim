export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
          <span className="text-2xl sm:text-3xl">🍮</span>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">Pudim Artesanal</h1>
            <p className="text-xs text-gray-500">Foz do Iguaçu - PR</p>
          </div>
        </div>

        {/* Phone */}
        <a
          href="tel:45999409316"
          className="flex items-center gap-1 sm:gap-2 bg-primary text-white px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-opacity font-semibold text-xs sm:text-sm whitespace-nowrap ml-2 sm:ml-4"
        >
          <span>📞</span>
          <span className="hidden sm:inline">Chamar</span>
        </a>
      </div>
    </header>
  );
}
