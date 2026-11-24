import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";
import { getProduct, products } from "@/lib/products";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0,3);
  return (
    <div className="inner-page">
      <Link href="/shop" className="breadcrumb">← Back to inventory</Link>
      <section className="product-detail">
        <div className="detail-image"><span className="detail-grid" /><ProductVisual product={product} size="detail"/>{product.badge && <b>{product.badge}</b>}</div>
        <div className="detail-copy"><p className="eyebrow">{product.category}{product.year ? ` · ${product.year}` : ""}</p><h1>{product.name}</h1><strong className="detail-price">${product.price.toFixed(2)}</strong><p>{product.description}</p><div className="stock-line"><span /> In stock and ready to ship</div><ProductActions product={product}/><div className="detail-notes"><p><strong>Condition</strong><span>{product.category === "Supplies" ? "New" : "Sealed / Collector-grade"}</span></p><p><strong>Shipping</strong><span>Insured and tracked</span></p><p><strong>Authenticity</strong><span>Verified by CollectorsHUB</span></p></div></div>
      </section>
      {related.length > 0 && <section className="section"><div className="section-heading"><div><p className="eyebrow">More from this category</p><h2>Related pickups</h2></div></div><div className="product-grid">{related.map((item) => <ProductCard product={item} key={item.id}/>)}</div></section>}
    </div>
  );
}
