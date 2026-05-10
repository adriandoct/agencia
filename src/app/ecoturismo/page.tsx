"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, MapPin, Clock, Users, ArrowRight, TreePine, Waves } from 'lucide-react';
import Link from 'next/link';

const oaxacaEcoTours = [
  { id: 1, title: 'Expedición Sierra Norte', location: 'Pueblos Mancomunados, Oax', duration: '3 Días', category: 'Senderismo', price: '$3,200 MXN', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop' },
  { id: 2, title: 'Santuario de la Tortuga', location: 'Mazunte, Oax', duration: '1 Día', category: 'Conservación', price: '$950 MXN', image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=2000&auto=format&fit=crop' },
  { id: 3, title: 'Ruta del Café y Cascadas', location: 'Pluma Hidalgo, Oax', duration: '2 Días', category: 'Agroturismo', price: '$2,100 MXN', image: 'https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?q=80&w=2000&auto=format&fit=crop' },
];

const bajaEcoTours = [
  { id: 4, title: 'Avistamiento de Ballenas', location: 'Ensenada, B.C.', duration: '1 Día', category: 'Fauna Marina', price: '$1,800 MXN', image: 'https://images.unsplash.com/photo-1568430462989-44163eb17ab2?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, title: 'Campamento San Pedro Mártir', location: 'Sierra San Pedro Mártir, B.C.', duration: '2 Días', category: 'Montaña', price: '$2,500 MXN', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop' },
  { id: 6, title: 'Ruta Vinícola Orgánica', location: 'Valle de Guadalupe, B.C.', duration: '1 Día', category: 'Agroturismo', price: '$1,500 MXN', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2000&auto=format&fit=crop' },
];

export default function EcoturismoPage() {
  return (
    <div className="bg-deep-blue min-h-screen text-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full flex items-center justify-center pt-20">
        <Image 
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop" 
          alt="Bosque" 
          fill 
          className="object-cover opacity-50" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/40 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 text-green-400 font-bold px-5 py-2 rounded-full text-sm mb-6 backdrop-blur-md">
              <Leaf className="w-4 h-4" /> Turismo Responsable y Sostenible
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl">
              Naturaleza sin <span className="text-green-400">Fronteras</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md font-light max-w-3xl mx-auto">
              Conecta con la tierra a través de nuestras rutas de ecoturismo en Baja California y Oaxaca. Viaja con propósito, apoya comunidades locales y protege el medio ambiente.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro Stats/Values */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-deep-blue-light/50 border border-white/5 p-8 rounded-2xl text-center hover:bg-white/5 transition-colors">
            <TreePine className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Impacto Positivo</h3>
            <p className="text-gray-400 text-sm">Destinamos el 5% de cada reserva a proyectos de reforestación y conservación local.</p>
          </div>
          <div className="bg-deep-blue-light/50 border border-white/5 p-8 rounded-2xl text-center hover:bg-white/5 transition-colors">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Comunidades Locales</h3>
            <p className="text-gray-400 text-sm">Trabajamos directamente con cooperativas indígenas y guías locales certificados.</p>
          </div>
          <div className="bg-deep-blue-light/50 border border-white/5 p-8 rounded-2xl text-center hover:bg-white/5 transition-colors">
            <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Huella de Carbono</h3>
            <p className="text-gray-400 text-sm">Compensamos las emisiones de nuestros vuelos y transporte terrestre.</p>
          </div>
        </div>
      </div>

      {/* Oaxaca Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Selvas y Sierras de <span className="text-gold">Oaxaca</span></h2>
            <p className="text-gray-400 text-lg">De la imponente Sierra Norte a las costas de conservación.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {oaxacaEcoTours.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-deep-blue-light rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                  {tour.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">{tour.title}</h3>
                <div className="flex items-center gap-4 text-gray-400 mb-6 text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">{tour.price}</span>
                  <button className="flex items-center gap-2 text-green-400 font-medium group-hover:translate-x-2 transition-transform">
                    Explorar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Baja California Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Mares y Desiertos de <span className="text-blue-400">Baja California</span></h2>
            <p className="text-gray-400 text-lg">Contrastes extremos desde los valles hasta el Océano Pacífico.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bajaEcoTours.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-deep-blue-light rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={tour.image} alt={tour.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                  {tour.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{tour.title}</h3>
                <div className="flex items-center gap-4 text-gray-400 mb-6 text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">{tour.price}</span>
                  <button className="flex items-center gap-2 text-blue-400 font-medium group-hover:translate-x-2 transition-transform">
                    Explorar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-green-900/50 to-deep-blue-light border border-green-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <Leaf className="w-16 h-16 text-green-400 mx-auto mb-6 relative z-10" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Viaja Consciente. Deja una Huella Verde.</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">
            Únete a nuestra comunidad de viajeros responsables. Al reservar un paquete Eco-Connect entre Baja California y Oaxaca, obtienes un 15% de descuento.
          </p>
          <button className="relative z-10 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-green-500/20 text-lg">
            Armar mi viaje ecológico
          </button>
        </div>
      </div>
    </div>
  );
}
