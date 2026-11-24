"use client";

import Link from "next/link";
import { useStore } from "@/app/providers";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function SavedPage() {
  const { savedIds } = useStore();
  const saved = products.filter((product) => savedIds.includes(product.id));
  return <div className="inner-page"><header className="page-header"><p className="eyebrow">Saved inventory</p><h1>Your <em>wishlist</em></h1></header>{saved.length ? <div className="product-grid shop-grid">{saved.map((product) => <ProductCard product={product} key={product.id}/>)}</div> : <div className="saved-empty"><h2>No saved cards yet</h2><p>Use the heart button on a product to build your watchlist.</p><Link href="/shop" className="button primary">Browse inventory</Link></div>}</div>;
}
