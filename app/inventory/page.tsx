import { prisma } from "@/lib/prisma";
import InventoryClient from "@/app/inventory/InventoryClient";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
  // Get currently authenticated user
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  // Get currently authenticated user's display name
  const userName =
    user.displayName || user.primaryEmail?.split("@")[0] || "User";

  const userId = user.id;

  const [totalProducts, lowStock, recentProducts, allProducts] =
    await Promise.all([
      // Total products
      prisma.product.count({
        where: {
          userid: userId,
        },
      }),

      // Low stock products
      prisma.product.count({
        where: {
          userid: userId,
          lowStockAt: {
            not: null,
          },
          quantity: {
            lte: 5,
          },
        },
      }),

      // Five most recently created products
      prisma.product.findMany({
        where: {
          userid: userId,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),

      // All products
      prisma.product.findMany({
        where: {
          userid: userId,
        },
        select: {
          id: true,
          userid: true,
          name: true,
          sku: true,
          price: true,
          quantity: true,
          lowStockAt: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
    ]);

  console.log("Authenticated User ID:", userId);

  // --------------------------------------------------
  // Convert Prisma products to Client Component-safe data
  // --------------------------------------------------

  const recent = recentProducts.map((product) => ({
    id: product.id,
    userid: product.userid,
    name: product.name,
    sku: product.sku,
    price: Number(product.price),
    quantity: product.quantity,
    lowStockAt: product.lowStockAt,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));

  const allProductsData = allProducts.map((product) => ({
    id: product.id,
    userid: product.userid,
    name: product.name,
    sku: product.sku,
    price: Number(product.price),
    quantity: product.quantity,
    lowStockAt: product.lowStockAt,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));

  // --------------------------------------------------
  // Calculate inventory value
  // --------------------------------------------------

  const inventoryValue = allProductsData.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  // --------------------------------------------------
  // Pass ONLY serialized data to Client Component
  // --------------------------------------------------

  return (
    <InventoryClient
      totalProducts={totalProducts}
      lowStock={lowStock}
      recent={recent}
      inventoryValue={inventoryValue}
      allProducts={allProductsData}
      userName={userName}
    />
  );
}
