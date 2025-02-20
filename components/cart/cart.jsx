import Image from "next/image";
import { useCart } from "./CartContext";
import styles from "./cart.module.css";



export default function Cart() {
  const { cart, removeFromCart } = useCart();


  return (
    <div className={styles.container}>
      <h1>Кошик</h1>
      
        <ul>
          {cart.map((item, index) => (
            <li className={styles.Item} key={index}>
              <Image src={item.selectedVariant.image} alt={item.name} width={50} />
              <span>{item.name}</span>
              <span>Price:${item.price}</span>
              <span>Color:{item.selectedVariant.colorName}</span>
        <button onClick={() => removeFromCart(index)}>X</button>
            </li>
          ))}
        </ul>
      
    </div>
  );
}
