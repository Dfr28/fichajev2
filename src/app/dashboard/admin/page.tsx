"use client";

import { useState } from "react";
import { BrutalCard } from "@/components/ui";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "companies" | "users" | "revenue">("overview");

  const companies = [
    { id: "COMP-001", name: "Acme Corp S.L.", employees: 12, plan: "Pro", revenue: "228€", joined: "2025-06-15" },
    { id: "COMP-002", name: "Tech Solutions Ltd", employees: 5, plan: "Starter", revenue: "45€", joined: "2026-01-10" },
    { id: "COMP-003", name: "Construct Ibérica", employees: 25, plan: "Business", revenue: "585€", joined: "2025-09-20" },
    { id: "COMP-004", name: "Marketing Pro SL", employees: 8, plan: "Pro", revenue: "228€", joined: "2025-11-05" },
  ];

  const recentUsers = [
    { id: "U-001", name: "Juan García", email: "juan@project.es", role: "OWNER", company: "Acme Corp", joined: "2026-03-15" },
    { id: "U-002", name: "María López", email: "maria@tech.es", role: "OWNER", company: "Tech Solutions", joined: "2026-01-10" },
    { id: "U-003", name: "Carlos Ruiz", email: "carlos@acme.es", role: "EMPLOYEE", company: "Acme Corp", joined: "2025-08-20" },
    { id: "U-004", name: "Ana Martín", email: "ana@construct.es", role: "OWNER", company: "Construct Ibérica", joined: "2025-09-22" },
    { id: "U-005", name: "Luis Fernández", email: "luis@marketing.es", role: "EMPLOYEE", company: "Marketing Pro", joined: "2025-11-15" },
  ];

  return (
    <main className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <header className="border-b-4 border-black p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-title text-3xl uppercase">Panel de Administración</h1>
            <p className="font-mono text-sm text-gray-600 mt-2">Control total de la plataforma</p>
          </div>
          <Link href="/" className="font-mono text-sm underline">Cerrar sesión</Link>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b-4 border-black sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 flex gap-0">
          {["overview", "companies", "users", "revenue"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`border-r-4 border-black px-6 py-4 font-mono font-bold uppercase text-sm transition-colors ${
                activeTab === tab ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >
              {tab === "overview" && "Resumen"}
              {tab === "companies" && "Empresas"}
              {tab === "users" && "Usuarios"}
              {tab === "revenue" && "Ingresos"}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-fade-in">
            {/* KPI Cards */}
            <section>
              <h2 className="font-title text-2xl uppercase mb-6">Métricas Principales</h2>
              <div className="grid gap-4 md:grid-cols-4">
                <BrutalCard title="Empresas Activas">
                  <p className="font-title text-4xl">4</p>
                  <p className="font-mono text-xs text-gray-600 mt-2">↑ 1 esta semana</p>
                </BrutalCard>
                <BrutalCard title="Usuarios Totales">
                  <p className="font-title text-4xl">58</p>
                  <p className="font-mono text-xs text-gray-600 mt-2">↑ 8 este mes</p>
                </BrutalCard>
                <BrutalCard title="Ingresos Mensuales">
                  <p className="font-title text-3xl">1.086€</p>
                  <p className="font-mono text-xs text-gray-600 mt-2">↑ 15% mes anterior</p>
                </BrutalCard>
                <BrutalCard title="Uptime">
                  <p className="font-title text-4xl">99.9%</p>
                  <p className="font-mono text-xs text-gray-600 mt-2">Excelente</p>
                </BrutalCard>
              </div>
            </section>

            {/* Revenue Breakdown */}
            <section>
              <h2 className="font-title text-2xl uppercase mb-6">Ingresos por Plan</h2>
              <div className="border-4 border-black p-6 space-y-4">
                {[
                  { plan: "Starter", count: 1, revenue: "45€", percentage: 4 },
                  { plan: "Pro", count: 2, revenue: "456€", percentage: 42 },
                  { plan: "Business", count: 1, revenue: "585€", percentage: 54 },
                ].map((item) => (
                  <div key={item.plan}>
                    <div className="flex justify-between mb-2">
                      <p className="font-mono font-bold text-sm">{item.plan}</p>
                      <p className="font-mono text-sm">{item.revenue}</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded h-3">
                      <div className="bg-black h-3 rounded" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <p className="font-mono text-xs text-gray-600 mt-1">{item.count} empresa(s) • {item.percentage}% del total</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Activity */}
            <section>
              <h2 className="font-title text-2xl uppercase mb-6">Actividad Reciente</h2>
              <div className="border-4 border-black p-6 space-y-3">
                {[
                  { time: "Hace 2 horas", event: "Nueva empresa registrada: Marketing Pro SL" },
                  { time: "Hace 5 horas", event: "5 usuarios nuevos registrados" },
                  { time: "Ayer", event: "Plan actualizado: Acme Corp → Business" },
                  { time: "Hace 2 días", event: "Nueva empresa registrada: Tech Solutions Ltd" },
                  { time: "Hace 4 días", event: "10 usuarios nuevos registrados" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 pb-3 border-b border-gray-200 last:border-b-0">
                    <p className="font-mono text-xs text-gray-600 min-w-fit">{item.time}</p>
                    <p className="font-mono text-sm">{item.event}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === "companies" && (
          <div className="animate-fade-in">
            <div className="mb-6 flex gap-3">
              <button className="border-4 border-black bg-black text-white px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
                + Registrar Empresa
              </button>
              <input
                type="text"
                placeholder="Buscar empresa..."
                className="border-4 border-black px-4 py-3 font-mono text-sm flex-1"
              />
            </div>

            <div className="space-y-3 border-4 border-black p-6">
              {companies.map((company) => (
                <div key={company.id} className="flex justify-between items-start pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex-1">
                    <p className="font-mono font-bold text-sm">{company.name}</p>
                    <p className="font-mono text-xs text-gray-600">ID: {company.id}</p>
                    <div className="flex gap-3 mt-2">
                      <span className="font-mono text-xs px-2 py-1 bg-blue-100 text-blue-800">{company.employees} empleados</span>
                      <span className="font-mono text-xs px-2 py-1 bg-purple-100 text-purple-800">{company.plan}</span>
                      <span className="font-mono text-xs text-gray-600">Unido: {company.joined}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-title font-bold">{company.revenue}/mes</p>
                    <button className="border-2 border-black px-3 py-1 font-mono text-xs hover:bg-gray-100 mt-2">
                      ⋯
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Buscar usuario..."
                className="border-4 border-black px-4 py-3 font-mono text-sm w-full"
              />
            </div>

            <div className="border-4 border-black overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Nombre</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Rol</th>
                      <th className="px-4 py-3 text-left">Empresa</th>
                      <th className="px-4 py-3 text-left">Unido</th>
                      <th className="px-4 py-3 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-200 last:border-b-0">
                        <td className="px-4 py-3">{user.name}</td>
                        <td className="px-4 py-3">{user.email}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-1 ${user.role === "OWNER" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`}>
                            {user.role === "OWNER" ? "Dueño" : "Empleado"}
                          </span>
                        </td>
                        <td className="px-4 py-3">{user.company}</td>
                        <td className="px-4 py-3">{user.joined}</td>
                        <td className="px-4 py-3 text-center">
                          <button className="font-mono text-xs underline">Detalles</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Revenue Tab */}
        {activeTab === "revenue" && (
          <div className="animate-fade-in space-y-6">
            <h2 className="font-title text-2xl uppercase">Análisis de Ingresos</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <BrutalCard title="Ingresos Totales">
                <p className="font-title text-3xl">4.344€</p>
                <p className="font-mono text-xs text-gray-600 mt-2">Desde inicio</p>
              </BrutalCard>
              <BrutalCard title="Ingresos Este Mes">
                <p className="font-title text-3xl">1.086€</p>
                <p className="font-mono text-xs text-gray-600 mt-2">↑ 15% vs mes anterior</p>
              </BrutalCard>
              <BrutalCard title="Promedio por Empresa">
                <p className="font-title text-3xl">272€</p>
                <p className="font-mono text-xs text-gray-600 mt-2">MRR</p>
              </BrutalCard>
            </div>

            <div className="border-4 border-black p-6">
              <h3 className="font-title uppercase mb-6">Transacciones Recientes</h3>
              <div className="space-y-3">
                {[
                  { date: "21 Abril", company: "Acme Corp S.L.", description: "Suscripción Pro", amount: "19€" },
                  { date: "20 Abril", company: "Tech Solutions Ltd", description: "Suscripción Starter", amount: "9€" },
                  { date: "19 Abril", company: "Construct Ibérica", description: "Suscripción Business", amount: "39€" },
                  { date: "18 Abril", company: "Marketing Pro SL", description: "Nueva suscripción", amount: "19€" },
                ].map((tx, i) => (
                  <div key={i} className="flex justify-between pb-3 border-b border-gray-200 last:border-b-0">
                    <div>
                      <p className="font-mono font-bold text-sm">{tx.company}</p>
                      <p className="font-mono text-xs text-gray-600">{tx.date} - {tx.description}</p>
                    </div>
                    <p className="font-title font-bold">{tx.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
                Descargar Ingresos
              </button>
              <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
                Generar Facturación
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
