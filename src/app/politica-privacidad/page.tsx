export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <article className="animate-fade-in">
        <h1 className="font-title text-4xl uppercase mb-8">RGPD - Política de Privacidad</h1>
        
        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Responsable del Tratamiento</h2>
          <p className="font-mono text-sm">
            <strong>Fichaje Brutalista SaaS</strong> - España
          </p>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Finalidad del Tratamiento</h2>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li>Gestión y registro de jornadas laborales</li>
            <li>Control horario conforme al R.D. 1741/1998</li>
            <li>Cumplimiento de obligaciones legales</li>
            <li>Estadísticas y análisis de negocio</li>
            <li>Mejora del servicio</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Base Jurídica</h2>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li>Cumplimiento de obligación legal (Derecho laboral español)</li>
            <li>Ejecución del contrato de servicios</li>
            <li>Consentimiento explícito del usuario</li>
            <li>Interés legítimo</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Categoría de Datos</h2>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li>Identificación personal: nombre, email, teléfono</li>
            <li>Datos laborales: puesto, departamento, salario</li>
            <li>Datos de jornada: entrada, salida, descansos</li>
            <li>Datos de autenticación: email, contraseña hasheada</li>
            <li>Datos de empresa: CIF, razón social, domicilio</li>
          </ul>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Conservación de Datos</h2>
          <p className="font-mono text-sm mb-4">
            Los registros de jornada se conservan durante <strong>4 años</strong> conforme a la normativa laboral española.
          </p>
        </section>

        <section className="mb-8 border-l-4 border-black pl-6">
          <h2 className="font-title text-2xl uppercase mb-4">Derechos del Interesado</h2>
          <p className="font-mono text-sm mb-4">Conforme al Reglamento (UE) 2016/679, usted tiene derecho a:</p>
          <ul className="font-mono text-sm space-y-2 list-disc pl-5">
            <li><strong>Acceso:</strong> Conocer qué datos tenemos</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
            <li><strong>Supresión:</strong> Solicitar borrado</li>
            <li><strong>Oposición:</strong> Rechazar tratamiento</li>
            <li><strong>Limitación:</strong> Limitar procesamiento</li>
            <li><strong>Portabilidad:</strong> Recibir datos en formato estructurado</li>
          </ul>
        </section>

        <footer className="border-t-4 border-black pt-6 mt-12 font-mono text-xs">
          <p>Última actualización: 21 de abril de 2026</p>
        </footer>
      </article>
    </main>
  );
}
