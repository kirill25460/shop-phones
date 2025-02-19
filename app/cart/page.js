"use client";
import { useCart } from "@/components/CartContext";
import Header from "../../components/header/header";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Item = styled.li`
width: 800px;
height: 100px;
display: flex;
align-items: center;
gap: 10px;
border-radius: 10px;
justify-content: space-around;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

const DeleteButton = styled.button`
background-color: transparent;
cursor: pointer;
border: none;
`;

export default function CartPage() {
  const { cart, removeFromCart } = useCart();


  return (
    <Container>
       <Header />
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <Item key={index}>
              <img src={item.selectedVariant.image} alt={item.name} width={50} />
              <span>{item.name}</span>
              <span>Price:${item.price}</span>
              <span>Color:{item.selectedVariant.colorName}</span>
        <DeleteButton onClick={() => removeFromCart(index)}>X</DeleteButton>
            </Item>
          ))}
        </ul>
      )}
    </Container>
  );
}
