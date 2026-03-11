import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const pages = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Earn With Us", href: "/earn-with-us" },
  { label: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const { count } = useCart();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
        className="fixed left-4 top-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-[#e3c7c7] bg-white/95 text-[#973131] shadow-lg transition hover:scale-105 hover:bg-[#fbf3f3] focus:outline-none focus:ring-2 focus:ring-[#d7b0b0]"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <nav className="pointer-events-none sticky top-0 left-0 right-0 z-40 pt-4">
        <div className="mx-auto flex w-fit flex-col items-center rounded-2xl border border-white/20 bg-slate-900/85 px-6 py-2.5 shadow-[0_15px_45px_rgba(0,0,0,0.28)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-6">
          <Link href="/" className="pointer-events-auto inline-flex items-center justify-center">
            <Image
              src="/assets/dietethics-logo.png"
              alt="DietEthics"
              width={245}
              height={64}
              priority
              className="h-11 w-auto sm:h-14"
            />
          </Link>
          <span className="mt-1 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3dede] sm:hidden">
            pure . honest . nutritious!
          </span>
          <span className="hidden border-l border-[#e3c7c7]/40 pl-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f3dede] sm:block">
            pure . honest . nutritious!
          </span>
        </div>
      </nav>

      <div className="fixed right-4 top-5 z-[70] flex items-center gap-2 sm:gap-3">
        <Link href="/cart" className="relative">
          <button className="rounded-full border border-[#e3c7c7] bg-white/95 p-2 text-[#973131] shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#fbf3f3]">
            <ShoppingCart className="h-6 w-6" strokeWidth={2.2} aria-hidden />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#973131] text-xs text-white">
                {count}
              </span>
            )}
          </button>
        </Link>
      </div>

      <div
        className={`fixed inset-0 z-[80] bg-black/45 transition ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-[90] h-full w-[280px] max-w-[86vw] transform border-r border-[#e3c7c7] bg-[#faf5f5] shadow-2xl transition duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-[#e3c7c7] px-5 py-5">
            <Image
              src="/assets/dietethics-logo-black.png"
              alt="DietEthics"
              width={170}
              height={44}
              className="h-10 w-auto"
            />
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full p-2 text-[#973131] transition hover:bg-[#f5e7e7]"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#b45a5a]">
              Explore
            </div>
            <div className="space-y-2">
              {pages.map((page) => {
                const active = router.pathname === page.href;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                      active
                        ? "bg-[#973131] text-white shadow-md"
                        : "text-slate-800 hover:bg-[#f5e7e7]"
                    }`}
                  >
                    {page.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 border-t border-[#e3c7c7] pt-4">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                  router.pathname === "/login"
                    ? "bg-[#973131] text-white shadow-md"
                    : "text-slate-800 hover:bg-[#f5e7e7]"
                }`}
              >
                Login
              </Link>
            </div>
          </div>

          <div className="border-t border-[#e3c7c7] px-4 py-5">
            <div className="rounded-2xl bg-[#f5e7e7] px-4 py-3 text-sm font-semibold text-[#7f2929]">
              pure . honest . nutritious!
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}


