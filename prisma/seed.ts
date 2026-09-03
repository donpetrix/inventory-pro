import "dotenv/config";
import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const demoUserId = "0e063555-9ee2-49e3-81b9-cdce6e5902c2";

  console.log("Starting database seed...");

  const products = Array.from({ length: 25 }, (_, i) => ({
    userid: demoUserId,

    name: `Demo Product ${i + 1}`,

    sku: `DEMO-SKU-${String(i + 1).padStart(3, "0")}`,

    price: new Prisma.Decimal((Math.random() * 900 + 100).toFixed(2)),

    quantity: Math.floor(Math.random() * 50),

    lowStockAt: 5,

    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * i),
  }));

  await prisma.product.createMany({
    data: products,
  });

  console.log("Seed Data Created Successfully!");
  console.log(`Created ${products.length} products.`);
  console.log(`Demo User ID: ${demoUserId}`);
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
