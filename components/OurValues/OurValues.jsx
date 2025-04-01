import styles from "./OurValues.module.css";

export default function OurValues() {
  return (
    <div className={styles.containerOurValues}>
      <h1 className={styles.mainText}>Наші цінності</h1>
      <ul className={styles.ourValuesList}>
        <li className={styles.ourValuesItem}>
            <h2 className={styles.itemMainText}>Інновації</h2>
            <p className={styles.itemText}>Ми завжди слідкуємо за технологічними трендами, щоб запропонувати вам найкраще.</p>
        </li>
        <li className={styles.ourValuesItem}>
            <h2 className={styles.itemMainText}>Інновації</h2>
            <p className={styles.itemText}>Ми завжди слідкуємо за технологічними трендами, щоб запропонувати вам найкраще.</p>
        </li>
        <li className={styles.ourValuesItem}>
            <h2 className={styles.itemMainText}>Інновації</h2>
            <p className={styles.itemText}>Ми завжди слідкуємо за технологічними трендами, щоб запропонувати вам найкраще.</p>
        </li>
        <li className={styles.ourValuesItem}>
            <h2 className={styles.itemMainText}>Інновації</h2>
            <p className={styles.itemText}>Ми завжди слідкуємо за технологічними трендами, щоб запропонувати вам найкраще.</p>
        </li>
      </ul>
    </div>
  );
}
