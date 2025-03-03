"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import AboutUs from "../../components/AboutUs/aboutUs";
import WhyUs from "../../components/WhyUs/WhyUs";
import styles from "./page.module.css";
export default function AbotUsPage() {
  return (
    <div className={styles.container}>
      <Header />
 <AboutUs/>
 <WhyUs/>
      <Footer />
    </div>
  );
}
