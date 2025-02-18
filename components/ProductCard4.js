import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useCart } from "@/components/CartContext";
import VanillaTilt from "vanilla-tilt";

// Анимация для выезжающей панели
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
  height: 450px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  &:hover .overlay {
    opacity: 1;
  }

  &:hover .product-image {
    transform: scale(1.1);
  }

  &:hover .info-panel {
    transform: translateX(0);
    opacity: 1;
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
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
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
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #666;
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
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid #000;
  }
`;

const InfoPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
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

const InfoItem = styled.div`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 10px;

  strong {
    font-weight: 600;
    color: #000;
  }
`;

export default function ProductCard4({ product }) {
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
    <Card ref={tiltRef}>
      <ImageContainer>
        <ProductImage
          className="product-image"
          src={selectedVariant.image || product.image}
          alt={product.name}
        />
        <Overlay className="overlay">
          
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

      {/* Выезжающая панель с информацией */}
      <InfoPanel className="info-panel">
      <InfoItem>
          <strong>{product.name || "N/A"}</strong> 
        </InfoItem>
        <InfoItem>
          <strong>${product.price || "N/A"}</strong> 
        </InfoItem>
        <InfoItem>
          <strong>Memory:</strong> {product.memory || "N/A"}
        </InfoItem>
        <InfoItem>
          <strong>Screen Size:</strong> {product.screenSize || "N/A"}
        </InfoItem>
        <InfoItem>
          <strong>Battery Capacity:</strong> {product.batteryCapacity || "N/A"}
        </InfoItem>
        <InfoItem>
          <strong>Processor:</strong> {product.processor || "N/A"}
        </InfoItem>
        <InfoItem>
          <strong>Camera:</strong> {product.camera || "N/A"}
        </InfoItem>
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
        <AddToCartButton onClick={() => addToCart(product, selectedVariant)}>
            Add to Cart
          </AddToCartButton>
      </InfoPanel>
    </Card>
  );
}