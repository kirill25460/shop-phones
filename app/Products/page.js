"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import styles from "./page.module.css";
import ProductInfo from "@/components/ProductInfo/ProductInfo";

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <ProductInfo />
      <Footer />
    </div>
  );
}
