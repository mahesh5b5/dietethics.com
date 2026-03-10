import Image from "next/image";
import { ChevronsDown, Minus, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({
  product,
  onAddToCart,
  onSelect,
  isActive = false,
  showInlineDetails = false,
}) {
  const { add, remove, getQty } = useCart();
  const inlineBenefits = (product.highlights || []).slice(0, 4);
  const visibleWeight = product.variants?.[0]?.grams || product.grams || "250g";
  const visiblePrice = product.variants?.[0]?.price || product.price || "Rs. 399";
  const basePayload = {
    ...product,
    grams: visibleWeight,
    price: visiblePrice,
  };
  const cartQty = getQty(product.name);

  return (
    <article
      onClick={() => onSelect?.(product)}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border shadow-[0_12px_30px_rgba(29,91,64,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(29,91,64,0.16)] ${
        isActive ? "border-[#973131] bg-white ring-2 ring-[#ead6d6]" : "border-[#e3c7c7]"
      }`}
    >
      <div className="relative aspect-[4/5] bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 16vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/5 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#973131]">
          {product.badge}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-[#e3c7c7] bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
          {visibleWeight}
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-base font-bold text-slate-900 sm:text-lg">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-600 sm:text-sm">{product.note}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-[#973131]">{product.tag}</span>
          {cartQty > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  remove(basePayload);
                }}
                className="rounded-full border border-[#e3c7c7] p-1 text-[#973131] hover:bg-[#fbf3f3]"
                aria-label={`Decrease quantity for ${product.name}`}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="min-w-6 text-center text-xs font-bold text-slate-900">{cartQty}</span>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  add(basePayload);
                }}
                className="rounded-full border border-[#e3c7c7] p-1 text-[#973131] hover:bg-[#fbf3f3]"
                aria-label={`Increase quantity for ${product.name}`}
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : isActive ? (
            <span className="rounded-full border border-[#e3c7c7] px-2 py-1 text-[#973131]">
              <ChevronsDown size={16} strokeWidth={2.5} aria-hidden />
            </span>
          ) : (
            <button
              onClick={(event) => {
                event.stopPropagation();
                onAddToCart?.(basePayload);
              }}
              className="rounded-full border border-[#e3c7c7] bg-[#973131] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#7f2929] sm:text-xs"
            >
              Add to Cart
            </button>
          )}
        </div>

        {showInlineDetails ? (
          <div className="mt-3 border-t border-[#e3c7c7] pt-3 sm:hidden">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Weight</p>
                <p className="mt-1 text-sm font-extrabold text-slate-900">{visibleWeight}</p>
              </div>
              <div className="rounded-xl border border-[#e3c7c7] bg-[#fbf3f3]/80 p-2.5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#973131]">Price</p>
                <p className="mt-1 text-sm font-extrabold text-[#973131]">{visiblePrice}</p>
              </div>
            </div>
            <ul className="mt-3 space-y-1">
              {inlineBenefits.map((item) => (
                <li key={item} className="text-xs text-slate-700">
                  - {item}
                </li>
              ))}
            </ul>
            <button
              onClick={(event) => {
                event.stopPropagation();
                onAddToCart?.(basePayload);
              }}
              className="mt-3 w-full rounded-full bg-[#973131] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#7f2929]"
            >
              Add to Cart
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

