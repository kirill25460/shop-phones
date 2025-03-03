import Image from "next/image";
import styles from "./offerOfTheDay.module.css";

import mainPic from "../../public/offerOfTheDayPic.webp";

export default function OfferOfTheDay() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.nameIphone}>Пропозиція дня</h2>
        <h2 className={styles.title}>
          Apple iPhone 15 Pro 256GB
          <br />Natural Titanium
        </h2>
        <h4 className={styles.price}>4,290.00 zł</h4>
        <button className={styles.mainButton}>Придбати</button>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={mainPic} alt="mainpic" width={376} height={445} priority />
      </div>
    </div>
  );
}
