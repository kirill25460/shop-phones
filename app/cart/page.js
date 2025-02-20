"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import Cart from "../../components/cart/cart";
import Delivery from "../../components/cart/delivery/delivery";
import { CartProvider } from "@/components/cart/CartContext";
export default function CartPage() {


  return (
    <><CartProvider>
      <Header />
<Cart/>
<Delivery/>
<Footer/>
</CartProvider>
    </>
  );
}
