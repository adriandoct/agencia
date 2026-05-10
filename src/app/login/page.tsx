"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { login, signup } from './actions';
import { Plane, Mail, Lock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-deep-blue flex">
      {/* Left panel - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2070&auto=format&fit=crop" alt="Oaxaca" fill className="object-cover" />
        <div className="absolute inset-0 bg-deep-blue/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
          <Plane className="w-16 h-16 text-gold mb-6" />
          <h2 className="text-4xl font-bold mb-4">Descubre la Magia</h2>
          <p className="text-lg text-gray-200">Únete a miles de viajeros descubriendo Oaxaca desde Tijuana con las mejores experiencias.</p>
        </div>
      </div>

      {/* Right panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-24">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md bg-deep-blue-light p-8 rounded-2xl shadow-2xl border border-white/5"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? 'Bienvenido de vuelta' : 'Crea tu cuenta'}</h2>
            <p className="text-gray-400">
              {isLogin ? 'Ingresa para gestionar tus reservas y descubrir ofertas exclusivas.' : 'Regístrate para comenzar a planear tu viaje soñado.'}
            </p>
          </div>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Nombre Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input name="nombre" type="text" required className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Tu nombre" />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input name="email" type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="correo@ejemplo.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input name="password" type="password" required className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="••••••••" />
              </div>
            </div>

            <button
              formAction={isLogin ? login : signup}
              className="w-full bg-gold hover:bg-gold-light text-deep-blue font-bold py-3 rounded-lg transition-colors mt-6 shadow-lg"
            >
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-gray-400 hover:text-gold text-sm transition-colors"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate aquí' : '¿Ya tienes cuenta? Inicia sesión aquí'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
