import { prisma } from "@/lib/db";

async function main() {
  console.log("🔄 Inicializando base de datos...");

  // Create demo admin
  try {
    const adminExists = await prisma.user.findUnique({
      where: { email: "admin@fichaje.local" }
    });

    if (!adminExists) {
      await prisma.user.create({
        data: {
          email: "admin@fichaje.local",
          password: "$2b$10$X0PhbhK7rD9UQsJDBxLW1OrF8cGdYMUNFWDMUuGdNHLRBJFhUfE0W", // "password" hashed
          name: "Administrador",
          role: "ADMIN"
        }
      });
      console.log("✅ Usuario admin creado");
    }
  } catch (error) {
    console.error("❌ Error creando admin:", error);
  }

  console.log("✓ Base de datos inicializada");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
