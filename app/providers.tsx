"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

type CartItem = { product: Product; quantity: number };
type StoreContextValue = {
  cart: CartItem[];
  cartCount: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  savedIds: string[];
  toggleSaved: (id: string) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export default function Providers({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("collectorshub-cart");
      const saved = localStorage.getItem("collectorshub-saved");
      if (savedCart) setCart(JSON.parse(savedCart));
      if (saved) setSavedIds(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("collectorshub-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("collectorshub-saved", JSON.stringify(savedIds));
  }, [savedIds]);

  const value = useMemo<StoreContextValue>(() => ({
    cart,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    cartOpen,
    setCartOpen,
    addToCart: (product) => {
      setCart((current) => {
        const existing = current.find((item) => item.product.id === product.id);
        if (existing) return current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        return [...current, { product, quantity: 1 }];
      });
      setCartOpen(true);
    },
    removeFromCart: (id) => setCart((current) => current.filter((item) => item.product.id !== id)),
    updateQuantity: (id, quantity) => setCart((current) => quantity < 1 ? current.filter((item) => item.product.id !== id) : current.map((item) => item.product.id === id ? { ...item, quantity } : item)),
    savedIds,
    toggleSaved: (id) => setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id])
  }), [cart, cartOpen, savedIds]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside Providers");
  return context;
}
