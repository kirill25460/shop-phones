"use client";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();


  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={item.selectedVariant.image} alt={item.name} width={50} />
              <span>{item.name}</span>
              <span>Price:${item.price}</span>
              <span>Color:{item.selectedVariant.colorName}</span>
        <button onClick={() => removeFromCart(index)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
