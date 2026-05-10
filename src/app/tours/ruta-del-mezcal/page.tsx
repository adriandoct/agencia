"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Clock, Star, Calendar, CheckCircle2, Ticket, Coffee, Users } from 'lucide-react';

export default function RutaDelMezcalPage() {
  return (
    <div className="bg-deep-blue min-h-screen text-white pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full flex items-center justify-center pt-20">
        <Image 
          src="https://images.unsplash.com/photo-1628186107530-581d4a89ea0e?q=80&w=2000&auto=format&fit=crop" 
          alt="Ruta del Mezcal" 
          fill 
          className="object-cover opacity-70" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gold text-deep-blue font-bold px-4 py-1 rounded-full text-sm mb-6">
              Experiencia Premium
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl">
              Ruta del <span className="text-gold">Mezcal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
              Descubre el proceso artesanal y degusta el auténtico sabor de Oaxaca en Santiago Matatlán, la capital mundial del mezcal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="w-full lg:w-2/3">
          <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-gold" />
              <span>Duración: 6 Horas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Santiago Matatlán</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-gold" />
              <span>Grupo Pequeño (Max 12)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span>5.0 (128 Reseñas)</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Sobre esta experiencia</h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-lg">
            Sumérgete en la cultura líquida de Oaxaca. En este tour guiado por expertos, visitaremos auténticos palenques (destilerías artesanales) donde aprenderás todo el proceso de elaboración del mezcal, desde el corte del agave hasta la doble destilación en ollas de barro y cobre.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-deep-blue-light p-6 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-400 w-5 h-5" /> ¿Qué incluye?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2"><span className="text-gold">•</span> Transporte privado desde tu hotel</li>
                <li className="flex items-start gap-2"><span className="text-gold">•</span> Guía experto certificado bilingüe</li>
                <li className="flex items-start gap-2"><span className="text-gold">•</span> Degustación de 6 tipos de mezcal</li>
                <li className="flex items-start gap-2"><span className="text-gold">•</span> Comida tradicional Oaxaqueña</li>
                <li className="flex items-start gap-2"><span className="text-gold">•</span> Botella de mezcal artesanal de regalo</li>
              </ul>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/5 h-full min-h-[250px]">
              <Image src="https://images.unsplash.com/photo-1574626003507-6c0b1154564c?q=80&w=2000&auto=format&fit=crop" alt="Agave" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Itinerario</h2>
          <div className="space-y-6">
            {[
              { time: '09:00 AM', title: 'Pick up en Hotel', desc: 'Comenzamos el día recogiendo a los viajeros en el centro de Oaxaca.' },
              { time: '10:30 AM', title: 'Visita al primer Palenque', desc: 'Conocemos a los maestros mezcaleros y observamos el horneado del agave.' },
              { time: '12:30 PM', title: 'Degustación Premium', desc: 'Cata guiada de mezcales Tobalá, Tepeztate, Arroqueño y Espadín.' },
              { time: '02:00 PM', title: 'Comida Tradicional', desc: 'Disfruta de tlayudas y mole en un entorno campestre.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gold"></div>
                  {i !== 3 && <div className="w-[2px] h-full bg-white/20 my-2"></div>}
                </div>
                <div className="pb-6">
                  <span className="text-gold font-bold text-sm">{item.time}</span>
                  <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Widget */}
        <aside className="w-full lg:w-1/3">
          <div className="bg-deep-blue-light border border-white/10 rounded-2xl p-6 sticky top-28 shadow-2xl">
            <div className="mb-6">
              <span className="text-gray-400 text-sm">Precio por persona</span>
              <p className="text-4xl font-bold text-gold">$1,200 <span className="text-lg text-gray-300">MXN</span></p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                <p className="text-xs text-gray-400 font-medium mb-1">Fecha</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <input type="date" className="bg-transparent text-white w-full outline-none text-sm" />
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                <p className="text-xs text-gray-400 font-medium mb-1">Viajeros</p>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  <select className="bg-transparent text-white w-full outline-none text-sm appearance-none">
                    <option className="bg-deep-blue text-white">2 Personas</option>
                    <option className="bg-deep-blue text-white">3 Personas</option>
                    <option className="bg-deep-blue text-white">4 Personas</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full bg-gold hover:bg-gold-light text-deep-blue font-bold py-4 rounded-xl transition-all shadow-lg text-lg flex items-center justify-center gap-2 mb-4">
              <Ticket className="w-5 h-5" /> Reservar Ahora
            </button>
            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-400" /> Confirmación inmediata
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
