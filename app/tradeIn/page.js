"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import TradeInHero from "../../components/TradeInHero/TradeInHero";
import styles from "./page.module.css";
import TradeInForm from "@/components/TradeInForm/TradeInForm";

export default function TradeIn() {
  return (
    <div className={styles.container}>
      <Header />
      <TradeInHero />
      <TradeInForm />
      <Footer />
    </div>
  );
}
