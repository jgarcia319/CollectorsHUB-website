export type Category = "Football" | "Baseball" | "Basketball" | "Hockey" | "Sealed Boxes" | "Supplies";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  badge?: string;
  sport?: string;
  year?: string;
  description: string;
};

const cardImages = [
  "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1593341646782-e0b495cff860?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=85"
];

export const categories: Category[] = ["Football", "Baseball", "Basketball", "Hockey", "Sealed Boxes", "Supplies"];

export const products: Product[] = [
  { id:"fb-1", name:"2025 Topps Chrome Football Hobby", category:"Football", price:289.99, image:cardImages[0], badge:"New", sport:"Football", year:"2025", description:"A sealed 2025 Topps Chrome Football hobby box featuring rookie cards and colorful parallels." },
  { id:"fb-2", name:"Jalen Ramsey Rated Rookie", category:"Football", price:42.00, image:cardImages[1], badge:"Hot", sport:"Football", year:"2016", description:"A clean-rated rookie card from one of the modern era's premier defensive backs." },
  { id:"fb-3", name:"2024 Donruss Football Blaster", category:"Football", price:34.99, image:cardImages[2], sport:"Football", year:"2024", description:"A retail blaster packed with inserts, rookies, and the iconic Rated Rookie cards." },
  { id:"fb-4", name:"Rookie Autograph Lot", category:"Football", price:119.00, image:cardImages[3], badge:"Limited", sport:"Football", year:"Mixed", description:"A curated lot of four certified rookie and autograph cards for the next generation collector." },
  { id:"bb-1", name:"2025 Bowman Baseball Hobby", category:"Baseball", price:319.99, image:cardImages[1], badge:"New", sport:"Baseball", year:"2025", description:"The premier prospect box for collectors chasing the newest First Bowman cards." },
  { id:"bb-2", name:"Mike Trout Refractor", category:"Baseball", price:189.00, image:cardImages[0], badge:"Graded", sport:"Baseball", year:"2013", description:"A showcase refractor of a generational player, professionally protected and ready for display." },
  { id:"bb-3", name:"2024 Topps Series 1 Jumbo", category:"Baseball", price:99.99, image:cardImages[3], sport:"Baseball", year:"2024", description:"A jumbo box featuring flagship 2024 Topps inserts and player base cards." },
  { id:"bb-4", name:"Vintage Stars Card Lot", category:"Baseball", price:74.50, image:cardImages[4], sport:"Baseball", year:"Mixed", description:"A hand-picked mixed lot of vintage stars, rookies, and retired legends." },
  { id:"bk-1", name:"2025 Prizm Basketball Hobby", category:"Basketball", price:579.99, image:cardImages[2], badge:"Hot", sport:"Basketball", year:"2025", description:"Chase rookie cards, Prizm parallels, and premium autograph hits from the newest basketball release." },
  { id:"bk-2", name:"Ja Morant Base Rookie", category:"Basketball", price:68.00, image:cardImages[4], sport:"Basketball", year:"2019", description:"An eye-catching rookie card from one of basketball's most explosive guards." },
  { id:"bk-3", name:"2024 NBA Hoops Mega Box", category:"Basketball", price:44.99, image:cardImages[1], sport:"Basketball", year:"2024", description:"A colorful retail mega box featuring rookies, veterans, and exclusive parallels." },
  { id:"bk-4", name:"All-Star Parallel Collection", category:"Basketball", price:149.00, image:cardImages[0], badge:"Limited", sport:"Basketball", year:"2023", description:"A four-card collection of All-Star base parallels with clean, matching displays." },
  { id:"hk-1", name:"2025 Upper Deck Hockey Hobby", category:"Hockey", price:239.99, image:cardImages[3], badge:"New", sport:"Hockey", year:"2025", description:"A sealed flagship hockey hobby box with Young Guns and premium inserts." },
  { id:"hk-2", name:"Connor McDavid Insert", category:"Hockey", price:96.00, image:cardImages[2], badge:"Hot", sport:"Hockey", year:"2022", description:"A limited insert featuring one of the NHL's all-time great modern forwards." },
  { id:"hk-3", name:"2024 Upper Deck Extended", category:"Hockey", price:54.99, image:cardImages[4], sport:"Hockey", year:"2024", description:"Extended-release cards with added rookies, veterans, and memorable checklist moments." },
  { id:"hk-4", name:"Hockey Star Lot", category:"Hockey", price:39.50, image:cardImages[1], sport:"Hockey", year:"Mixed", description:"A small star-player lot assembled for collectors starting or expanding a hockey set." },
  { id:"bx-1", name:"Topps Chrome Football Hobby", category:"Sealed Boxes", price:289.99, image:cardImages[0], badge:"New", year:"2025", description:"Football hobby box with chrome rookie cards and chase-worthy parallels." },
  { id:"bx-2", name:"Bowman Baseball Hobby", category:"Sealed Boxes", price:319.99, image:cardImages[1], year:"2025", description:"Prospect-driven baseball hobby box featuring first cards and autograph chances." },
  { id:"bx-3", name:"Prizm Basketball Mega", category:"Sealed Boxes", price:449.99, image:cardImages[2], badge:"Hot", year:"2025", description:"Premium basketball mega box with exclusive retail parallels and rookie coverage." },
  { id:"bx-4", name:"Upper Deck Hockey Blaster", category:"Sealed Boxes", price:79.99, image:cardImages[3], year:"2025", description:"A blaster-format hockey box for collectors chasing Young Guns and inserts." },
  { id:"sp-1", name:"Premium Card Sleeves", category:"Supplies", price:12.99, image:cardImages[4], badge:"Essential", description:"A pack of 100 crystal-clear sleeves for safely storing standard-size cards." },
  { id:"sp-2", name:"Card Storage Box", category:"Supplies", price:24.99, image:cardImages[1], description:"A reinforced storage box with dividers for keeping collections organized." },
  { id:"sp-3", name:"One-Touch Magnetic Holders", category:"Supplies", price:29.99, image:cardImages[0], description:"Five magnetic holders for displaying and protecting your most valuable cards." },
  { id:"sp-4", name:"Toploader Multi-Pack", category:"Supplies", price:18.49, image:cardImages[3], description:"Heavy-duty rigid card holders for transport, storage, and short-term display." }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
