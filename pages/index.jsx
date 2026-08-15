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
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              Pudins Artesanais Deliciosos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Feitos com amor e ingredientes de qualidade. Cada produção é especial para você! 🍮
            </p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Nossos Produtos</h2>
            <Carousel products={products} />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Por que escolher nossos produtos?</h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-primary rounded-full mr-4 mt-1 flex-shrink-0"></span>
                    <span>Receitas autênticas e deliciosas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-primary rounded-full mr-4 mt-1 flex-shrink-0"></span>
                    <span>Preparados com ingredientes frescos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-primary rounded-full mr-4 mt-1 flex-shrink-0"></span>
                    <span>Venda direta - melhor preço para você</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-6 h-6 bg-primary rounded-full mr-4 mt-1 flex-shrink-0"></span>
                    <span>Produção artesanal com carinho</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                <p className="text-6xl mb-4">🍮</p>
                <p className="text-lg text-foreground font-semibold">Feito com Amor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
