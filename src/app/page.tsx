import { BrutalButton, BrutalCard } from "@/components/ui";
import Link from "next/link";

const plans = [
  { name: "Starter", monthly: "9EUR", yearly: "90EUR", employees: "Hasta 5 empleados" },
  { name: "Pro", monthly: "19EUR", yearly: "190EUR", employees: "Hasta 25 empleados" },
  { name: "Business", monthly: "39EUR", yearly: "390EUR", employees: "Ilimitado" }
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="mb-16 brutal-card p-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-wide text-accent">Control Horario Legal en Espana</p>
        <h1 className="mb-4 font-title text-4xl uppercase md:text-6xl">FICHAJE RETRO-BRUTALISTA</h1>
        <p className="mb-6 max-w-2xl font-mono text-sm">
          Registra entradas y salidas con trazabilidad completa, historial de jornada y exportacion.
          Cumple con la obligacion de registro diario y conservacion de datos exigida por la normativa laboral espanola.
        </p>
        <div className="flex flex-wrap gap-3">
          <BrutalButton href="/dashboard/dueno">Entrar como dueno</BrutalButton>
          <BrutalButton href="/dashboard/empleado">Entrar como empleado</BrutalButton>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 font-title text-3xl uppercase">Pricing dinamico</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <BrutalCard key={plan.name} title={plan.name}>
              <p>{plan.employees}</p>
              <p className="mt-2">Mensual: {plan.monthly}</p>
              <p>Anual: {plan.yearly}</p>
              <button className="mt-4 border-4 border-black bg-black px-4 py-2 font-bold text-white shadow-brutal">
                Suscribirme
              </button>
            </BrutalCard>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 font-title text-3xl uppercase">Normativa</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <BrutalCard title="Registro diario">
            Debe incluir hora concreta de inicio y fin de la jornada.
          </BrutalCard>
          <BrutalCard title="Conservacion 4 anos">
            Los registros deben mantenerse accesibles durante cuatro anos.
          </BrutalCard>
          <BrutalCard title="Inspeccion">
            La empresa debe poder mostrar registros ante Inspeccion de Trabajo.
          </BrutalCard>
        </div>
      </section>

      <footer className="border-t-4 border-black pt-6 font-mono text-sm">
        <div className="flex flex-wrap gap-4">
          <Link className="underline" href="/aviso-legal">
            Aviso Legal
          </Link>
          <Link className="underline" href="/politica-privacidad">
            RGPD
          </Link>
          <Link className="underline" href="/politica-cookies">
            Politica de Cookies
          </Link>
        </div>
      </footer>
    </main>
  );
}
