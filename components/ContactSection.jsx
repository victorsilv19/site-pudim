import { Phone, MapPin, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const phone = '45999409316';
  const location = 'Foz do Iguaçu - PR';
  const whatsappUrl = `https://wa.me/55${phone}?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20dos%20seus%20pudins%20artesanais!`;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 dark:from-gray-800 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Entre em Contato</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block bg-primary/10 rounded-full p-4 mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Telefone</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Ligue ou chame no WhatsApp</p>
            <a
              href={`tel:${phone}`}
              className="text-primary font-bold text-lg hover:underline"
            >
              {phone}
            </a>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block bg-accent/10 rounded-full p-4 mb-4">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Localização</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Entrega apenas em</p>
            <p className="text-foreground font-bold text-lg">{location}</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block bg-green-100 dark:bg-green-900/30 rounded-full p-4 mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">WhatsApp</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Faça seu pedido direto</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Nossa Localização</h3>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl mb-4">📍</p>
              <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">{location}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Você pode encontrar um mapa aqui adicionando Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
