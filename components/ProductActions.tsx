"use client";

import { useStore } from "@/app/providers";
import type { Product } from "@/lib/products";

export default function ProductActions({ product }: { product: Product }) {
  const { addToCart, toggleSaved, savedIds } = useStore();
  const saved = savedIds.includes(product.id);
  return (
    <div className="product-actions">
      <button type="button" className="button primary" onClick={() => addToCart(product)}>Add to cart</button>
      <button type="button" className={saved ? "button outline saved" : "button outline"} onClick={() => toggleSaved(product.id)}>{saved ? "Saved ♥" : "Save item ♡"}</button>
    </div>
  );
}
