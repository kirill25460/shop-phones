import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useCart } from "@/components/CartContext";

// Анимация для парящего эффекта
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Анимация для появления текста
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  width: 300px;
  height: 450px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  }

  &:hover .product-info {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductImage = styled.img`
  width: 80%;
  height: auto;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(-5deg);
  }
`;

const ProductInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1d1d1f;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #6e6e73;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  background: linear-gradient(45deg, #0071e3, #00a8e8); // Градиент, как у Apple
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 113, 227, 0.3);
  }
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  cursor: pointer;
  border: 2px solid ${({ selected }) => (selected ? "#0071e3" : "transparent")};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 8px rgba(0, 113, 227, 0.5);
  }
`;

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || {});

  return (
    <Card>
      <ProductImage
        src={selectedVariant.image || product.image}
        alt={product.name}
      />
      <ProductInfo className="product-info">
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ColorOptions>
          {product.variants?.map((variant, index) => (
            <ColorCircle
              key={index}
              color={variant.color}
              selected={selectedVariant.color === variant.color}
              onClick={() => setSelectedVariant(variant)}
            />
          ))}
        </ColorOptions>
        <AddToCartButton onClick={() => addToCart(product, selectedVariant)}>
          Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
}