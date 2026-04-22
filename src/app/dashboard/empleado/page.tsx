"use client";

import { useEffect, useState } from "react";
import { BrutalButton, BrutalCard } from "@/components/ui";

interface CheckRecord {
  id: string;
  date: string;
  entrada: string;
  salida: string | null;
  horas: string;
  nota: string | null;
}

export default function EmployeeDashboardPage() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const [today, setToday] = useState("");
  const [todayRecords, setTodayRecords] = useState<CheckRecord[]>([]);

  const handleCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    
    setIsCheckedIn(true);
    setCheckInTime(timeString);

    // Guardar en localStorage (en producción sería a BD)
    const records = JSON.parse(localStorage.getItem("myRecords") || "[]");
    const todayDate = new Date().toLocaleDateString("es-ES");
    
    records.push({
      id: Date.now().toString(),
      date: todayDate,
      entrada: timeString,
      salida: null,
      horas: "En curso...",
      nota: null
    });

    localStorage.setItem("myRecords", JSON.stringify(records));
    setTodayRecords(records.filter((r: CheckRecord) => r.date === todayDate));
  };

  const handleCheckOut = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    setIsCheckedIn(false);

    // Actualizar en localStorage
    const records = JSON.parse(localStorage.getItem("myRecords") || "[]");
    const lastRecord = records[records.length - 1];
    
    if (lastRecord && !lastRecord.salida) {
      lastRecord.salida = timeString;
      
      // Calcular horas
      const entrada = new Date(`2000-01-01 ${lastRecord.entrada}`);
      const salida = new Date(`2000-01-01 ${timeString}`);
      const diff = (salida.getTime() - entrada.getTime()) / (1000 * 60 * 60);
      const hours = Math.floor(diff);
      const minutes = Math.round((diff - hours) * 60);
      lastRecord.horas = `${hours}h ${minutes}m`;
    }

    localStorage.setItem("myRecords", JSON.stringify(records));
    const todayDate = new Date().toLocaleDateString("es-ES");
    setTodayRecords(records.filter((r: CheckRecord) => r.date === todayDate));
  };

  useEffect(() => {
    setToday(new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }));

    // Cargar registros de hoy
    const records = JSON.parse(localStorage.getItem("myRecords") || "[]");
    const todayDate = new Date().toLocaleDateString("es-ES");
    const todayData = records.filter((r: CheckRecord) => r.date === todayDate);
    setTodayRecords(todayData);

    // Verificar si está fichado
    if (todayData.length > 0 && !todayData[todayData.length - 1].salida) {
      setIsCheckedIn(true);
      setCheckInTime(todayData[todayData.length - 1].entrada);
    }
  }, []);

  const allRecords = JSON.parse(localStorage.getItem("myRecords") || "[]");

  return (
    <main className="min-h-screen bg-white animate-fade-in">
      {/* Header */}
      <header className="border-b-4 border-black p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-title text-4xl uppercase mb-2">Panel Empleado</h1>
          <p className="font-mono text-base text-gray-600">{today}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Check In/Out Section */}
        <section className="mb-12 animate-fade-in">
          <div className="border-4 border-black p-12 bg-gradient-to-br from-white to-gray-50">
            <h2 className="font-title text-3xl uppercase mb-8">Fichaje Rápido</h2>
            
            <div className="mb-8">
              {isCheckedIn ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="font-mono text-sm text-gray-600 mb-2">CONECTADO DESDE</p>
                    <p className="font-title text-6xl">{checkInTime}</p>
                  </div>
                  <button
                    onClick={handleCheckOut}
                    className="w-full border-4 border-red-600 bg-red-600 text-white px-6 py-6 font-bold text-2xl uppercase transition-transform hover:-translate-y-2 active:translate-y-0 shadow-lg"
                  >
                    ✓ Fichaje Salida
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleCheckIn}
                  className="w-full border-4 border-green-600 bg-green-600 text-white px-6 py-6 font-bold text-2xl uppercase transition-transform hover:-translate-y-2 active:translate-y-0 shadow-lg"
                >
                  ✓ Fichaje Entrada
                </button>
              )}
            </div>

            {/* Today Summary */}
            {todayRecords.length > 0 && (
              <div className="border-t-4 border-black pt-8">
                <h3 className="font-title text-lg uppercase mb-4">Resumen de Hoy</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <BrutalCard title="Entrada">
                    <p className="font-title text-2xl">{todayRecords[0]?.entrada || "—"}</p>
                  </BrutalCard>
                  <BrutalCard title="Salida">
                    <p className="font-title text-2xl">{todayRecords[todayRecords.length - 1]?.salida || "En curso"}</p>
                  </BrutalCard>
                  <BrutalCard title="Total Horas">
                    <p className="font-title text-2xl">{todayRecords[todayRecords.length - 1]?.horas || "—"}</p>
                  </BrutalCard>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Recent Records */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-title text-2xl uppercase mb-6">Últimos Registros</h2>
          <div className="border-4 border-black overflow-hidden">
            <div className="bg-black text-white grid grid-cols-4 font-mono font-bold text-sm px-6 py-3">
              <span>Fecha</span>
              <span>Entrada</span>
              <span>Salida</span>
              <span>Horas</span>
            </div>
            {allRecords.slice(-10).reverse().map((record: CheckRecord, idx: number) => (
              <div
                key={record.id}
                className={`grid grid-cols-4 font-mono text-sm px-6 py-3 border-t-2 border-black ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <span>{record.date}</span>
                <span className="font-bold text-green-600">{record.entrada}</span>
                <span className={record.salida ? "font-bold text-red-600" : "text-gray-400"}>{record.salida || "—"}</span>
                <span>{record.horas}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-title text-2xl uppercase mb-6">Este Mes</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <BrutalCard title="Días Trabajados">
              <p className="font-title text-4xl">{allRecords.length}</p>
              <p className="font-mono text-xs text-gray-600 mt-2">registros totales</p>
            </BrutalCard>
            <BrutalCard title="Horas Totales">
              <p className="font-title text-4xl">
                {allRecords.reduce((acc: number, r: CheckRecord) => {
                  if (r.horas && r.horas !== "En curso...") {
                    const match = r.horas.match(/(\d+)h (\d+)m/);
                    if (match) return acc + parseInt(match[1]) + parseInt(match[2]) / 60;
                  }
                  return acc;
                }, 0).toFixed(1)}
              </p>
              <p className="font-mono text-xs text-gray-600 mt-2">este mes</p>
            </BrutalCard>
            <BrutalCard title="Promedio/Día">
              <p className="font-title text-4xl">
                {allRecords.length > 0 ? (allRecords.reduce((acc: number, r: CheckRecord) => {
                  if (r.horas && r.horas !== "En curso...") {
                    const match = r.horas.match(/(\d+)h (\d+)m/);
                    if (match) return acc + parseInt(match[1]) + parseInt(match[2]) / 60;
                  }
                  return acc;
                }, 0) / allRecords.length).toFixed(1) : "0"}
              </p>
              <p className="font-mono text-xs text-gray-600 mt-2">horas</p>
            </BrutalCard>
          </div>
        </section>
      </div>
    </main>
  );
}
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
