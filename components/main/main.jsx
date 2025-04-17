import Image from "next/image";
import styles from "./main.module.css";

import mainPic from "../../public/mainPic.png";
import Link from "next/link";

export default function Main() {
  return (
    <div className={styles.container}>
      <Link href="/products">
        <Image
          src={mainPic}
          className={styles.phoneImage}
          alt="mainpic"
          width={464}
          height={428}
          priority
        />
      </Link>
      <div className={styles.textwrap}>
        <h2 className={styles.nameIphone}>iPhone 16 Pro</h2>
        <h2 className={styles.title}>
          Міць. Краса. <br />
          <span className={styles.titleSpan}>Титан.</span>
        </h2>
        <Link href="/products">
          <button className={styles.mainButton}>Попереднє замовлення</button>
        </Link>
      </div>
    </div>
  );
}
