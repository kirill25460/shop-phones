import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactFormContinar}>
      <h1 className={styles.mainText}>
        Є питання? Залиште дані для зв’язку – ми допоможемо обрати ідеальну
        техніку для вас!
      </h1>
      <form className={styles.formBlock}>
        <label className={styles.labelForm} htmlFor="firstname">
          Ім’я
        </label>
        <input
          className={styles.input}
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Аркадій"
        />
        <label className={styles.labelForm} htmlFor="secondname">
          Прізвище
        </label>
        <input
          className={styles.input}
          id="secondname"
          name="secondname"
          type="text"
          placeholder="Понторезович"
        />
        <label className={styles.labelForm} htmlFor="number">
          Номер телефону
        </label>
        <input
          className={styles.input}
          id="number"
          name="number"
          placeholder="+380 041 540 4407"
        />
        <label className={styles.labelForm} htmlFor="email">
          Електронна пошта
        </label>
        <input
          className={styles.input}
          id="email"
          name="email"
          placeholder="arcasha2basha@gmail.com"
        />
        <button className={styles.buttonForm}>Залишити заявку</button>
      </form>
    </div>
  );
}
