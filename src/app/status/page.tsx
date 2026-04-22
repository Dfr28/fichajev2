"use client";

import { BrutalCard } from "@/components/ui";
import { useState, useEffect } from "react";

interface Incident {
  id: number;
  date: string;
  time: string;
  status: "resolved" | "investigating" | "identified";
  title: string;
  description: string;
  duration: string;
}

const incidents: Incident[] = [
  {
    id: 1,
    date: "2026-04-15",
    time: "14:30",
    status: "resolved",
    title: "Indisponibilidad temporal del API",
    description: "El servicio API estuvo inaccesible durante 12 minutos debido a mantenimiento no programado.",
    duration: "12 minutos"
  },
  {
    id: 2,
    date: "2026-04-10",
    time: "02:15",
    status: "resolved",
    title: "Actualización de infraestructura",
    description: "Migración de servidores para mejorar rendimiento. El servicio continuó funcionando.",
    duration: "5 minutos"
  },
  {
    id: 3,
    date: "2026-03-28",
    time: "11:00",
    status: "resolved",
    title: "Optimización de base de datos",
    description: "Mejora de velocidad de reportes. Sin impacto en servicios principales.",
    duration: "30 minutos"
  }
];

export default function StatusPage() {
  const [uptime, setUptime] = useState(99.97);
  const [status, setStatus] = useState<"operational" | "degraded" | "offline">("operational");
  const [responseTime, setResponseTime] = useState(145);

  useEffect(() => {
    // Simular datos en tiempo real
    const interval = setInterval(() => {
      setUptime(prev => {
        const variation = (Math.random() - 0.5) * 0.02;
        return Math.max(99.0, Math.min(100, prev + variation));
      });
      
      setResponseTime(prev => {
        const variation = Math.floor((Math.random() - 0.5) * 30);
        return Math.max(100, prev + variation);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <section className="mb-12 animate-fade-in">
        <h1 className="font-title text-5xl uppercase mb-4">Estado del Servicio</h1>
        <p className="font-mono text-lg text-gray-600">
          Monitoreo en tiempo real de Fichaje SaaS. Actualizado cada 60 segundos.
        </p>
      </section>

      {/* Status Overview */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border-4 border-black p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">Estado General</p>
            <div className={`font-title text-4xl uppercase mb-4 ${status === "operational" ? "text-green-600" : "text-red-600"}`}>
              {status === "operational" ? "✓ Operativo" : "✗ Problemas"}
            </div>
            <div className="w-full h-3 border-2 border-black">
              <div className={`h-full ${status === "operational" ? "bg-green-600" : "bg-red-600"}`}></div>
            </div>
          </div>

          <div className="border-4 border-black p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">Uptime (30 días)</p>
            <div className="font-title text-4xl uppercase mb-4">{uptime.toFixed(2)}%</div>
            <p className="font-mono text-xs text-gray-600">Tiempo de actividad</p>
          </div>

          <div className="border-4 border-black p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">Latencia Promedio</p>
            <div className="font-title text-4xl uppercase mb-4">{responseTime}ms</div>
            <p className="font-mono text-xs text-gray-600">Respuesta de servidores</p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-title text-3xl uppercase mb-6">Estado de Servicios</h2>
        <div className="space-y-4">
          {[
            { name: "Dashboard Principal", status: "operational" },
            { name: "Fichaje de Empleados", status: "operational" },
            { name: "Reportes y Exportación", status: "operational" },
            { name: "API de Integraciones", status: "operational" },
            { name: "Portal de Admin", status: "operational" },
            { name: "Soporte por Email", status: "operational" }
          ].map((service, idx) => (
            <div key={idx} className="border-4 border-black p-4 flex justify-between items-center animate-slide-up"
              style={{ animationDelay: `${0.2 + idx * 0.05}s` }}>
              <span className="font-mono font-bold">{service.name}</span>
              <span className={`inline-block w-4 h-4 border-2 border-black ${service.status === "operational" ? "bg-green-600" : "bg-yellow-600"}`}></span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-title text-3xl uppercase mb-6">Incidencias Recientes</h2>
        
        {incidents.length === 0 ? (
          <div className="border-4 border-black p-8 text-center bg-green-50">
            <p className="font-mono text-lg">✓ No hay incidencias reportadas en los últimos 30 días</p>
          </div>
        ) : (
          <div className="space-y-4">
            {incidents.map((incident, idx) => (
              <div key={incident.id} className="border-4 border-black p-6 animate-slide-up"
                style={{ animationDelay: `${0.3 + idx * 0.05}s` }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-title text-lg uppercase mb-2">{incident.title}</h3>
                    <p className="font-mono text-xs text-gray-600">
                      {incident.date} {incident.time} UTC
                    </p>
                  </div>
                  <span className={`inline-block font-mono text-xs font-bold px-3 py-1 border-2 border-black ${
                    incident.status === "resolved" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {incident.status === "resolved" ? "✓ Resuelto" : "⏳ Investigando"}
                  </span>
                </div>
                <p className="font-mono text-sm mb-3">{incident.description}</p>
                <p className="font-mono text-xs text-gray-600">Duración: {incident.duration}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Incident History */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="font-title text-3xl uppercase mb-6">Histórico de Uptime</h2>
        
        <div className="grid gap-2 grid-cols-7 md:grid-cols-14 mb-6">
          {Array.from({ length: 28 }).map((_, idx) => {
            const randomUptime = Math.random() > 0.05 ? 100 : 50; // 95% uptime
            const bgColor = randomUptime === 100 
              ? "bg-green-500" 
              : randomUptime > 50 
              ? "bg-yellow-500" 
              : "bg-red-500";
            
            return (
              <div
                key={idx}
                className={`w-full aspect-square border-2 border-black ${bgColor}`}
                title={`Día ${idx + 1}: ${randomUptime}% uptime`}
              />
            );
          })}
        </div>
        
        <div className="flex gap-4 justify-center font-mono text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 border-2 border-black"></div>
            <span>100%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 border-2 border-black"></div>
            <span>50-99%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 border-2 border-black"></div>
            <span>&lt;50%</span>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <h2 className="font-title text-3xl uppercase mb-6">Mantenimiento Programado</h2>
        <div className="border-4 border-black p-8 bg-blue-50 text-center">
          <p className="font-mono text-lg">
            No hay mantenimiento programado en las próximas 2 semanas.
          </p>
          <p className="font-mono text-sm text-gray-600 mt-2">
            Nos esforzamos por mantener 99.99% de uptime para tu empresa.
          </p>
        </div>
      </section>

      {/* Subscription */}
      <section className="mt-24 border-4 border-black p-12 text-center bg-black text-white animate-fade-in"
        style={{ animationDelay: "0.6s" }}>
        <h2 className="font-title text-3xl uppercase mb-4">Suscribete a Actualizaciones</h2>
        <p className="font-mono mb-6">
          Recibe notificaciones sobre el estado del servicio y mantenimiento programado.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 border-4 border-white px-4 py-2 bg-black text-white placeholder-gray-400 font-mono"
          />
          <button className="border-4 border-white bg-white text-black px-6 py-2 font-bold hover:-translate-y-1 transition-transform">
            Suscribir
          </button>
        </div>
      </section>
    </main>
  );
}
