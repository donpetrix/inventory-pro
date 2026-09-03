import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AddproductClient from "@/app/add-product/addproduct-client";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
  // Check the current authentication session
  const user = await getCurrentUser();

  // No authenticated session
  if (!user) {
    redirect("/sign-in");
  }

  // Get the latest product SKU
  const lastProduct = await prisma.product.findFirst({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      sku: true,
    },
  });

  let nextNumber = 1;

  if (lastProduct?.sku) {
    const match = lastProduct.sku.match(/(\d+)$/);

    if (match) {
      nextNumber = Number(match[1]) + 1;
    }
  }

  const nextSku = `SKU-${String(nextNumber).padStart(4, "0")}`;

  return <AddproductClient userId={user.id} nextSku={nextSku} />;
}
