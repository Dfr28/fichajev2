"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BrutalButton } from "@/components/ui";

export default function DashboardPage() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Obtener rol del usuario desde localStorage o sessión
    const userRole = localStorage.getItem("userRole") || "empleado";
    setRole(userRole);

    // Redirigir según el rol
    if (userRole === "admin") {
      router.push("/dashboard/admin");
    } else if (userRole === "dueno") {
      router.push("/dashboard/dueno");
    } else if (userRole === "empleado") {
      router.push("/dashboard/empleado");
    }
  }, [router]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 min-h-screen">
      <div className="text-center">
        <h1 className="font-title text-4xl uppercase mb-4">Cargando Dashboard...</h1>
        <p className="font-mono text-gray-600">Por favor espera un momento.</p>
      </div>
    </main>
  );
}
