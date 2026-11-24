"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "@/app/providers";

export default function OrderPage() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const { orders } = useStore();
  const [successOpen, setSuccessOpen] = useState(searchParams.get("success") === "1");
  const order = orders.find((item) => item.id === params.id);

  useEffect(() => {
    if (!successOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSuccessOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [successOpen]);

  if (!order) return <div className="inner-page"><header className="page-header"><p className="eyebrow">Orders</p><h1>Order not <em>found.</em></h1></header><Link href="/orders" className="button primary">View all orders</Link></div>;

  return (
    <div className="inner-page">
      {successOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSuccessOpen(false); }}><section className="added-modal success-modal" role="dialog" aria-modal="true"><button type="button" className="modal-close" aria-label="Close" onClick={() => setSuccessOpen(false)}>×</button><p className="eyebrow">Order received</p><h2>Your pickup is confirmed.</h2><p>Thank you, {order.name}. Your demo sale request was received successfully.</p><button type="button" className="button primary" onClick={() => setSuccessOpen(false)}>View order</button></section></div>}
      <header className="page-header compact"><p className="eyebrow">Order confirmed</p><h1>Thank <em>you.</em></h1></header>
      <div className="order-detail-layout"><section className="order-detail"><p className="eyebrow">Order {order.id}</p><h2>Order details</h2>{order.items.map((item) => <div className="summary-item" key={item.product.id}><img src={item.product.image} alt="" /><div><strong>{item.product.name}</strong><span>Qty {item.quantity}</span></div><b>${(item.product.price * item.quantity).toFixed(2)}</b></div>)}</section><aside className="order-summary"><p className="eyebrow">Status</p><h2>Confirmed</h2><div className="summary-total"><p><span>Ship to</span><strong>{order.name}</strong></p><p><span>Address</span><strong>{order.address}</strong></p><p><span>Total</span><strong>${order.total.toFixed(2)}</strong></p></div><Link href="/" className="button outline">Back to home</Link><Link href="/shop" className="button primary">Continue shopping</Link></aside></div>
    </div>
  );
}
