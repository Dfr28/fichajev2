import { BrutalButton } from "@/components/ui";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="w-full max-w-md border-4 border-black p-8">
        <h1 className="font-title text-4xl uppercase mb-2">Crear Cuenta</h1>
        <p className="font-mono text-sm mb-8 text-gray-600">
          Comience su prueba gratuita hoy mismo
        </p>

        <form className="space-y-4">
          <div>
            <label className="font-mono text-sm font-bold block mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border-4 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              placeholder="Juan García"
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-4 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              placeholder="tu@empresa.es"
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold block mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border-4 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              placeholder="••••••••"
            />
            <p className="font-mono text-xs text-gray-600 mt-1">
              Mínimo 8 caracteres
            </p>
          </div>

          <div>
            <label className="font-mono text-sm font-bold block mb-2">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="w-full border-4 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold block mb-2">
              ¿Eres?
            </label>
            <select
              name="role"
              className="w-full border-4 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              <option value="OWNER">Dueño de Empresa</option>
              <option value="EMPLOYEE">Empleado</option>
            </select>
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="w-4 h-4 border-2 border-black mr-3 mt-1" required />
            <label className="font-mono text-xs">
              Acepto los <Link href="/aviso-legal" className="underline">términos de servicio</Link> y la <Link href="/politica-privacidad" className="underline">política de privacidad</Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full border-4 border-black bg-black text-white px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1 mt-6"
          >
            Crear Cuenta
          </button>
        </form>

        <div className="mt-8 border-t-4 border-black pt-8">
          <p className="font-mono text-sm text-center">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="underline font-bold hover:no-underline">
              Accede aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
