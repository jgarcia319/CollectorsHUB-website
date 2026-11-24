"use client";

import Link from "next/link";
import { useStore } from "@/app/providers";
import type { Product } from "@/lib/products";
import ProductVisual from "@/components/ProductVisual";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, savedIds, toggleSaved } = useStore();
  const saved = savedIds.includes(product.id);
  return (
    <article className="product-card">
      <Link href={`/product/${product.id}`} className="product-image">
        {product.badge && <span className="badge">{product.badge}</span>}
        <ProductVisual product={product} />
        <span className="card-glare" />
      </Link>
      <button type="button" className={saved ? "save-button saved" : "save-button"} aria-label={saved ? "Remove saved item" : "Save item"} onClick={() => toggleSaved(product.id)}>♡</button>
      <div className="product-info">
        <p>{product.category}{product.year ? ` · ${product.year}` : ""}</p>
        <h3><Link href={`/product/${product.id}`}>{product.name}</Link></h3>
        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>
          <button type="button" onClick={() => addToCart(product)}>Add</button>
        </div>
      </div>
    </article>
  );
}
