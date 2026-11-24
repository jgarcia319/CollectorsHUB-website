"use client";

import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useStore } from "@/app/providers";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, mobileMenuOpen, setMobileMenuOpen, removeFromCart, updateQuantity } = useStore();
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const closeCart = useCallback(() => {
    setCartOpen(false);
    window.requestAnimationFrame(() => {
      const target = mobileMenuOpen
        ? "mobile-cart-trigger"
        : window.matchMedia("(max-width: 820px)").matches
          ? null
          : "desktop-cart-trigger";
      if (target) document.getElementById(target)?.focus();
      else document.querySelector<HTMLElement>(".menu-button")?.focus();
    });
  }, [mobileMenuOpen, setCartOpen]);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", cartOpen);
  }, [cartOpen]);

  useEffect(() => {
    if (!cartOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [cartOpen, closeCart]);

  return (
    <>
      <button className={cartOpen ? "drawer-backdrop visible" : "drawer-backdrop"} type="button" aria-label="Close cart" onClick={closeCart} />
      <aside className={cartOpen ? "cart-drawer open" : "cart-drawer"} aria-label="Shopping cart" aria-hidden={!cartOpen} inert={!cartOpen}>
        <div className="drawer-header"><div><p className="eyebrow">Your pull list</p><h2>Shopping cart</h2></div><button type="button" onClick={closeCart} aria-label={mobileMenuOpen ? "Back to navigation menu" : "Close cart"}>{mobileMenuOpen ? "←" : "×"}</button></div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty"><span>HUB</span><h3>Your cart is empty</h3><p>Browse the latest drops and add a card to your pull list.</p><button type="button" onClick={closeCart}>Continue shopping</button></div>
          ) : cart.map((item) => (
            <article className="cart-item" key={item.product.id}>
              <img src={item.product.image} alt="" />
              <div><p>{item.product.category}</p><h3>{item.product.name}</h3><strong>${item.product.price.toFixed(2)}</strong><div className="quantity"><button type="button" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button></div></div>
              <button type="button" className="remove" onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </article>
          ))}
        </div>
        {cart.length > 0 && <div className="cart-footer"><div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><p>Shipping and taxes calculated at checkout.</p><Link href="/checkout/account" className="checkout-button" onClick={() => { setCartOpen(false); setMobileMenuOpen(false); }}>Checkout</Link></div>}
      </aside>
    </>
  );
}
