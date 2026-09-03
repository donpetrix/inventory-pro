"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { deleteProduct, updateProduct } from "@/app/actions/products";
import Pagination from "@/components/pagination";

import {
  AlertCircle,
  Bell,
  Boxes,
  CheckCircle2,
  DollarSign,
  Hash,
  MoreHorizontal,
  Package,
  Pencil,
  Search,
  Trash2,
  X,
} from "lucide-react";

import Sidebar from "@/components/sidebar";
import HeaderPage from "@/app/dashboard/header-page";
import FooterPage from "@/app/dashboard/footer-page";

// =====================================================
// PRODUCT TYPE
// =====================================================

type Product = {
  id: string;
  userid: string;
  name: string;
  sku: string | null;
  price: number;
  quantity: number;
  lowStockAt: number | null;
  createdAt: string;
  updatedAt: string;
};

// =====================================================
// PROPS
// =====================================================

type InventoryClientProps = {
  totalProducts: number;
  lowStock: number;
  recent: Product[];
  inventoryValue: number;
  allProducts: Product[];
  userName: string;
};

// =====================================================
// COMPONENT
// =====================================================

export default function InventoryClient({
  totalProducts,
  lowStock,
  recent,
  inventoryValue,
  allProducts,
  userName,
}: InventoryClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  // =================================================
  // DELETE HANDLER
  // =================================================

  const handleDelete = async (productId: string) => {
    const result = await deleteProduct(productId);

    if (result.success) {
      setDeleteResult({
        type: "success",
        message: result.message,
      });
    } else {
      setDeleteResult({
        type: "error",
        message: result.message,
      });
    }
  };

  // =================================================
  // INVENTORY SEARCH + PAGINATION
  // =================================================

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  // =================================================
  // SEARCH PRODUCTS
  // =================================================

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      return allProducts;
    }

    return allProducts.filter((product) =>
      `${product.name} ${product.sku ?? ""}`.toLowerCase().includes(query),
    );
  }, [allProducts, searchQuery]);

  // =================================================
  // TOTAL PAGES
  // =================================================

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage),
  );

  // =================================================
  // PRODUCTS FOR CURRENT PAGE
  // =================================================

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;

    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredProducts, currentPage]);

  // =================================================
  // ACTION STATE FOR DELETE
  // =================================================

  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

  // =================================================
  // DELETE RESULT DIALOG
  // =================================================

  const [deleteResult, setDeleteResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // =================================================
  // ACTION STATE FOR UPDATE
  // =================================================

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [editLoading, setEditLoading] = useState(false);

  const [editFormData, setEditFormData] = useState({
    name: "",
    sku: "",
    price: "",
    quantity: "",
    lowStockAt: "",
  });

  // =================================================
  // UPDATE SUCCESS DIALOG
  // =================================================

  const [updateSuccessDialogOpen, setUpdateSuccessDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-72">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <HeaderPage
          title="Dashboard"
          description="Here's what's happening with your inventory today."
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* =====================================================
            INVENTORY
        ===================================================== */}

        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* =================================================
              INVENTORY TOOLBAR
          ================================================= */}

          <div className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
            {/* Subtle background glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl"
            />

            <div className="relative px-5 py-6 sm:px-6">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                {/* =================================================
                    INVENTORY IDENTITY
                ================================================= */}

                <div className="flex items-center gap-4">
                  {/* Icon */}

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
                    <Package size={22} strokeWidth={2} />

                    {/* Online indicator */}

                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        Inventory
                      </h2>

                      <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[10px] font-bold text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
                        {allProducts.length} Products
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      Manage your products, stock levels and inventory
                    </p>
                  </div>
                </div>

                {/* =================================================
                    SEARCH
                ================================================= */}

                <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto">
                  <div className="group relative w-full sm:w-80 xl:w-96">
                    <div className="flex h-11 items-center gap-3 rounded-full border border-slate-200 bg-slate-50/70 px-5 transition-all duration-200 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-slate-600 dark:hover:bg-slate-800">
                      <Search
                        size={17}
                        strokeWidth={2}
                        className="shrink-0 text-slate-400"
                      />

                      <input
                        type="text"
                        placeholder="Search products, SKU..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  QUICK INVENTORY SUMMARY
              ================================================= */}

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                {/* In Stock */}

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />

                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    In Stock:{" "}
                    {
                      filteredProducts.filter(
                        (product) =>
                          product.quantity > 0 &&
                          product.quantity > (product.lowStockAt ?? 5),
                      ).length
                    }
                  </span>
                </div>

                {/* Low Stock */}

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" />

                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Low Stock:{" "}
                    {
                      filteredProducts.filter(
                        (product) =>
                          product.quantity > 0 &&
                          product.quantity <= (product.lowStockAt ?? 5),
                      ).length
                    }
                  </span>
                </div>

                {/* Out of Stock */}

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />

                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Out of Stock:{" "}
                    {
                      filteredProducts.filter(
                        (product) => product.quantity === 0,
                      ).length
                    }
                  </span>
                </div>

                {/* Divider */}

                <div className="hidden h-4 w-px bg-slate-200 sm:block dark:bg-slate-700" />

                {/* Matching Products */}

                <span className="text-[11px] font-medium text-slate-400">
                  {filteredProducts.length} matching products
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              INVENTORY TABLE
          ================================================= */}

          {paginatedProducts.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <Package className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-700" />

              <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-300">
                No products found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Try searching for a different product.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left">
                {/* Table Header */}

                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Product
                    </th>

                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      SKU
                    </th>

                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Price
                    </th>

                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Quantity
                    </th>

                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Status
                    </th>

                    <th className="px-5 py-3" />
                  </tr>
                </thead>

                {/* Table Body */}

                <tbody>
                  {paginatedProducts.map((product) => {
                    const isOutOfStock = product.quantity === 0;

                    const isLowStock =
                      product.quantity > 0 &&
                      product.quantity <= (product.lowStockAt ?? 5);

                    return (
                      <tr
                        key={product.id}
                        className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                      >
                        {/* Product */}

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                              <Package size={17} />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                                {product.name}
                              </p>

                              <p className="text-xs text-slate-400">
                                {new Date(
                                  product.createdAt,
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* SKU */}

                        <td className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                          {product.sku ?? "—"}
                        </td>

                        {/* Price */}

                        <td className="px-5 py-4 text-sm font-bold text-slate-900 dark:text-white">
                          $
                          {Number(product.price).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>

                        {/* Quantity */}

                        <td className="px-5 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {product.quantity}
                        </td>

                        {/* Status */}

                        <td className="px-5 py-4">
                          {isOutOfStock ? (
                            <span className="inline-flex rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                              Out of Stock
                            </span>
                          ) : isLowStock ? (
                            <span className="inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                              Low Stock
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                              In Stock
                            </span>
                          )}
                        </td>

                        {/* Actions */}

                        <td className="px-5 py-4 text-right">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <MenuButton
                              aria-label={`Actions for ${product.name}`}
                              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none data-focus:outline-none data-hover:bg-slate-100 data-open:bg-slate-100 dark:text-slate-400 dark:data-hover:bg-slate-800 dark:data-open:bg-slate-800 dark:data-hover:text-slate-200 dark:data-open:text-slate-200"
                            >
                              <MoreHorizontal size={18} strokeWidth={2} />
                            </MenuButton>

                            <MenuItems
                              transition
                              anchor="bottom end"
                              className="z-50 w-36 origin-top-right rounded-xl border border-slate-200 bg-white p-1.5 text-sm shadow-xl shadow-slate-200/50 outline-none transition duration-100 ease-out [--anchor-gap:--spacing(1.5)] data-closed:scale-95 data-closed:opacity-0 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30"
                            >
                              {/* Edit */}

                              <MenuItem>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingProduct(product);

                                    setEditFormData({
                                      name: product.name,
                                      sku: product.sku ?? "",
                                      price: String(product.price),
                                      quantity: String(product.quantity),
                                      lowStockAt:
                                        product.lowStockAt !== null &&
                                        product.lowStockAt !== undefined
                                          ? String(product.lowStockAt)
                                          : "",
                                    });
                                  }}
                                  className="group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-medium text-slate-600 outline-none data-focus:bg-slate-100 data-focus:text-indigo-600 dark:text-slate-300 dark:data-focus:bg-slate-800 dark:data-focus:text-indigo-400"
                                >
                                  <Pencil
                                    size={15}
                                    strokeWidth={2}
                                    className="text-slate-400 group-data-focus:text-indigo-500 dark:group-data-focus:text-slate-300"
                                  />

                                  <span>Edit</span>

                                  <kbd className="ml-auto hidden text-[10px] font-medium text-slate-400 group-data-focus:inline dark:text-slate-500">
                                    E
                                  </kbd>
                                </button>
                              </MenuItem>

                              {/* Divider */}

                              <div className="my-1 h-px bg-slate-100 dark:bg-slate-800" />

                              {/* Delete */}

                              <MenuItem>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDeletingProduct(product);
                                  }}
                                  className="group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-medium text-red-500 outline-none data-focus:bg-red-50 data-focus:text-red-600 dark:text-red-400 dark:data-focus:bg-red-500/10 dark:data-focus:text-red-300"
                                >
                                  <Trash2
                                    size={15}
                                    strokeWidth={2}
                                    className="text-red-400 group-data-focus:text-red-500 dark:group-data-focus:text-red-300"
                                  />

                                  <span>Delete</span>

                                  <kbd className="ml-auto hidden text-[10px] font-medium text-red-300 group-data-focus:inline dark:text-red-500">
                                    D
                                  </kbd>
                                </button>
                              </MenuItem>
                            </MenuItems>
                          </Menu>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* =====================================================
                  EDIT PRODUCT DIALOG
              ===================================================== */}

              <Dialog
                open={editingProduct !== null}
                onClose={() => {
                  if (!editLoading) {
                    setEditingProduct(null);
                  }
                }}
                className="relative z-[100]"
              >
                {/* Backdrop */}

                <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm" />

                {/* Dialog */}

                <div className="fixed inset-0 flex items-center justify-center overflow-y-auto p-4">
                  <DialogPanel
                    transition
                    className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/10 duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 dark:border-slate-700 dark:bg-slate-900"
                  >
                    {/* Header */}

                    <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <DialogTitle className="text-lg font-bold text-slate-900 dark:text-white">
                            Edit product
                          </DialogTitle>

                          <p className="mt-1 text-xs text-slate-400">
                            Update your product information and inventory
                            levels.
                          </p>
                        </div>

                        <button
                          type="button"
                          disabled={editLoading}
                          onClick={() => setEditingProduct(null)}
                          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Form */}

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();

                        if (!editingProduct) return;

                        const name = editFormData.name.trim();

                        const price = Number(editFormData.price);

                        const quantity = Number(editFormData.quantity);

                        const lowStockAt = editFormData.lowStockAt
                          ? Number(editFormData.lowStockAt)
                          : null;

                        // Validation

                        if (!name) {
                          alert("Product name is required.");
                          return;
                        }

                        if (!Number.isFinite(price) || price <= 0) {
                          alert("Enter a valid price.");
                          return;
                        }

                        if (!Number.isInteger(quantity) || quantity < 0) {
                          alert("Enter a valid quantity.");
                          return;
                        }

                        if (
                          lowStockAt !== null &&
                          (!Number.isInteger(lowStockAt) || lowStockAt < 0)
                        ) {
                          alert("Enter a valid low stock threshold.");
                          return;
                        }

                        if (lowStockAt !== null && lowStockAt > quantity) {
                          alert(
                            "Low stock threshold cannot be greater than available quantity.",
                          );
                          return;
                        }

                        setEditLoading(true);

                        try {
                          const result = await updateProduct(
                            editingProduct.id,
                            {
                              name,
                              sku: editFormData.sku.trim(),
                              price,
                              quantity,
                              lowStockAt,
                            },
                          );

                          if (!result.success) {
                            alert(result.message);
                            return;
                          }

                          // Close edit dialog

                          setEditingProduct(null);

                          // Show success dialog

                          setUpdateSuccessDialogOpen(true);

                          // Refresh inventory

                          router.refresh();
                        } catch (error) {
                          console.error("Edit product error:", error);

                          alert(
                            error instanceof Error
                              ? error.message
                              : "Something went wrong while updating the product.",
                          );
                        } finally {
                          setEditLoading(false);
                        }
                      }}
                    >
                      <div className="mb-6 mt-5 space-y-5 px-6">
                        {/* Product Name */}

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Product name
                          </label>

                          <div className="relative mb-2">
                            <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                              <Package
                                size={17}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                              />
                            </div>

                            <input
                              type="text"
                              value={editFormData.name}
                              style={{
                                paddingLeft: "48px",
                              }}
                              onChange={(e) =>
                                setEditFormData((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                              placeholder="Product name"
                            />
                          </div>
                        </div>

                        {/* SKU */}

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            SKU
                          </label>

                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                              <Hash
                                size={17}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                              />
                            </div>

                            <input
                              type="text"
                              value={editFormData.sku}
                              readOnly
                              style={{
                                paddingLeft: "48px",
                              }}
                              className="h-11 w-full rounded-lg border border-slate-200 bg-slate-100 pl-11 pr-4 text-sm text-slate-500 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                            />
                          </div>

                          <p className="mt-1.5 text-xs text-slate-400">
                            SKU cannot be changed.
                          </p>
                        </div>

                        {/* Price + Quantity */}

                        <div className="grid gap-4 sm:grid-cols-2">
                          {/* Price */}

                          <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                              Price
                            </label>

                            <div className="relative">
                              <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                                <DollarSign
                                  size={17}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />
                              </div>

                              <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={editFormData.price}
                                style={{
                                  paddingLeft: "48px",
                                }}
                                onChange={(e) =>
                                  setEditFormData((prev) => ({
                                    ...prev,
                                    price: e.target.value,
                                  }))
                                }
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                              />
                            </div>
                          </div>

                          {/* Quantity */}

                          <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                              Quantity
                            </label>

                            <div className="relative">
                              <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                                <Boxes
                                  size={17}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />
                              </div>

                              <input
                                type="number"
                                min="0"
                                step="1"
                                style={{
                                  paddingLeft: "48px",
                                }}
                                value={editFormData.quantity}
                                onChange={(e) =>
                                  setEditFormData((prev) => ({
                                    ...prev,
                                    quantity: e.target.value,
                                  }))
                                }
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Low Stock */}

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Low stock threshold
                          </label>

                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 flex w-full items-center gap-2.5 rounded-full px-3 py-2 text-left">
                              <Bell
                                size={17}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                              />
                            </div>

                            <input
                              type="number"
                              min="0"
                              step="1"
                              style={{
                                paddingLeft: "48px",
                              }}
                              value={editFormData.lowStockAt}
                              onChange={(e) =>
                                setEditFormData((prev) => ({
                                  ...prev,
                                  lowStockAt: e.target.value,
                                }))
                              }
                              placeholder="e.g. 5"
                              className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            />
                          </div>

                          <p className="mt-1.5 text-xs text-slate-400">
                            You'll be alerted when inventory reaches this level.
                          </p>
                        </div>
                      </div>

                      {/* Footer */}

                      <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5 dark:border-slate-800">
                        <button
                          type="button"
                          disabled={editLoading}
                          onClick={() => setEditingProduct(null)}
                          className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          disabled={editLoading}
                          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {editLoading ? "Saving..." : "Save changes"}
                        </button>
                      </div>
                    </form>
                  </DialogPanel>
                </div>
              </Dialog>

              {/* =====================================================
                  UPDATE SUCCESS DIALOG
              ===================================================== */}

              <Dialog
                open={updateSuccessDialogOpen}
                onClose={() => setUpdateSuccessDialogOpen(false)}
                className="relative z-[110]"
              >
                {/* Backdrop */}

                <div
                  className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
                  aria-hidden="true"
                />

                {/* Dialog container */}

                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <DialogPanel
                    transition
                    className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20 duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <div className="px-6 py-7 text-center">
                      {/* Success Icon */}

                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/10">
                        <CheckCircle2
                          size={30}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>

                      {/* Title */}

                      <DialogTitle className="text-lg font-bold text-slate-900 dark:text-white">
                        Updated successfully
                      </DialogTitle>

                      {/* Message */}

                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Your product information has been updated successfully.
                      </p>
                    </div>

                    {/* Button */}

                    <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setUpdateSuccessDialogOpen(false)}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
                      >
                        Done
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </Dialog>

              {/* =====================================================
                  DELETE CONFIRMATION DIALOG
              ===================================================== */}

              <Dialog
                open={deletingProduct !== null}
                onClose={() => setDeletingProduct(null)}
                className="relative z-[100]"
              >
                {/* Backdrop */}

                <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm" />

                {/* Dialog Position */}

                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <DialogPanel
                    transition
                    className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10 duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 dark:border-slate-700 dark:bg-slate-900"
                  >
                    {/* Icon */}

                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10">
                        <Trash2
                          size={20}
                          strokeWidth={2}
                          className="text-red-500 dark:text-red-400"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => setDeletingProduct(null)}
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                        aria-label="Close dialog"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* Content */}

                    <div className="mt-4">
                      <DialogTitle className="text-base font-semibold text-slate-900 dark:text-white">
                        Delete product?
                      </DialogTitle>

                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Are you sure you want to delete{" "}
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {deletingProduct?.name}
                        </span>
                        ? This action cannot be undone.
                      </p>
                    </div>

                    {/* Actions */}

                    <div className="mt-6 flex justify-end gap-2.5">
                      <button
                        type="button"
                        onClick={() => setDeletingProduct(null)}
                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={async () => {
                          if (!deletingProduct) return;

                          const productId = deletingProduct.id;

                          setDeletingProduct(null);

                          await handleDelete(productId);
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                      >
                        <Trash2 size={15} strokeWidth={2} />
                        Delete
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </Dialog>

              {/* =====================================================
                  DELETE RESULT DIALOG
              ===================================================== */}

              <Dialog
                open={deleteResult !== null}
                onClose={() => setDeleteResult(null)}
                className="relative z-[110]"
              >
                {/* Backdrop */}

                <div className="fixed inset-0 bg-slate-950/30 backdrop-blur-sm" />

                {/* Dialog Container */}

                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <DialogPanel
                    transition
                    className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xl shadow-slate-950/10 outline-none transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 dark:border-slate-700 dark:bg-slate-900"
                  >
                    {deleteResult && (
                      <>
                        {deleteResult.type === "success" ? (
                          <>
                            {/* Success Icon */}

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10">
                              <CheckCircle2
                                size={25}
                                strokeWidth={2}
                                className="text-emerald-500 dark:text-emerald-400"
                              />
                            </div>

                            {/* Title */}

                            <DialogTitle className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                              Product deleted
                            </DialogTitle>

                            {/* Message */}

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                              {deleteResult.message}
                            </p>

                            {/* Success Button */}

                            <button
                              type="button"
                              onClick={() => setDeleteResult(null)}
                              className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                            >
                              Done
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Error Icon */}

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10">
                              <AlertCircle
                                size={25}
                                strokeWidth={2}
                                className="text-red-500 dark:text-red-400"
                              />
                            </div>

                            {/* Title */}

                            <DialogTitle className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                              Delete failed
                            </DialogTitle>

                            {/* Message */}

                            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                              {deleteResult.message}
                            </p>

                            {/* Error Button */}

                            <button
                              type="button"
                              onClick={() => setDeleteResult(null)}
                              className="mt-6 w-full rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/30"
                            >
                              Close
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </DialogPanel>
                </div>
              </Dialog>
            </div>
          )}

          {/* =====================================================
              PAGINATION
          ===================================================== */}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredProducts.length}
            currentItems={paginatedProducts.length}
            onPageChange={setCurrentPage}
          />
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <main className="p-4 sm:p-6 lg:p-8">
          <FooterPage />
        </main>
      </div>
    </div>
  );
}
