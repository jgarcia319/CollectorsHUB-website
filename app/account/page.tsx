"use client";

import { useState } from "react";
import { useStore } from "@/app/providers";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [message, setMessage] = useState("");
  const { account, isSignedIn, signIn, signOut } = useStore();

  return (
    <div className="inner-page">
      <header className="page-header compact"><p className="eyebrow">CollectorsHUB account</p><h1>Make every <em>pull</em> easier.</h1></header>
      <div className="account-layout">
        {isSignedIn && <section className="account-benefits signed-in-summary"><p className="eyebrow">Signed in</p><h2>{account?.name}</h2><p>{account?.email}</p><button type="button" className="button dark" onClick={signOut}>Sign out</button></section>}
        {!isSignedIn && (
        <section className="account-benefits"><p className="eyebrow">Why create an account?</p><h2>Built for collectors.</h2><ul><li><strong>Faster checkout</strong><span>Save delivery and payment preferences.</span></li><li><strong>Order history</strong><span>Track requests and past pickups.</span></li><li><strong>Saved inventory</strong><span>Keep cards on your watchlist.</span></li></ul></section>
        )}
        {!isSignedIn && (
        <form className="account-form" onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const email = String(data.get("email") || "");
          const name = mode === "signup" ? String(data.get("name") || "") : email.split("@")[0];
          signIn({ name, email });
          setMessage(mode === "login" ? "Signed in for this prototype." : "Account created and signed in for this prototype.");
        }}>
          <div className="account-tabs"><button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Log in</button><button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Create account</button></div>
          {mode === "signup" && <label>Full name<input required name="name" autoComplete="name"/></label>}
          <label>Email address<input required name="email" type="email" autoComplete="email"/></label><label>Password<input required name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"}/></label>
          <button className="button primary" type="submit">{mode === "login" ? "Log in" : "Create account"}</button>
          {message && <p className="account-message" role="status">{message}</p>}
          <a className="guest-link" href="/checkout">Continue as guest →</a>
        </form>
        )}
      </div>
    </div>
  );
}
