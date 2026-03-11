import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "../../context/CartContext";
import ProductCard from "../molecules/ProductCard";
import ProductDetailsPanel from "../molecules/ProductDetailsPanel";

export default function ProductShowcase({ products }) {
  const router = useRouter();
  const { add } = useCart();
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [columns, setColumns] = useState(2);
  const isMobile = columns === 2;

  const querySelectedProductName = useMemo(() => {
    if (!router.isReady) return null;
    const queryValue = router.query.product;
    const productFromQuery = Array.isArray(queryValue) ? queryValue[0] : queryValue;
    if (!productFromQuery || typeof productFromQuery !== "string") return null;
    const matched = products.find((product) => product.name === productFromQuery);
    return matched?.name || null;
  }, [products, router.isReady, router.query.product]);

  const effectiveSelectedProductName = querySelectedProductName || selectedProductName;

  const selectedProduct = useMemo(
    () =>
      effectiveSelectedProductName
        ? products.find((product) => product.name === effectiveSelectedProductName) || null
        : null,
    [effectiveSelectedProductName, products]
  );

  const selectedIndex = useMemo(
    () => products.findIndex((product) => product.name === effectiveSelectedProductName),
    [effectiveSelectedProductName, products]
  );

  useEffect(() => {
    const resolveColumns = () => {
      if (window.innerWidth >= 1280) {
        setColumns(6);
      } else if (window.innerWidth >= 1024) {
        setColumns(5);
      } else if (window.innerWidth >= 640) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    resolveColumns();
    window.addEventListener("resize", resolveColumns);
    return () => window.removeEventListener("resize", resolveColumns);
  }, []);

  const rows = useMemo(() => {
    const chunks = [];
    for (let index = 0; index < products.length; index += columns) {
      chunks.push(products.slice(index, index + columns));
    }
    return chunks;
  }, [columns, products]);

  const selectedRowIndex = selectedIndex >= 0 ? Math.floor(selectedIndex / columns) : 0;

  return (
    <section id="products" className="mx-auto mt-10 w-full max-w-[110rem]">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="brand-tagline">pure . honest . nutritious!</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Shop The Full Collection</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Tap any product to open a richer detail view with image showcase, nutrition highlights, and quick actions.
          </p>
        </div>
        <div className="rounded-full border border-[#e3c7c7] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#973131]">
          {products.length} Products Live
        </div>
      </div>

      <div className="space-y-5">
        {rows.map((rowProducts, rowIndex) => (
          <div key={`product-row-${rowIndex}`} className="space-y-5">
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {rowProducts.map((product) => {
                const isActive = selectedProduct?.name === product.name;
                return (
                  <div key={product.name} className="contents">
                    <ProductCard
                      product={product}
                      onAddToCart={(selectedProduct) => add(selectedProduct)}
                      onSelect={() =>
                        setSelectedProductName((current) =>
                          current === product.name ? null : product.name
                        )
                      }
                      isActive={isActive}
                      showInlineDetails={isMobile && isActive}
                    />
                  </div>
                );
              })}
            </div>

            {!isMobile && selectedProduct && selectedRowIndex === rowIndex && (
              <ProductDetailsPanel
                key={selectedProduct?.name}
                product={selectedProduct}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


