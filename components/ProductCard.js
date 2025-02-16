import { useState } from "react";
import { useCart } from "@/components/CartContext";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  transition: background 0.3s ease-in-out;
  background: #fff;
padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const Wrap =styled.div`
  width: 248px;
  padding: 20px;
  transition: background 0.3s ease-in-out;
  background: ${({ bg }) => bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
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
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
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



export default function ProductCard({ product }) {
  const { addToCart } = useCart();
    const [bgColor, setBgColor] = useState(product?.variants?.[0]?.color || "#fff");
    const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || {});
  
    return (
      <Card>
        <Wrap bg={bgColor}>
          <Image
            src={selectedVariant.image || product.image} 
            alt={product.name}
            width={150}
            height={150}
          />
        </Wrap>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
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
        <Button onClick={() => addToCart(product, selectedVariant)} >Add to Cart</Button>
      </Card>
    );
  }
  
