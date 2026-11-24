import ProductCard from "@/components/ProductCard";
import { categories, products, type Category } from "@/lib/products";

type Props = { searchParams: Promise<{ category?: string }> };

export default async function ShopPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const activeCategory = categories.find((item) => item === category);
  const visible = activeCategory ? products.filter((product) => product.category === activeCategory) : products;
  return (
    <div className="inner-page shop-page">
      <header className="page-header"><p className="eyebrow">CollectorsHUB inventory</p><h1>{activeCategory ?? "Shop all"} <em>Cards</em></h1><p>{activeCategory ? `Curated ${activeCategory.toLowerCase()} cards and products.` : "A small, curated prototype collection across the major sports-card categories."}</p></header>
      <div className="shop-layout">
        <aside className="filters"><h2>Filter inventory</h2><div><strong>Category</strong>{categories.map((item) => <a className={activeCategory === item ? "active" : ""} href={`/shop?category=${encodeURIComponent(item)}`} key={item}>{item}<span>{products.filter((product) => product.category === item).length}</span></a>)}</div><a href="/shop" className="clear-filter">Clear all</a></aside>
        <div><div className="results-bar"><strong>{visible.length} products</strong><span>Prototype inventory</span></div><div className="product-grid shop-grid">{visible.map((product) => <ProductCard product={product} key={product.id}/>)}</div></div>
      </div>
    </div>
  );
}
