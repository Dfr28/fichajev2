export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <article className="animate-fade-in">
        <h1 className="font-title text-4xl uppercase mb-8">Aviso Legal</h1>
        
        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Información del Titular</h2>
          <p className="font-mono text-sm mb-2">
            <strong>Denominación:</strong> Fichaje Brutalista SaaS
          </p>
          <p className="font-mono text-sm mb-2">
            <strong>Domicilio:</strong> España
          </p>
          <p className="font-mono text-sm mb-4">
            <strong>Contacto:</strong> info@fichaje-brutalista.es
          </p>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Objeto del Sitio</h2>
          <p className="font-mono text-sm">
            Plataforma SaaS dedicada al registro, control y gestión de jornada laboral conforme a la normativa española, cumpliendo con el Real Decreto 1741/1998 y disposiciones laborales vigentes.
          </p>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Responsabilidades del Usuario</h2>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
            <li>Cumplir íntegramente con la normativa laboral española</li>
            <li>No introducir datos falsos, fraudulentos o de terceros sin autorización</li>
            <li>Reportar deficiencias o errores en el sistema de forma inmediata</li>
            <li>Conservar registros conforme a legislación (4 años mínimo)</li>
            <li>Usar la plataforma de conformidad con la ley</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Normativa Aplicable</h2>
          <p className="font-mono text-sm mb-4">Este servicio cumple íntegramente con:</p>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li><strong>Real Decreto 1741/1998</strong> - Obligatoriedad registro horario</li>
            <li><strong>Reglamento (UE) 2016/679</strong> - Protección General de Datos (RGPD)</li>
            <li><strong>Ley 34/1988</strong> - Publicidad y servicios telemáticos</li>
            <li><strong>Real Decreto 1890/2008</strong> - Gestión electrónica de datos</li>
            <li><strong>Estatuto de los Trabajadores</strong> - Derechos y obligaciones laborales</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Limitación de Responsabilidad</h2>
          <p className="font-mono text-sm mb-4">
            No seremos responsables de:
          </p>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li>Daños indirectos, especiales o consecuentes</li>
            <li>Pérdida de beneficios o ingresos cesantes</li>
            <li>Interrupciones derivadas de fuerza mayor</li>
            <li>Mal uso o violación de política de acceso</li>
            <li>Incumplimiento normativo del usuario</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Cambios en Términos</h2>
          <p className="font-mono text-sm">
            Nos reservamos el derecho de modificar estos términos notificando con 30 días de anticipación. El uso continuado implica aceptación de cambios.
          </p>
        </section>

        <footer className="border-t-4 border-black pt-6 mt-12 font-mono text-xs">
          <p>Última actualización: 21 de abril de 2026</p>
        </footer>
      </article>
    </main>
  );
}
