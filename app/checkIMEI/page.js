"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import Checkimei from "../../components/checkIMEI/checkIMEI";
import styles from "./page.module.css";
export default function GuaranteesPage() {
  return (
    <div className={styles.container}>
      <Header />
 <Checkimei/>
      <Footer />
    </div>
  );
}
