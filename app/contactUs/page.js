"use client";

import Header from "../../components/header/header";
import Footer from "../../components/Footer/footer";
import styles from "./page.module.css";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <Header />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
}
