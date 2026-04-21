const employees = [
  { id: "EMP-001", name: "Ana Ruiz", status: "Activo" },
  { id: "EMP-002", name: "Luis Martin", status: "Activo" },
  { id: "EMP-003", name: "Marta Soler", status: "Baja" }
];

const records = [
  { employee: "Ana Ruiz", date: "2026-04-21", in: "08:03", out: "17:07" },
  { employee: "Luis Martin", date: "2026-04-21", in: "08:17", out: "16:58" }
];

export default function OwnerDashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 font-title text-4xl uppercase">Dashboard Dueno</h1>

      <section className="mb-10 brutal-card p-6">
        <h2 className="mb-4 font-title text-2xl uppercase">Gestion de empleados</h2>
        <div className="mb-4 flex flex-wrap gap-3">
          <button className="border-4 border-black bg-accent px-4 py-2 font-bold shadow-brutal">Alta empleado</button>
          <button className="border-4 border-black bg-white px-4 py-2 font-bold shadow-brutal">Baja empleado</button>
        </div>
        <ul className="space-y-2 font-mono text-sm">
          {employees.map((employee) => (
            <li key={employee.id} className="border-2 border-black p-2">
              {employee.id} - {employee.name} - {employee.status}
            </li>
          ))}
        </ul>
      </section>

      <section className="brutal-card p-6">
        <h2 className="mb-4 font-title text-2xl uppercase">Registros recientes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-2 border-black font-mono text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="border-2 border-black p-2 text-left">Empleado</th>
                <th className="border-2 border-black p-2 text-left">Fecha</th>
                <th className="border-2 border-black p-2 text-left">Entrada</th>
                <th className="border-2 border-black p-2 text-left">Salida</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={`${record.employee}-${record.date}`}>
                  <td className="border-2 border-black p-2">{record.employee}</td>
                  <td className="border-2 border-black p-2">{record.date}</td>
                  <td className="border-2 border-black p-2">{record.in}</td>
                  <td className="border-2 border-black p-2">{record.out}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
