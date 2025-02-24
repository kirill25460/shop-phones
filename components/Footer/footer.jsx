import { useState } from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.iconImage}></div>
        <h2>MOBILKA</h2>
      </div>
      <div className={styles.wrapList}>
        <div>
          <h3>Обслуговування клієнтів</h3>
          <ul className={styles.list}>
            <li>Про нас</li>
            <li>Зв’яжіться з нами</li>
            <li>Порівняти</li>
            <li>FAQ</li>
            <li>Доставка</li>
          </ul>
        </div>
        <div>
          <h3>Категорії</h3>
          <ul className={styles.list}>
            <li>Apple Watch</li>
            <li>AirPods</li>
            <li>iPhone</li>
            <li>iMac</li>
            <li>Аксесуари</li>
          </ul>
        </div>
        <div>
          <h3>Категорії</h3>
          <ul className={styles.list}>
            <li>Гарантії</li>
            <li>Політика повернення та відшкодування</li>
            <li>Політика використання файлів cookie</li>
            <li>Правила та умови інтернет- магазину</li>
            <li>Приватність</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
