import React, { useState } from "react";
import Image from "next/image";
import styles from "./WhyUs.module.css";
import check from "../../public/checkmark.svg";
export default function WhyUs() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Чому обирають EvoMac?</h3>
      <ul className={styles.list}>
        <li>
          <Image src={check} alt="check" />
          <p className={styles.text}>
            <span className={styles.textSpan}>Швидка доставка</span> – Ваші
            замовлення обробляються максимально оперативно, щоб ви отримали свою
            покупку якнайшвидше.
          </p>
        </li>
        <li>
          {" "}
          <Image src={check} alt="check" />
          <p className={styles.text}>
            <span className={styles.textSpan}>Гнучкі умови оплати</span> –
            Пропонуємо зручні варіанти розрахунку, включаючи оплату частинами та
            кредитні програми.
          </p>
        </li>
        <li>
          {" "}
          <Image src={check} alt="check" />
          <p className={styles.text}>
            <span className={styles.textSpan}>Вигідні ціни</span> – Завдяки
            прямим поставкам ми пропонуємо конкурентоспроможні ціни без шкоди
            для якості.
          </p>
        </li>
        <li>
          <Image src={check} alt="check" />
          <p className={styles.text}>
            <span className={styles.textSpan}>Індивідуальний підхід</span> – Ми
            допоможемо підібрати ідеальний пристрій під ваші потреби та бюджет.
          </p>
        </li>
        <li>
          <Image src={check} alt="check" />
          <p className={styles.text}>
            <span className={styles.textSpan}>Офіційна гарантія та сервіс</span>
            – Всі пристрої мають гарантію та технічну підтримку.
          </p>
        </li>
        <li>
          <Image src={check} alt="check" />
          <p className={styles.text}>
            <span className={styles.textSpan}>Гарантована якість</span>– Ми
            пропонуємо тільки оригінальну продукцію, яка проходить перевірку
            перед продажем.
          </p>
        </li>
      </ul>
    </div>
  );
}
