"use client";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
} from "@headlessui/react";

import { useRouter } from "next/navigation";

import { addProduct } from "@/app/actions/products";

import {
  AlertCircle,
  Bell,
  Boxes,
  DollarSign,
  Hash,
  Package,
  X,
} from "lucide-react";

import Sidebar from "@/components/sidebar";
import HeaderPage from "@/app/dashboard/header-page";
import FooterPage from "@/app/dashboard/footer-page";

// =====================================================
// TYPES
// =====================================================

type AddProductClientProps = {
  userId: string;
  nextSku: string;
};

type FormData = {
  name: string;
  sku: string;
  price: string;
  quantity: string;
  lowStockAt: string;
};

type FormErrors = {
  name?: string;
  sku?: string;
  price?: string;
  quantity?: string;
  lowStockAt?: string;
};

// =====================================================
// COMPONENT
// =====================================================

export default function AddproductClient({
  nextSku,
  userId,
}: AddProductClientProps) {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    sku: nextSku,
    price: "",
    quantity: "",
    lowStockAt: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // =====================================================
  // VALIDATE FORM
  // =====================================================

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const name = formData.name.trim();
    const sku = formData.sku.trim();
    const price = Number(formData.price);
    const quantity = Number(formData.quantity);
    const lowStockAt = Number(formData.lowStockAt);

    // Product name
    if (!name) {
      newErrors.name = "Product name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must contain at least 2 characters";
    }

    // SKU
    if (!sku) {
      newErrors.sku = "SKU is required";
    } else if (sku.length < 2) {
      newErrors.sku = "SKU must contain at least 2 characters";
    }

    // Price
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (!Number.isFinite(price) || price <= 0) {
      newErrors.price = "Enter a valid price greater than 0";
    }

    // Quantity
    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required";
    } else if (!Number.isInteger(quantity) || quantity < 0) {
      newErrors.quantity = "Enter a valid whole number";
    }

    // Low stock threshold
    if (formData.lowStockAt) {
      if (!Number.isInteger(lowStockAt) || lowStockAt < 0) {
        newErrors.lowStockAt = "Enter a valid whole number";
      } else if (Number.isInteger(quantity) && lowStockAt > quantity) {
        newErrors.lowStockAt = "Cannot be greater than available quantity";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =====================================================
  // CANCEL / RESET FORM
  // =====================================================

  const handleCancel = () => {
    setFormData({
      name: "",
      sku: nextSku,
      price: "",
      quantity: "",
      lowStockAt: "",
    });

    setErrors({});
  };

  // =====================================================
  // SUBMIT PRODUCT
  // =====================================================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();

      data.append("name", formData.name.trim());
      data.append("sku", formData.sku.trim());
      data.append("price", formData.price);
      data.append("quantity", formData.quantity);

      if (formData.lowStockAt) {
        data.append("lowStockAt", formData.lowStockAt);
      }

      // Pass authenticated user's ID
      data.append("userId", userId);

      const result = await addProduct(data);

      // Server-side error
      if (!result.success) {
        setErrors({
          name: result.message,
        });

        return;
      }

      // Product successfully saved
      setSuccessDialogOpen(true);
    } catch (error) {
      console.error("Submit error:", error);

      setErrors({
        name: "Something went wrong while adding the product.",
      });
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // INPUT STYLING
  // =====================================================

  const inputClass = (error?: string) =>
    `h-11 w-full rounded-lg border bg-white pl-14 text-sm text-slate-900 shadow-sm
outline-none transition-all placeholder:text-slate-400
dark:bg-slate-900 dark:text-white
${
  error
    ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
    : "border-slate-200 hover:border-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
}`;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="lg:pl-72">
        <HeaderPage
          title="Dashboard"
          description="Here's what's happening with your inventory today."
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* =====================================================
            ADD PRODUCT SECTION
        ===================================================== */}

        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
            {/* Background glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl"
            />

            <div className="relative px-5 py-6 sm:px-6">
              <div className="flex items-center justify-between">
                {/* Identity */}

                <div className="flex items-center gap-4">
                  {/* Icon */}

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                    <Package size={22} strokeWidth={2} />

                    {/* Status */}

                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>

                  {/* Title */}

                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                      Add new product
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      Create a product and add it to your inventory.
                    </p>
                  </div>
                </div>

                {/* Close */}

                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  aria-label="Close"
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                >
                  <X size={19} strokeWidth={2} />
                </button>
              </div>

              {/* Quick summary */}

              <div className="mt-6 flex w-full items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />

                <span className="text-[11px] font-medium text-slate-400">
                  Product information
                </span>

                <span className="text-slate-300 dark:text-slate-700">•</span>

                <span className="text-[11px] font-medium text-slate-400">
                  Inventory setup
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="flex min-h-full items-center justify-center bg-slate-50 p-6 dark:bg-slate-950 dark:text-slate-100">
            <div className="w-full">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
                <form onSubmit={handleSubmit} noValidate className="px-7 py-7">
                  {/* =================================================
                      PRODUCT INFORMATION
                  ================================================= */}

                  <div className="mb-7 mt-6">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Product information
                      </h3>

                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                        Basic information about the product.
                      </p>
                    </div>

                    <div className="mb-6 mt-4 space-y-5">
                      {/* Product Name */}

                      <Field>
                        <Label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Product name
                        </Label>

                        <div className="relative mb-2">
                          <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                            <Package
                              size={17}
                              strokeWidth={1.8}
                              className="text-slate-400"
                            />
                          </div>

                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ paddingLeft: "48px" }}
                            placeholder="e.g. Demo Product 1"
                            className={inputClass(errors.name)}
                          />
                        </div>

                        {errors.name && <ErrorMessage message={errors.name} />}
                      </Field>

                      {/* SKU */}

                      <Field>
                        <Label className="mb-2 mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          SKU
                        </Label>

                        <div className="relative mb-2">
                          <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                            <Hash
                              size={17}
                              strokeWidth={1.8}
                              className="text-slate-400"
                            />
                          </div>

                          <Input
                            readOnly
                            name="sku"
                            value={formData.sku}
                            placeholder="e.g. WH-1001"
                            style={{ paddingLeft: "48px" }}
                            className={inputClass(errors.sku)}
                          />
                        </div>

                        <p className="mt-1.5 text-xs text-slate-400">
                          SKU is generated automatically.
                        </p>

                        {errors.sku && <ErrorMessage message={errors.sku} />}
                      </Field>
                    </div>
                  </div>

                  {/* =================================================
                      INVENTORY & PRICING
                  ================================================= */}

                  <div className="border-t border-slate-200 pt-7 dark:border-slate-800">
                    <div className="mb-2">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Inventory & pricing
                      </h3>

                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                        Set the price and current stock levels.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Price */}

                      <Field>
                        <Label className="mb-2 mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Price
                        </Label>

                        <div className="relative mb-2">
                          <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                            <DollarSign
                              size={17}
                              strokeWidth={1.8}
                              className="text-slate-400"
                            />
                          </div>

                          <Input
                            name="price"
                            type="number"
                            min="0"
                            step="0.01"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="0.00"
                            style={{ paddingLeft: "48px" }}
                            className={inputClass(errors.price)}
                          />
                        </div>

                        {errors.price && (
                          <ErrorMessage message={errors.price} />
                        )}
                      </Field>

                      {/* Quantity */}

                      <Field>
                        <Label className="mb-2 mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Quantity
                        </Label>

                        <div className="relative mb-2">
                          <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                            <Boxes
                              size={17}
                              strokeWidth={1.8}
                              className="text-slate-400"
                            />
                          </div>

                          <Input
                            name="quantity"
                            type="number"
                            min="0"
                            step="1"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="0"
                            style={{ paddingLeft: "48px" }}
                            className={inputClass(errors.quantity)}
                          />
                        </div>

                        {errors.quantity && (
                          <ErrorMessage message={errors.quantity} />
                        )}
                      </Field>
                    </div>

                    {/* Low Stock */}

                    <div className="mt-5">
                      <Field>
                        <Label className="mb-2 mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Low stock threshold
                        </Label>

                        <div className="relative mb-4 h-11">
                          <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                            <Bell
                              size={17}
                              strokeWidth={1.8}
                              className="text-slate-400"
                            />
                          </div>

                          <Input
                            name="lowStockAt"
                            type="number"
                            min="0"
                            step="1"
                            value={formData.lowStockAt}
                            onChange={handleChange}
                            placeholder="e.g. 5"
                            style={{ paddingLeft: "48px" }}
                            className={inputClass(errors.lowStockAt)}
                          />
                        </div>

                        {errors.lowStockAt ? (
                          <ErrorMessage message={errors.lowStockAt} />
                        ) : (
                          <p className="mt-4 text-xs text-slate-400">
                            You'll be alerted when inventory reaches this level.
                          </p>
                        )}
                      </Field>
                    </div>
                  </div>

                  {/* =================================================
                      VALIDATION NOTICE
                  ================================================= */}

                  {Object.keys(errors).length > 0 && (
                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 dark:text-slate-950">
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-red-500"
                      />

                      <div>
                        <p className="text-sm font-medium text-red-700 dark:text-slate-950">
                          Please fix the errors above
                        </p>

                        <p className="mt-0.5 text-xs text-red-600">
                          Your product cannot be submitted until all required
                          fields are valid.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      FORM FOOTER
                  ================================================= */}

                  <div className="mb-5 mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-end">
                    <Button
                      type="button"
                      disabled={loading}
                      className="mt-4 h-10 rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900/10 dark:bg-purple-700 dark:text-white"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="mt-4 h-10 rounded-lg bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/20 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-purple-700"
                    >
                      {loading ? "Adding product..." : "Add product"}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Footer hint */}

              <p className="mt-4 text-center text-xs text-slate-400">
                All required product information should be accurate.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <main className="p-4 sm:p-6 lg:p-8">
          <FooterPage />
        </main>
      </div>

      {/* =====================================================
          SUCCESS DIALOG
      ===================================================== */}

      <Dialog
        open={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}

        <div
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Dialog container */}

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white pb-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            {/* Success icon */}

            <div className="flex justify-center pt-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10">
                <svg
                  className="h-7 w-7 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}

            <div className="px-6 pb-6 pt-5 text-center">
              <DialogTitle className="text-lg font-bold text-slate-900 dark:text-white">
                Product submitted successfully!
              </DialogTitle>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Your product has been successfully added to your inventory.
              </p>

              {/* Actions */}

              <div className="mb-6 mt-6 flex justify-center gap-3">
                {/* Add another */}

                <Button
                  type="button"
                  onClick={() => {
                    setSuccessDialogOpen(false);

                    setFormData({
                      name: "",
                      sku: nextSku,
                      price: "",
                      quantity: "",
                      lowStockAt: "",
                    });

                    setErrors({});
                  }}
                  className="h-10 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/20 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Add another product
                </Button>

                {/* Done */}

                <Button
                  type="button"
                  onClick={() => {
                    setSuccessDialogOpen(false);
                    router.push("/inventory");
                  }}
                  className="h-10 rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  Done
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

// =====================================================
// ERROR MESSAGE
// =====================================================

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
      <AlertCircle size={13} />
      <span>{message}</span>
    </div>
  );
}
