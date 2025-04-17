import Image from "next/image";
import styles from "./offerOfTheDay.module.css";

import mainPic from "../../public/offerOfTheDayPic.webp";
import Link from "next/link";

export default function OfferOfTheDay() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.nameIphone}>Пропозиція дня</h2>
        <h2 className={styles.title}>
          Apple iPhone 15 Pro 256GB
          <br />
          Natural Titanium
        </h2>
        <h4 className={styles.price}>4,290.00 zł</h4>
        <Link href="/products">
          <button className={styles.mainButton}>Придбати</button>
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <Link href="/products">
          <Image src={mainPic} alt="mainpic" priority />
        </Link>
      </div>
    </div>
  );
}
