import { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Dashboard Header */}
      <header className="border-b-4 border-black sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="font-title text-2xl uppercase font-bold">
            📋 Panel
          </Link>
          <nav className="flex gap-6 items-center">
            <Link href="/dashboard" className="font-mono text-sm hover:underline">Perfil</Link>
            <Link href="/status" className="font-mono text-sm hover:underline">Estado</Link>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.removeItem('session');
                  window.location.href = '/';
                }
              }}
              className="font-mono text-sm border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors"
            >
              Cerrar sesión
            </button>
          </nav>
        </div>
      </header>
      
      {/* Content */}
      {children}

      {/* Dashboard Footer */}
      <footer className="border-t-4 border-black bg-gray-50 mt-12 py-6 text-center">
        <p className="font-mono text-xs text-gray-600">
          © 2026 Fichaje SaaS | Panel de Control
        </p>
      </footer>
    </div>
  );
}
