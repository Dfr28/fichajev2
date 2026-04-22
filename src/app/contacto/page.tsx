"use client";

import { useState } from "react";
import { BrutalButton } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setMessage("¡Mensaje enviado correctamente! Te responderemos en breve.");
        setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
        
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage("Error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <section className="mb-12 animate-fade-in">
        <h1 className="font-title text-5xl uppercase mb-4">Contacto</h1>
        <p className="font-mono text-lg text-gray-600">
          ¿Tienes preguntas? Nos encantaría ayudarte. Rellena el formulario y nos pondremos en contacto lo antes posible.
        </p>
      </section>

      {/* Contact Section */}
      <div className="grid gap-12 md:grid-cols-3 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        {/* Quick Contact Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="border-4 border-black p-6">
            <h3 className="font-title text-lg uppercase mb-3">📧 Email</h3>
            <a href="mailto:hello@fichaje.app" className="font-mono text-sm underline hover:no-underline">
              hello@fichaje.app
            </a>
          </div>

          <div className="border-4 border-black p-6">
            <h3 className="font-title text-lg uppercase mb-3">💬 Chat</h3>
            <p className="font-mono text-sm mb-3">
              Disponible en horario laboral (L-V 9:00-18:00 CET)
            </p>
            <button className="w-full border-4 border-black bg-black text-white px-4 py-2 font-bold hover:-translate-y-1 transition-transform">
              Abrir Chat
            </button>
          </div>

          <div className="border-4 border-black p-6">
            <h3 className="font-title text-lg uppercase mb-3">🏢 Oficina</h3>
            <p className="font-mono text-sm">
              Barcelona, España<br/>
              <span className="text-gray-600">Atendemos remoto también</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 border-4 border-black p-8">
          <h2 className="font-title text-2xl uppercase mb-6">Envíanos tu Mensaje</h2>

          {status === "success" && (
            <div className="mb-6 border-4 border-green-600 bg-green-50 p-4">
              <p className="font-mono text-green-800">{message}</p>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 border-4 border-red-600 bg-red-50 p-4">
              <p className="font-mono text-red-800">{message}</p>
            </div>
          )}

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-mono font-bold text-sm mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono font-bold text-sm mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="tu@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-mono font-bold text-sm mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="+34 912 345 678"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block font-mono font-bold text-sm mb-2">
                Asunto *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Selecciona un asunto</option>
                <option value="Información sobre Planes">Información sobre Planes</option>
                <option value="Soporte Técnico">Soporte Técnico</option>
                <option value="Demoración">Solicitar Demoración</option>
                <option value="Integración">Integración Personalizada</option>
                <option value="Cumplimiento Normativo">Cumplimiento Normativo</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono font-bold text-sm mb-2">
                Mensaje *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border-4 border-black px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-black resize-none"
                placeholder="Cuéntanos qué necesitas..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full border-4 border-black bg-black text-white px-6 py-3 font-bold hover:-translate-y-1 transition-transform disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>

          <p className="font-mono text-xs text-gray-600 mt-6 text-center">
            Normalmente respondemos en menos de 2 horas durante horario laboral.
          </p>
        </form>
      </div>

      {/* FAQ Section */}
      <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-title text-3xl uppercase mb-8">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {[
            {
              q: "¿Cuánto tiempo tarda en responder vuestro equipo?",
              a: "Normalmente entre 30 minutos y 2 horas durante horario laboral (L-V 9:00-18:00 CET). Fuera de horario procesamos mensajes el siguiente día hábil."
            },
            {
              q: "¿Puedo solicitar una demostración?",
              a: "Sí, tenemos demostraciones disponibles todos los días. Envía un mensaje con 'Solicitar Demoración' como asunto y te daremos opciones de horario."
            },
            {
              q: "¿Ofrecéis integración con softwares externos?",
              a: "Sí, tenemos API estándar y podemos hacer integraciones personalizadas para empresas. Cuéntanos qué necesitas en un mensaje."
            },
            {
              q: "¿Puedo contactar por teléfono?",
              a: "Por ahora solo ofrecemos soporte por email y chat. Pero puedes dejar tu teléfono en el formulario y te llamamos nosotros."
            },
            {
              q: "¿Cuál es vuestra política de privacidad?",
              a: "Tus datos está completamente protegidos. Consulta nuestra política de privacidad completa en el footer (RGPD compliant)."
            }
          ].map((faq, idx) => (
            <details key={idx} className="border-4 border-black p-6 group cursor-pointer">
              <summary className="font-title text-lg uppercase font-bold list-none">
                <span className="inline-block mr-3 group-open:rotate-90 transition-transform">→</span>
                {faq.q}
              </summary>
              <p className="font-mono text-sm mt-4 text-gray-700">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-4 border-black p-12 text-center bg-black text-white animate-fade-in"
        style={{ animationDelay: "0.3s" }}>
        <h2 className="font-title text-3xl uppercase mb-4">¿Quieres Probar Fichaje SaaS?</h2>
        <p className="font-mono mb-6">
          Sin tarjeta de crédito. 30 días completos. Acceso a todas las características.
        </p>
        <BrutalButton href="/auth/register">Comenzar Prueba Gratuita</BrutalButton>
      </section>
    </main>
  );
}
