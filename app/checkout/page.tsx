"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useStore, type Order } from "@/app/providers";

export default function CheckoutPage() {
  const { cart, clearCart, addOrder, account } = useStore();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 100 ? 0 : 8.95;

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (cart.length === 0) return;
    setSubmitting(true);
    const data = new FormData(event.currentTarget);
    const order: Order = {
      id: `CH-${Date.now().toString().slice(-8)}`,
      createdAt: new Date().toISOString(),
      items: cart,
      total: subtotal + shipping,
      email: String(data.get("email") || ""),
      name: String(data.get("name") || ""),
      address: String(data.get("address") || ""),
      city: String(data.get("city") || ""),
      state: String(data.get("state") || ""),
      postalCode: String(data.get("postalCode") || "")
    };
    addOrder(order);
    clearCart();
    router.push(`/orders/${order.id}?success=1`);
  };

  if (cart.length === 0) {
    return <div className="inner-page"><header className="page-header"><p className="eyebrow">Checkout</p><h1>Your cart is <em>empty.</em></h1></header><div className="checkout-empty"><p>Add an item before starting checkout.</p><Link href="/shop" className="button primary">Browse inventory</Link></div></div>;
  }

  return (
    <div className="inner-page">
      <header className="page-header compact"><p className="eyebrow">Secure checkout</p><h1>Almost <em>yours.</em></h1></header>
      <form className="checkout-layout" onSubmit={submitOrder}>
        <div className="checkout-fields">
          <section><p className="step-number">01</p><div><h2>Contact</h2><label>Email address<input required name="email" type="email" autoComplete="email" defaultValue={account?.email || ""} placeholder="you@example.com"/></label></div></section>
          <section><p className="step-number">02</p><div><h2>Shipping address</h2><div className="field-grid"><label>Full name<input required name="name" autoComplete="name" defaultValue={account?.name || ""}/></label><label>Address<input required name="address" autoComplete="street-address"/></label><label>City<input required name="city" autoComplete="address-level2"/></label><label>State<input required name="state" autoComplete="address-level1"/></label><label>ZIP code<input required name="postalCode" autoComplete="postal-code"/></label></div></div></section>
          <section><p className="step-number">03</p><div><h2>Demo payment</h2><p className="demo-note">Prototype only. Do not enter real card details.</p><div className="field-grid"><label>Card number<input required inputMode="numeric" pattern="[0-9 ]{12,23}" placeholder="Demo: 4242 4242 4242 4242"/></label><label>Expiration<input required placeholder="MM / YY"/></label><label>Security code<input required inputMode="numeric" pattern="[0-9]{3,4}" placeholder="123"/></label></div></div></section>
        </div>
        <aside className="order-summary"><p className="eyebrow">Order summary</p><h2>{cart.reduce((count, item) => count + item.quantity, 0)} items</h2>{cart.map((item) => <div className="summary-item" key={item.product.id}><img src={item.product.image} alt="" /><div><strong>{item.product.name}</strong><span>Qty {item.quantity}</span></div><b>${(item.product.price * item.quantity).toFixed(2)}</b></div>)}<div className="summary-total"><p><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></p><p><span>Shipping</span><strong>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</strong></p><p><span>Total</span><strong>${(subtotal + shipping).toFixed(2)}</strong></p></div><button className="button primary" type="submit" disabled={submitting}>{submitting ? "Processing..." : "Place demo order"}</button></aside>
      </form>
    </div>
  );
}
