import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Очищаем таймер, если он есть
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Устанавливаем задержку перед закрытием меню
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Задержка 300 мс
  };
  return (
    <header className={styles.container}>
      <div>
        <Link href="/"> 
          <h2 className={styles.title}>MOBILKA</h2>
        </Link>
      </div>
      <ul className={styles.list}>
        <li>  <div className={styles.burgerMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
      <button className={styles.burgerIcon}>
        ☰
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}
       onMouseEnter={handleMouseEnter} // Удерживаем меню открытым при наведении на него
       onMouseLeave={handleMouseLeave}>
        <a href="#">iPhone</a>
        <a href="#">AirPods</a>
        <a href="#">MacBook</a>
        <a href="#">Apple Watch</a>
        <a href="#">Аксесуари</a>
      </div>
    </div></li>
        <li>Гарантії</li>
        <li>Перевірка IMEI</li>
        <li>Про нас</li>
        <li>Зв’яжісться з нами </li>
        <li>Трейд-ін</li>
        <li>Укр-Прокат</li>
      </ul>
      <Link href="/cart">
        <button>Перейти в корзину</button>
      </Link>
    </header>
  );
}
