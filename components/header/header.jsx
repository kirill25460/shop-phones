import { useState } from "react";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "../../public/searchIcon.png";
import bucketIcon from "../../public/bucketIcon.png";
import burgerIcon from "../../public/burgerIcon.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const pathname = usePathname();
  const getTextColor = () => {
    if (pathname === "/products") return "#060606";
    if (pathname === "/cart") return "#060606";
    if (pathname.startsWith("/product/")) return "#060606";
    return "#fff"; // 
  };
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
      setActiveCategory(null); 
    }, 100);
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.headerLogoContainer}>
          <div className={styles.headerIcon} style={{ background: getTextColor() }}></div>
          <h2 className={styles.title} style={{ color: getTextColor() }}>MOBILKA</h2>
        </div>
      </Link>
      <ul className={styles.list}>
        <li>
          <div
            className={styles.burgerMenu}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image style={{ color: getTextColor() }} className={styles.burgerIcon} src={burgerIcon}  alt="burgerIcon" />
            <div className={`${styles.menu} ${isOpen ? styles.open : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              
            {isOpen && (
            <div className={styles.menu}>
              
              {!activeCategory && (
                <>
                  <div className={styles.menuItem}>
                    <a onClick={() => toggleCategory("iphone")}>iPhone</a>
                  </div>
                  <div className={styles.menuItem}>
                    <a onClick={() => toggleCategory("airpods")}>AirPods</a>
                  </div>
                  <div className={styles.menuItem}>
                    <a onClick={() => toggleCategory("macbook")}>MacBook</a>
                  </div>
                  <div className={styles.menuItem}>
                    <a onClick={() => toggleCategory("applewatch")}>Apple Watch</a>
                  </div>
                  <div className={styles.menuItem}>
                    <a onClick={() => toggleCategory("accessories")}>Аксесуари</a>
                  </div>
                </>
              )}
              {activeCategory === "iphone" && (
                <div className={styles.subMenu}>
                  <h2 className={styles.ActiveCategoryText} onClick={() => setActiveCategory(null)}>iPhone</h2>
                  <Link href="/products">Переглянути всі моделі</Link>
                  <Link href="/products/iphone16pro">iPhone 16 Pro</Link>
                  <Link href="/products/iphone16">iPhone 16</Link>
                  <Link href="/products/iphone15pro">iPhone 15 Pro</Link>
                </div>
              )}
              {activeCategory === "airpods" && (
                <div className={styles.subMenu}>
                  <h2 className={styles.ActiveCategoryText} onClick={() => setActiveCategory(null)}>AirPods</h2>
                  <Link href="/products">Переглянути всі моделі</Link>
                  <Link href="/products/airpodspro">AirPods Pro</Link>
                  <Link href="/products/airpods3">AirPods 3</Link>
                  <Link href="/products/airpods2">AirPods 2</Link>
                </div>
              )}
              {activeCategory === "macbook" && (
                <div className={styles.subMenu}>
                  <h2 className={styles.ActiveCategoryText} onClick={() => setActiveCategory(null)}>MacBook</h2>
                  <Link href="/products">Переглянути всі моделі</Link>
                  <Link href="/products/macbookair">MacBook Air</Link>
                  <Link href="/products/macbookpro">MacBook Pro</Link>
                </div>
              )}
              {activeCategory === "applewatch" && (
                <div className={styles.subMenu}>
                  <h2 className={styles.ActiveCategoryText} onClick={() => setActiveCategory(null)}>Apple Watch</h2>
                  <Link href="/products">Переглянути всі моделі</Link>
                  <Link href="/products/applewatch8">Apple Watch 8</Link>
                  <Link href="/products/applewatchultra">Apple Watch Ultra</Link>
                </div>
              )}
              {activeCategory === "accessories" && (
                <div className={styles.subMenu}>
                  <h2 className={styles.ActiveCategoryText} onClick={() => setActiveCategory(null)}>Аксесуари</h2>
                  <Link href="/products">Переглянути всі моделі</Link>
                  <Link href="/products/cases">Чохли</Link>
                  <Link href="/products/chargers">Зарядні пристрої</Link>
                </div>
              )}
            </div>
          )}
            </div>
          </div>
        </li>
        <li style={{ color: getTextColor() }}>Гарантії</li>
        <li style={{ color: getTextColor() }}>Перевірка IMEI</li>
        <li style={{ color: getTextColor() }}>Про нас</li>
        <li style={{ color: getTextColor() }}>Зв’яжісться з нами</li>
        <li style={{ color: getTextColor() }}>Трейд-ін</li>
        <li style={{ color: getTextColor() }}>Укр-Прокат</li>
        <Image style={{ color: getTextColor() }} className={styles.searchIcon} src={searchIcon} alt="SearchIcon" />
      </ul>
      <Link href="/cart" className={styles.bucketContainer} style={{ color: getTextColor() }}>
        <Image src={bucketIcon} alt="bucketIcon" style={{ color: getTextColor() }} />
        <p style={{ color: getTextColor() }} >10000 zlotiv</p>
      </Link>
    </header>
  );
}
