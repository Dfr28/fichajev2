# Fichaje SaaS Retro-Brutalista

SaaS de control horario para Espana con Next.js App Router, Tailwind, Prisma, Stripe y despliegue Docker orientado a Coolify.

## Stack

- Next.js 15 + TypeScript
- Tailwind CSS (estetica retro-brutalista B&W + acento)
- Prisma + PostgreSQL
- Stripe para suscripciones
- Docker multietapa y docker-compose (app + postgres + apache/php)

## Fases implementadas

1. **Estructura base** de app Next.js.
2. **Base de datos** en `prisma/schema.prisma`:
   - `User` con roles (`OWNER`, `EMPLOYEE`).
   - `Punch` con tipo (`CLOCK_IN`, `CLOCK_OUT`), fecha y geolocalizacion.
   - `Subscription` para vinculo con Stripe.
3. **UI/UX brutalista**:
   - Landing + pricing + normativa.
   - Dashboard dueno y empleado.
   - Navegacion de historial +/- 3 dias.
   - Paginas legales: aviso legal, privacidad (RGPD) y cookies.
4. **Stripe**:
   - Endpoint checkout: `src/app/api/stripe/checkout/route.ts`
   - Endpoint webhook: `src/app/api/stripe/webhook/route.ts`
5. **Despliegue**:
   - `Dockerfile` multietapa.
   - `docker-compose.yml` con `app`, `postgres`, `apache_php`.

## Variables de entorno

1. Copia `.env.example` a `.env`.
2. Rellena valores reales de Stripe y URL publica.

## Desarrollo local

```bash
npm install
npm run prisma:generate
npm run dev
```

## Docker local

```bash
docker compose up -d --build
```

App en `http://localhost:3000`.

## GitHub + Coolify (paso a paso)

1. Inicializar git:
   ```bash
   git init
   git add .
   git commit -m "feat: bootstrap fichaje saas retro-brutalista"
   ```
2. Crear repo en GitHub y conectar remoto:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En Coolify:
   - Crear nuevo recurso desde GitHub.
   - Elegir repo y rama `main`.
   - Confirmar que detecta `Dockerfile` en raiz.
   - Configurar variables de entorno del `.env`.
   - Deploy.

## Notas legales

- Los textos legales incluidos son base editable y deben adaptarse a los datos reales de tu empresa.
- Revisa el contrato de encargado de tratamiento y el banner de consentimiento de cookies segun tu caso real.
