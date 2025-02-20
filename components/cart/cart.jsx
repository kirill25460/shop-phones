import Image from "next/image";
import { useCart } from "./CartContext";
import styles from "./cart.module.css";



export default function Cart() {
  const { cart, removeFromCart } = useCart();


  return (
    <div className={styles.Container}>
      <h1>Кошик</h1>
        <ul className={styles.list}>
          {cart.map((item, index) => (
            <li className={styles.Item} key={index}>
              <Image src={item.selectedVariant.image} alt={item.name} width={148} height={175} />
              <div><h2 className={styles.ItemName}>{item.name}</h2>
              <h3 className={styles.ItemColor}>{item.selectedVariant.colorName}</h3>
              <p className={styles.ItemInfo}>Stan: Telefon, który otrzymasz, jest nie aktywowanyi <br/> i posiada 12 miesięcy oficjalnej gwarancji.</p>
              <p className={styles.ItemGarantia}>+300 PLN (6 miesięcy garantia)</p>
              </div>
              <div><h3>1</h3></div>
              <div><h2 className={styles.ItemPrice}>${item.price}</h2></div>
              
        <button onClick={() => removeFromCart(index)}>X</button>
            </li>
          ))}
        </ul>
      
    </div>
  );
}
