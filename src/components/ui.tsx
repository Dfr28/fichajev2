import Link from "next/link";
import { ReactNode } from "react";

interface BrutalButtonProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "black" | "white";
  type?: "button" | "submit" | "reset";
}

export function BrutalButton({
  href,
  children,
  onClick,
  className = "",
  variant = "default",
  type = "button"
}: BrutalButtonProps) {
  const baseClasses = "inline-block border-4 border-black px-6 py-3 font-bold text-black shadow-brutal transition-transform hover:-translate-y-1";
  
  const variantClasses = {
    default: "bg-black text-white",
    black: "bg-black text-white",
    white: "bg-white text-black"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

interface BrutalCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function BrutalCard({
  title,
  children,
  className = ""
}: BrutalCardProps) {
  return (
    <article className={`border-4 border-black p-6 ${className}`}>
      <h3 className="mb-3 font-title text-xl uppercase">{title}</h3>
      <div className="font-mono text-sm">{children}</div>
    </article>
  );
}

export function Header() {
  return (
    <header className="border-b-4 border-black sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="font-title text-2xl uppercase font-bold">
          📋 Fichaje
        </Link>
        <nav className="flex gap-8 font-mono font-bold text-sm">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/status" className="hover:underline">Estado</Link>
          <Link href="/contacto" className="hover:underline">Contacto</Link>
          <Link href="/auth/login" className="hover:underline">Acceder</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          <div>
            <h3 className="font-title text-lg uppercase mb-4">Producto</h3>
            <ul className="font-mono text-sm space-y-2">
              <li><Link href="/auth/register" className="hover:underline">Comenzar gratis</Link></li>
              <li><Link href="/#planes" className="hover:underline">Planes</Link></li>
              <li><Link href="/#features" className="hover:underline">Características</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-title text-lg uppercase mb-4">Empresa</h3>
            <ul className="font-mono text-sm space-y-2">
              <li><Link href="/status" className="hover:underline">Estado del Servicio</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
              <li><Link href="/politica-privacidad" className="hover:underline">Privacidad</Link></li>
              <li><Link href="/politica-cookies" className="hover:underline">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-title text-lg uppercase mb-4">Legal</h3>
            <ul className="font-mono text-sm space-y-2">
              <li><Link href="/aviso-legal" className="hover:underline">Aviso Legal</Link></li>
              <li><Link href="/politica-privacidad" className="hover:underline">RGPD</Link></li>
              <li><a href="mailto:info@fichaje.app" className="hover:underline">Email</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-title text-lg uppercase mb-4">Desarrollo</h3>
            <ul className="font-mono text-sm space-y-2">
              <li>Sistema fichaje en Barcelona</li>
              <li>Control horario legal</li>
              <li>Cumplimiento RGPD</li>
              <li>R.D. 1741/1998</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-white pt-8 font-mono text-sm text-center text-gray-300">
          <p>&copy; 2026 Fichaje SaaS. Todos los derechos reservados. Desarrollado para empresas españolas.</p>
        </div>
      </div>
    </footer>
  );
}
