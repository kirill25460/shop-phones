"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import SideBarProducts from "../../components/sideBarProducts/sideBarProducts";
import ProductsList from "../../components/Products/productsList";
import ProductsTitle from "../../components/ProductsTitle/ProductsTitle";
import styles from "./page.module.css";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (<>
    <div className={styles.container}>
      <Header />
      <ProductsTitle />
      <div className={styles.containerProducts}>
        <SideBarProducts />
        <ul className={styles.containerList}>
        {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <Link href={`/product/${product.id}`}>
                <ProductsList product={product} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
}
