export default function CheckoutPage() {
  return (
    <div className="inner-page"><header className="page-header"><p className="eyebrow">Prototype checkout</p><h1>Almost <em>yours.</em></h1></header><div className="form-layout"><section><p className="eyebrow">Demo flow</p><h2>Checkout preview</h2><p>This prototype keeps cart interactions local. Real payment processing can be connected in a later implementation.</p></section><form className="inquiry-form"><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Shipping name<input required placeholder="Full name"/></label><label>Shipping address<input required placeholder="Street address"/></label><label>City<input required placeholder="City"/></label><button type="submit" className="button primary">Continue to payment</button></form></div></div>
  );
}
