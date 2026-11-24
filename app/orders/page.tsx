"use client";

import Link from "next/link";
import { useStore } from "@/app/providers";

export default function OrdersPage() {
  const { orders } = useStore();
  return <div className="inner-page"><header className="page-header compact"><p className="eyebrow">Your account</p><h1>Recent <em>orders.</em></h1></header>{orders.length === 0 ? <div className="saved-empty"><h2>No orders yet</h2><p>Your completed demo purchases will appear here.</p><Link href="/shop" className="button primary">Browse inventory</Link></div> : <div className="orders-list">{orders.map((order) => <Link href={`/orders/${order.id}`} className="order-row" key={order.id}><div><p className="eyebrow">Order {order.id}</p><strong>{new Date(order.createdAt).toLocaleDateString()}</strong></div><span>{order.items.reduce((count, item) => count + item.quantity, 0)} items</span><strong>${order.total.toFixed(2)}</strong><b>View →</b></Link>)}</div>}</div>;
}
