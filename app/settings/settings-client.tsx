"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar";
import HeaderPage from "@/app/dashboard/header-page";
import FooterPage from "@/app/dashboard/footer-page";
import { Package, X } from "lucide-react";
import { AccountSettings } from "@hexclave/next";

type SettingsUser = {
  id: string;
  displayName: string | null;
  email: string | null;
  profileImageUrl: string | null;
};

type SettingsClientProps = {
  user: SettingsUser;
};

export default function SettingsClient({ user }: SettingsClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        {/* =====================================================
            HEADER
        ===================================================== */}
        <HeaderPage
          title="Settings"
          description="Manage your Inventory Pro account settings."
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* =====================================================
            SETTINGS SECTION
        ===================================================== */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* =================================================
              SECTION HEADER
          ================================================= */}
          <div className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
            {/* Background Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-violet-500/5 blur-3xl"
            />

            <div className="relative px-5 py-6 sm:px-6">
              {/* =================================================
                  TITLE ROW
              ================================================= */}
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
                      Account settings
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      Make changes to your account settings here.
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close"
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                >
                  <X size={19} strokeWidth={2} />
                </button>
              </div>

              {/* =================================================
                  QUICK SUMMARY
              ================================================= */}
              <div className="mt-6 flex w-full items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />

                <span className="text-[11px] font-medium text-slate-400">
                  Account settings
                </span>

                <span className="text-slate-300 dark:text-slate-700">•</span>

                <span className="text-[11px] font-medium text-slate-400">
                  Inventory preferences
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              PAGE CONTENT
          ================================================= */}
          <div className="flex min-h-full items-center justify-center bg-white p-6 dark:bg-slate-950 dark:text-slate-100">
            <div className="w-full ">
              {/* Page Template Here*/}

              <AccountSettings fullPage />

              {/*  Page Template End Here    */}
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
    </div>
  );
}
