import Link from "next/link";
import { SignIn } from "@hexclave/next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
  // Check the current authentication session
  const user = await getCurrentUser();

  // Automatically send authenticated users to dashboard
  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className="signin-page relative isolate min-h-screen overflow-hidden bg-slate-950">
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/20">
              <span className="text-lg font-bold text-white">I</span>
            </div>

            <span className="text-xl font-bold tracking-tight text-white">
              Inventory<span className="text-purple-400">Pro</span>
            </span>
          </Link>

          {/* Register */}
          <Link
            href="/sign-up"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Not User Yet? Register
          </Link>
        </nav>
      </header>

      {/* Sign In Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pb-12 pt-28 lg:px-8">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-8 text-center">
            {/* Badge */}
            <div className="mb-5 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-purple-400" />
                </span>
                Secure Access
              </div>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-center">
              <SignIn />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 h-64 w-full max-w-5xl -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl"
      />
    </main>
  );
}
