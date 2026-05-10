"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, PlaneTakeoff, PlaneLanding, Clock, Filter, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const mockFlights = [
  { id: 1, airline: 'Volaris', departure: '08:00 AM', arrival: '01:30 PM', duration: '3h 30m', stops: 'Directo', price: '$2,450 MXN', type: 'Económica' },
  { id: 2, airline: 'VivaAerobus', departure: '10:15 AM', arrival: '04:00 PM', duration: '3h 45m', stops: 'Directo', price: '$2,100 MXN', type: 'Básica' },
  { id: 3, airline: 'Aeroméxico', departure: '06:30 AM', arrival: '02:15 PM', duration: '5h 45m', stops: '1 Escala (MEX)', price: '$3,800 MXN', type: 'Clásica' },
  { id: 4, airline: 'Volaris', departure: '03:45 PM', arrival: '09:10 PM', duration: '3h 25m', stops: 'Directo', price: '$2,800 MXN', type: 'Económica' },
];

export default function VuelosPage() {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1500);
  };

  return (
    <div className="pt-20 bg-deep-blue min-h-screen text-white pb-20">
      {/* Flight Search Header */}
      <div className="bg-deep-blue-light border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
            <PlaneTakeoff className="text-gold w-8 h-8" />
            Reserva tu Vuelo a Oaxaca
          </h1>
          
          <div className="glass-panel rounded-2xl p-4 flex flex-col lg:flex-row gap-4 shadow-xl border border-white/5">
            <div className="flex-1 bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <MapPin className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Origen</p>
                <input type="text" defaultValue="Tijuana (TIJ)" className="bg-transparent text-white w-full outline-none font-semibold" />
              </div>
            </div>
            <div className="flex items-center justify-center -mx-2 z-10 hidden lg:flex">
              <div className="bg-gold p-2 rounded-full text-deep-blue shadow-lg">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1 bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <MapPin className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Destino</p>
                <input type="text" defaultValue="Oaxaca (OAX)" className="bg-transparent text-white w-full outline-none font-semibold" />
              </div>
            </div>
            <div className="flex-1 bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <Calendar className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Fechas</p>
                <input type="text" defaultValue="15 Nov - 20 Nov" className="bg-transparent text-white w-full outline-none font-semibold text-sm" />
              </div>
            </div>
            <div className="flex-1 bg-black/20 rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <Users className="text-gold w-5 h-5" />
              <div className="text-left w-full">
                <p className="text-xs text-gray-400 font-medium">Pasajeros</p>
                <input type="text" defaultValue="1 Adulto" className="bg-transparent text-white w-full outline-none font-semibold text-sm" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-deep-blue-light border border-white/10 rounded-2xl p-6 sticky top-28">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-gold" /> Filtros
            </h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-300 mb-3">Escalas</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400">Directo (2)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400">1 Escala (1)</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-300 mb-3">Aerolíneas</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400">Volaris</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400">VivaAerobus</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 bg-transparent text-gold focus:ring-gold focus:ring-offset-deep-blue" />
                  <span className="text-sm text-gray-400">Aeroméxico</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Flight Results */}
        <main className="w-full lg:w-3/4 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {isSearching ? 'Buscando los mejores vuelos...' : '4 vuelos encontrados'}
            </h2>
            <select className="bg-deep-blue-light border border-white/10 text-white text-sm rounded-lg focus:ring-gold focus:border-gold block p-2.5 outline-none">
              <option>Recomendados</option>
              <option>Precio (más bajo primero)</option>
              <option>Duración (más corto primero)</option>
            </select>
          </div>

          {!isSearching && mockFlights.map((flight, index) => (
            <motion.div 
              key={flight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-deep-blue-light border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Airline Info */}
                <div className="flex-1 w-full flex items-center justify-between md:justify-start gap-8">
                  <div className="text-center md:text-left">
                    <p className="text-2xl font-bold">{flight.departure}</p>
                    <p className="text-sm text-gray-400">TIJ</p>
                  </div>
                  
                  <div className="flex flex-col items-center flex-1 px-4">
                    <p className="text-xs text-gray-400 mb-1 flex items-center gap-1"><Clock className="w-3 h-3"/> {flight.duration}</p>
                    <div className="w-full flex items-center">
                      <div className="h-[1px] w-full bg-white/20"></div>
                      <PlaneTakeoff className="w-4 h-4 text-gold mx-2" />
                      <div className="h-[1px] w-full bg-white/20"></div>
                    </div>
                    <p className="text-xs text-gold mt-1 font-medium">{flight.stops}</p>
                  </div>

                  <div className="text-center md:text-right">
                    <p className="text-2xl font-bold">{flight.arrival}</p>
                    <p className="text-sm text-gray-400">OAX</p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="w-full md:w-auto flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 md:pl-6 md:border-l border-white/10">
                  <div className="text-left md:text-right">
                    <p className="text-xs text-gray-400">Total por pasajero</p>
                    <p className="text-3xl font-bold text-gold">{flight.price}</p>
                    <p className="text-xs text-gray-400 mt-1">{flight.airline} • {flight.type}</p>
                  </div>
                  <button className="bg-white/10 hover:bg-gold hover:text-deep-blue text-white px-6 py-2 rounded-lg font-bold transition-all shadow-md">
                    Reservar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
}
