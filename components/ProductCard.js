import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useCart } from "@/components/cart/CartContext";
import VanillaTilt from "vanilla-tilt";

// Анимация для волнового эффекта
const waveAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 450px;

  background-size: 200% 200%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  animation: ${waveAnimation} 10s ease infinite;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
    animation: none; // Останавливаем анимацию при наведении
    background: ${({ bgColor }) => bgColor}; // Меняем цвет фона при наведении
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .product-image {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddToCartButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #fff; // Меняем цвет текста при наведении
  }
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #666;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #fff; // Меняем цвет текста при наведении
  }
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  cursor: pointer;
  border: 2px solid ${({ selected }) => (selected ? "#000" : "transparent")};
  transition: border 0.3s ease, transform 0.3s ease;

  &:hover {
    border: 2px solid #000;
    transform: scale(1.2);
  }
`;

export default function ProductCard({ product }) {
  const tiltRef = useRef(null);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || {});
  const [bgColor, setBgColor] = useState(selectedVariant.color || "#fff");

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 300,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <Card ref={tiltRef} bgColor={bgColor}>
      <ImageContainer>
        <ProductImage
          className="product-image"
          src={selectedVariant.image || product.image}
          alt={product.name}
        />
        <Overlay className="overlay">
          <AddToCartButton onClick={() => addToCart(product, selectedVariant)}>
            Add to Cart
          </AddToCartButton>
        </Overlay>
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ColorOptions>
          {product.variants?.map((variant, index) => (
            <ColorCircle
              key={index}
              color={variant.color}
              selected={selectedVariant.color === variant.color}
              onClick={() => {
                setSelectedVariant(variant);
                setBgColor(variant.color);
              }}
            />
          ))}
        </ColorOptions>
      </ProductInfo>
    </Card>
  );
}