"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// =====================================================
// DELETE PRODUCT
// =====================================================

export async function deleteProduct(productId: string) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return {
        success: false,
        message: "You must be signed in.",
      };
    }

    // Make sure the product belongs to the authenticated user
    const existingProduct = await prisma.product.findFirst({
      where: {
        id: productId,
        userid: user.id,
      },
    });

    if (!existingProduct) {
      return {
        success: false,
        message:
          "Product not found or you do not have permission to delete it.",
      };
    }

    await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/inventory");

    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error) {
    console.error("Delete product error:", error);

    return {
      success: false,
      message: "Failed to delete product",
    };
  }
}

// =====================================================
// ADD NEW PRODUCT
// =====================================================

export async function addProduct(formData: FormData) {
  // -------------------------------------------------
  // Get authenticated user
  // -------------------------------------------------

  const user = await getCurrentUser();

  if (!user) {
    return {
      success: false,
      message: "You must be signed in.",
    };
  }

  try {
    // -------------------------------------------------
    // Get form values
    // -------------------------------------------------

    const name = formData.get("name")?.toString().trim();
    const sku = formData.get("sku")?.toString().trim();

    const priceValue = formData.get("price")?.toString();
    const quantityValue = formData.get("quantity")?.toString();
    const lowStockAtValue = formData.get("lowStockAt")?.toString();

    // -------------------------------------------------
    // Validate product name
    // -------------------------------------------------

    if (!name) {
      return {
        success: false,
        message: "Product name is required.",
      };
    }

    if (name.length < 2) {
      return {
        success: false,
        message: "Product name must be at least 2 characters.",
      };
    }

    if (name.length > 100) {
      return {
        success: false,
        message: "Product name cannot exceed 100 characters.",
      };
    }

    // -------------------------------------------------
    // Validate SKU
    // -------------------------------------------------

    if (!sku) {
      return {
        success: false,
        message: "SKU is required.",
        field: "sku",
      };
    }

    if (sku.length > 50) {
      return {
        success: false,
        message: "SKU cannot exceed 50 characters.",
        field: "sku",
      };
    }

    // -------------------------------------------------
    // Validate price
    // -------------------------------------------------

    if (!priceValue) {
      return {
        success: false,
        message: "Product price is required.",
      };
    }

    const price = Number(priceValue);

    if (!Number.isFinite(price) || price <= 0) {
      return {
        success: false,
        message: "Price must be greater than 0.",
      };
    }

    // -------------------------------------------------
    // Validate quantity
    // -------------------------------------------------

    if (!quantityValue) {
      return {
        success: false,
        message: "Product quantity is required.",
      };
    }

    const quantity = Number(quantityValue);

    if (!Number.isInteger(quantity) || quantity < 0) {
      return {
        success: false,
        message: "Quantity must be a valid whole number.",
      };
    }

    // -------------------------------------------------
    // Validate low stock threshold
    // -------------------------------------------------

    const lowStockAt = lowStockAtValue ? Number(lowStockAtValue) : null;

    if (
      lowStockAt !== null &&
      (!Number.isInteger(lowStockAt) || lowStockAt < 0)
    ) {
      return {
        success: false,
        message: "Low-stock threshold must be a valid whole number.",
      };
    }

    if (lowStockAt !== null && lowStockAt > quantity) {
      return {
        success: false,
        message: "Low-stock threshold cannot be greater than quantity.",
      };
    }

    // -------------------------------------------------
    // Check if SKU already exists
    // -------------------------------------------------

    const existingProduct = await prisma.product.findFirst({
      where: {
        sku,
      },
    });

    if (existingProduct) {
      return {
        success: false,
        message: `A product with SKU "${sku}" already exists.`,
        field: "sku",
      };
    }

    // -------------------------------------------------
    // Create product
    // -------------------------------------------------

    const product = await prisma.product.create({
      data: {
        userid: user.id,
        name,
        sku,
        price,
        quantity,
        lowStockAt,
      },
    });

    // -------------------------------------------------
    // Refresh pages
    // -------------------------------------------------

    revalidatePath("/dashboard");
    revalidatePath("/inventory");
    revalidatePath("/add-product");

    // -------------------------------------------------
    // Success
    // -------------------------------------------------

    return {
      success: true,
      message: "Product added successfully.",
      product: {
        id: product.id,
        sku: product.sku,
      },
    };
  } catch (error) {
    console.error("Add product error:", error);

    return {
      success: false,
      message: "Something went wrong while creating the product.",
    };
  }
}

// =====================================================
// UPDATE PRODUCT
// =====================================================

export async function updateProduct(
  productId: string,
  data: {
    name: string;
    sku: string;
    price: number;
    quantity: number;
    lowStockAt: number | null;
  },
) {
  try {
    // -------------------------------------------------
    // Get authenticated user
    // -------------------------------------------------

    const user = await getCurrentUser();

    if (!user) {
      return {
        success: false,
        message: "You must be signed in to update a product.",
      };
    }

    // -------------------------------------------------
    // Make sure the product belongs to the user
    // -------------------------------------------------

    const existingProduct = await prisma.product.findFirst({
      where: {
        id: productId,
        userid: user.id,
      },
    });

    if (!existingProduct) {
      return {
        success: false,
        message: "Product not found or you do not have permission to edit it.",
      };
    }

    // -------------------------------------------------
    // Validate update data
    // -------------------------------------------------

    const name = data.name.trim();
    const sku = data.sku.trim();

    if (!name) {
      return {
        success: false,
        message: "Product name is required.",
      };
    }

    if (!sku) {
      return {
        success: false,
        message: "SKU is required.",
        field: "sku",
      };
    }

    if (!Number.isFinite(data.price) || data.price <= 0) {
      return {
        success: false,
        message: "Price must be greater than 0.",
      };
    }

    if (!Number.isInteger(data.quantity) || data.quantity < 0) {
      return {
        success: false,
        message: "Quantity must be a valid whole number.",
      };
    }

    if (
      data.lowStockAt !== null &&
      (!Number.isInteger(data.lowStockAt) || data.lowStockAt < 0)
    ) {
      return {
        success: false,
        message: "Low-stock threshold must be a valid whole number.",
      };
    }

    if (data.lowStockAt !== null && data.lowStockAt > data.quantity) {
      return {
        success: false,
        message: "Low-stock threshold cannot be greater than quantity.",
      };
    }

    // -------------------------------------------------
    // Check SKU uniqueness
    // -------------------------------------------------

    const skuExists = await prisma.product.findFirst({
      where: {
        sku,
        id: {
          not: productId,
        },
      },
    });

    if (skuExists) {
      return {
        success: false,
        message: `A product with SKU "${sku}" already exists.`,
        field: "sku",
      };
    }

    // -------------------------------------------------
    // Update product
    // -------------------------------------------------

    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name,
        sku,
        price: data.price,
        quantity: data.quantity,
        lowStockAt: data.lowStockAt,
      },
    });

    console.log("Product updated successfully:", product.id);

    // -------------------------------------------------
    // Refresh pages
    // -------------------------------------------------

    revalidatePath("/dashboard");
    revalidatePath("/inventory");

    return {
      success: true,
      message: "Product updated successfully.",
    };
  } catch (error) {
    console.error("UPDATE PRODUCT ERROR:", error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Unable to update product.",
    };
  }
}
