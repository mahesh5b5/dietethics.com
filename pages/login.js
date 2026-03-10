import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";

export default function Login() {
  return (
    <main className="page-shell flex min-h-[76vh] items-center justify-center">
      <SEO
        title="Login"
        description="Sign in to your Diet Ethics account to manage orders and preferences."
        path="/login"
        noindex
      />
      <section className="w-full max-w-md overflow-hidden rounded-[1.8rem] border border-[#e3c7c7] bg-white/95 p-6 shadow-[0_18px_44px_rgba(73,26,26,0.12)] sm:p-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/dietethics-logo-black.png"
            alt="DietEthics"
            width={300}
            height={76}
            className="h-16 w-auto"
            priority
          />
          <p className="mt-3 brand-tagline">pure . honest . nutritions</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-slate-600">Login to manage your orders, profile, and preferences.</p>
        </div>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-xl border border-[#e3c7c7] bg-white px-3 py-2.5 shadow-sm focus:border-[#973131] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <Link href="#" className="text-xs font-bold text-[#973131] hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-xl border border-[#e3c7c7] bg-white px-3 py-2.5 shadow-sm focus:border-[#973131] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-1 w-full rounded-xl bg-[#973131] py-2.5 font-semibold text-white transition hover:bg-[#7f2929]"
          >
            Sign In
          </button>

          <div className="flex items-center gap-3 pt-1">
            <span className="h-px flex-1 bg-[#e3c7c7]" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">or</span>
            <span className="h-px flex-1 bg-[#e3c7c7]" />
          </div>

          <button
            type="button"
            className="w-full rounded-xl border border-[#e3c7c7] bg-white py-2.5 font-semibold text-slate-800 transition hover:bg-[#fbf3f3]"
          >
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.3-11.5-8l-6.6 5.1C9.2 39.6 16 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.6-2.4 4.7-4.6 6.1l.1-.1 6.3 5.2C36.7 39.6 44 34 44 24c0-1.2-.1-2.3-.4-3.5z"/>
              </svg>
              Continue with Google
            </span>
          </button>
        </form>
      </section>
    </main>
  );
}



