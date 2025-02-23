import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";
import mainPic from "../../public/titaniumHero.png";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={mainPic} alt="mainpic" width={922} height={495} priority />
      </div>
      <div className={styles.textwrap}>
        <h2 className={styles.nameIphone}>Купуй у розстрочку</h2>
        <h2 className={styles.title}>Будь ласка</h2>
        <Link href="/products">
          <button className={styles.mainButton}>Придбати</button>
        </Link>
      </div>
    </div>
  );
}
