"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../../components/header/header";
import Product from "../../../components/Product/Product";
import styles from "./page.module.css";
export default function ProductPage() {
  const { id } = useParams(); // Получаем id из URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => String(item.id) === id);
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) return <h1>Товар не найден</h1>;

  return (
    <div className={styles.container}>
      <Header />
      <Product product={product} /> 
    </div>
  );
}
