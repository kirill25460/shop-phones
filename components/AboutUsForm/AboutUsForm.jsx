import styles from "./AboutUsForm.module.css";

export default function AboutUsForm() {
  return (
    <div className={styles.containerAboutUsForm}>
      <h1 className={styles.mainText}>Залишайтесь з EvoMac!</h1>
      <h2 className={styles.secondText}>
        Ми працюємо для вас, щоб зробити процес покупки швидким, простим і
        безпечним.
      </h2>
      <h3 className={styles.textItem}>
        Є питання? Залиште дані для зв’язку – ми допоможемо обрати ідеальну
        техніку для вас!
      </h3>
      <div className={styles.formBlock}>
        <div className={styles.firstFormBlock}>
          <form className={styles.form}>
            <label className={styles.labelForm} htmlFor="firstname">
              Ім’я та Прізвище
            </label>
            <input
              className={styles.input}
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Аркадій"
            />
            <label className={styles.labelForm} htmlFor="secondname">
              Номер телефону
            </label>
            <input
              className={styles.input}
              id="secondname"
              name="secondname"
              type="text"
              placeholder="Понторезович"
            />
            <label className={styles.labelForm} htmlFor="number">
              Електронна пошта
            </label>
            <input
              className={styles.input}
              id="number"
              name="number"
              placeholder="+380 041 540 4407"
            />
          </form>
          <button className={styles.buttonForm}>Залишити заявку</button>
        </div>
        <div className={styles.secondFormBlock}>
          <h4 className={styles.mainSecondFormBlockText}>
            Ви можете самостійно зв’язатись з нами
          </h4>
          <h5 className={styles.navMainText}>Графік роботи</h5>
          <p className={styles.navText}>8:00 - 20:00 Понеділок - Субота</p>
          <h5 className={styles.navMainText}>Адреса</h5>
          <p className={styles.navText}>Україна, Волинська обл.,</p>
          <p className={styles.navText}>м. Луцьк, вул. Хомченка 24</p>
          <h5 className={styles.navMainText}>Номер телефону</h5>
          <p className={styles.navText}>+380 041 540 4407</p>
          <p className={styles.navText}>+380 036 617 9635</p>
          <h5 className={styles.navMainText}>Електронна адреса</h5>
          <p className={styles.navText}>evomac@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
