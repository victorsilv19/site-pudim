export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">🍮 Pudim Artesanal</h3>
            <p className="text-gray-400">Venda direta de pudins, pavês, mousses e muito mais!</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Nossos Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pudim de Leite</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pavê</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mousse</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brownie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:45999409316" className="hover:text-white transition-colors">
                  📞 (45) 99940-9316
                </a>
              </li>
              <li>
                <a href="https://wa.me/5545999409316" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  💬 WhatsApp
                </a>
              </li>
              <li>📍 Foz do Iguaçu - PR</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Pudim Artesanal. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Feito com ❤️ para você
          </p>
        </div>
      </div>
    </footer>
  );
}
