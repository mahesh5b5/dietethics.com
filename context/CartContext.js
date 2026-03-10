import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

function parsePriceToNumber(price) {
  if (!price) return 0;
  const normalized = String(price).replace(/[^\d.]/g, "");
  return Number(normalized) || 0;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const add = (payload = 1) => {
    if (typeof payload !== "object" || !payload?.name) return;
    const resolvedGrams = payload.grams || payload?.variants?.[0]?.grams || "";
    const resolvedPrice = payload.price || payload?.variants?.[0]?.price || 0;
    const key = `${payload.name}::${resolvedGrams || "default"}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === key);
      if (existingIndex === -1) {
        return [
          ...prev,
          {
            key,
            name: payload.name,
            image: payload.image || "",
            price: parsePriceToNumber(resolvedPrice),
            grams: resolvedGrams,
            qty: 1,
          },
        ];
      }
      return prev.map((item, index) =>
        index === existingIndex ? { ...item, qty: item.qty + 1 } : item
      );
    });
  };

  const remove = (payload = 1) => {
    if (typeof payload === "object" && payload?.name) {
      const resolvedGrams = payload.grams || payload?.variants?.[0]?.grams || "";
      const key = `${payload.name}::${resolvedGrams || "default"}`;
      setItems((prev) =>
        prev
          .map((item) => (item.key === key ? { ...item, qty: item.qty - 1 } : item))
          .filter((item) => item.qty > 0)
      );
      return;
    }

    if (typeof payload !== "string") return;
    setItems((prev) =>
      prev
        .map((item) =>
          item.key === payload || item.name === payload ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeLine = (keyOrName) => {
    setItems((prev) => prev.filter((item) => item.key !== keyOrName && item.name !== keyOrName));
  };

  const setQty = (name, qty) => {
    const nextQty = Math.max(1, Number(qty) || 1);
    setItems((prev) => prev.map((item) => (item.name === name ? { ...item, qty: nextQty } : item)));
  };

  const count = useMemo(() => items.reduce((sum, item) => sum + item.qty, 0), [items]);
  const getQty = (name, grams = null) =>
    items
      .filter((item) => item.name === name && (grams ? item.grams === grams : true))
      .reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ count, items, add, remove, removeLine, setQty, getQty }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartContext;
