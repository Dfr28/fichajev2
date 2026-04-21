import { BrutalButton } from "@/components/ui";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="w-full max-w-md border-4 border-black p-8">
        <h1 className="font-title text-4xl uppercase mb-2">Acceso</h1>
        <p className="font-mono text-sm mb-8 text-gray-600">
          Inicia sesión en tu cuenta de control horario
        </p>

        <form className="space-y-6">
          <div>
            <label className="font-mono text-sm font-bold block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border-4 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              placeholder="tu@email.com"
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
          </div>

          <div className="flex items-center justify-between">
            <label className="font-mono text-sm flex items-center">
              <input type="checkbox" className="w-4 h-4 border-2 border-black mr-2" />
              Recuérdame
            </label>
            <Link href="/" className="font-mono text-sm underline hover:no-underline">
              ¿Olvidaste contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full border-4 border-black bg-black text-white px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1"
          >
            Acceder
          </button>
        </form>

        <div className="mt-8 border-t-4 border-black pt-8">
          <p className="font-mono text-sm text-center mb-4">
            ¿No tienes cuenta?
          </p>
          <Link
            href="/auth/register"
            className="block border-4 border-black px-6 py-3 font-bold uppercase text-center transition-transform hover:-translate-y-1"
          >
            Crear Cuenta
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t-4 border-black">
          <p className="font-mono text-xs text-center text-gray-600 mb-4">
            ¿Eres administrador?
          </p>
          <Link
            href="/auth/admin-login"
            className="block font-mono text-sm text-center underline hover:no-underline"
          >
            Panel de Administrador
          </Link>
        </div>
      </div>
    </main>
  );
}
