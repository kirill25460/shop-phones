"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "@/components/ProductCard";
import ProductCard2 from "@/components/ProductCard2";
import ProductCard3 from "@/components/ProductCard3";
import ProductCard4 from "@/components/ProductCard4";
import ProductCard5 from "@/components/ProductCard5";
import ProductCard6 from "@/components/ProductCard6";
import ProductCard7 from "@/components/ProductCard7";
import ProductCard8 from "@/components/ProductCard8";

const Container = styled.div`

  display: flex;
  gap: 20px;

  margin-bottom: 50px;
  flex-wrap: wrap;
  justify-content: center;

`;
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

    
    {/* <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
    <Container >
      {products.map((product) => (
        <ProductCard2 key={product.id} product={product} />
      ))}
    </Container>
    <Container>
      {products.map((product) => (
        <ProductCard3 key={product.id} product={product} />
      ))}
    </Container> */}
    <Container>
      {products.map((product) => (
        <ProductCard4 key={product.id} product={product} />
      ))}
    </Container>
    {/* <Container>
      {products.map((product) => (
        <ProductCard5 key={product.id} product={product} />
      ))}
    </Container>
    <Container>
      {products.map((product) => (
        <ProductCard6 key={product.id} product={product} />
      ))}
    </Container>
    <Container>
      {products.map((product) => (
        <ProductCard7 key={product.id} product={product} />
      ))}
    </Container>
    <Container>
      {products.map((product) => (
        <ProductCard8 key={product.id} product={product} />
      ))}
    </Container> */}
    </div>
  );
}
