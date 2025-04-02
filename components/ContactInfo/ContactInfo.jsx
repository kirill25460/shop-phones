import styles from "./ContactInfo.module.css";
import Image from "next/image";
import burgerBlackIcon from "../../public/questionIcon.png";

export default function ContactInfo() {
  return (
    <div className={styles.containerContactInfo}>
      <h1 className={styles.mainText}>Зв’яжіться з нами</h1>
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockItem}>
          <h2 className={styles.mainTextBlock}>Контактні дані</h2>
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
          <p className={styles.navText}>info@evomac.com</p>
        </div>
        <div className={styles.consultationBlock}>
          <p className={styles.nameTextItem}>Євген Коснсультанційович</p>
          <div className={styles.questionBlock}>
            <p className={styles.questionItem}> Хев е квешн?</p>
            <Image
              src={burgerBlackIcon}
              className={styles.questionIcon}
              alt="questionIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
