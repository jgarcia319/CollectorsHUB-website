export default function SellPage() {
  return (
    <div className="inner-page"><header className="page-header"><p className="eyebrow">Sell or request</p><h1>Move it.<br/><em>Find it.</em></h1></header><div className="form-layout"><section><p className="eyebrow">What are you looking for?</p><h2>Card request</h2><p>Tell us the player, set, year, condition, or grading preference.</p></section><form className="inquiry-form"><label>Name<input required name="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Request type<select name="type"><option>Card request</option><option>Sell a collection</option><option>Get an offer</option><option>Consignment</option></select></label><label>Details<textarea required name="details" rows={6} placeholder="Player, set, year, condition, target price..."/></label><button type="submit" className="button primary">Send request</button></form></div></div>
  );
}
