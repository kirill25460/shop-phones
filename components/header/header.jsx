import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import searchIcon from "../../public/searchIcon.png";
import bucketIcon from "../../public/bucketIcon.png";
import burgerIcon from "../../public/burgerIcon.png";

import Image from "next/image";

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
      <Link href="/">
        <div className={styles.headerLogoContainer}>
          <div className={styles.headerIcon}>.</div>

          <h2 className={styles.title}>MOBILKA</h2>
        </div>
      </Link>
      <ul className={styles.list}>
        <li>
          {" "}
          <div
            className={styles.burgerMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              className={styles.burgerIcon}
              src={burgerIcon}
              alt="burgerIcon"
            />
            <div
              className={`${styles.menu} ${isOpen ? styles.open : ""}`}
              onMouseEnter={handleMouseEnter} // Удерживаем меню открытым при наведении на него
              onMouseLeave={handleMouseLeave}
            >
              <a href="/products">iPhone</a>
              <a href="#">AirPods</a>
              <a href="#">MacBook</a>
              <a href="#">Apple Watch</a>
              <a href="#">Аксесуари</a>
            </div>
          </div>
        </li>
        <li>Гарантії</li>
        <li>Перевірка IMEI</li>
        <li>Про нас</li>
        <li>Зв’яжісться з нами </li>
        <li>Трейд-ін</li>
        <li>Укр-Прокат</li>
        <Image
          className={styles.searchIcon}
          src={searchIcon}
          alt="SearchIcon"
        />
      </ul>

      <Link href="/cart" className={styles.bucketContainer}>
        <Image src={bucketIcon} alt="bucketIcon" />
        <p> 10000 zlotiv</p>
      </Link>
    </header>
  );
}
