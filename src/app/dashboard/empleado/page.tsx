"use client";

import { useEffect, useState } from "react";
import { BrutalButton, BrutalCard } from "@/components/ui";
import Link from "next/link";

export default function EmployeeDashboardPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<Date | null>(null);
  const [today, setToday] = useState("");

  const handleCheckIn = () => {
    const now = new Date();
    setIsCheckedIn(true);
    setCheckInTime(now);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
  };

  useEffect(() => {
    setToday(new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }));
  }, []);

  return (
    <main className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <header className="border-b-4 border-black p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-title text-3xl uppercase">Panel Empleado</h1>
            <p className="font-mono text-sm text-gray-600 mt-2">{today}</p>
          </div>
          <Link href="/" className="font-mono text-sm underline">Cerrar sesión</Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Check In/Out Section */}
        <section className="mb-12 animate-fade-in">
          <div className="border-4 border-black p-8">
            <h2 className="font-title text-2xl uppercase mb-8">Fichaje Rápido</h2>
            
            {isCheckedIn ? (
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
            <p className="font-title text-2xl">170h 15m</p>
          </BrutalCard>
          <BrutalCard title="Saldo">
            <p className="font-title text-2xl text-green-600">+2h 15m</p>
          </BrutalCard>
        </section>

        {/* History */}
        <section className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="font-title text-2xl uppercase mb-6">Historial Últimas 7 Jornadas</h2>
          <div className="space-y-3 border-4 border-black p-6">
            {[
              { date: "21 Abril (Hoy)", entrada: "08:00", salida: "---", horas: "En progreso" },
              { date: "20 Abril", entrada: "08:15", salida: "17:45", horas: "9h 30m" },
              { date: "19 Abril", entrada: "08:00", salida: "17:30", horas: "9h 30m" },
              { date: "18 Abril", entrada: "08:30", salida: "18:00", horas: "9h 30m" },
              { date: "17 Abril", entrada: "08:00", salida: "17:30", horas: "9h 30m" },
              { date: "16 Abril", entrada: "08:05", salida: "17:35", horas: "9h 30m" },
              { date: "15 Abril", entrada: "08:00", salida: "17:30", horas: "9h 30m" },
            ].map((record, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0">
                <div className="flex-1">
                  <p className="font-mono font-bold text-sm">{record.date}</p>
                  <p className="font-mono text-xs text-gray-600">
                    {record.entrada} - {record.salida}
                  </p>
                </div>
                <p className="font-title font-bold">{record.horas}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Actions */}
        <section className="mt-12 flex gap-4 border-t-4 border-black pt-8 flex-wrap">
          <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
            Descargar Certificado
          </button>
          <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
            Solicitar Descargo
          </button>
          <button className="border-4 border-black px-6 py-3 font-bold uppercase transition-transform hover:-translate-y-1">
            Ver Reportes
          </button>
        </section>
      </div>
    </main>
  );
}
