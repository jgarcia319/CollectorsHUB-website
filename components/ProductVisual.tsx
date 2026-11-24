import type { Product } from "@/lib/products";

type ProductVisualProps = {
  product: Product;
  size?: "card" | "detail" | "mini";
};

export default function ProductVisual({ product, size = "card" }: ProductVisualProps) {
  if (product.image) {
    return <img className={`product-artwork-photo product-artwork-photo--${size}`} src={product.image} alt={product.name} />;
  }

  return (
    <div
      className={`product-artwork product-artwork--${size}`}
      data-category={product.category}
      role="img"
      aria-label={`Illustrative artwork for ${product.name}; product photo coming soon`}
    >
      <span className="product-artwork-kicker">COLLECTORSHUB <b>·</b> {product.category}</span>
      <span className="product-artwork-mark" aria-hidden="true">C/H</span>
      <span className="product-artwork-copy">
        {product.year && <span>{product.year} COLLECTION</span>}
        <strong>{product.name}</strong>
        <span className="product-artwork-note">PRODUCT PHOTO COMING SOON</span>
      </span>
    </div>
  );
}
