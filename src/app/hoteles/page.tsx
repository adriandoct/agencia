"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, Building2, Star, Coffee, Wifi, Waves } from 'lucide-react';
import Image from 'next/image';
import FeaturedHotelsCarousel from '@/components/FeaturedHotelsCarousel';

const mockHoteles = [
  { id: 1, name: 'Quinta Real Oaxaca', stars: 5, location: 'Centro Histórico, Oaxaca', rating: 4.9, reviews: 342, price: '$4,200 MXN', image: 'https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?q=80&w=2000&auto=format&fit=crop', promo: 'Desayuno Incluido' },
  { id: 2, name: 'Hotel Escondido', stars: 4, location: 'Puerto Escondido, Oaxaca', rating: 4.8, reviews: 215, price: '$3,800 MXN', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop', promo: '-15% en Spa' },
  { id: 3, name: 'Pug Seal Oaxaca', stars: 5, location: 'Barrio de Jalatlaco', rating: 5.0, reviews: 128, price: '$5,100 MXN', image: 'https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?q=80&w=2000&auto=format&fit=crop', promo: 'Tour Privado Gratis' },
  { id: 4, name: 'City Centro Oaxaca', stars: 4, location: 'Centro Histórico, Oaxaca', rating: 4.6, reviews: 512, price: '$2,100 MXN', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop', promo: '' },
];

export default function HotelesPage() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1500);
  };

  return (
    <div className="pt-20 bg-deep-blue min-h-screen text-white pb-20">
      {/* Hotel Search Header */}
      <div className="bg-deep-blue-light border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="text-gold w-8 h-8" />
            Encuentra tu Hotel Ideal en Oaxaca
          </h1>
          
          <div className="glass-panel rounded-2xl p-4 flex flex-col lg:flex-row gap-4 shadow-xl border border-white/5">
            <div className="flex-[1.5] bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <MapPin className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Destino</p>
                <input type="text" defaultValue="Oaxaca, México" className="bg-transparent text-white w-full outline-none font-semibold" />
              </div>
            </div>
            <div className="flex-1 bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <Calendar className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Check-in - Check-out</p>
                <input type="text" defaultValue="15 Nov - 20 Nov" className="bg-transparent text-white w-full outline-none font-semibold text-sm" />
              </div>
            </div>
            <div className="flex-1 bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <Users className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Huéspedes</p>
                <input type="text" defaultValue="2 Adultos, 1 Hab" className="bg-transparent text-white w-full outline-none font-semibold text-sm" />
              </div>
            </div>
            <button 
              onClick={handleSearch}
              className="bg-gold hover:bg-gold-light text-deep-blue font-bold py-3 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isSearching ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <Search className="w-5 h-5" />
                </motion.div>
              ) : (
                <><Search className="w-5 h-5" /> Buscar</>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <FeaturedHotelsCarousel />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-deep-blue-light border border-white/10 rounded-2xl p-6 sticky top-28">
            <h2 className="text-lg font-bold mb-4">Filtros</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-300 mb-3">Categoría</h3>
              <div className="space-y-2">
                {[5, 4, 3].map(star => (
                  <label key={star} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked={star >= 4} className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                    <span className="flex items-center text-sm text-gray-400">
                      {Array.from({ length: star }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-300 mb-3">Servicios Populares</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Waves className="w-4 h-4"/> Alberca</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Wifi className="w-4 h-4"/> Wi-Fi Gratis</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400 flex items-center gap-2"><Coffee className="w-4 h-4"/> Desayuno</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Hotel Results */}
        <main className="w-full lg:w-3/4 space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">
              {isSearching ? 'Buscando hoteles...' : 'Oaxaca: 124 hoteles encontrados'}
            </h2>
          </div>

          {!isSearching && mockHoteles.map((hotel, index) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-deep-blue-light border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-colors shadow-lg flex flex-col md:flex-row group"
            >
              <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                {hotel.promo && (
                  <div className="absolute top-4 left-4 bg-gold text-deep-blue text-xs font-bold px-3 py-1 rounded-full">
                    {hotel.promo}
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-gold transition-colors">{hotel.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: hotel.stars }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-400">{hotel.reviews} opiniones</span>
                        <div className="bg-gold text-deep-blue font-bold px-2 py-1 rounded text-sm">
                          {hotel.rating}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">Excepcional</span>
                    </div>
                  </div>
                  <p className="text-gray-400 flex items-center gap-1 text-sm mt-2">
                    <MapPin className="w-4 h-4" /> {hotel.location}
                  </p>
                  
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-1 text-xs text-gray-300 bg-white/5 px-2 py-1 rounded"><Wifi className="w-3 h-3"/> Wi-Fi</div>
                    {hotel.id === 1 || hotel.id === 2 ? <div className="flex items-center gap-1 text-xs text-gray-300 bg-white/5 px-2 py-1 rounded"><Waves className="w-3 h-3"/> Alberca</div> : null}
                  </div>
                </div>

                <div className="flex justify-between items-end mt-6 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs text-green-400 font-medium">Cancelación gratis disponible</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">Precio por noche</p>
                    <p className="text-3xl font-bold text-gold mb-2">{hotel.price}</p>
                    <button className="bg-white/10 hover:bg-gold hover:text-deep-blue text-white px-6 py-2 rounded-lg font-bold transition-all shadow-md w-full">
                      Ver Habitaciones
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
}
