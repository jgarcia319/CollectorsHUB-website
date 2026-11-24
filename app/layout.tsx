import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AddedToCartModal from "@/components/AddedToCartModal";

export const metadata: Metadata = {
  title: { default: "CollectorsHUB | Sports Cards & Collectibles", template: "%s | CollectorsHUB" },
  description: "Shop sports cards, sealed boxes, graded cards, card lots, and supplies from CollectorsHUB."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <AddedToCartModal />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
