"use client"
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, Plane, Building2, Ticket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image / Video Mockup */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/70 via-deep-blue/40 to-deep-blue z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop"
            alt="Oaxaca"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Viaja de Tijuana a <span className="text-gold">Oaxaca</span> <br className="hidden md:block"/> al mejor precio
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light">
              Descubre Oaxaca saliendo desde Tijuana con ofertas únicas y experiencias inolvidables.
            </p>
          </motion.div>

          {/* SEARCH BOX */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-2xl p-4 md:p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-4 shadow-2xl"
          >
            <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <MapPin className="text-gold w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-300 font-medium">Origen</p>
                <input type="text" defaultValue="Tijuana (TIJ)" className="bg-transparent text-white w-full outline-none font-semibold" />
              </div>
            </div>
            <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <MapPin className="text-gold w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-300 font-medium">Destino</p>
                <input type="text" defaultValue="Oaxaca (OAX)" className="bg-transparent text-white w-full outline-none font-semibold" />
              </div>
            </div>
            <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <Calendar className="text-gold w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-300 font-medium">Fechas</p>
                <input type="text" placeholder="Ida - Vuelta" className="bg-transparent text-white w-full outline-none font-semibold text-sm placeholder:text-gray-300" />
              </div>
            </div>
            <div className="flex-1 bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <Users className="text-gold w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-gray-300 font-medium">Pasajeros</p>
                <input type="text" defaultValue="2 Personas" className="bg-transparent text-white w-full outline-none font-semibold text-sm" />
              </div>
            </div>
            <button className="bg-gold hover:bg-gold-light text-deep-blue font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Buscar
            </button>
          </motion.div>
        </div>
      </section>

      {/* TOP TOURS SECTION */}
      <section className="py-24 bg-deep-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experiencias <span className="text-gold">Top en Oaxaca</span></h2>
              <p className="text-gray-400 max-w-2xl">Descubre los lugares más mágicos con nuestros tours exclusivos desde Tijuana.</p>
            </div>
            <Link href="/oaxaca" className="text-gold hover:text-white transition-colors font-medium hidden md:block">Ver todos los tours &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <motion.div whileHover={{ y: -10 }} className="group rounded-2xl overflow-hidden bg-deep-blue-light border border-white/5 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop" alt="Hierve el Agua" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold border border-white/20">
                  Top Seller
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Hierve el Agua Mágico</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" /> Oaxaca, México
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Desde</p>
                    <p className="text-gold font-bold text-xl">$890 MXN</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-400 flex items-center gap-2"><Ticket className="w-4 h-4"/> 8 horas</div>
                  <button className="bg-white/10 hover:bg-gold hover:text-deep-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Reservar</button>
                </div>
              </div>
            </motion.div>

            {/* Tour Card 2 */}
            <motion.div whileHover={{ y: -10 }} className="group rounded-2xl overflow-hidden bg-deep-blue-light border border-white/5 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop" alt="Monte Albán" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Ruinas de Monte Albán</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" /> Oaxaca, México
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Desde</p>
                    <p className="text-gold font-bold text-xl">$650 MXN</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-400 flex items-center gap-2"><Ticket className="w-4 h-4"/> 5 horas</div>
                  <button className="bg-white/10 hover:bg-gold hover:text-deep-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Reservar</button>
                </div>
              </div>
            </motion.div>

            {/* Tour Card 3 */}
            <motion.div whileHover={{ y: -10 }} className="group rounded-2xl overflow-hidden bg-deep-blue-light border border-white/5 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1628186107530-581d4a89ea0e?q=80&w=2000&auto=format&fit=crop" alt="Mezcal" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Ruta del Mezcal</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" /> Santiago Matatlán
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Desde</p>
                    <p className="text-gold font-bold text-xl">$1,200 MXN</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-400 flex items-center gap-2"><Ticket className="w-4 h-4"/> 6 horas</div>
                  <button className="bg-white/10 hover:bg-gold hover:text-deep-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Reservar</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="py-12 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-deep-blue">
              <h2 className="text-3xl font-bold mb-2">¿Listo para el viaje de tus sueños?</h2>
              <p className="font-medium text-deep-blue/80">Reserva tu paquete completo (Vuelo + Hotel + Tours) y obtén hasta un 20% de descuento.</p>
            </div>
            <Link href="/paquetes" className="bg-deep-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-deep-blue-light transition-colors shadow-lg whitespace-nowrap">
              Ver Paquetes Promocionales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
