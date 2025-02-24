"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import Cart from "../../components/cart/cart";
import Delivery from "../../components/cart/delivery/delivery";
import { CartProvider } from "@/components/cart/CartContext";
import styles from "./page.module.css";
export default function CartPage() {


  return (
    <div className={styles.container}><CartProvider>
      <Header />
      <Cart />
      <Delivery />
      <Footer />
    </CartProvider>
    </div>
  );
}
