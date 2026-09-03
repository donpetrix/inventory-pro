import Link from "next/link";

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-fuchsia-500 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/20">
              <span className="text-lg font-bold text-white">I</span>
            </div>

            <span className="text-xl font-bold tracking-tight text-white">
              Inventory<span className="text-purple-400">Pro</span>
            </span>
          </Link>

          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-400 backdrop-blur">
            Loading...
          </div>
        </nav>
      </header>

      {/* Loading Content */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24 lg:px-8">
        <div className="w-full max-w-md text-center">
          {/* Loading Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative flex size-20 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
              {/* Spinner */}
              <div className="size-10 animate-spin rounded-full border-4 border-purple-400/20 border-t-purple-400" />

              {/* Center dot */}
              <div className="absolute size-2 rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-400/50" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loading InventoryPro
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Please wait while we prepare everything for you.
          </p>

          {/* Progress animation */}
          <div className="mx-auto mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
          </div>

          {/* Status */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-purple-400" />
            </span>
            Preparing your dashboard...
          </div>
        </div>
      </section>

      {/* Bottom Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-64 w-full max-w-5xl -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl"
      />

      {/* Loading Animation */}
      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </main>
  );
}
