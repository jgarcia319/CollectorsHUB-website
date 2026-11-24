const faqs = [
  ["Are offers negotiable?","Yes. Send an offer or inquiry and we will review it against current inventory and market data."],
  ["Do you ship cards?","We ship with tracking and appropriate protection. High-value cards receive additional insurance."],
  ["Are the cards authenticated?","Sealed products are sourced as sealed. Loose and graded cards are individually reviewed before listing."],
  ["Can I sell or consign a collection?","Use our Sell / Request page to tell us what you have and whether you prefer an offer or consignment."],
  ["Do you attend card shows?","Yes. Sam and Sons participates in regional card shows and posts upcoming appearances here."]
];

export default function FAQPage() {
  return (
    <div className="inner-page"><header className="page-header"><p className="eyebrow">Need to know</p><h1>Frequently asked <em>questions</em></h1></header><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div>
  );
}
