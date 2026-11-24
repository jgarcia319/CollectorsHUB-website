"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useStore } from "@/app/providers";

export default function CheckoutAccountPage() {
  const router = useRouter();
  const { cart, isSignedIn, account, signIn } = useStore();
  const [mode, setMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    if (isSignedIn) router.replace("/checkout");
  }, [isSignedIn, router]);

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    signIn({ name: email.split("@")[0], email });
  };

  const submitSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signIn({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || "")
    });
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
          <div className="checkout-mode-tabs">
            <button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Sign in</button>
            <button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Create account</button>
          </div>
          <h2>{mode === "login" ? "Sign in" : "Create account"}</h2>
          <p>{mode === "login" ? "Continue with your saved details and view this purchase in your order history." : "Create an account now, finish checkout, and keep this purchase in your order history."}</p>
          {mode === "login" ? (
          <form className="checkout-login-form" onSubmit={submitLogin}>
            <label>Email address<input required name="email" type="email" autoComplete="email"/></label>
            <label>Password<input required name="password" type="password" autoComplete="current-password"/></label>
            <button type="submit" className="button primary">Sign in and continue</button>
          </form>
          ) : (
          <form className="checkout-login-form" onSubmit={submitSignup}>
            <label>Full name<input required name="name" autoComplete="name"/></label>
            <label>Email address<input required name="email" type="email" autoComplete="email"/></label>
            <label>Password<input required name="password" type="password" autoComplete="new-password"/></label>
            <button type="submit" className="button primary">Create account and continue</button>
          </form>
          )}
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
