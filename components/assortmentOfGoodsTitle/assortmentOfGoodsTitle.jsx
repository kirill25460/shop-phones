import Image from "next/image";
import styles from "./assortmentOfGoodsTitle.module.css";

import mainPic from "../../public/assortmentOfGoodsPic.png";



export default function AssortmentOfGoodsTitle() {


  return (
<div className={styles.container}>
    <div className={styles.imageWrapper}>
    <Image src={mainPic} alt="mainpic" width={1002} height={573} priority/>
    </div>
<div className={styles.textwrap}>
    <h2 className={styles.title}>Перегляньте весь <br />асортимент товарів</h2>
    <button className={styles.mainButton}>Придбати</button>
</div>
</div>
  );
}