import { BrutalButton, BrutalCard } from "@/components/ui";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fichaje SaaS | Control Horario y Sistema de Fichaje en Barcelona",
  description: "Plataforma profesional de control horario que cumple con la normativa laboral española. Sistema fichaje en Barcelona. Cumplimiento R.D. 1741/1998 y RGPD.",
  keywords: "control horario, fichaje, sistema fichaje barcelona, españa, RGPD"
};

const plans = [
  { name: "Starter", monthly: "9 EUR", yearly: "90 EUR", employees: "Hasta 5 empleados", features: ["Registro básico", "Reportes mensuales", "Soporte por email"] },
  { name: "Pro", monthly: "19 EUR", yearly: "190 EUR", employees: "Hasta 25 empleados", features: ["Todo en Starter", "Análisis avanzado", "API access", "Soporte prioritario"], highlighted: true },
  { name: "Business", monthly: "39 EUR", yearly: "390 EUR", employees: "Empleados ilimitados", features: ["Todo en Pro", "Integración personalizada", "Auditoría avanzada", "Gestor dedicado"] }
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section */}
      <section className="mb-24 animate-fade-in" id="inicio">
        <div className="border-4 border-black p-12 animate-pulse-border">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gray-600">💼 Control horario legal en España</p>
          <h1 className="font-title text-5xl uppercase leading-tight mb-6 md:text-6xl">
            Fichaje SaaS
          </h1>
          <p className="mb-8 max-w-3xl font-mono text-base leading-relaxed">
            Plataforma profesional de <strong>control horario y fichaje</strong> que cumple con la normativa laboral española. 
            Registra entradas y salidas con trazabilidad completa, historial de jornada y exportación. 
            <strong>Sistema fichaje en Barcelona y toda España</strong>. Cumple con R.D. 1741/1998 y RGPD.
          </p>
          <div className="flex flex-wrap gap-4">
            <BrutalButton href="/auth/login">Acceder al dashboard</BrutalButton>
            <BrutalButton href="/auth/register" variant="white">Comenzar Prueba Gratuita</BrutalButton>
          </div>
        </div>
      </section>

      {/* Features Section with animations */}
      <section className="mb-24" id="features">
        <h2 className="font-title text-4xl uppercase mb-12 animate-fade-in">Características Principales</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="feature-card">
            <BrutalCard title="✓ Registro Completo">
              Hora concreta de entrada y salida con timestamp automático.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Trazabilidad Total">
              Historial completo de jornada para auditoría e inspección.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Normativa Española">
              Cumple R.D. 1741/1998 y RGPD con máxima seguridad.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Exportación Fácil">
              Descarga reportes en PDF, Excel y otros formatos.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Análisis por Empresa">
              Métricas de productividad y cumplimiento normativo.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Acceso Móvil">
              Registra desde cualquier dispositivo en tiempo real.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Integración API">
              Conecta con tu software de RRHH y nómina.
            </BrutalCard>
          </div>
          <div className="feature-card">
            <BrutalCard title="✓ Soporte 24/7">
              Equipo experto en normativa laboral española.
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-24 animate-fade-in" id="planes" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-title text-4xl uppercase mb-12">Planes para Empresas</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border-4 border-black p-8 ${plan.highlighted ? "bg-black" : ""}`}
            >
              <h3 className={`font-title text-2xl uppercase mb-2 ${plan.highlighted ? "text-white" : ""}`}>
                {plan.name}
              </h3>
              <p className={`font-mono text-sm mb-6 ${plan.highlighted ? "text-white" : "text-gray-600"}`}>
                {plan.employees}
              </p>
              
              <div className="mb-8">
                <p className={`font-title text-3xl uppercase mb-2 ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.monthly}
                </p>
                <p className={`font-mono text-xs ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                  Mensual • {plan.yearly}/año
                </p>
              </div>

              <ul className={`font-mono text-sm space-y-2 mb-8 ${plan.highlighted ? "text-white" : ""}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full border-4 border-black px-6 py-3 font-bold transition-transform hover:-translate-y-1 ${
                plan.highlighted 
                  ? "bg-white text-black" 
                  : "bg-black text-white"
              }`}>
                Suscribirse
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Normativa Section */}
      <section className="mb-24 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-title text-4xl uppercase mb-12">Cumplimiento Normativo</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <BrutalCard title="📋 Registro Diario">
            <p className="mb-3">Debe incluir hora concreta de inicio y fin de la jornada ordinaria y de los períodos de descanso.</p>
            <p className="font-mono text-xs text-gray-600">Real Decreto 1741/1998</p>
          </BrutalCard>
          <BrutalCard title="📅 Conservación 4 Años">
            <p className="mb-3">Los registros deben mantenerse accesibles durante cuatro años consecutivos para inspección.</p>
            <p className="font-mono text-xs text-gray-600">Normativa laboral española</p>
          </BrutalCard>
          <BrutalCard title="🔍 Inspección de Trabajo">
            <p className="mb-3">La empresa debe poder mostrar registros ante Inspección de Trabajo sin demoras.</p>
            <p className="font-mono text-xs text-gray-600">Procedimiento normalizado</p>
          </BrutalCard>
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
    </main>
  );
}
            </ul>
          </div>
        </div>
        <div className="border-t-4 border-black pt-6 font-mono text-xs text-gray-600">
          <p>© 2026 Fichaje Brutalista. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
