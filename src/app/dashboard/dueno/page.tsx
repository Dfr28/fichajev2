"use client";

import { useState } from "react";
import { BrutalButton, BrutalCard } from "@/components/ui";
import Link from "next/link";

export default function OwnerDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "employees" | "records" | "reports">("overview");

  const employees = [
    { id: "EMP-001", name: "Ana Ruiz", email: "ana@empresa.es", status: "Activo", joined: "2025-01-15" },
    { id: "EMP-002", name: "Luis Martin", email: "luis@empresa.es", status: "Activo", joined: "2025-02-01" },
    { id: "EMP-003", name: "Marta Soler", email: "marta@empresa.es", status: "Activo", joined: "2025-03-10" },
    { id: "EMP-004", name: "Carlos López", email: "carlos@empresa.es", status: "Baja", joined: "2024-11-20" }
  ];

  const records = [
    { employee: "Ana Ruiz", date: "2026-04-21", entrada: "08:03", salida: "17:07", horas: "9h 04m" },
    { employee: "Luis Martin", date: "2026-04-21", entrada: "08:17", salida: "16:58", horas: "8h 41m" },
    { employee: "Marta Soler", date: "2026-04-21", entrada: "08:00", salida: "17:30", horas: "9h 30m" },
    { employee: "Ana Ruiz", date: "2026-04-20", entrada: "08:15", salida: "17:45", horas: "9h 30m" },
    { employee: "Luis Martin", date: "2026-04-20", entrada: "08:00", salida: "17:00", horas: "9h 00m" },
  ];

  return (
    <main className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <header className="border-b-4 border-black p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-title text-3xl uppercase">Panel Dueño</h1>
            <p className="font-mono text-sm text-gray-600 mt-2">Tu Empresa: Acme Corp S.L.</p>
          </div>
          <Link href="/" className="font-mono text-sm underline">Cerrar sesión</Link>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b-4 border-black sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 flex gap-0">
          {["overview", "employees", "records", "reports"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`border-r-4 border-black px-6 py-4 font-mono font-bold uppercase text-sm transition-colors ${
                activeTab === tab ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >
              {tab === "overview" && "Resumen"}
              {tab === "employees" && "Empleados"}
              {tab === "records" && "Registros"}
              {tab === "reports" && "Reportes"}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-fade-in">
            <section>
              <h2 className="font-title text-2xl uppercase mb-6">Resumen del Mes</h2>
              <div className="grid gap-4 md:grid-cols-4">
                <BrutalCard title="Empleados Activos">
                  <p className="font-title text-4xl">3</p>
                </BrutalCard>
                <BrutalCard title="Horas Totales">
                  <p className="font-title text-2xl">512h 30m</p>
                </BrutalCard>
                <BrutalCard title="Jornadas Registradas">
                  <p className="font-title text-4xl">45</p>
                </BrutalCard>
                <BrutalCard title="% Cumplimiento">
                  <p className="font-title text-4xl">98%</p>
                </BrutalCard>
              </div>
            </section>

            <section>
              <h2 className="font-title text-2xl uppercase mb-6">Métricas de Productividad</h2>
              <div className="border-4 border-black p-6 space-y-4">
                {employees.slice(0, 3).map((emp) => (
                  <div key={emp.id} className="border-b border-gray-300 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-mono font-bold text-sm">{emp.name}</p>
                        <p className="font-mono text-xs text-gray-600">{emp.email}</p>
                      </div>
                      <span className="font-mono text-xs px-2 py-1 bg-green-100 text-green-800">{emp.status}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded h-2">
                      <div className="bg-black h-2 rounded" style={{ width: "85%" }}></div>
                    </div>
                    <p className="font-mono text-xs text-gray-600 mt-1">169.5h / 160h esperadas</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-title text-2xl uppercase mb-6">Últimos Registros</h2>
              <div className="border-4 border-black overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full font-mono text-sm">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Empleado</th>
                        <th className="px-4 py-3 text-left">Fecha</th>
                        <th className="px-4 py-3 text-left">Entrada</th>
                        <th className="px-4 py-3 text-left">Salida</th>
                        <th className="px-4 py-3 text-right">Horas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.slice(0, 5).map((record, i) => (
                        <tr key={i} className="border-b border-gray-200 last:border-b-0">
                          <td className="px-4 py-3">{record.employee}</td>
                          <td className="px-4 py-3">{record.date}</td>
                          <td className="px-4 py-3">{record.entrada}</td>
                          <td className="px-4 py-3">{record.salida}</td>
                          <td className="px-4 py-3 text-right">{record.horas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Employees Tab */}
        {activeTab === "employees" && (
          <div className="animate-fade-in">
            <div className="mb-6 flex gap-3">
              <button className="border-4 border-black bg-black text-white px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
                + Añadir Empleado
              </button>
              <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
                Importar CSV
              </button>
            </div>

            <div className="space-y-3 border-4 border-black p-6">
              {employees.map((emp) => (
                <div key={emp.id} className="flex justify-between items-start pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex-1">
                    <p className="font-mono font-bold text-sm">{emp.name}</p>
                    <p className="font-mono text-xs text-gray-600">{emp.email}</p>
                    <p className="font-mono text-xs text-gray-600">Unido: {emp.joined}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className={`font-mono text-xs px-2 py-1 ${emp.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {emp.status}
                    </span>
                    <button className="border-2 border-black px-3 py-1 font-mono text-xs hover:bg-gray-100">
                      ⋯
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Records Tab */}
        {activeTab === "records" && (
          <div className="animate-fade-in">
            <div className="mb-6 flex gap-3">
              <input
                type="date"
                className="border-4 border-black px-4 py-3 font-mono text-sm"
              />
              <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
                Filtrar
              </button>
            </div>

            <div className="border-4 border-black overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Empleado</th>
                      <th className="px-4 py-3 text-left">Fecha</th>
                      <th className="px-4 py-3 text-left">Entrada</th>
                      <th className="px-4 py-3 text-left">Salida</th>
                      <th className="px-4 py-3 text-right">Horas</th>
                      <th className="px-4 py-3 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record, i) => (
                      <tr key={i} className="border-b border-gray-200 last:border-b-0">
                        <td className="px-4 py-3">{record.employee}</td>
                        <td className="px-4 py-3">{record.date}</td>
                        <td className="px-4 py-3">{record.entrada}</td>
                        <td className="px-4 py-3">{record.salida}</td>
                        <td className="px-4 py-3 text-right">{record.horas}</td>
                        <td className="px-4 py-3 text-center">
                          <button className="font-mono text-xs underline">Editar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="animate-fade-in space-y-6">
            <h2 className="font-title text-2xl uppercase">Generador de Reportes</h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-4 border-black p-6">
                <h3 className="font-title uppercase mb-4">Reporte Mensual</h3>
                <p className="font-mono text-sm mb-4">Exporta horas trabajadas, salarios y cumplimiento normativo.</p>
                <button className="border-4 border-black px-6 py-3 font-bold uppercase w-full transition-transform hover:-translate-y-1">
                  Descargar Excel
                </button>
              </div>

              <div className="border-4 border-black p-6">
                <h3 className="font-title uppercase mb-4">Certificado Legal</h3>
                <p className="font-mono text-sm mb-4">Documento de cumplimiento RD 1741/1998 para inspección.</p>
                <button className="border-4 border-black px-6 py-3 font-bold uppercase w-full transition-transform hover:-translate-y-1">
                  Generar PDF
                </button>
              </div>

              <div className="border-4 border-black p-6">
                <h3 className="font-title uppercase mb-4">Datos Personalizados</h3>
                <p className="font-mono text-sm mb-4">Crea reportes con tus propios filtros y rangos de fecha.</p>
                <button className="border-4 border-black px-6 py-3 font-bold uppercase w-full transition-transform hover:-translate-y-1">
                  Configurar
                </button>
              </div>

              <div className="border-4 border-black p-6">
                <h3 className="font-title uppercase mb-4">Exportar Datos</h3>
                <p className="font-mono text-sm mb-4">Acceso a todos tus datos en formato CSV para análisis.</p>
                <button className="border-4 border-black px-6 py-3 font-bold uppercase w-full transition-transform hover:-translate-y-1">
                  Descargar CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
