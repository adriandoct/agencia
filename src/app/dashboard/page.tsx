"use client"
import { motion } from 'framer-motion';
import { TrendingUp, Users, Ticket, DollarSign, Calendar } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { name: 'Ventas del Mes', value: '$124,500 MXN', icon: DollarSign, change: '+12%', color: 'text-green-400' },
    { name: 'Reservas Activas', value: '45', icon: Ticket, change: '+5%', color: 'text-blue-400' },
    { name: 'Nuevos Usuarios', value: '128', icon: Users, change: '+18%', color: 'text-gold' },
    { name: 'Conversión', value: '3.2%', icon: TrendingUp, change: '+1.1%', color: 'text-purple-400' },
  ];

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Bienvenido al panel de control de TJX Oaxaca Travel.</p>
        </div>
        <button className="bg-gold hover:bg-gold-light text-deep-blue font-bold px-6 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-lg">
          <Calendar className="w-4 h-4" /> Generar Reporte
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-deep-blue-light border border-white/5 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.name}</h3>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="col-span-2 bg-deep-blue-light border border-white/5 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-6">Reservas Recientes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 text-sm">
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium">Servicio</th>
                  <th className="pb-3 font-medium">Fecha</th>
                  <th className="pb-3 font-medium">Monto</th>
                  <th className="pb-3 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { id: 1, client: 'Ana García', service: 'Paquete Monte Albán', date: '24 Oct, 2026', amount: '$3,500 MXN', status: 'Confirmado', color: 'text-green-400 bg-green-400/10' },
                  { id: 2, client: 'Carlos López', service: 'Vuelo TIJ - OAX', date: '23 Oct, 2026', amount: '$2,800 MXN', status: 'Pendiente', color: 'text-yellow-400 bg-yellow-400/10' },
                  { id: 3, client: 'María Fernández', service: 'Hotel Quinta Real', date: '22 Oct, 2026', amount: '$4,200 MXN', status: 'Confirmado', color: 'text-green-400 bg-green-400/10' },
                ].map((booking) => (
                  <tr key={booking.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium">{booking.client}</td>
                    <td className="py-4 text-gray-300">{booking.service}</td>
                    <td className="py-4 text-gray-400">{booking.date}</td>
                    <td className="py-4 font-semibold">{booking.amount}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.color}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Tours */}
        <div className="bg-deep-blue-light border border-white/5 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-6">Tours Más Vendidos</h2>
          <div className="space-y-6">
            {[
              { name: 'Hierve el Agua', sales: 45, progress: 85 },
              { name: 'Monte Albán', sales: 32, progress: 65 },
              { name: 'Ruta del Mezcal', sales: 28, progress: 55 },
              { name: 'Puerto Escondido', sales: 15, progress: 30 },
            ].map((tour) => (
              <div key={tour.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{tour.name}</span>
                  <span className="text-xs text-gray-400">{tour.sales} reservas</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2">
                  <div className="bg-gold h-2 rounded-full" style={{ width: `${tour.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
