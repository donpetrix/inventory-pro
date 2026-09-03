import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AddproductClient from "@/app/add-product/addproduct-client";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
  // Check authentication
  const user = await getCurrentUser();

  // Redirect unauthenticated users
  if (!user) {
    redirect("/sign-in");
  }

  // Get all existing SKUs
  const products = await prisma.product.findMany({
    select: {
      sku: true,
    },
  });

  // Find the highest SKU number
  let highestNumber = 0;

  for (const product of products) {
    if (!product.sku) {
      continue;
    }

    const match = product.sku.match(/^SKU-(\d+)$/);

    if (match) {
      const number = Number(match[1]);

      if (number > highestNumber) {
        highestNumber = number;
      }
    }
  }

  // Generate next SKU
  const nextNumber = highestNumber + 1;

  const nextSku = `SKU-${String(nextNumber).padStart(4, "0")}`;

  return <AddproductClient userId={user.id} nextSku={nextSku} />;
}
