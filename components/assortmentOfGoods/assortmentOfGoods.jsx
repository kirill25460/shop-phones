import Image from "next/image";
import styles from "./assortmentOfGoods.module.css";

import appleWatch from "../../public/applewatchpic.png";
import ipad from "../../public/ipadpic.png";
import macmini from "../../public/macminiPic.png";
import imac from "../../public/iMacpic.png";
import accessories from "../../public/accessories.png";
import moveIOS from "../../public/moveIOS.png";

export default function AssortmentOfGoods() {


  return (
<div className={styles.container}>
   <ul className={styles.list}>
    <li className={styles.listItemAbs}><h4>Apple Watch</h4> <Image className={styles.imageBottom} src={appleWatch} alt="appleWatch" width={610} height={470} priority/></li>
    <li className={styles.listItemAbs}><h4>iPad</h4><Image className={styles.imageBottom} src={ipad} alt="ipad" width={382} height={477} priority/></li>
    <li className={styles.listItem}><h4>Mac Mini </h4><Image src={macmini} alt="macmini" width={536} height={304} priority/></li>
    <li className={styles.listItem}><h4>iMac</h4><Image src={imac} alt="imac" width={482} height={401} priority/></li>
    <li className={styles.listItemBlack}><button>Аксесуари</button><Image className={styles.imageBottom} src={accessories} alt="accessories" width={630} height={454} priority/></li>
    <li className={styles.listItemBlack}><button>Перехід на IOS</button><Image className={styles.imageCenter} src={moveIOS} alt="moveIOS" width={312} height={372} priority/></li>
   </ul>
</div>
  );
}