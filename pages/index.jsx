import Head from 'next/head';
import { Carousel } from '@/components/Carousel';
import { ContactSection } from '@/components/ContactSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  const products = [
    { name: 'Pudim de Leite Condensado', image: '/products/pudim.jpg' },
    { name: 'Pavê Tradicional', image: '/products/pave.jpg' },
    { name: 'Mousse de Chocolate', image: '/products/mousse.jpg' },
    { name: 'Brownie Caseiro', image: '/products/brownie.jpg' },
    { name: 'Cookie de Chocolate', image: '/products/cookie.jpg' },
  ];

  return (
    <>
      <Head>
        <title>Pudim Artesanal - Foz do Iguaçu</title>
        <meta name="description" content="Venda de pudins, pavês, mousses e brownie artesanais em Foz do Iguaçu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-background to-gray-50 dark:to-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Pudins Artesanais<br className="hidden sm:block" /> Deliciosos
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Feitos com amor e ingredientes de qualidade. Cada produção é especial para você! 🍮
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-shadow"
            >
              📞 Fazer Pedido
            </a>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
              ✨ Nossos Produtos
            </h2>
            <Carousel products={products} />
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Por que escolher?</h2>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Receitas autênticas e deliciosas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Preparados com ingredientes frescos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Venda direta - melhor preço</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Produção artesanal com carinho</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                <p className="text-5xl sm:text-6xl mb-4">🍮</p>
                <p className="text-base sm:text-lg text-foreground font-semibold">Feito com Amor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
