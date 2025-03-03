import React, { useState } from "react";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Про нас</h2>
      <h3 className={styles.aboutUsTitle}> EvoMac – ваш надійний партнер у світі технологій</h3>
      <div className={styles.textWrap}>
        <p className={styles.aboutUsText}><span className={styles.textSpan}>EvoMac</span>
           — це більше, ніж просто магазин електроніки. Ми створюємо
          простір, де сучасні технології стають доступними, а якість та сервіс
          визначають кожну покупку. Спеціалізуючись на продукції Apple, ми також
          пропонуємо техніку інших провідних брендів, щоб задовольнити будь-які
          потреби наших клієнтів.
        </p>
      </div>
      <div className={styles.wrapforWrap}>
        <div className={styles.textWrap2}>
          <button className={styles.buttonAboutUs}>Наша місія</button>
          <p className={styles.text}>
            Ми прагнемо зробити передові технології доступними кожному,
            пропонуючи якісний сервіс, надійні товари та вигідні умови покупки.
            Наша головна мета — забезпечити кожного клієнта сучасними гаджетами,
            що покращують життя, роботу та відпочинок.
          </p>
        </div>
        <div className={styles.textWrap2}>
          <button className={styles.buttonAboutUs}>Наше бачення</button>
          <p className={styles.text}>
            Світ технологій розвивається з неймовірною швидкістю, і ми впевнені,
            що кожен повинен мати доступ до найновіших рішень без зайвих
            переплат та ризиків. Ми прагнемо стати головним вибором для всіх,
            хто шукає якісну техніку, чесні умови та бездоганний сервіс.
          </p>
        </div>
      </div>
    </div>
  );
}
