import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useCart } from "@/components/cart/CartContext";

// Анимация для неоновой подсветки
const neonGlow = (color) => keyframes`
  0% {
    box-shadow: 0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color};
  }
  50% {
    box-shadow: 0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color};
  }
  100% {
    box-shadow: 0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color};
  }
`;

// Анимация для появления текста
const textReveal = keyframes`
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
  background: linear-gradient(145deg, #1d1d1f, #000); // Темный градиентный фон
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 16px 32px rgba(0, 113, 227, 0.5);
  }

  &:hover .product-image {
    transform: scale(1.1) rotate(-5deg);
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
  filter: ${({ glowColor }) => `drop-shadow(0 0 10px ${glowColor})`}; // Неоновый эффект
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
  color: #fff;
  font-weight: 600;
  animation: ${textReveal} 0.5s ease forwards;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #6e6e73;
  margin-bottom: 20px;
  animation: ${textReveal} 0.5s ease forwards;
`;

const AddToCartButton = styled.button`
  background: linear-gradient(45deg, ${({ glowColor }) => glowColor}, #00a8e8);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${({ glowColor }) => neonGlow(glowColor)} 2s infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px ${({ glowColor }) => glowColor};
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
    box-shadow: 0 0 8px ${({ color }) => color};
  }
`;

export default function ProductCard8({ product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || {});
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = cardRef.current;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      const card = cardRef.current;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    const card = cardRef.current;
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Card ref={cardRef}>
      <ProductImage
        src={selectedVariant.image || product.image}
        alt={product.name}
        className="product-image"
        glowColor={selectedVariant.color}
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
        <AddToCartButton
          onClick={() => addToCart(product, selectedVariant)}
          glowColor={selectedVariant.color}
        >
          Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
}