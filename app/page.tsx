import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="announcement">Free insured shipping on qualifying orders <span>View details →</span></section>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">The collector&apos;s marketplace</p><h1>Find the card.<br/><em>Make the pull.</em></h1><p>New releases, graded classics, sealed boxes, and trusted supplies from Sam and Sons Cards and Collectables.</p><div className="hero-actions"><Link href="/shop" className="button primary">Shop new releases</Link><Link href="/sell" className="button outline">Sell or request</Link></div></div>
        <div className="hero-visual" aria-label="Featured trading card">
          <div className="hero-card back-card" /><div className="hero-card front-card"><span>COLLECTORS HUB</span><div className="hero-player"><span>CHROME</span></div><div><small>ROOKIE · #001</small><strong>THE NEXT GREAT CARD</strong></div></div>
        </div>
      </section>
      <section className="section categories-section"><div className="section-heading"><div><p className="eyebrow">Browse the hobby</p><h2>Shop by category</h2></div><Link href="/shop">View all →</Link></div><div className="category-grid">{categories.map((category, index) => <Link href={`/shop?category=${encodeURIComponent(category)}`} className="category-card" key={category}><span>0{index + 1}</span><strong>{category}</strong><small>{category === "Supplies" ? "Protect every pickup" : category === "Sealed Boxes" ? "Fresh from the case" : `Shop ${category.toLowerCase()}`}</small><b>→</b></Link>)}</div></section>
      <section className="section"><div className="section-heading"><div><p className="eyebrow">Just landed</p><h2>New releases</h2></div><Link href="/shop?sort=new">Shop all new →</Link></div><div className="product-grid">{products.filter((product) => product.badge === "New").slice(0,5).concat(products.filter((product) => product.badge !== "New").slice(0,1)).map((product) => <ProductCard product={product} key={product.id}/>)}</div></section>
      <section className="story-band"><div><p className="eyebrow">The CollectorsHUB story</p><h2>Built by collectors.<br/>Owned by Sam and Sons.</h2></div><div><p>CollectorsHUB is the next chapter of Sam and Sons Cards and Collectables—a family-centered card business rooted in research, real relationships, and the thrill of finding something special.</p><Link href="/about" className="button dark">Read our story</Link></div></section>
      <section className="section split-feature"><div><p className="eyebrow">Hunt your grail</p><h2>Looking for one hard-to-find card?</h2><p>Send us the player, set, grade, and target price. We can help build the search.</p><Link href="/sell" className="button primary">Request a card</Link></div><div className="feature-panel"><span>CHASE LIST</span><strong>YOUR GRAIL<br/>MIGHT BE CLOSER.</strong><small>REQUEST · SOURCE · SHIP</small></div></section>
    </>
  );
}
