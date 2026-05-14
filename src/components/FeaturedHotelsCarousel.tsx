"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import Image from 'next/image';

const FEATURED_HOTELES = [
  {
    id: 1,
    name: "Quinta Real Oaxaca",
    location: "Centro Histórico, Oaxaca",
    description: "Hospédate en un exconvento del siglo XVI con una arquitectura colonial impresionante y lujo inigualable.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?q=80&w=2000&auto=format&fit=crop",
    stars: 5
  },
  {
    id: 2,
    name: "Hotel Escondido",
    location: "Puerto Escondido, Oaxaca",
    description: "Un refugio minimalista en la playa, perfecto para relajarse lejos del bullicio con vistas al Pacífico.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
    stars: 4
  },
  {
    id: 3,
    name: "Pug Seal Oaxaca",
    location: "Barrio de Jalatlaco",
    description: "Diseño boutique espectacular, fusionando arte contemporáneo y tradiciones zapotecas.",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?q=80&w=2000&auto=format&fit=crop",
    stars: 5
  }
];

export default function FeaturedHotelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_HOTELES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_HOTELES.length) % FEATURED_HOTELES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
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
            src={FEATURED_HOTELES[currentIndex].image}
            alt={FEATURED_HOTELES[currentIndex].name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: FEATURED_HOTELES[currentIndex].stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {FEATURED_HOTELES[currentIndex].name}
            </h3>
            <p className="flex items-center gap-2 text-gold font-medium mb-4">
              <MapPin className="w-5 h-5" />
              {FEATURED_HOTELES[currentIndex].location}
            </p>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl font-light">
              {FEATURED_HOTELES[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="pointer-events-auto bg-black/40 hover:bg-gold/80 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="pointer-events-auto bg-black/40 hover:bg-gold/80 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 md:right-10 flex gap-2 z-20">
        {FEATURED_HOTELES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex ? "bg-gold w-8 h-2.5" : "bg-white/50 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
