import Image from "next/image";
import styles from "./main.module.css";

import mainPic from "../../public/mainPic.png";



export default function Main() {


  return (
<div className={styles.container}>
    <div className={styles.imageWrapper}>
    <Image src={mainPic} alt="mainpic" width={464} height={428} priority/>
    </div>
<div className={styles.textwrap}>
    <h2 className={styles.nameIphone}>iPhone 16 Pro</h2>
    <h2 className={styles.title}>Міць. Краса. <br /><span className={styles.titleSpan}>Титан.</span></h2>
    <button className={styles.mainButton}>Попереднє замовлення</button>
</div>
</div>
  );
}