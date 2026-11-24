"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/app/providers";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setCartOpen, savedIds } = useStore();
  return (
    <header className="topbar">
      <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">C/H</span>
        <span><strong>COLLECTORS</strong><b>HUB</b></span>
      </Link>
      <button className="menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "Close" : "Menu"}
      </button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link href="/shop?category=Football" onClick={() => setMenuOpen(false)}>Football</Link>
        <Link href="/shop?category=Baseball" onClick={() => setMenuOpen(false)}>Baseball</Link>
        <Link href="/shop?category=Basketball" onClick={() => setMenuOpen(false)}>Basketball</Link>
        <Link href="/shows" onClick={() => setMenuOpen(false)}>Card Shows</Link>
        <Link href="/sell" onClick={() => setMenuOpen(false)}>Sell / Request</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </nav>
      <div className="nav-actions">
        <Link href="/saved" className="icon-button" aria-label={`Saved items: ${savedIds.length}`}>♡<span>{savedIds.length}</span></Link>
        <button type="button" className="icon-button cart-button" onClick={() => setCartOpen(true)} aria-label={`Open cart with ${cartCount} items`}>
          Cart <span>{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
