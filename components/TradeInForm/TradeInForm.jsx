import Image from "next/image";
import styles from "./TradeInForm.module.css";
import { useState } from "react";

export default function TradeInForm() {
  const [battery, setBattery] = useState(87);

  return (
    <div className={styles.container}>
      <h2 className={styles.mainText}>
        Замініть свій попередній пристрій на нову модель
      </h2>
      <p className={styles.mainItemText}>
        Скористуйтесь калькулятором Трейд-ін
      </p>
      <div className={styles.formBlock}>
        <div className={styles.firstBlock}>
          <div className={styles.selectBlock}>
            <label className={styles.itemLabel}>
              Модель iPhone
              <select className={styles.customSelect}>
                <option value="13promax">iPhone 13 Pro Max</option>
                <option value="14">iPhone 14</option>
                <option value="14promax">iPhone 14 Pro Max</option>
              </select>
            </label>

            <label className={styles.itemLabel}>
              Память
              <select className={styles.customSelect}>
                <option value="128">128 ГБ</option>
                <option value="256">256 ГБ</option>
                <option value="512">512 ГБ</option>
              </select>
            </label>
          </div>
          <div className={styles.batteryBlock}>
            <div className={styles.batteryMainBlock}>
              <label htmlFor="batteryRange" className={styles.label}>
                Стан батареї
              </label>
              <span className={styles.rangeValue}>{battery}%</span>
            </div>
            <div className={styles.rangeWrapper}>
              <input
                type="range"
                id="batteryRange"
                min="0"
                max="100"
                value={battery}
                onChange={(e) => setBattery(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
            <div className={styles.itemCheckbox}>
              <div className={styles.labelBlock}>
                <p className={styles.labelText}>
                  Весь час в чохлі і з захисним склом
                </p>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.labelBlock}>
                <p className={styles.labelText}>Наявність коробки</p>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <h3 className={styles.mainSecondBlockText}>Оцінка телефону</h3>
          <ul className={styles.blockList}>
            <li className={styles.blockItem}>
              <p className={styles.blackText}>Модель</p>
              <p className={styles.blueText}>iPhone 13 Pro Max</p>
            </li>
            <li className={styles.blockItem}>
              <p className={styles.blackText}>Пам’ять</p>
              <p className={styles.blueText}>256</p>
            </li>
            <li className={styles.blockItem}>
              <p className={styles.blackText}>Стан батареї</p>
              <p className={styles.blueText}>87%</p>
            </li>
            <li className={styles.blockItem}>
              <p className={styles.blackText}>Догляд</p>
              <p className={styles.blueText}>50 грн</p>
            </li>
            <li className={styles.blockItem}>
              <p className={styles.blackText}>Коробка</p>
              <p className={styles.blueText}>50 грн</p>
            </li>
          </ul>
          <p className={styles.priceItem}>
            13000 <span className={styles.priceSpan}>грн</span>
          </p>
        </div>
      </div>
    </div>
  );
}
