import Image from "next/image";
import styles from "./airPods.module.css";

import mainPic from "../../public/airpodspro.png";
import Link from "next/link";

export default function AirPods() {
  return (
    <div className={styles.container}>
      <div className={styles.textwrap}>
        <h2 className={styles.nameIphone}>Air Pods Pro 2</h2>
        <h2 className={styles.title}>Зачьотний звучара</h2>
        <h4 className={styles.price}>4,290.00 zł</h4>

        <Link href="/products">
          <button className={styles.mainButton}>Придбати</button>
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <Link href="/products">
          <Image
            src={mainPic}
            alt="mainpic"
            width={376}
            height={427}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
