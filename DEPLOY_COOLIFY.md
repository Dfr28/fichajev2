# 🚀 Guía de Deploy en Coolify

## Prerrequisitos

- Cuenta en Coolify
- Repositorio Git (GitHub, GitLab, etc.)
- Credenciales de Stripe (test o production)

## Pasos de Deployment

### 1. Conectar repositorio

1. Ve a **Coolify Dashboard** → **Projects** → **Add Application**
2. Selecciona **Docker**
3. Conecta tu repositorio Git

### 2. Configuración Básica

| Campo | Valor |
|-------|-------|
| **Application Name** | `fichaje-saas` |
| **Port** | `3000` |
| **Base Image** | `node:20-alpine` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm run start` |

### 3. Variables de Entorno

Añade en **Environment Variables**:

```env
# Base de datos (SQLite - no requiere BD externa)
DATABASE_URL=file:./prisma/dev.db

# Stripe (obtener en https://dashboard.stripe.com)
STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxx

# App
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://tudominio.com

# Opcional: Configuración avanzada
LOG_LEVEL=info
```

### 4. Volúmenes (Persistencia)

Es **CRÍTICO** montar un volumen para la BD SQLite, sino perderás datos en cada deploy.

En **Volumes**:

```
Source: /app/prisma
Destination: /data/prisma
```

O si lo prefieres más simple:

```
Source: /app
Destination: /app (mount at same path)
```

### 5. Dominios

1. Ve a **Settings** → **Domains**
2. Añade tu dominio: `tudominio.com`
3. Configura DNS pointing a Coolify

### 6. SSL/HTTPS

Coolify configura automáticamente certificados Let's Encrypt. Solo asegúrate de que:

- DNS está configurado correctamente
- El dominio es accesible desde internet
- Espera 5-10 minutos para la emisión del certificado

### 7. Deploy

1. Haz push a tu rama principal (main/master)
2. Coolify detectará cambios automáticamente
3. Inicia el build → **Deploy**

Puedes ver logs en **Application** → **Logs**

## Primeros Pasos tras Deploy

### 1. Acceso Admin Inicial

La BD se inicializa automáticamente con:

```
Email: admin@fichaje.local
Contraseña: password
Rol: ADMIN
```

**IMPORTANTE**: Cambia la contraseña inmediatamente tras primer login.

### 2. Prueba de Funcionalidades

1. Accede a `https://tudominio.com`
2. Registra una nueva empresa (rol OWNER)
3. Registra empleados
4. Prueba entrada/salida en dashboard empleado
5. Genera reportes en panel dueño

### 3. Configurar Stripe

Para activar pagos:

1. Ve a **Stripe Dashboard** → **API Keys**
2. Copia claves **Live** (producción)
3. Actualiza variables en Coolify:
   - `STRIPE_PUBLIC_KEY`
   - `STRIPE_SECRET_KEY`
4. Redeploy la aplicación

### 4. Configurar Webhook de Stripe

1. Stripe Dashboard → **Webhooks**
2. Añade endpoint: `https://tudominio.com/api/stripe/webhook`
3. Selecciona eventos: `checkout.session.completed`, `invoice.paid`
4. Copia Secret y actualiza en Coolify: `STRIPE_WEBHOOK_SECRET`

### 5. Backup de BD

La BD SQLite está en `/app/prisma/dev.db`. Configura backups:

```bash
# Backup manual
docker cp [container_id]:/app/prisma/dev.db ./backup.db

# Backup automático (fuera del alcance de esta guía)
# Recomendado: usar sistema de backup de Coolify o scripts cron
```

## Troubleshooting

### La aplicación no inicia

```bash
# Revisa logs
coolify logs [app-id]

# Verifica variables de entorno
echo $DATABASE_URL
echo $STRIPE_PUBLIC_KEY
```

### BD corrupta / No se conecta

```bash
# Elimina BD y reinicia (perderás datos)
rm /app/prisma/dev.db
coolify restart [app-id]
```

### Error de migración

```bash
# Ejecuta migraciones manualmente
npx prisma migrate deploy
npx prisma db seed
```

### Stripe no funciona

1. Verifica claves en `.env` (no tengan espacios)
2. Prueba en **Stripe Dashboard** → **Test Mode**
3. Revisa endpoint webhook en Stripe

## Monitoreo

Coolify incluye:

- **Uptime**: Dashboard → Health
- **Logs**: Dashboard → Logs (últimas 100 líneas)
- **Resource Usage**: CPU, Memory

Recomendado: Configura alertas en tu proveedor.

## Escalado

Para crecer más tarde:

- Migra a PostgreSQL en Coolify
- Implementa caché con Redis
- Configura CDN (CloudFlare)
- Load balancing (si necesario)

## Soporte

- **Errors**: Ve a **Application** → **Logs**
- **Coolify Docs**: https://coolify.io/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**Última actualización**: 21 de abril de 2026
