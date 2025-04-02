import { useRef, useState, useEffect } from "react";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "../../public/searchIcon.png";
import searchBlackIcon from "../../public/searchBlackIcon.webp";
import searchButIcon from "../../public/search_header_img.webp";
import bucketIcon from "../../public/bucketIcon.png";
import bucketBlackIcon from "../../public/bucketBlackIcon.webp";
import burgerIcon from "../../public/burgerIcon.png";
import burgerIconItem from "../../public/BurgerIconMenu.png";
import burgerBlackIcon from "../../public/burgerBlackIcon.webp";
import header_logo from "../../public/Header_Logo.webp";
import dark_header_logo from "../../public/dark_header_logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null);
  const pathname = usePathname();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getTextColor = () => {
    if (pathname === "/checkIMEI") return "#060606";
    if (pathname === "/guarantees") return "#060606";
    if (pathname === "/products") return "#060606";
    if (pathname === "/cart") return "#060606";
    if (pathname === "/about_us") return "#060606";
    if (pathname === "/contactUs") return "#060606";
    if (pathname.startsWith("/product/")) return "#060606";

    return "#fff";
  };

  const getImg = () => {
    if (pathname === "/checkIMEI") return dark_header_logo;
    if (pathname === "/guarantees") return dark_header_logo;
    if (pathname === "/products") return dark_header_logo;
    if (pathname === "/cart") return dark_header_logo;
    if (pathname === "/about_us") return dark_header_logo;
    if (pathname === "/contactUs") return dark_header_logo;
    if (pathname.startsWith("/product/")) return dark_header_logo;
    return header_logo;
  };

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSearch(false);
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setActiveCategory(null);
    }
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const enableSearch = () => {
    setActiveSearch((prev) => !prev);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      console.log("Отправка поиска:", searchQuery);
      setSearchQuery("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.headerLogoContainer}>
          <Image src={getImg()} alt="EvoMac Logo" width={91} height={40} />
          <h2 className={styles.title} style={{ color: getTextColor() }}>
            EvoMac
          </h2>
        </div>
      </Link>
      <ul className={styles.list}>
        <li>
          <div className={styles.burgerMenu} onClick={openMenu}>
            {pathname === "/" ? (
              <Image
                className={styles.burgerIcon}
                src={burgerIcon}
                alt="burgerIcon"
              />
            ) : (
              <Image
                className={styles.burgerIcon}
                src={burgerBlackIcon}
                alt="burgerIcon"
              />
            )}
            {isOpen || activeSearch ? (
              <div className={styles.overlay} onClick={openMenu}></div>
            ) : (
              <></>
            )}
            {isOpen && (
              <div
                className={styles.menu}
                ref={menuRef}
                onClick={(e) => e.stopPropagation()}
              >
                {!activeCategory && (
                  <>
                    <Image
                      className={styles.burgerIconItem}
                      src={burgerIconItem}
                      alt="burgerIcon"
                    />
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
                      <a onClick={() => toggleCategory("applewatch")}>
                        Apple Watch
                      </a>
                    </div>
                    <div className={styles.menuItem}>
                      <a onClick={() => toggleCategory("accessories")}>
                        Аксесуари
                      </a>
                    </div>
                  </>
                )}
                {activeCategory === "iphone" && (
                  <div className={styles.subMenu}>
                    <h2
                      className={styles.ActiveCategoryText}
                      onClick={() => setActiveCategory(null)}
                    >
                      iPhone
                    </h2>
                    <Link href="/products">Переглянути всі моделі</Link>
                    <Link href="/products/iphone16pro">iPhone 16 Pro</Link>
                    <Link href="/products/iphone16">iPhone 16</Link>
                    <Link href="/products/iphone15pro">iPhone 15 Pro</Link>
                  </div>
                )}
                {activeCategory === "airpods" && (
                  <div className={styles.subMenu}>
                    <h2
                      className={styles.ActiveCategoryText}
                      onClick={() => setActiveCategory(null)}
                    >
                      AirPods
                    </h2>
                    <Link href="/products">Переглянути всі моделі</Link>
                    <Link href="/products/airpodspro">AirPods Pro</Link>
                    <Link href="/products/airpods3">AirPods 3</Link>
                    <Link href="/products/airpods2">AirPods 2</Link>
                  </div>
                )}
                {activeCategory === "macbook" && (
                  <div className={styles.subMenu}>
                    <h2
                      className={styles.ActiveCategoryText}
                      onClick={() => setActiveCategory(null)}
                    >
                      MacBook
                    </h2>
                    <Link href="/products">Переглянути всі моделі</Link>
                    <Link href="/products/macbookair">MacBook Air</Link>
                    <Link href="/products/macbookpro">MacBook Pro</Link>
                  </div>
                )}
                {activeCategory === "applewatch" && (
                  <div className={styles.subMenu}>
                    <h2
                      className={styles.ActiveCategoryText}
                      onClick={() => setActiveCategory(null)}
                    >
                      Apple Watch
                    </h2>
                    <Link href="/products">Переглянути всі моделі</Link>
                    <Link href="/products/applewatch8">Apple Watch 8</Link>
                    <Link href="/products/applewatchultra">
                      Apple Watch Ultra
                    </Link>
                  </div>
                )}
                {activeCategory === "accessories" && (
                  <div className={styles.subMenu}>
                    <h2
                      className={styles.ActiveCategoryText}
                      onClick={() => setActiveCategory(null)}
                    >
                      Аксесуари
                    </h2>
                    <Link href="/products">Переглянути всі моделі</Link>
                    <Link href="/products/cases">Чохли</Link>
                    <Link href="/products/chargers">Зарядні пристрої</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </li>
        <li style={{ color: getTextColor() }}>
          {" "}
          <Link href="/guarantees">Гарантії</Link>
        </li>
        <li style={{ color: getTextColor() }}>
          <Link href="/checkIMEI">Перевірка IMEI</Link>
        </li>
        <li style={{ color: getTextColor() }}>
          <Link href="/about_us">Про нас</Link>
        </li>
        <li style={{ color: getTextColor() }}>
          <Link href="/contactUs">Зв’яжісться з нами</Link>
        </li>
        <li style={{ color: getTextColor() }}>
          <Link href="/guarantees">Трейд-ін</Link>
        </li>
        {pathname === "/" ? (
          <Image
            className={styles.searchIcon}
            src={searchIcon}
            alt="SearchIcon"
            onClick={enableSearch}
          />
        ) : (
          <Image
            className={styles.searchIcon}
            src={searchBlackIcon}
            alt="SearchIcon"
            onClick={enableSearch}
          />
        )}
      </ul>
      <Link
        href="/cart"
        className={styles.bucketContainer}
        style={{ color: getTextColor() }}
      >
        {pathname === "/" ? (
          <Image src={bucketIcon} alt="bucketIcon" />
        ) : (
          <Image src={bucketBlackIcon} alt="bucketIcon" />
        )}
        <p style={{ color: getTextColor() }}>10000 zlotiv</p>
      </Link>
      {activeSearch ? (
        <div
          className={styles.searchBlock}
          ref={menuRef}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.navBlock}>
            <ul className={styles.list}>
              <li>
                <div className={styles.burgerMenu} onClick={openMenu}>
                  <Image
                    className={styles.burgerIcon}
                    src={burgerIcon}
                    alt="burgerIcon"
                  />
                  {isOpen && (
                    <div className={styles.overlay} onClick={openMenu}></div>
                  )}
                  {isOpen && (
                    <div className={styles.menu}>
                      {!activeCategory && (
                        <>
                          <Image
                            className={styles.burgerIconItem}
                            src={burgerIconItem}
                            alt="burgerIcon"
                          />
                          <div className={styles.menuItem}>
                            <a onClick={() => toggleCategory("iphone")}>
                              iPhone
                            </a>
                          </div>
                          <div className={styles.menuItem}>
                            <a onClick={() => toggleCategory("airpods")}>
                              AirPods
                            </a>
                          </div>
                          <div className={styles.menuItem}>
                            <a onClick={() => toggleCategory("macbook")}>
                              MacBook
                            </a>
                          </div>
                          <div className={styles.menuItem}>
                            <a onClick={() => toggleCategory("applewatch")}>
                              Apple Watch
                            </a>
                          </div>
                          <div className={styles.menuItem}>
                            <a onClick={() => toggleCategory("accessories")}>
                              Аксесуари
                            </a>
                          </div>
                        </>
                      )}
                      {activeCategory === "iphone" && (
                        <div className={styles.subMenu}>
                          <h2
                            className={styles.ActiveCategoryText}
                            onClick={() => setActiveCategory(null)}
                          >
                            iPhone
                          </h2>
                          <Link href="/products">Переглянути всі моделі</Link>
                          <Link href="/products/iphone16pro">
                            iPhone 16 Pro
                          </Link>
                          <Link href="/products/iphone16">iPhone 16</Link>
                          <Link href="/products/iphone15pro">
                            iPhone 15 Pro
                          </Link>
                        </div>
                      )}
                      {activeCategory === "airpods" && (
                        <div className={styles.subMenu}>
                          <h2
                            className={styles.ActiveCategoryText}
                            onClick={() => setActiveCategory(null)}
                          >
                            AirPods
                          </h2>
                          <Link href="/products">Переглянути всі моделі</Link>
                          <Link href="/products/airpodspro">AirPods Pro</Link>
                          <Link href="/products/airpods3">AirPods 3</Link>
                          <Link href="/products/airpods2">AirPods 2</Link>
                        </div>
                      )}
                      {activeCategory === "macbook" && (
                        <div className={styles.subMenu}>
                          <h2
                            className={styles.ActiveCategoryText}
                            onClick={() => setActiveCategory(null)}
                          >
                            MacBook
                          </h2>
                          <Link href="/products">Переглянути всі моделі</Link>
                          <Link href="/products/macbookair">MacBook Air</Link>
                          <Link href="/products/macbookpro">MacBook Pro</Link>
                        </div>
                      )}
                      {activeCategory === "applewatch" && (
                        <div className={styles.subMenu}>
                          <h2
                            className={styles.ActiveCategoryText}
                            onClick={() => setActiveCategory(null)}
                          >
                            Apple Watch
                          </h2>
                          <Link href="/products">Переглянути всі моделі</Link>
                          <Link href="/products/applewatch8">
                            Apple Watch 8
                          </Link>
                          <Link href="/products/applewatchultra">
                            Apple Watch Ultra
                          </Link>
                        </div>
                      )}
                      {activeCategory === "accessories" && (
                        <div className={styles.subMenu}>
                          <h2
                            className={styles.ActiveCategoryText}
                            onClick={() => setActiveCategory(null)}
                          >
                            Аксесуари
                          </h2>
                          <Link href="/products">Переглянути всі моделі</Link>
                          <Link href="/products/cases">Чохли</Link>
                          <Link href="/products/chargers">
                            Зарядні пристрої
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link href="/guarantees">Гарантії</Link>
              </li>
              <li>
                <Link href="/checkIMEI">Перевірка IMEI</Link>
              </li>
              <li>
                <Link href="/about_us">Про нас</Link>
              </li>
              <li>
                <Link href="/guarantees">Зв’яжісться з нами</Link>
              </li>
              <li>
                <Link href="/guarantees">Трейд-ін</Link>
              </li>
              <Image
                className={styles.searchIcon}
                src={searchIcon}
                alt="SearchIcon"
                onClick={enableSearch}
              />
            </ul>
          </div>
          <div className={styles.searchItemBlock}>
            <Image
              className={styles.searchButIcon}
              src={searchButIcon}
              alt="SearchIcon"
              onClick={handleSearchSubmit}
            />
            <input
              className={styles.searchInput}
              placeholder="Пошук..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
