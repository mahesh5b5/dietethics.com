import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronsRight, Minus, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import siteConfig from "../../data/site-config.json";

const { compliance } = siteConfig;

export default function ProductDetailsPanel({ product, className = "", hideShowcaseOnMobile = false }) {
  const { add, remove, getQty } = useCart();
  const defaultBenefits = useMemo(
    () => ["No Artificial Preservatives", "Freshly Packed", "Quality Checked Batch"],
    []
  );
  const gallery = useMemo(() => {
    if (!product) return [];
    const base =
      product.gallery && product.gallery.length > 0 ? [...product.gallery] : [product.image];
    while (base.length < 4) base.push(base[base.length % Math.max(1, base.length)]);
    return base.slice(0, 4);
  }, [product]);
  const [activeImageState, setActiveImageState] = useState({ productName: "", index: 0 });
  const [selectedVariantState, setSelectedVariantState] = useState({ productName: "", index: 0 });
  const activeImage = activeImageState.productName === product?.name ? activeImageState.index : 0;
  const selectedVariantIndex =
    selectedVariantState.productName === product?.name ? selectedVariantState.index : 0;

  useEffect(() => {
    if (gallery.length < 2) return undefined;
    const timer = setInterval(() => {
      setActiveImageState((prev) => {
        const previousIndex = prev.productName === product?.name ? prev.index : 0;
        return {
          productName: product?.name || "",
          index: (previousIndex + 1) % gallery.length,
        };
      });
    }, 3200);
    return () => clearInterval(timer);
  }, [gallery, product?.name]);

  const benefits = useMemo(() => {
    const merged = [...(product?.highlights || []), ...defaultBenefits];
    return [...new Set(merged)];
  }, [defaultBenefits, product?.highlights]);

  const hasVariants = (product?.variants?.length || 0) > 0;
  const selectedVariant = hasVariants ? product.variants[selectedVariantIndex] : null;
  const displayGrams = selectedVariant?.grams || product?.grams || "250g";
  const displayPrice = selectedVariant?.price || product?.price || "Rs. 399";
  const caloriesLabel = product?.caloriesPerServing || compliance.caloriesPerServingLabel;
  const selectedPayload = {
    ...product,
    grams: displayGrams,
    price: displayPrice,
  };
  const cartQty = getQty(product?.name, displayGrams);

  if (!product) return null;

  return (
    <section
      className={`mt-5 overflow-hidden rounded-[1.6rem] border border-[#e3c7c7] bg-white/95 shadow-[0_14px_40px_rgba(29,91,64,0.14)] ${className}`}
    >
      <div className="flex flex-col gap-4 p-3 sm:p-4 md:flex-row md:items-stretch">
        <div
          className={`relative overflow-hidden rounded-2xl border border-[#e3c7c7] p-3 sm:p-4 md:basis-2/5 ${
            hideShowcaseOnMobile ? "hidden md:block" : ""
          }`}
        >
          <div className="mx-auto w-full max-w-[470px]">
            <div className="flex items-start gap-2">
              <div className="relative aspect-[4/4.8] flex-1 overflow-hidden rounded-xl shadow-inner">
                <Image
                  src={gallery[activeImage] || product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2 transition duration-500"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#973131]">
                  {product.badge}
                </span>
              </div>
              <div className="flex w-12 flex-col gap-2">
                {gallery.map((image, index) => (
                  <button
                    key={`${product.name}-thumb-${index}`}
                    onClick={() => setActiveImageState({ productName: product?.name || "", index })}
                    className={`relative aspect-square overflow-hidden rounded-lg border ${
                      activeImage === index
                        ? "border-[#973131] ring-2 ring-[#ead6d6]"
                        : "border-[#e3c7c7]"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain p-1.5"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="p-1 sm:p-2 md:basis-3/5 md:pl-3">
          <p className="brand-tagline">Product Details</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{product.name}</h3>
          <p className="mt-3 max-w-2xl text-base text-slate-700">{product.note}</p>

          {hasVariants ? (
            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Select Variant</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={`${product.name}-${variant.grams}`}
                    onClick={() => setSelectedVariantState({ productName: product?.name || "", index })}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] transition ${
                      selectedVariantIndex === index
                        ? "border-[#973131] bg-[#973131] text-white"
                        : "border-[#e3c7c7] bg-white text-slate-700 hover:bg-[#fbf3f3]"
                    }`}
                  >
                    {variant.grams}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Net Weight</p>
              <p className="mt-2 text-2xl font-extrabold leading-none text-slate-900">{displayGrams}</p>
            </div>
            <div className="rounded-2xl border border-[#e3c7c7] bg-[#fbf3f3]/80 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#973131]">Price</p>
              <p className="mt-2 text-2xl font-extrabold leading-none text-[#973131]">{displayPrice}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            {cartQty > 0 ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#e3c7c7] bg-white px-2 py-1.5">
                  <button
                    onClick={() => remove(selectedPayload)}
                    className="rounded-full border border-[#e3c7c7] p-1 text-[#973131] hover:bg-[#fbf3f3]"
                    aria-label={`Decrease quantity for ${product.name}`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-8 text-center text-sm font-bold text-slate-900">{cartQty}</span>
                  <button
                    onClick={() => add(selectedPayload)}
                    className="rounded-full border border-[#e3c7c7] p-1 text-[#973131] hover:bg-[#fbf3f3]"
                    aria-label={`Increase quantity for ${product.name}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Link
                  href="/cart"
                  className="ml-2 inline-flex items-center gap-1 text-sm font-bold text-[#973131] underline-offset-4 transition hover:underline"
                >
                  Go to Cart <ChevronsRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  add(selectedPayload);
                }}
                className="rounded-full bg-[#973131] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#7f2929]"
              >
                Add to Cart
              </button>
            )}
          </div>

          <div className="mt-4 grid gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">FSSAI</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                License No: {compliance.fssaiLicenseNumber}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Calories</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {caloriesLabel}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Benefits</p>
            <ul className="mt-2 space-y-2">
              {benefits.map((item) => (
                <li key={item} className="text-sm text-slate-700">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

