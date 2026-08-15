export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-50 dark:to-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Página não encontrada</p>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Mas temos pudins! 🍮</p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-semibold"
        >
          ← Voltar ao Início
        </a>
      </div>
    </div>
  );
}
