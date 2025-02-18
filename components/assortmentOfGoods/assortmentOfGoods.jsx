import Image from "next/image";
import styles from "./assortmentOfGoods.module.css";

import appleWatch from "../../public/applewatchpic.png";
import ipad from "../../public/ipadpic.png";
import macmini from "../../public/macminiPic.png";
import imac from "../../public/iMacpic.png";


export default function AssortmentOfGoods() {


  return (
<div className={styles.container}>
   <ul className={styles.list}>
    <li><h4>Apple Watch</h4> <Image src={appleWatch} alt="appleWatch" width={610} height={470} priority/></li>
    <li><h4>iPad</h4><Image src={ipad} alt="ipad" width={382} height={477} priority/></li>
    <li><h4>Mac Mini </h4><Image src={macmini} alt="macmini" width={536} height={304} priority/></li>
    <li><h4>iMac</h4><Image src={imac} alt="imac" width={482} height={401} priority/></li>
   </ul>
</div>
  );
}