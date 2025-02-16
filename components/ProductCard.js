import { useState } from "react";

import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  border-radius: 16px;
  transition: background 0.3s ease-in-out;
  background: #fff;
  border:1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Wrap =styled.div`
  width: 248px;
  padding: 20px;
  border-radius: 16px;
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


export default function ProductCard({ product }) {
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
        <button>Add to Cart</button>
      </Card>
    );
  }
  
