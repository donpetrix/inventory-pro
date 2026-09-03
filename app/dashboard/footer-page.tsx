import React from "react";

export default function FooterPage() {
  return (
    // /* =================================================
    //           FOOTER
    //       ================================================= */

    <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 dark:border-slate-800 sm:flex-row">
      <p>© 2026 InventoryPro. All rights reserved.</p>

      <div className="flex gap-5">
        <a
          href="#"
          className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Privacy
        </a>

        <a
          href="#"
          className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Terms
        </a>

        <a
          href="#"
          className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Help Center
        </a>
      </div>
    </footer>
  );
}
