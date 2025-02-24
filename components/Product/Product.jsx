import Image from "next/image";
import styles from "./Product.module.css";
import mainPic from "../../public/offerOfTheDayPic.png";
import RearView from "../../public/iPhone15RearView.png";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Image src={mainPic} alt={product.name} width={376} height={445} />
        <div>
          {" "}
          <h1>{product.name}</h1>
          <ul className={styles.list}>
            <li>
              <p className={styles.info}>
                <span className={styles.span}>Stan:</span>Telefon, który otrzymasz, jest<span className={styles.span}>nie aktywowany</span> 
                i posiada 12 miesięcy oficjalnej gwarancji.
              </p>
            </li>
            <li>
              <p className={styles.info}>
                <span className={styles.span}>Jak działa:</span>
                urządzenie nie posiada blokad SIMLOCK, iCloud, Find My iPhone
                oraz blokad ratalnych.
              </p>
            </li>
            <li>
              <p className={styles.info}>
                <span className={styles.span}>Legalne pochodzenie:</span>
                oferowane urządzenia zostały legalnie nabyte z zachowaniem
                wszelkich procedur marżowych.
              </p>
            </li>
            <li>
              <p className={styles.info}>
                <span className={styles.span}>Zestaw:</span>
                iPhone, kabel, oryginalne pudełko, faktura zakupu, karta
                gwarancyjna.
              </p>
            </li>
          </ul>
          <div className={styles.buyWrap}>
            {" "}
            <p>${product.price}</p>
            <button className={styles.buyButton}>Купити</button>
          </div>
        </div>
      </div>

      <div className={styles.characteristicswrap}>
        <h2>Характеристики</h2>
        <div className={styles.characteristicscon}>
          <div className={styles.characteristicswrapLeft}>
            <h4>Колір</h4>
            <Image src={RearView} alt={product.name} width={364} height={290} />
            <p>Чорний, блакитний, зелений, жовтий, рожевий</p>
          </div>

          <div className={styles.characteristicswrapRight}>
            <h2>Ємність</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
