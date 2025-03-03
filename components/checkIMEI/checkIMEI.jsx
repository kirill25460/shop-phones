import React, { useState } from 'react';
import styles from "./checkIMEI.module.css";
import Image from "next/image";
import mainPic from "../../public/offerOfTheDayPic.webp";
import { checkIMEIConfig } from './checkIMEIConfig';
export default function Checkimei() {
  const [selected, setSelected] = useState(checkIMEIConfig[0]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Перевірка IMEI</h2>
      <div className={styles.wrap1}>
        <div className={styles.textWrap}>
          <h3 className={styles.checkIphone}>
            Перевірте свій iPhone за номером IMEI і ви дізнаєтеся всю необхідну
            інформацію про нього.
          </h3>
          <h4 className={styles.textIMEI}>
            Знаючи IMEI або серійний номер, ми перевіримо точні дані даної
            моделі. Перед покупкою телефону варто дізнатися, який статус iCloud,
            Lock або Find My iPhone
          </h4>
          <div className={styles.buttonwrap}>
            <button className={styles.checkbutton}>apple.com</button>
            <button className={styles.checkbutton}>imeicheck</button>
            <button className={styles.checkbutton}>imei.info</button>
          </div>
        </div>
        <Image src={mainPic} alt="mainpic" width={376} height={445} priority />
      </div>
      <div className={styles.wrap2}>
        <h3>Що слід знати при перевірці:</h3>
        <div className={styles.buttonWrap}>
        {checkIMEIConfig.map((item) => (
          <button 
            key={item.id} 
            onClick={() => setSelected(item)}
            className={styles.infoButton}
          >
            {item.title}
          </button>
        ))}
      </div>
      <p>{selected.description}</p>
      </div>
    </div>
  );
}
