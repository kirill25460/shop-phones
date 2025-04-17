import styles from "./ProductsTitle.module.css";


export default function ProductsTitle() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наші товари</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>iPhone</li>
        <li className={styles.listItem}>AirPods</li>
        <li className={styles.listItem}>MacBook</li>
        <li className={styles.listItem}>Apple Watch</li>
        <li className={styles.listItem}>Аксесуари</li>
        <li className={styles.listItem}>Search</li>
      </ul>
    </div>
  );
}
