import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // Check the current authentication session
  const user = await getCurrentUser();

  // Automatically send authenticated users to dashboard
  if (user) {
    redirect("/dashboard");
  }

  // User is authenticated if getCurrentUser() returns a user
  const isAuthenticated = !!user;

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

          {/* Sign In / Dashboard */}
          <Link
            href={isAuthenticated ? "/dashboard" : "/sign-in"}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            {isAuthenticated ? "Go to Dashboard" : "Sign In"}
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-purple-400" />
              </span>
              Smart Inventory Management
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Take control of your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
              inventory
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate-400 sm:text-xl">
            Streamline your inventory tracking with a powerful, easy-to-use
            management system. Track products, monitor stock levels, and make
            smarter decisions with real-time insights.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Main CTA */}
            <Link
              href={isAuthenticated ? "/dashboard" : "/sign-in"}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-purple-500/30"
            >
              {isAuthenticated ? "Go to Dashboard" : "Get Started"}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Learn More */}
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              Real-time tracking
            </div>

            <div className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              Easy to use
            </div>

            <div className="flex items-center gap-2">
              <span className="text-purple-400">✓</span>
              Powerful insights
            </div>
          </div>
        </div>
      </section>

      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-64 w-full max-w-5xl -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl"
      />
    </main>
  );
}
