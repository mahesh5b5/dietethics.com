import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronsRight, Minus, Plus, ShoppingCart, Tag } from "lucide-react";
import { useCart } from "../context/CartContext";
import SEO from "../components/SEO";

export default function Cart() {
  const { items, remove, add } = useCart();
  const [affiliateCode, setAffiliateCode] = useState("");

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );
  const discount = 0;
  const shipping = items.length > 0 ? 49 : 0;
  const total = subtotal - discount + shipping;

  return (
    <main className="page-shell">
      <SEO
        title="Cart"
        description="Review items in your Diet Ethics cart and proceed to checkout."
        path="/cart"
        noindex
      />
      <section className="page-card">
        <p className="brand-tagline">pure . honest . nutritions</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-6 flex min-h-[52vh] items-center justify-center rounded-2xl border border-dashed border-[#d7b0b0] bg-[#fff8f8] p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#e3c7c7] bg-white">
                <ShoppingCart className="h-14 w-14 text-[#973131]" />
              </div>
              <p className="mt-5 text-xl font-extrabold text-slate-900">Your cart is empty</p>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                Looks like you have not added anything yet. Explore products and start building your healthy cart.
              </p>
              <Link
                href="/#products"
                className="mt-5 inline-flex items-center rounded-full bg-[#973131] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#7f2929]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-3">
              {items.map((item, index) => (
                <article
                  key={item.key}
                  className={`bg-white p-4 ${index < items.length - 1 ? "border-b border-[#e3c7c7]" : ""}`}
                >
                  <div className="grid gap-3 sm:grid-cols-[96px_1fr_auto] sm:items-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-[#e3c7c7] bg-white">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                          sizes="96px"
                        />
                      ) : null}
                    </div>

                    <div>
                      <p className="text-base font-bold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-600">{item.grams || "Standard Pack"}</p>
                      <p className="mt-2 text-sm font-semibold text-[#973131]">
                        Rs. {Number(item.price || 0).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => remove(item)}
                          className="rounded-full border border-[#e3c7c7] p-1.5 text-[#973131] hover:bg-[#fbf3f3]"
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold text-slate-900">{item.qty}</span>
                        <button
                          onClick={() => add(item)}
                          className="rounded-full border border-[#e3c7c7] p-1.5 text-[#973131] hover:bg-[#fbf3f3]"
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <Link
                href="/#products"
                className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#973131] underline-offset-4 transition hover:underline"
              >
                Continue Shopping <ChevronsRight className="h-4 w-4" />
              </Link>
            </div>

            <aside className="h-fit rounded-2xl border border-[#e3c7c7] bg-[#fff8f8] p-5">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#973131]">Order Summary</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-slate-700">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span>Discount</span>
                  <span>Rs. {discount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span>Shipping</span>
                  <span>Rs. {shipping.toLocaleString("en-IN")}</span>
                </div>
                <div className="mt-2 border-t border-[#e3c7c7] pt-3 text-lg font-extrabold text-slate-900">
                  <div className="flex items-center justify-between">
                    <span>Total</span>
                    <span>Rs. {total.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white p-3">
                <label htmlFor="affiliate-code" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#973131]">
                  <Tag className="h-3.5 w-3.5" />
                  Affiliate Code
                </label>
                <input
                  id="affiliate-code"
                  value={affiliateCode}
                  onChange={(event) => setAffiliateCode(event.target.value)}
                  placeholder="Enter code"
                  className="mt-3 w-full rounded-lg border border-[#e3c7c7] px-3 py-2 text-sm focus:border-[#973131] focus:outline-none"
                />
                <button
                  type="button"
                  disabled={!affiliateCode.trim()}
                  className="mt-3 w-full rounded-lg bg-[#973131] py-2 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-[#7f2929] disabled:cursor-not-allowed disabled:bg-[#c69191]"
                >
                  Apply Code
                </button>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-slate-900 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white hover:bg-black"
              >
                Proceed to Checkout
              </button>
              <Link
                href="/#products"
                className="mt-3 hidden w-full rounded-xl border border-[#e3c7c7] bg-white py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#973131] hover:bg-[#fbf3f3]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}


