import { BrutalCard, BrutalButton } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b-4 border-black py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-title text-6xl md:text-8xl uppercase mb-6">
            Fichaje Brutalista
          </h1>
          <p className="font-mono text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Control horario legal, sencillo y cumpliendo con la normativa española R.D. 1741/1998. Sin complicaciones.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <BrutalButton href="/auth/register" variant="primary">
              Comenzar Ahora
            </BrutalButton>
            <BrutalButton href="/auth/login" variant="secondary">
              Iniciar Sesión
            </BrutalButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-4xl uppercase mb-12 text-center">Características</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <BrutalCard title="✅ Cumplimiento Legal">
              <p>100% conforme con la normativa española de registro horario. Auditorías listas para Inspección de Trabajo.</p>
            </BrutalCard>
            <BrutalCard title="⚡ Simple y Rápido">
              <p>Registrar entrada y salida en un click. Sin formularios complicados, sin pasos innecesarios.</p>
            </BrutalCard>
            <BrutalCard title="📊 Informes Automáticos">
              <p>Genera reportes mensuales, exporta a Excel, PDF o CSV en segundos.</p>
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* Legal Info Section */}
      <section className="py-24 px-6 border-b-4 border-black bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-4xl uppercase mb-12 text-center">Cumplimiento Normativo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BrutalCard title="📅 Conservación 4 Años">
              <p className="mb-3">Los registros deben mantenerse accesibles durante cuatro años consecutivos para inspección.</p>
              <p className="font-mono text-xs text-gray-600">Normativa laboral española</p>
            </BrutalCard>
            <BrutalCard title="🔍 Inspección de Trabajo">
              <p className="mb-3">La empresa debe poder mostrar registros ante Inspección de Trabajo sin demoras.</p>
              <p className="font-mono text-xs text-gray-600">Procedimiento normalizado</p>
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="border-4 border-black p-12 text-center">
          <h2 className="font-title text-4xl uppercase mb-4">¿Listo para Cumplir Normativa?</h2>
          <p className="font-mono text-base mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo con nuestra prueba gratuita. Sin tarjeta de crédito, sin compromisos, acceso inmediato a todas las características.
          </p>
          <BrutalButton href="/auth/register">Crear Cuenta Gratis</BrutalButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-title text-2xl uppercase mb-4">Fichaje Brutalista</h3>
              <p className="font-mono text-sm text-gray-600">Control horario legal para empresas españolas.</p>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 font-mono text-sm">
                <li><a href="#" className="hover:underline">Inicio</a></li>
                <li><a href="#" className="hover:underline">Características</a></li>
                <li><a href="#" className="hover:underline">Precios</a></li>
                <li><a href="#" className="hover:underline">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold mb-4">Legal</h4>
              <ul className="space-y-2 font-mono text-sm">
                <li><a href="#" className="hover:underline">Términos de Uso</a></li>
                <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
                <li><a href="#" className="hover:underline">Aviso Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-black pt-6 font-mono text-xs text-gray-600">
            <p>© 2026 Fichaje Brutalista. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}