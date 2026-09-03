"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Boxes,
  ChevronDown,
  CreditCard,
  DollarSign,
  Menu,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  ShoppingCart,
  Users,
  CircleCheck,
  AlertCircle,
  CircleX,
} from "lucide-react";

const chartData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 72 },
  { month: "May", value: 62 },
  { month: "Jun", value: 84 },
  { month: "Jul", value: 76 },
  { month: "Aug", value: 94 },
];
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import FooterPage from "@/app/dashboard/footer-page";
import HeaderPage from "./header-page";
import ProductsChart from "@/components/products-chart";
import EfficiencyChart from "@/components/EfficiencyChart";
import Link from "next/link";

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

// Defines the props (data) that DashboardClient receives from page.tsx.
// Each property represents a specific piece of dashboard information.

type DashboardClientProps = {
  totalProducts: number;
  lowStock: number;
  recent: Product[];
  inventoryValue: number;
  allProducts: Product[];
  userName: string;
  greeting: string;
};

export default function DashboardClient({
  totalProducts,
  lowStock,
  recent,
  inventoryValue,
  allProducts,
  userName,
  greeting,
}: DashboardClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Calculate stock units of the all product products
  const stockUnits = allProducts.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  //Efficiency Data Display
  // Other calculations...

  const efficiencyData = [
    {
      name: "In Stock",
      value: allProducts.filter(
        (product) => product.quantity > (product.lowStockAt ?? 5),
      ).length,
    },
    {
      name: "Low Stock",
      value: allProducts.filter(
        (product) =>
          product.quantity > 0 && product.quantity <= (product.lowStockAt ?? 5),
      ).length,
    },
    {
      name: "Out of Stock",
      value: allProducts.filter((product) => product.quantity === 0).length,
      icon: <AlertTriangle size={14} className="text-red-500" />,
    },
  ];
  //End of Efficiency Display

  // Product Chart Display

  const now = new Date();

  const WeeklyProductsData: {
    week: string;
    products: number;
  }[] = [];

  for (let i = 11; i >= 0; i--) {
    // Create a copy of today's date
    const weekStart = new Date(now);

    // Get the current day of the week
    // Sunday = 0, Monday = 1, ..., Saturday = 6
    const currentDay = weekStart.getDay();

    // Move to the Sunday of the current week
    // Then go back i weeks
    weekStart.setDate(weekStart.getDate() - currentDay - i * 7);

    // Start of Sunday
    weekStart.setHours(0, 0, 0, 0);

    // Create Saturday
    const weekEnd = new Date(weekStart);

    weekEnd.setDate(weekEnd.getDate() + 6);

    // End of Saturday
    weekEnd.setHours(23, 59, 59, 999);

    // Display label
    const weekLabel = `${String(weekStart.getMonth() + 1).padStart(
      2,
      "0",
    )}/${String(weekStart.getDate()).padStart(2, "0")}`;

    // Find products created during this week
    const weekProducts = allProducts.filter((product) => {
      const productDate = new Date(product.createdAt);

      return productDate >= weekStart && productDate <= weekEnd;
    });

    // Store the result
    WeeklyProductsData.push({
      week: weekLabel,
      products: weekProducts.length,
    });
  }

  console.log("Weekly Products Data:", WeeklyProductsData);

  // End of Product Chart Display

  //Start Get the authenticated user's name

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-72">
        <HeaderPage
          title="Dashboard"
          description="Here's what's happening with your inventory today."
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* ===================================================
            PAGE
        =================================================== */}

        <main className="p-4 sm:p-6 lg:p-8">
          {/* =================================================
              WELCOME
          ================================================= */}
          <section className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Overview
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {greeting} {userName}
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Here's an overview of your inventory performance.
              </p>
            </div>

            <Link
              href="/add-product"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500"
            >
              <Plus
                size={17}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
              Add Product
            </Link>
          </section>
          {/* =================================================
              STATISTICS
          ================================================= */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Total Products */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900/80">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Total Products
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    {totalProducts.toLocaleString()}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Package size={21} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                  <ArrowUpRight size={14} />
                  Active
                </span>

                <span className="text-slate-400">Products in inventory</span>
              </div>
            </div>

            {/* Low Stock */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Low Stock
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    {lowStock.toLocaleString()}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                  <AlertTriangle size={21} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="font-semibold text-amber-600 dark:text-amber-400">
                  Attention
                </span>

                <span className="text-slate-400">Products need restocking</span>
              </div>
            </div>

            {/* Inventory Value */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Inventory Value
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    $
                    {inventoryValue.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <DollarSign size={21} />
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-400">
                Based on recent products
              </div>
            </div>

            {/* Stock Units */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Stock Units
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    {stockUnits.toLocaleString()}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Boxes size={21} />
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-400">
                Units across recent products
              </div>
            </div>
          </section>
          {/* =================================================
              CHART + QUICK ACTIONS
          ================================================= */}
          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* Chart */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Product Overview
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    New Product Per Week
                  </p>
                </div>

                {/*<button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">*/}
                {/*  Monthly*/}
                {/*  <ChevronDown size={13} />*/}
                {/*</button>*/}
              </div>

              {/* Product Chart */}
              <div className="mt-8 h-64 w-full">
                <ProductsChart data={WeeklyProductsData} />
              </div>
            </div>

            {/*            /!* =================================================*/}
            {/*    EFFICIENCY DATA*/}
            {/*================================================= *!/*/}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {/* Header */}
              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">
                  Stock Overview
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Current inventory levels
                </p>
              </div>

              {/* Donut Chart */}
              <div className="mt-4">
                <EfficiencyChart data={efficiencyData} />
              </div>

              {/* Legend */}
              <div className="mt-2 space-y-3">
                {efficiencyData.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    {/* Status */}
                    <div className="flex items-center gap-2">
                      {index === 0 && (
                        <CircleCheck
                          size={18}
                          strokeWidth={2.5}
                          className="text-emerald-500"
                        />
                      )}

                      {index === 1 && (
                        <AlertCircle
                          size={18}
                          strokeWidth={2.5}
                          className="text-amber-500"
                        />
                      )}

                      {index === 2 && (
                        <CircleX
                          size={18}
                          strokeWidth={2.5}
                          className="text-red-500"
                        />
                      )}

                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {item.name}
                      </span>
                    </div>

                    {/* Count */}
                    <span
                      className={`text-xs font-bold ${
                        index === 0
                          ? "text-emerald-600 dark:text-emerald-400"
                          : index === 1
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Efficiency content goes here */}
          </section>

          {/* =================================================
    RECENT PRODUCTS + EFFICIENCY DATA
================================================= */}
          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* =================================================
      RECENT PRODUCTS
  ================================================= */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 dark:border-slate-800">
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Recent Products
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Your latest inventory additions
                  </p>
                </div>

                <a
                  href="/inventory"
                  className="text-xs font-bold text-indigo-600 transition hover:text-violet-600 dark:text-indigo-400 dark:hover:text-violet-400"
                >
                  View All
                </a>
              </div>

              {/* Table */}
              {recent.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <Package className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-700" />

                  <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-300">
                    No products found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Add your first product to see it here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left">
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

                        {/*<th className="px-5 py-3" />*/}
                      </tr>
                    </thead>

                    <tbody>
                      {recent.map((product) => {
                        const isLowStock =
                          product.quantity <= (product.lowStockAt ?? 5);

                        return (
                          <tr
                            key={product.id}
                            className="border-b border-slate-100 transition last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                          >
                            {/* Product */}
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
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
                            <td className="px-5 py-4">
                              <span
                                className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-bold ${
                                  isLowStock
                                    ? "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
                                    : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                                }`}
                              >
                                {product.quantity} units
                              </span>
                            </td>

                            {/* Actions */}
                            {/*<td className="px-5 py-4 text-right">*/}
                            {/*  <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200">*/}
                            {/*    <MoreHorizontal size={18} />*/}
                            {/*  </button>*/}
                            {/*</td>*/}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-bold text-slate-900 dark:text-white">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Frequently used tools
              </p>

              <div className="mt-5 space-y-3">
                {/* Add Product */}
                <Link href="../add-product">
                  <button className="group flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-left transition hover:border-indigo-100 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <Package size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Add Product
                      </p>

                      <p className="text-xs text-slate-400">
                        Create a new product
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-slate-300 transition group-hover:text-indigo-600 dark:text-slate-600 dark:group-hover:text-indigo-400"
                    />
                  </button>
                </Link>
                {/* Add Customer */}
                <Link href="../inventory">
                  <button className="group flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-left transition hover:border-violet-100 hover:bg-violet-50 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                      <Users size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Products
                      </p>

                      <p className="text-xs text-slate-400">
                        Manage product(s)
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-slate-300 transition group-hover:text-violet-600 dark:text-slate-600 dark:group-hover:text-violet-400"
                    />
                  </button>
                </Link>
                {/* View Payments */}
                <Link href="../settings">
                  <button className="group flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-left transition hover:border-indigo-100 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                      <CreditCard size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Settings
                      </p>

                      <p className="text-xs text-slate-400">
                        Manage account settings
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-slate-300 transition group-hover:text-indigo-600 dark:text-slate-600 dark:group-hover:text-indigo-400"
                    />
                  </button>
                </Link>
              </div>
              <Link href="./">
                <button className="mt-5 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white">
                  View All Actions
                </button>
              </Link>
            </div>
          </section>

          <FooterPage />
        </main>
      </div>
    </div>
  );
}
