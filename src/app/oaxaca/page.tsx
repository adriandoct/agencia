"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Clock, Star } from 'lucide-react';

const tours = [
  { id: 1, title: 'Hierve el Agua', duration: '8 horas', price: '$890 MXN', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop' },
  { id: 2, title: 'Monte Albán', duration: '5 horas', price: '$650 MXN', image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Tule + Mitla', duration: '6 horas', price: '$750 MXN', image: 'https://images.unsplash.com/photo-1580838841443-4f96403ea4bd?q=80&w=2000&auto=format&fit=crop' },
  { id: 4, title: 'Mezcal Experience', duration: '4 horas', price: '$1,200 MXN', image: 'https://images.unsplash.com/photo-1628186107530-581d4a89ea0e?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, title: 'Puerto Escondido', duration: '3 días', price: '$4,500 MXN', image: 'https://images.unsplash.com/photo-1512813101662-79010410dcb6?q=80&w=2000&auto=format&fit=crop' },
  { id: 6, title: 'Huatulco', duration: '4 días', price: '$5,800 MXN', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?q=80&w=2000&auto=format&fit=crop' },
];

export default function OaxacaPage() {
  return (
    <div className="pt-20 bg-deep-blue min-h-screen text-white">
      {/* Hero Oaxaca */}
      <div className="relative h-[50vh] w-full flex items-center justify-center">
        <Image src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop" alt="Oaxaca Header" fill className="object-cover opacity-60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg"
          >
            Magia de <span className="text-gold">Oaxaca</span>
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-md">Experiencias únicas, cultura viva y gastronomía inigualable.</p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Tours Top</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-deep-blue-light rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 text-gold fill-gold" /> 5.0
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{tour.title}</h3>
                <div className="flex items-center gap-4 text-gray-400 mb-6 text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Oaxaca</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gold">{tour.price}</span>
                  <button className="bg-white/10 hover:bg-gold hover:text-deep-blue px-6 py-2 rounded-lg font-medium transition-all">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
