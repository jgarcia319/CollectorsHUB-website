"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useStore } from "@/app/providers";

export default function AddedToCartModal() {
  const { addedItem, setAddedItem, setCartOpen } = useStore();
  const continueButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!addedItem) return;
    document.body.classList.add("modal-open");
    continueButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAddedItem(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [addedItem, setAddedItem]);

  if (!addedItem) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setAddedItem(null);
    }}>
      <section className="added-modal" role="dialog" aria-modal="true" aria-labelledby="added-modal-title">
        <button type="button" className="modal-close" aria-label="Close" onClick={() => setAddedItem(null)}>×</button>
        <p className="eyebrow">Added successfully</p>
        <h2 id="added-modal-title">Ready for the pull list.</h2>
        <div className="added-modal-item">
          <img src={addedItem.image} alt="" />
          <div><p>{addedItem.category}</p><h3>{addedItem.name}</h3><strong>${addedItem.price.toFixed(2)}</strong></div>
        </div>
        <div className="modal-actions">
          <button ref={continueButton} type="button" className="button outline" onClick={() => setAddedItem(null)}>Continue shopping</button>
          <Link href="/checkout" className="button primary" onClick={() => { setAddedItem(null); setCartOpen(false); }}>Proceed to checkout</Link>
        </div>
      </section>
    </div>
  );
}
