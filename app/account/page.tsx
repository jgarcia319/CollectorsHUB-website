"use client";

import { useState } from "react";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [message, setMessage] = useState("");

  return (
    <div className="inner-page">
      <header className="page-header compact"><p className="eyebrow">CollectorsHUB account</p><h1>Make every <em>pull</em> easier.</h1></header>
      <div className="account-layout">
        <section className="account-benefits"><p className="eyebrow">Why create an account?</p><h2>Built for collectors.</h2><ul><li><strong>Faster checkout</strong><span>Save delivery and payment preferences.</span></li><li><strong>Order history</strong><span>Track requests and past pickups.</span></li><li><strong>Saved inventory</strong><span>Keep cards on your watchlist.</span></li></ul></section>
        <form className="account-form" onSubmit={(event) => { event.preventDefault(); setMessage(mode === "login" ? "Demo login submitted. Real sign-in will be connected later." : "Demo account created. Real registration will be connected later."); }}>
          <div className="account-tabs"><button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Log in</button><button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Create account</button></div>
          {mode === "signup" && <label>Full name<input required name="name" autoComplete="name"/></label>}
          <label>Email address<input required name="email" type="email" autoComplete="email"/></label><label>Password<input required name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"}/></label>
          <button className="button primary" type="submit">{mode === "login" ? "Log in" : "Create account"}</button>
          {message && <p className="account-message" role="status">{message}</p>}
          <a className="guest-link" href="/checkout">Continue as guest →</a>
        </form>
      </div>
    </div>
  );
}
