"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Ticket, Plane, Building2, Settings, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const menu = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Reservas', icon: Ticket, href: '/dashboard/reservas' },
    { name: 'Tours', icon: Ticket, href: '/dashboard/tours' },
    { name: 'Vuelos', icon: Plane, href: '/dashboard/vuelos' },
    { name: 'Hoteles', icon: Building2, href: '/dashboard/hoteles' },
    { name: 'Usuarios', icon: Users, href: '/dashboard/usuarios' },
    { name: 'Configuración', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-deep-blue pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-deep-blue-light border-r border-white/5 hidden md:block">
        <div className="p-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Admin Panel</p>
          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-gold text-deep-blue font-semibold' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}>
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="absolute bottom-0 w-64 p-6 border-t border-white/5">
          <form action="/auth/logout" method="POST">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-400/10 transition-colors">
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
