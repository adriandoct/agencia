import Link from 'next/link';
import { Plane, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-blue-light border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-gold" />
              <span className="font-bold text-xl tracking-tighter text-white">
                TJX<span className="text-gold">OAXACA</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Descubre Oaxaca saliendo desde Tijuana con ofertas únicas y experiencias inolvidables. Tu agencia de viajes premium.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link href="/vuelos" className="text-gray-400 hover:text-gold text-sm transition-colors">Vuelos Económicos</Link></li>
              <li><Link href="/hoteles" className="text-gray-400 hover:text-gold text-sm transition-colors">Hoteles Premium</Link></li>
              <li><Link href="/tours" className="text-gray-400 hover:text-gold text-sm transition-colors">Tours y Experiencias</Link></li>
              <li><Link href="/paquetes" className="text-gray-400 hover:text-gold text-sm transition-colors">Paquetes Completos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Destinos Top</h3>
            <ul className="space-y-2">
              <li><Link href="/tours/hierve-el-agua" className="text-gray-400 hover:text-gold text-sm transition-colors">Hierve el Agua</Link></li>
              <li><Link href="/tours/monte-alban" className="text-gray-400 hover:text-gold text-sm transition-colors">Monte Albán</Link></li>
              <li><Link href="/tours/puerto-escondido" className="text-gray-400 hover:text-gold text-sm transition-colors">Puerto Escondido</Link></li>
              <li><Link href="/tours/mitla" className="text-gray-400 hover:text-gold text-sm transition-colors">Mitla y El Tule</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Tijuana, B.C., México</li>
              <li className="text-gray-400 text-sm">hola@tjxoaxaca.com</li>
              <li className="text-gray-400 text-sm">+52 (664) 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TJX Oaxaca Travel. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="text-gray-500 hover:text-white text-sm transition-colors">Privacidad</Link>
            <Link href="/terminos" className="text-gray-500 hover:text-white text-sm transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
