const shows = [
  { date:"DEC 12", title:"North Texas Card Expo", place:"Dallas, TX", type:"Vendor Hall" },
  { date:"JAN 18", title:"Sam & Sons Community Show", place:"Fort Worth, TX", type:"Local Showcase" },
  { date:"FEB 07", title:"Collectors Weekend", place:"Arlington, TX", type:"Trade & Sell" }
];

export default function ShowsPage() {
  return (
    <div className="inner-page"><header className="page-header"><p className="eyebrow">Meet collectors in person</p><h1>Upcoming <em>card shows</em></h1></header><div className="shows-list">{shows.map((show) => <article key={show.title}><time>{show.date}</time><div><p>{show.type}</p><h2>{show.title}</h2><span>{show.place}</span></div><a href="/contact" className="button outline">Get details</a></article>)}</div></div>
  );
}
