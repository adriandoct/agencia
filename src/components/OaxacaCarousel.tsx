"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OAXACA_SLIDES = [
  {
    id: 1,
    title: "Hierve el Agua Mágico",
    subtitle: "Oaxaca, México",
    description: "Admira las cascadas petrificadas y nada en las piscinas naturales con vistas increíbles del valle.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Ruinas de Monte Albán",
    subtitle: "Zona Arqueológica",
    description: "Explora la antigua capital zapoteca, situada en la cima de una montaña, llena de historia y misticismo.",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "La Ruta del Mezcal",
    subtitle: "Santiago Matatlán",
    description: "Descubre el proceso artesanal de la bebida de los dioses y disfruta de degustaciones exclusivas.",
    image: "https://images.unsplash.com/photo-1628186107530-581d4a89ea0e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cultura y Gastronomía",
    subtitle: "Centro Histórico",
    description: "Recorre las coloridas calles del centro y prueba el tradicional mole negro, tlayudas y chocolate oaxaqueño.",
    image: "https://images.unsplash.com/photo-1570535316314-ec02b79a0b41?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function OaxacaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % OAXACA_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + OAXACA_SLIDES.length) % OAXACA_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-deep-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Descubre la Magia de <span className="text-gold">Oaxaca</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Un destino lleno de historia, cultura y sabores inigualables a solo unas horas de ti.
            </p>
          </div>
          <Link href="/oaxaca" className="text-gold hover:text-white transition-colors font-medium hidden md:block">
            Ver experiencias en Oaxaca &rarr;
          </Link>
        </div>

        <div className="relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={OAXACA_SLIDES[currentIndex].image}
                alt={OAXACA_SLIDES[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-2 text-gold font-semibold mb-2 text-sm md:text-base tracking-wider uppercase">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  {OAXACA_SLIDES[currentIndex].subtitle}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {OAXACA_SLIDES[currentIndex].title}
                </h3>
                <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl font-light">
                  {OAXACA_SLIDES[currentIndex].description}
                </p>
                <Link href="/oaxaca" className="inline-block bg-gold hover:bg-gold-light text-deep-blue font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1">
                  Explorar Paquetes a Oaxaca
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="pointer-events-auto bg-black/40 hover:bg-gold/80 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all transform hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="pointer-events-auto bg-black/40 hover:bg-gold/80 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all transform hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 flex gap-2 md:gap-3 z-20">
            {OAXACA_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? "bg-gold w-8 md:w-10 h-2 md:h-2.5" 
                    : "bg-white/50 hover:bg-white/80 w-2 md:w-2.5 h-2 md:h-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
