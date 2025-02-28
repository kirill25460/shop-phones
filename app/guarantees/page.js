"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import Guarantees from "../../components/guarantees/guarantees";
import styles from "./page.module.css";
export default function GuaranteesPage() {
  return (
    <div className={styles.container}>
      <Header />
 <Guarantees/>
      <Footer />
    </div>
  );
}
