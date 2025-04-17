import styles from "./ProductInfo.module.css";
import Image from "next/image";
import iphone from "../../public/iphone_15_pro.png";

export default function ProductInfo() {
  return (
    <div className={styles.productInfoConteiner}>
      <div className={styles.productInfoBlock}>
        <Image src={iphone} alt="EvoMac Logo" className={styles.productImg} />
        <div className={styles.infoBlockItem}>
          <h1 className={styles.productName}>iPhone 15 Pro</h1>
          <h2 className={styles.productMaterial}>Natural Titanium</h2>
          <ul className={styles.productList}>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Stan:</span> Telefon, który
              otrzymasz,{" "}
              <span className={styles.productSpan}>jest nie aktywowany</span> i
              posiada 12 miesięcy oficjalnej gwarancji.
            </li>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Jak działa:</span>{" "}
              urządzenie nie posiada blokad SIMLOCK, iCloud, Find My iPhone oraz
              blokad ratalnych.
            </li>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Legalne pochodzenie:</span>{" "}
              oferowane urządzenia zostały legalnie nabyte z zachowaniem
              wszelkich procedur marżowych.
            </li>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Zestaw:</span> iPhone, kabel,
              oryginalne pudełko, faktura zakupu, karta gwarancyjna.
            </li>
          </ul>
          <div className={styles.priceBlock}>
            <p className={styles.priceItem}>4,290.00 zł</p>
            <button className={styles.priceButton}>Купити</button>
          </div>
        </div>
      </div>
    </div>
  );
}
