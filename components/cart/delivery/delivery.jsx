import Image from "next/image";

import styles from "./delivery.module.css";

export default function Delivery() {
  return (
    <div className={styles.Container}>
      <div className={styles.wrap}>
        <div className={styles.containerForm}>
          <h2>Доставка</h2>
          <form className={styles.form}>
            <label className={styles.labelForm} for="firstname">
              Ім’я
            </label>
            <input
              className={styles.input}
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Аркадій"
            />
            <label className={styles.labelForm} for="secondname">
              Прізвище{" "}
            </label>
            <input
              className={styles.input}
              id="secondname"
              name="secondname"
              type="text"
              placeholder="Понторезович"
            />

            <label className={styles.labelForm} for="number">
              Номер телефону
            </label>
            <input
              className={styles.input}
              id="number"
              name="number"
              type="number"
              placeholder="+380 041 540 4407"
            />
            <label className={styles.labelForm} for="email">
              Електронна пошта{" "}
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </form>
        </div>
        <div className={styles.containerInfo}>
          <h2>Замовлення</h2>
          <h2>Отримання</h2>
          <div>
    <input type="radio" id="huey" name="drone" value="huey"  />
    <label for="huey">Самовивіз</label>
  </div>
  <div>
    <input type="radio" id="kura" name="kura" value="kura"  />
    <label for="kura">Кур’єр</label>
  </div>
  <h2>Загальна вартість</h2>
        </div>
      </div>
      <div className={styles.containerBuy}>
        <h2>З цим товаром часто купують разом:</h2>
      </div>
    </div>
  );
}
