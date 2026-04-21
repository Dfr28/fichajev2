# Fichaje SaaS Retro-Brutalista

Plataforma SaaS profesional de **control horario legal** para empresas españolas, cumpliendo con la normativa laboral española (RD 1741/1998, RGPD) con diseño retro-brutalista minimalista en B&W.

## 🎯 Características Principales

- ✅ **Cumplimiento Normativo**: RD 1741/1998 - Registro horario completo
- ✅ **Trazabilidad Total**: Historial de jornadas con timestamps
- ✅ **Dashboard Multirol**: Empleado, Dueño, Administrador
- ✅ **Métricas Empresariales**: Ingresos, usuarios, empresas
- ✅ **Exportación de Reportes**: Excel, PDF para inspección laboral
- ✅ **RGPD Completo**: Privacidad garantizada, conservación 4 años
- ✅ **Pagos Stripe**: Suscripciones recurrentes integradas
- ✅ **SQLite**: Sin necesidad de instalar BD en Coolify
- ✅ **Responsive**: Diseño adaptable a todos los dispositivos
- ✅ **Animaciones**: Fade-in y scroll animations

## 🛠 Stack Tecnológico

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Estilos**: Tailwind CSS 3 (brutalista minimalista)
- **Base de Datos**: Prisma ORM + SQLite
- **Pagos**: Stripe API
- **Deploy**: Docker (multietapa) + Coolify-ready
- **Autenticación**: JWT + Cookies seguras

## 📦 Stack

```
frontend/
├── Next.js 15 (App Router)
├── TypeScript
├── Tailwind CSS
├── Prisma Client
└── Stripe SDK

backend/
├── Next.js API Routes
├── Prisma ORM
├── SQLite Database
└── Server Actions

devops/
├── Dockerfile (multietapa)
├── docker-compose.yml
└── SQLite (sin backend BD)
```

## 🚀 Inicio Rápido

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores:
- `DATABASE_URL`: Database SQLite (por defecto `file:./dev.db`)
- `STRIPE_PUBLIC_KEY`: Tu clave pública de Stripe
- `STRIPE_SECRET_KEY`: Tu clave secreta de Stripe

### 3. Inicializar base de datos

```bash
npm run prisma:generate
npx prisma migrate dev
```

### 4. Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🐳 Despliegue con Docker

### Local con Docker Compose

```bash
docker-compose up -d --build
```

La aplicación estará en `http://localhost:3000`

### En Coolify

1. **Conecta tu repositorio** a Coolify
2. **Selecciona imagen base**: `node:20-alpine`
3. **Puerto**: 3000
4. **Volumen**: Para persistencia de SQLite
5. **Build command**: `npm run build`
6. **Start command**: `npm run start`

### Variables de Entorno en Coolify

```
DATABASE_URL=file:./data/dev.db
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
NODE_ENV=production
```

**Importante**: Monta un volumen para `/app` para persistencia del BD SQLite:
```
/app/prisma -> /data
```

## 📋 Estructura de Rutas

### Públicas
- `/` - Landing page
- `/auth/login` - Login
- `/auth/register` - Registro
- `/aviso-legal` - Legal
- `/politica-privacidad` - RGPD
- `/politica-cookies` - Cookies

### Dashboards (Protegidas)
- `/dashboard/empleado` - Panel empleado (registro entrada/salida)
- `/dashboard/dueno` - Panel empresa (gestión empleados, reportes)
- `/dashboard/admin` - Panel admin (métricas globales, facturación)

### API
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/stripe/checkout` - Crear sesión de pago
- `POST /api/stripe/webhook` - Webhook de Stripe

## 🎨 Diseño

### Estética Brutalista Minimalista
- Colores: **Negro y Blanco** (sin naranja)
- Bordes: **4px solid black**
- Tipografía: Arial Black para títulos, Monospace para contenido
- Shadow: Brutal offset 8px 8px
- Animaciones: Fade-in y scale-in suaves

### Tokens de Diseño

```tailwind
colors:
  accent: #000000  /* Negro para contraste */
  
boxShadow:
  brutal: "8px 8px 0px 0px rgba(0,0,0,1)"
  
fontFamily:
  title: ["Arial Black"]
  mono: ["ui-monospace"]
```

## 🔐 Seguridad

- ✅ Contraseñas con bcryptjs (salt rounds: 10)
- ✅ Validación con Zod
- ✅ CSRF protection en formularios
- ✅ Cookies httpOnly + secure
- ✅ SQL injection protection (Prisma)
- ✅ RGPD compliance (política privacidad)

## 📊 Base de Datos

### Modelos Prisma

```prisma
- User (id, email, password, name, role, company)
- Company (id, name, nif, plan, employees, activeUntil)
- Registro (id, user, company, entrada, salida, nota)
- Subscription (id, stripeId, status)
```

### Migración Inicial

```bash
npx prisma migrate dev --name init
```

## 🧪 Testing

```bash
npm run lint
```

## 📱 Funcionalidades por Rol

### Empleado
- Registrar entrada/salida con timestamp
- Ver historial de jornadas (últimas 7 días)
- Descargar certificado de asistencia
- Solicitar descargo laboral

### Dueño de Empresa
- Gestionar empleados (alta/baja)
- Ver métricas de productividad
- Exportar reportes RD 1741/1998
- Análisis de cumplimiento normativo
- Generar certificados legales

### Administrador
- Dashboard global de métric...
- Gestionar empresas suscriptas
- Análisis de ingresos y MRR
- Metricsas de usuarios activos
- Generar reportes de facturación

## 📞 Soporte y Normativa

- **RD 1741/1998**: Obligatoriedad de registro horario
- **RGPD (UE 2016/679**: Protección de datos
- **Conservación**: 4 años mínimo
- **Inspección**: Acceso inmediato a registros

## 📄 Licencia

Propietaria - SaaS

## 👨‍💻 Desarrollo

```bash
# Formato de código
npm run lint

# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Build para producción
npm run build

# Start producción
npm run start
```

## 🚢 Checklist para Producción

- [ ] Variables de entorno configuradas
- [ ] Certificados SSL/HTTPS
- [ ] SMTP configurado para emails
- [ ] Backup automático de BD
- [ ] Monitoreo y alertas
- [ ] CloudFlare o CDN
- [ ] Rate limiting en APIs
- [ ] Logging centralizado
- [ ] Backup diario de BD

---

**Última actualización**: 21 de abril de 2026

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
