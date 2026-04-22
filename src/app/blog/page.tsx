"use client";

import { BrutalCard, BrutalButton } from "@/components/ui";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    slug: "por-que-elegir-fichaje-saas",
    title: "Por qué elegir Fichaje SaaS frente a otras plataformas",
    excerpt: "Comparativa completa de Fichaje SaaS con otras soluciones del mercado. Descubre qué nos hace diferentes y mejores.",
    category: "Comparativa",
    date: "2026-04-20",
    content: `La elección de una plataforma de control horario es crítica para cualquier empresa española. 
    
    En Fichaje SaaS nos diferenciamos por:

    1. **Cumplimiento 100% Normativo**: Nuestro sistema respeta completamente el Real Decreto 1741/1998 y la normativa RGPD.
    
    2. **Desarrollado para España**: No usamos soluciones genéricas. Cada aspecto está pensado para empresas españolas.
    
    3. **Interfaz Brutalista**: Nuestro diseño no distrae. Va directo al grano sin florituras innecesarias.
    
    4. **Soporte Local**: Equipo experto en la normativa laboral española, no robots de soporte automatizado.
    
    5. **Precio Justo**: No cobras por características que no usas. Planes claros y sin términos escondidos.
    
    ## Comparativa con competencia

    | Característica | Fichaje SaaS | Competidor A | Competidor B |
    |---|---|---|---|
    | Cumplimiento R.D. 1741/1998 | ✓ | ✓ | ✗ |
    | RGPD Completo | ✓ | Parcial | ✓ |
    | Interfaz Clara | ✓ | ✗ | ✓ |
    | Soporte Local | ✓ | ✗ | ✗ |
    | API Integrada | ✓ | Módulo Extra | ✓ |
    | Exportación Múltiple | ✓ | ✓ | Parcial |
    | Precio Justo | ✓ | ✗ | ✗ |

    ## Conclusión
    
    Si eres empresa española, Fichaje SaaS es la opción más inteligente. No pagas por lo que no usas, y tienes garantía de cumplimiento normativo.`
  },
  {
    id: 2,
    slug: "normativa-control-horario-barcelona",
    title: "Normativa de Control Horario en Barcelona y España",
    excerpt: "Guía completa sobre la normativa legal de control horario en Barcelona, España y Unión Europea.",
    category: "Legal",
    date: "2026-04-18",
    content: `**Control Horario en Barcelona y españa**: Obligación Legal

El Real Decreto 1741/1998 obliga a las empresas españolas a llevar un registro diario de entrada y salida de los empleados.

## Requisitos Legales

### 1. Registro Diario
- Hora de inicio de jornada
- Hora de fin de jornada
- Períodos de descanso

### 2. Conservación Mínima
Los registros deben conservarse durante **4 años consecutivos** como mínimo.

### 3. Accesibilidad
La Inspección de Trabajo puede acceder a estos registros en cualquier momento.

## Barcelona Específicamente
Barcelona como capital de Cataluña cumple con la normativa estatal más normativa autónoma de Cataluña.

## RGPD: Protección de Datos
Aunque los registros son obligatorios, deben cumplir con RGPD:
- Datos de empleados protegidos
- Acceso restringido
- Eliminación después de 4 años

Fichaje SaaS garantiza ambos cumplimientos: normativa laboral y protección de datos.`
  },
  {
    id: 3,
    slug: "sistema-fichaje-digital-ventajas",
    title: "Sistema de Fichaje Digital: Ventajas frente al Papel",
    excerpt: "Descubre por qué el sistema de fichaje digital es la solución moderna y eficiente para tu empresa.",
    category: "Tecnología",
    date: "2026-04-15",
    content: `## Sistema de Fichaje Digital vs Tradicional

El fichaje digital es la evolución inevitable del control horario. Aquí explicamos por qué:

### Ventajas del Fichaje Digital

1. **Precisión Temporal**
   - Timestamp automático sin errores de redondeo
   - Imposible falsificar registros

2. **Automatización**
   - Reportes generados instantáneamente
   - Alertas de incumplimiento automáticas

3. **Accesibilidad**
   - Empleados pueden fichar desde cualquier dispositivo
   - Jefes ven datos en tiempo real

4. **Seguridad**
   - Encriptación de datos
   - Backups automáticos
   - Cumplimiento RGPD

5. **Eficiencia**
   - Reduce trámite administrativo
   - Exportación a formatos estándar (PDF, Excel)
   - Integración con nómina y RRHH

### El Costo Real

Aunque parezca que el fichaje digital tiene costo, la realidad es:
- Menos tiempo administrativo
- Menos errores y reclamaciones
- Cumplimiento garantizado
- ROI positivo en primeros 3 meses

**Conclusión**: Pasar a fichaje digital no es opcional, es imprescindible.`
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(p => p.category)));
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(p => p.category === selectedCategory)
    : blogPosts;

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <section className="mb-12 animate-fade-in">
        <h1 className="font-title text-5xl uppercase mb-4">Blog Fichaje SaaS</h1>
        <p className="font-mono text-lg text-gray-600">
          Artículos sobre control horario, normativa legal y gestión empresarial.
        </p>
      </section>

      {/* Categories Filter */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`border-4 border-black px-4 py-2 font-bold transition-colors ${
              selectedCategory === null ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border-4 border-black px-4 py-2 font-bold transition-colors ${
                selectedCategory === cat ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="space-y-8">
        {filteredPosts.map((post, idx) => (
          <article 
            key={post.id} 
            className="border-4 border-black p-8 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold mb-2">
                  {post.category}
                </span>
              </div>
              <time className="font-mono text-sm text-gray-600">{post.date}</time>
            </div>

            <h2 className="font-title text-2xl uppercase mb-3 hover:underline cursor-pointer">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            
            <p className="font-mono text-base mb-6 text-gray-700">
              {post.excerpt}
            </p>

            <Link href={`/blog/${post.slug}`} className="font-mono font-bold text-sm underline hover:no-underline">
              Leer artículo completo →
            </Link>
          </article>
        ))}
      </section>

      {/* Newsletter CTA */}
      <section className="mt-24 border-4 border-black p-12 text-center bg-black text-white">
        <h2 className="font-title text-3xl uppercase mb-4">Recibe Noticias del Blog</h2>
        <p className="font-mono mb-6">
          Suscríbete para recibir nuevos artículos sobre control horario y normativa laboral.
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
