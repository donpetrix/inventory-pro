import React from "react";

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
} from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { UserButton } from "@hexclave/next";

type HeaderPageProps = {
  onMenuClick?: () => void;
  title?: string;
  description?: string;
};

export default function HeaderPage({
  onMenuClick,
  title = "Dashboard",
  description = "Here's what's happening with your business today.",
}: HeaderPageProps) {
  return (
    // /* =====================================================
    //     MAIN CONTENT
    // ===================================================== */

    // /* ===================================================
    //     HEADER
    // =================================================== */

    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="flex items-center gap-4">
        {/*Mobile menu */}

        <button
          onClick={onMenuClick}
          className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>

          {description && (
            <p className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        {/*<button className="hidden rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400 sm:block">*/}
        {/*  <Search size={19} />*/}
        {/*</button>*/}

        {/* Dark mode */}
        <ThemeToggle />

        {/* Notifications */}
        {/*<button className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400">*/}
        {/*  <Bell size={19} />*/}

        {/*  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-500" />*/}
        {/*</button>*/}

        {/* User */}

        <div className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100 dark:hover:bg-slate-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold text-white shadow-lg shadow-indigo-500/20">
            <UserButton />
          </div>

          <ChevronDown size={15} className="hidden text-slate-400 sm:block" />
        </div>
      </div>
    </header>
  );
}
