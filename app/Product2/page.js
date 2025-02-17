"use client";
import { useEffect, useState } from "react";
import ProductCard2 from "@/components/ProductCard2";

export default function Home() {
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    fetch("/products2.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "50px" }}>
      {products2.map((product) => (
        <ProductCard2 key={product.id} product={product} />
      ))}
    </div>
  );
}
