export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-black text-white">🍮 Pudim Artesanal</h3>
            <p className="text-sm text-gray-400">Venda direta de pudins, pavês, mousses e sobremesas artesanais para alegrar qualquer momento.</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Nossos Produtos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#produtos" className="transition-colors hover:text-white">Pudim de Leite</a></li>
              <li><a href="#produtos" className="transition-colors hover:text-white">Pavê</a></li>
              <li><a href="#produtos" className="transition-colors hover:text-white">Mousse</a></li>
              <li><a href="#produtos" className="transition-colors hover:text-white">Brownie</a></li>
              <li><a href="#produtos" className="transition-colors hover:text-white">Cookie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:45999409316" className="transition-colors hover:text-white">
                  📞 (45) 99940-9316
                </a>
              </li>
              <li>
                <a href="https://wa.me/5545999409316" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  💬 WhatsApp
                </a>
              </li>
              <li>📍 Foz do Iguaçu - PR</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-gray-500">© {currentYear} Pudim Artesanal. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs text-gray-600">Feito com ❤️ para você</p>
        </div>
      </div>
    </footer>
  );
}
