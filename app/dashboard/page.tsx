import { prisma } from "@/lib/prisma";
import DashboardClient from "./dashboard-client";

import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // Get currently authenticated user
  const user = await getCurrentUser();

  // Protect dashboard
  if (!user) {
    redirect("/sign-in");
  }

  // Get currently authenticated user's display name
  const userName =
    user.displayName || user.primaryEmail?.split("@")[0] || "User";
  // Start reusable greeting based on the current user's local time.
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good Morning, "
      : hour < 18
        ? "Good Afternoon, "
        : "Good Evening, ";
  // End  reusable greeting based on the current user's local time.

  const userId = user.id;

  const [totalProducts, lowStock, recentProducts, allProducts] =
    await Promise.all([
      // Count all products belonging to this user

      prisma.product.count({
        where: { userid: userId },
      }),

      // Count all products belonging to this user where lowStockAt is not empty and the quantity is less than or equal to 5.
      // Count products that are low in stock which are not null
      prisma.product.count({
        where: {
          userid: userId,
          lowStockAt: { not: null },
          quantity: {
            lte: 5,
          },
        },
      }),

      // Get five most recently created products

      prisma.product.findMany({
        where: { userid: userId },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),

      // Get all product inventory values
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
      }),
    ]);

  console.log("Authenticated User ID:", userId);

  // Calculate total value of ALL inventory
  const inventoryValue = allProducts.reduce(
    (total, product) => total + Number(product.price) * product.quantity,
    0,
  );

  // Convert Prisma Decimal to a normal JavaScript number // before passing the data to the Client Component.
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

  // console.log("Total Products:", totalProducts);
  // console.log("Low Stock:", lowStock);
  // console.log("Recent Products:", recent);

  return (
    <DashboardClient
      totalProducts={totalProducts}
      lowStock={lowStock}
      recent={recent}
      inventoryValue={inventoryValue}
      allProducts={allProductsData}
      userName={userName}
      greeting={greeting}
    />
  );
}
