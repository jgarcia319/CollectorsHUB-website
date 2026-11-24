import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="footer-brand">COLLECTORS<b>HUB</b></Link>
        <p>Owned and operated by Sam and Sons Cards and Collectables.</p>
      </div>
      <div className="footer-links">
        <div><strong>Shop</strong><Link href="/shop">All inventory</Link><Link href="/shop?category=Sealed+Boxes">Sealed boxes</Link><Link href="/shop?category=Supplies">Supplies</Link></div>
        <div><strong>Collectors</strong><Link href="/about">Our story</Link><Link href="/shows">Card shows</Link><Link href="/sell">Sell or request</Link></div>
        <div><strong>Support</strong><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
      </div>
      <small>© 2026 CollectorsHUB. A Sam and Sons Cards and Collectables company.</small>
    </footer>
  );
}
