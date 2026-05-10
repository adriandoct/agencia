"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Plane, User, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Plane className="h-8 w-8 text-gold group-hover:text-white transition-colors" />
              <span className="font-bold text-2xl tracking-tighter text-white">
                TJX<span className="text-gold">OAXACA</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vuelos" className="text-gray-300 hover:text-gold transition-colors font-medium">Vuelos</Link>
            <Link href="/hoteles" className="text-gray-300 hover:text-gold transition-colors font-medium">Hoteles</Link>
            <Link href="/tours" className="text-gray-300 hover:text-gold transition-colors font-medium">Experiencias</Link>
            <Link href="/ecoturismo" className="text-green-400 hover:text-green-300 transition-colors font-medium">Ecoturismo</Link>
            <Link href="/paquetes" className="text-gray-300 hover:text-gold transition-colors font-medium">Paquetes</Link>
            
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <Link href="/login" className="flex items-center gap-2 text-white hover:text-gold transition-colors">
                <LogIn className="w-5 h-5" />
                <span>Ingresar</span>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-blue-light border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/vuelos" className="block px-3 py-2 text-base font-medium text-white hover:text-gold">Vuelos</Link>
              <Link href="/hoteles" className="block px-3 py-2 text-base font-medium text-white hover:text-gold">Hoteles</Link>
              <Link href="/tours" className="block px-3 py-2 text-base font-medium text-white hover:text-gold">Experiencias</Link>
              <Link href="/ecoturismo" className="block px-3 py-2 text-base font-medium text-green-400 hover:text-green-300">Ecoturismo</Link>
              <Link href="/paquetes" className="block px-3 py-2 text-base font-medium text-white hover:text-gold">Paquetes</Link>
              <Link href="/login" className="block px-3 py-2 text-base font-medium text-gold">Ingresar / Registro</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
