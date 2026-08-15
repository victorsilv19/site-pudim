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

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 via-transparent to-transparent dark:from-primary/20" />
          <div className="relative mx-auto max-w-6xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm dark:border-primary/30 dark:bg-primary/10">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              Arte e sabor em cada fatia
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight text-foreground sm:text-6xl">
              Pudins Artesanais<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Deliciosos
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Feitos com amor, ingredientes selecionados e um toque especial para surpreender na sua mesa. 🍮
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#produtos"
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                Ver produtos
              </a>
              <a
                href="https://wa.me/5545999409316"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary/30 bg-white/70 px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/5 dark:border-primary/40 dark:bg-slate-900/60 dark:text-pink-300"
              >
                Fazer pedido
              </a>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section id="produtos" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">Produtos</p>
              <h2 className="text-4xl font-bold text-foreground">Nossos destaques</h2>
            </div>
            <div className="glass-panel rounded-[2rem] p-4 sm:p-6">
              <Carousel products={products} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="soft-card rounded-[2rem] p-8 md:p-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Por que escolher</p>
                <h2 className="mb-6 text-3xl font-bold text-foreground">Qualidade e sabor em cada detalhe</h2>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                    <span>Receitas tradicionais e irresistíveis, com cara de casa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                    <span>Ingredientes frescos e produção artesanal com cuidado.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                    <span>Preço justo, atendimento rápido e entrega com qualidade.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                    <span>Produção especial para festas, encomendas e momentos doces.</span>
                  </li>
                </ul>
              </div>

              <div className="soft-card rounded-[2rem] p-8 text-center md:p-10">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 via-accent/15 to-secondary/15 text-5xl shadow-inner shadow-primary/20 dark:shadow-primary/10">
                  🍮
                </div>
                <p className="text-2xl font-black text-foreground">Feito com Amor</p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Cada sobremesa é preparada com atenção, sabor e carinho para deixar sua ocasião ainda mais especial.
                </p>
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
