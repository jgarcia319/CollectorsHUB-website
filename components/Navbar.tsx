"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useStore } from "@/app/providers";

const navigationLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Football", label: "Football" },
  { href: "/shop?category=Baseball", label: "Baseball" },
  { href: "/shop?category=Basketball", label: "Basketball" },
  { href: "/shows", label: "Card Shows" },
  { href: "/sell", label: "Sell / Request" },
  { href: "/about", label: "About" }
];

function WishlistIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z"/></svg>;
}

function CartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10h9.8l2-7H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>;
}

function AccountIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6"/></svg>;
}

export default function Navbar() {
  const { cartCount, setCartOpen, savedIds, mobileMenuOpen, setMobileMenuOpen } = useStore();

  useEffect(() => {
    document.body.classList.toggle("navigation-open", mobileMenuOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !mobileMenuOpen) return;
      if (event.key === "Escape" && !document.body.classList.contains("drawer-open")) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("navigation-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 821px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileMenuOpen(false);
    };
    media.addEventListener("change", closeMenuOnDesktop);
    return () => media.removeEventListener("change", closeMenuOnDesktop);
  }, [setMobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const openCart = () => setCartOpen(true);

  return (
    <>
      <header className="topbar">
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">C/H</span>
          <span><strong>COLLECTORS</strong><b>HUB</b></span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navigationLinks.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions" aria-label="Shopper links">
          <Link href="/saved" className="icon-button" aria-label={`Saved items: ${savedIds.length}`} title="Wishlist">
            <WishlistIcon/><span>{savedIds.length}</span>
          </Link>
          <button type="button" className="icon-button cart-button" onClick={openCart} aria-label={`Open cart with ${cartCount} items`} title="Cart">
            <CartIcon/><span>{cartCount}</span>
          </button>
          <Link href="/account" className="icon-button account-button" aria-label="Account" title="Account">
            <AccountIcon/>
          </Link>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span/><span/><span/>
        </button>
      </header>

      <button
        className={mobileMenuOpen ? "mobile-menu-backdrop visible" : "mobile-menu-backdrop"}
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
      />
      <aside
        id="mobile-navigation"
        className={mobileMenuOpen ? "mobile-nav-drawer open" : "mobile-nav-drawer"}
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-header">
          <p className="eyebrow">CollectorsHUB</p>
          <button type="button" aria-label="Close navigation menu" onClick={closeMenu}>×</button>
        </div>
        <nav className="mobile-nav-links" aria-label="Mobile main navigation">
          {navigationLinks.map((item) => <Link href={item.href} key={item.label} onClick={closeMenu}>{item.label}<span>→</span></Link>)}
        </nav>
        <div className="mobile-nav-actions" aria-label="Shopper links">
          <Link href="/saved" onClick={closeMenu} aria-label={`Wishlist, ${savedIds.length} saved items`}>
            <span className="mobile-action-icon"><WishlistIcon/>{savedIds.length > 0 && <b>{savedIds.length}</b>}</span><span>Wishlist</span>
          </Link>
          <button type="button" onClick={openCart} aria-label={`Cart, ${cartCount} items`}>
            <span className="mobile-action-icon"><CartIcon/>{cartCount > 0 && <b>{cartCount}</b>}</span><span>Cart</span>
          </button>
          <Link href="/account" onClick={closeMenu} aria-label="Account">
            <span className="mobile-action-icon"><AccountIcon/></span><span>Account</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
