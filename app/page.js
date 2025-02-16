"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <Link href="/cart">
      <button style={{ padding: "10px", background: "black", color: "white", border: "none", cursor: "pointer" }}>
        Перейти в корзину
      </button>
    </Link>
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "50px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}
