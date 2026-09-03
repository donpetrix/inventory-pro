"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bell,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Package,
  Plus,
  Settings,
  ShoppingCart,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { UserButton } from "@hexclave/next";

type SidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

type NavigationItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
};

const mainNavigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/inventory",
    icon: Package,
  },
  {
    name: "Add Product",
    href: "/add-product",
    icon: Plus,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },

  // {
  //   name: "Orders",
  //   href: "/dashboard/orders",
  //   icon: ShoppingCart,
  //   badge: "12",
  // },
  // {
  //   name: "Customers",
  //   href: "/dashboard/customers",
  //   icon: Users,
  // },
  // {
  //   name: "Payments",
  //   href: "/dashboard/payments",
  //   icon: CreditCard,
  // },
];

const secondaryNavigation: NavigationItem[] = [
  // {
  //   name: "Analytics",
  //   href: "/dashboard/analytics",
  //   icon: BarChart3,
  // },
  // {
  //   name: "Notifications",
  //   href: "/dashboard/notifications",
  //   icon: Bell,
  // },
  // {
  //   name: "Settings",
  //   href: "/settings",
  //   icon: Settings,
  // },
];

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72
          flex-col bg-slate-950 text-white
          transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
            onClick={onClose}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/20">
              <BarChart3 size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                Inventory
                <span className="text-indigo-400">Pro</span>
              </h1>

              <p className="text-[9px] font-semibold tracking-[0.2em] text-slate-400">
                BUSINESS PLATFORM
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Workspace */}
        <div className="px-4 pt-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-sm font-bold text-indigo-300">
                IP
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  Inventory Pro LLC
                </p>

                <p className="text-xs text-slate-500">Business Account</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {/* Main */}
          <div>
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Main Menu
            </p>

            <div className="space-y-1">
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-3 rounded-xl px-3 py-3
                      text-sm font-medium transition-all
                      ${
                        active
                          ? "bg-white text-slate-950 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-indigo-600"
                          : "text-slate-500 group-hover:text-slate-300"
                      }
                    />

                    <span>{item.name}</span>

                    {item.badge !== undefined && (
                      <span
                        className={`
                          ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold
                          ${
                            active
                              ? "bg-indigo-100 text-indigo-600"
                              : "bg-white/10 text-slate-400"
                          }
                        `}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Management */}
          <div className="mt-8 hidden">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Management
            </p>

            <div className="space-y-1">
              {secondaryNavigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-3 rounded-xl px-3 py-3
                      text-sm font-medium transition-all
                      ${
                        active
                          ? "bg-white text-slate-950"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-indigo-600"
                          : "text-slate-500 group-hover:text-slate-300"
                      }
                    />

                    <span>{item.name}</span>

                    {item.badge !== undefined && (
                      <span
                        className={`
                          ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold
                          ${
                            active
                              ? "bg-indigo-100 text-indigo-600"
                              : "bg-white/10 text-slate-400"
                          }
                        `}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Upgrade Card */}
        <div className="px-4 pb-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-5">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <BarChart3 size={17} />
              </div>

              <h3 className="text-sm font-bold">Upgrade to Pro</h3>

              <p className="mt-1 text-xs leading-5 text-indigo-100">
                Unlock advanced analytics and unlimited features.
              </p>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-white py-2.5 text-xs font-bold text-indigo-600 transition hover:bg-indigo-50"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        {/* User */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <UserButton showUserInfo />
          </div>
        </div>
      </aside>
    </>
  );
}
