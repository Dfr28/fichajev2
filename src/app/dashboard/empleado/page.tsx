const days = ["-3", "-2", "-1", "Hoy", "+1", "+2", "+3"];

export default function EmployeeDashboardPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 font-title text-4xl uppercase">Dashboard Empleado</h1>

      <section className="mb-8 brutal-card p-6">
        <h2 className="mb-4 font-title text-2xl uppercase">Fichaje rapido</h2>
        <div className="flex flex-wrap gap-3">
          <button className="border-4 border-black bg-accent px-5 py-3 font-bold shadow-brutal">Fichar entrada</button>
          <button className="border-4 border-black bg-black px-5 py-3 font-bold text-white shadow-brutal">Fichar salida</button>
        </div>
      </section>

      <section className="brutal-card p-6">
        <h2 className="mb-4 font-title text-2xl uppercase">Historial +/- 3 dias</h2>
        <div className="mb-4 flex flex-wrap gap-2">
          {days.map((day) => (
            <button key={day} className="border-2 border-black px-3 py-1 font-mono text-sm">
              {day}
            </button>
          ))}
        </div>
        <ul className="space-y-2 font-mono text-sm">
          <li className="border-2 border-black p-2">2026-04-18 - 08:12 / 17:05</li>
          <li className="border-2 border-black p-2">2026-04-19 - 08:01 / 16:57</li>
          <li className="border-2 border-black p-2">2026-04-20 - 08:09 / 17:11</li>
          <li className="border-2 border-black p-2">2026-04-21 - 08:04 / --:--</li>
        </ul>
      </section>
    </main>
  );
}
