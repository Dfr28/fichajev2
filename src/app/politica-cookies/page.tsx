export default function CookiesPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <article className="animate-fade-in">
        <h1 className="font-title text-4xl uppercase mb-8">Política de Cookies</h1>
        
        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">¿Qué son las Cookies?</h2>
          <p className="font-mono text-sm">
            Las cookies son archivos pequeños que su navegador descarga cuando accede a nuestro sitio. Las usamos para mejorar la experiencia de usuario, recordar preferencias y analizar uso.
          </p>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Tipos de Cookies que Utilizamos</h2>
          
          <h3 className="font-title text-lg uppercase mt-4 mb-2">Cookies Técnicas (Obligatorias)</h3>
          <p className="font-mono text-sm mb-3">
            Esenciales para el funcionamiento correcto. No requieren consentimiento previo.
          </p>
          <ul className="font-mono text-sm space-y-1 list-disc pl-5 mb-4">
            <li><strong>sessionid:</strong> Mantiene su sesión autenticada</li>
            <li><strong>csrf_token:</strong> Protección contra ataques CSRF</li>
            <li><strong>preferences:</strong> Preferencias de idioma y tema</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Cómo Gestionar Cookies</h2>
          <p className="font-mono text-sm mb-3">
            Puede controlar y eliminar cookies desde su navegador.
          </p>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li><strong>Chrome:</strong> Configuración → Privacidad → Cookies</li>
            <li><strong>Firefox:</strong> Preferencias → Privacidad → Cookies</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
            <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
          </ul>
        </section>

        <footer className="border-t-4 border-black pt-6 mt-12 font-mono text-xs">
          <p>Última actualización: 21 de abril de 2026</p>
        </footer>
      </article>
    </main>
  );
}
