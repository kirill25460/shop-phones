import Image from "next/image";
import styles from "./TradeInHero.module.css";
import imgHero from "../../public/TradeInHeroImg.png";
import logo from "../../public/dark_header_logo.webp";

export default function TradeInHero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainText}>Трейд-ін</h1>
      <p className={styles.mainItemText}>
        За допомогою EvoMac Trade In ви можете отримати чудову вигоду для свого
        поточного пристрою та застосувати її до нового. І зробити все це можна
        онлайн.
      </p>
      <div className={styles.imgBlock}>
        <Image src={imgHero} className={styles.imgHeroItem} alt="EvoMac" />
        <Image src={logo} alt="EvoMac Logo" className={styles.imgLogo} />
      </div>
    </div>
  );
}
