'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({ products }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, products.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % products.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlay(false);
  };

  if (!products.length) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto px-0">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-2xl bg-gray-100 dark:bg-gray-700 aspect-square sm:aspect-video">
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
          {/* Placeholder for images */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center">
              <p className="text-4xl sm:text-6xl mb-3 sm:mb-4">📸</p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold">
                {products[current].name}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                Adicione a imagem em /public/products/{products[current].image.split('/').pop()}
              </p>
            </div>
          </div>

          {/* Image would go here */}
          {/* <Image src={products[current].image} alt={products[current].name} fill className="object-cover" /> */}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlay(false);
            }}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-primary w-6 sm:w-8'
                : 'bg-gray-300 dark:bg-gray-600 w-2.5 sm:w-3 hover:bg-gray-400'
            }`}
            aria-label={`Ir para produto ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-6">
        {isAutoPlay ? '▶️ Auto play' : '⏸️ Clique para retomar'} • {current + 1} de {products.length}
      </p>
    </div>
  );
}
