import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { useCart } from "@/components/CartContext";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  height: 530px;
  padding: 10px 10px 0 10px;
  border-radius: 10px;
  border: 1px solid #000;
  z-index: 1111;
  transition: 0.3s;
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: relative;
  margin: 0 20px;


  &:hover .object {
    width: 290px;
    height: 290px;
  }
  &:hover .imgbox .img {
    transform: scale(1);
  }

  &:hover .buttonSection .price {
    transition-delay: 0.2s;
    transform: translateY(0);
  }
  &:hover .buttonSection .button {
    transition-delay: 0.3s;
    transform: translateY(0);
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 1;
  transform: translateZ(50px);
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  cursor: pointer;
  border: 1px solid #000;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 20%;
  transform: scale(0.9);
  transition: 0.3s ease-in;
  object-fit: cover;
`;

const Object = styled.span`
  position: absolute;
  width: 220px;
  height: 220px;
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  top: 12%;
  left: 10%;
  transition: 0.3s ease-in;
`;

const Title = styled.h3`
  font-size: 1.4em;
  font-weight: 600;
  text-align: center;
  word-spacing: 2px;
  transition: 0.3s ease;
  transform: translateZ(50px);
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0;
  overflow: hidden;
  transition: all 0.3s;
  transform: translateZ(50px);
  & .price {
    font-size: 1.6em;
    transition: 0.3s;
    transform: translateY(50px);
  }
  & .button {
    transition: 0.3s;
    transform: translateY(50px);
  }
`;

const Button = styled.button`
  position: relative;
  font-size: 0.875rem;
  padding: 0.75rem 2rem;
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: all 250ms;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  background-color: rgb(33, 37, 36);
  color: white;
  border-radius: 0.5rem;

  overflow: hidden;

  &:hover {
    transform: translateY(4px);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default function ProductCard3({ product }) {
  const tiltRef = useRef(null);
  const { addToCart } = useCart();
  const [bgColor, setBgColor] = useState(
    product?.variants?.[0]?.color || "#fff"
  );
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || {}
  );

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5, // Максимальный угол наклона
        speed: 300, // Скорость анимации
        glare: true, // Включить эффект блика
        "max-glare": 0.5, // Максимальная интенсивность блика
      });
    }

    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <Card ref={tiltRef} className="Card"  >
      <ImgBox className="imgbox">
        <Image
          className="img"
          src={selectedVariant.image || product.image}
          alt={product.name}
        />
      </ImgBox>
      <Object bg={bgColor} className="object"></Object>
      <Title>{product.name}</Title>
      <ColorOptions>
        {product.variants?.map((variant, index) => (
          <ColorCircle
            key={index}
            color={variant.color}
            onClick={() => {
              setSelectedVariant(variant);
              setBgColor(variant.color);
            }}
            className={selectedVariant.color === variant.color ? "active" : ""}
          />
        ))}
      </ColorOptions>
      <ButtonSection className="buttonSection">
        <p className="price">${product.price}</p>
        <Button
          className="button"
          onClick={() => addToCart(product, selectedVariant)}
        >
          Add to Cart
        </Button>
      </ButtonSection>
    </Card>
  );
}
