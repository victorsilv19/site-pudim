import { Phone, MapPin, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const phone = '45999409316';
  const location = 'Foz do Iguaçu - PR';
  const whatsappUrl = `https://wa.me/55${phone}?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20dos%20seus%20pudins%20artesanais!`;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
          ☎️ Entre em Contato
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Phone */}
          <div className="bg-white rounded-lg sm:rounded-2xl p-5 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block bg-primary/10 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Telefone</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Ligue ou chame</p>
            <a
              href={`tel:${phone}`}
              className="text-primary font-bold text-base sm:text-lg hover:underline break-all"
            >
              {phone}
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg sm:rounded-2xl p-5 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block bg-accent/10 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-foreground mb-3">Localização</h3>
            <p className="text-foreground font-bold text-sm sm:text-base mb-1">Av. Andradina, 1852</p>
            <p className="text-foreground font-bold text-sm sm:text-base mb-2">Ipê, Foz do Iguaçu - PR</p>
            <p className="text-gray-500 text-xs sm:text-sm">85869-380</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-lg sm:rounded-2xl p-5 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-block bg-green-100 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">WhatsApp</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Faça seu pedido</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 text-center">Encontre a Gente</h3>
          <div className="rounded-lg sm:rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7542908174863!2d-54.57701!3d-25.595127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f7e5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAv.%20Andradina%2C%201852%20-%20Ip%C3%AA%2C%20Foz%20do%20Igua%C3%A7u%20-%20State%20of%20Paran%C3%A1%2085869-380!5e0!3m2!1spt-BR!2sbr!4v1692374869284"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg text-center">
            <p className="text-foreground font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Av. Andradina, 1852 - Ipê</p>
            <p className="text-gray-600 text-xs sm:text-sm">Foz do Iguaçu - PR 85869-380</p>
          </div>
        </div>
      </div>
    </section>
  );
}
