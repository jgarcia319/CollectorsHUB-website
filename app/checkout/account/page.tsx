"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, type FormEvent } from "react";
import { useStore } from "@/app/providers";

export default function CheckoutAccountPage() {
  const router = useRouter();
  const { cart, isSignedIn, account, signIn } = useStore();

  useEffect(() => {
    if (isSignedIn) router.replace("/checkout");
  }, [isSignedIn, router]);

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    signIn({ name: email.split("@")[0], email });
  };

  if (cart.length === 0) {
    return <div className="inner-page"><header className="page-header compact"><p className="eyebrow">Checkout</p><h1>Your cart is <em>empty.</em></h1></header><div className="checkout-empty"><Link href="/shop" className="button primary">Browse inventory</Link></div></div>;
  }

  if (isSignedIn) {
    return null;
  }

  return (
    <div className="inner-page">
      <header className="page-header compact">
        <p className="eyebrow">Checkout</p>
        <h1>How would you like to <em>continue?</em></h1>
      </header>
      <div className="checkout-account-layout">
        <section className="checkout-account-option">
          <p className="eyebrow">Returning collector</p>
          <h2>Sign in</h2>
          <p>Continue with your saved details and view this purchase in your order history.</p>
          <form className="checkout-login-form" onSubmit={submitLogin}>
            <label>Email address<input required name="email" type="email" autoComplete="email"/></label>
            <label>Password<input required name="password" type="password" autoComplete="current-password"/></label>
            <button type="submit" className="button primary">Sign in and continue</button>
          </form>
        </section>
        <section className="checkout-account-option guest-option">
          <p className="eyebrow">No account needed</p>
          <h2>Continue as guest</h2>
          <p>Checkout quickly without creating an account. This order will not appear in a signed-in order history.</p>
          <Link href="/checkout" className="button outline">Continue as guest</Link>
        </section>
      </div>
    </div>
  );
}
