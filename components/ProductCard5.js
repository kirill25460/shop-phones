import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useCart } from "@/components/cart/CartContext";

// Анимация для выезжающей информации
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }

  &:hover .info-panel {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const InfoPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 20px;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  background: #ff6f61;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff3b2f;
  }
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  cursor: pointer;
  border: 2px solid ${({ selected }) => (selected ? "#000" : "transparent")};
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #000;
  }
`;

export default function ProductCard5({ product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || {});

  return (
    <Card>
      <ImageContainer>
        <ProductImage
          src={selectedVariant.image || product.image}
          alt={product.name}
        />
        <InfoPanel className="info-panel">
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
        </InfoPanel>
      </ImageContainer>
    </Card>
  );
}