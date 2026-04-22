"use client";

import { useState } from "react";
import { BrutalCard } from "@/components/ui";

export default function EmployeeDashboardPage() {
  const [checkInTime, setCheckInTime] = useState<Date | null>(null);
  const [todayHours, setTodayHours] = useState("0h 00m");

  const handleCheckIn = () => {
    setCheckInTime(new Date());
  };

  const handleCheckOut = () => {
    setCheckInTime(null);
    setTodayHours("8h 32m");
  };

  return (
    <main className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <header className="border-b-4 border-black p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-title text-4xl uppercase">Panel Empleado</h1>
          <p className="font-mono text-base text-gray-600 mt-2">Bienvenido, Juan Pérez</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Botón de Fichaje Principal */}
        <section className="mb-12">
          <div className="max-w-md mx-auto">
            {checkInTime ? (
              <div className="space-y-6">
                <div className="bg-black text-white p-6 border-4 border-black">
                  <p className="font-mono text-sm text-gray-300 mb-2">ENTRADA REGISTRADA</p>
                  <p className="font-title text-4xl">
                    {checkInTime?.toLocaleTimeString("es-ES")}
                  </p>
                </div>
                <button
                  onClick={handleCheckOut}
                  className="w-full border-4 border-black bg-black text-white px-6 py-4 font-bold text-lg uppercase transition-transform hover:-translate-y-1"
                >
                  ✓ Registrar Salida
                </button>
              </div>
            ) : (
              <button
                onClick={handleCheckIn}
                className="w-full border-4 border-black bg-black text-white px-6 py-4 font-bold text-lg uppercase transition-transform hover:-translate-y-1"
              >
                + Registrar Entrada
              </button>
            )}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12 grid gap-4 md:grid-cols-4 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <BrutalCard title="Hoy">
            <p className="font-title text-2xl">8h 32m</p>
          </BrutalCard>
          <BrutalCard title="Esta Semana">
            <p className="font-title text-2xl">42h 30m</p>
          </BrutalCard>
          <BrutalCard title="Este Mes">
            <p className="font-title text-2xl">169h 15m</p>
          </BrutalCard>
          <BrutalCard title="Horas Restantes">
            <p className="font-title text-2xl">30h 45m</p>
          </BrutalCard>
        </section>

        {/* Últimos Registros */}
        <section>
          <h2 className="font-title text-2xl uppercase mb-6">Mis Últimos Registros</h2>
          <div className="border-4 border-black overflow-hidden">
            <div className="bg-black text-white grid grid-cols-4 font-mono font-bold text-sm px-6 py-3">
              <span>Fecha</span>
              <span>Entrada</span>
              <span>Salida</span>
              <span>Horas</span>
            </div>
            {[
              { date: "2026-04-21", entrada: "08:03", salida: "17:07", horas: "9h 04m" },
              { date: "2026-04-20", entrada: "08:17", salida: "16:58", horas: "8h 41m" },
              { date: "2026-04-19", entrada: "08:00", salida: "17:30", horas: "9h 30m" },
              { date: "2026-04-18", entrada: "08:15", salida: "17:45", horas: "9h 30m" },
            ].map((record, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-4 font-mono text-sm px-6 py-4 border-t-2 border-black items-center ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <span>{record.date}</span>
                <span className="text-green-600 font-bold">{record.entrada}</span>
                <span className="text-red-600 font-bold">{record.salida}</span>
                <span className="font-bold">{record.horas}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}