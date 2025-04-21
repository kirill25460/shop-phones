import Image from "next/image";
import styles from "./delivery.module.css";
import { useState } from "react";
import airpods from "../../../public/airpods_card.webp";
import checkmark from "../../../public/checkmark.png";

export default function Delivery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPurchasedFirst, setIsPurchasedFirst] = useState(false);
  const [isPurchasedSecond, setIsPurchasedFirstSecond] = useState(false);
  const [isPurchasedFirstThird, setIsPurchasedThird] = useState(false);
  const [isPurchasedFourth, setIsPurchasedFourth] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    pickup: false,
    courier: false,
  });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option], // Переключаем состояние кнопки
    }));
  };

  const togglePurchased = (index) => {
    switch (index) {
      case 1:
        setIsPurchasedFirst(true);
        break;
      case 2:
        setIsPurchasedFirstSecond(true);
        break;
      case 3:
        setIsPurchasedThird(true);
        break;
      case 4:
        setIsPurchasedFourth(true);
        break;
    }
  };

  const products = [
    {
      id: 1,
      name: "Air Pods Pro 2",
      price: "1,090.00 zł",
      image: airpods,
      isPurchased: isPurchasedFirst,
    },
    {
      id: 2,
      name: "Air Pods Pro 2",
      price: "1,090.00 zł",
      image: airpods,
      isPurchased: isPurchasedSecond,
    },
    {
      id: 3,
      name: "Air Pods Pro 2",
      price: "1,090.00 zł",
      image: airpods,
      isPurchased: isPurchasedFirstThird,
    },
    {
      id: 4,
      name: "Air Pods Pro 2",
      price: "1,090.00 zł",
      image: airpods,
      isPurchased: isPurchasedFourth,
    },
  ];

  return (
    <div className={styles.Container}>
      <div className={styles.wrap}>
        <div className={styles.containerForm}>
          <h2 className={styles.mainInputText}>Доставка</h2>
          <form className={styles.form}>
            <label className={styles.labelForm} htmlFor="firstname">
              Ім’я
            </label>
            <input
              className={styles.input}
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Аркадій"
            />
            <label className={styles.labelForm} htmlFor="secondname">
              Прізвище
            </label>
            <input
              className={styles.input}
              id="secondname"
              name="secondname"
              type="text"
              placeholder="Понторезович"
            />
            <label className={styles.labelForm} htmlFor="number">
              Номер телефону
            </label>
            <input
              className={styles.input}
              id="number"
              name="number"
              placeholder="+380 041 540 4407"
            />
            <label className={styles.labelForm} htmlFor="email">
              Електронна пошта
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </form>
        </div>
        <div className={styles.containerInfo}>
          <h2 className={styles.mainInputText}>Замовлення</h2>
          <ul className={styles.inputList}>
            <li className={styles.inputItem}>
              <p className={styles.mainTextItem}>
                iPhone 15 Pro x2 5,140.00 zl
              </p>
              <p className={styles.textItem}>Natural Titanium</p>
            </li>
          </ul>
          <h2 className={styles.mainInputText}>Отримання</h2>
          <div className={styles.checkboxConteiner}>
            <div className={styles.radioWrapper}>
              <input
                type="checkbox"
                id="pickup"
                checked={selectedOptions.pickup}
                onChange={() => handleChange("pickup")}
              />
              <label htmlFor="pickup">Самовивіз</label>
            </div>
            <div className={styles.radioWrapper}>
              <input
                type="checkbox"
                id="courier"
                checked={selectedOptions.courier}
                onChange={() => handleChange("courier")}
              />
              <label htmlFor="courier">Кур’єр</label>
            </div>
          </div>
          <h2 className={styles.mainInputText}>Загальна вартість</h2>
          <div className={styles.priceConteiner}>
            <p className={styles.mainPrice}>10,280.00 zl</p>
            <p className={styles.salePrice}>11,280.00 zl</p>
          </div>
          <div className={styles.promocodeConteiner}>
            <input
              id="promocode"
              name="promocode"
              type="text"
              placeholder="Промокод"
              className={styles.promocodeInput}
            />
            <button className={styles.promocodeBtn}>Застосувати</button>
          </div>
        </div>
      </div>
      <div className={styles.containerBuy}>
        <h2 className={styles.mainTextBuy}>
          З цим товаром часто купують разом:
        </h2>
        <ul className={styles.listBuy}>
          {products.map((product, index) => (
            <li
              key={product.id}
              className={`${styles.itemBuy} ${
                hoveredIndex === index ? styles.hovered : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.contentWrapper}>
                <div className={styles.imgBlock}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={126}
                    height={143}
                  />
                </div>
                <p className={styles.itemMainText}>{product.name}</p>
                <p className={styles.itemText}>{product.price}</p>
              </div>
              {product.isPurchased ? (
                <button
                  className={`${styles.hoveredAddToCartBtn} ${
                    hoveredIndex === index ? styles.visible : ""
                  }`}
                  onClick={() => togglePurchased(product.id)}
                >
                  <Image src={checkmark} alt="EvoMac Logo" />
                </button>
              ) : (
                <button
                  className={`${styles.addToCartBtn} ${
                    hoveredIndex === index ? styles.visible : ""
                  }`}
                  onClick={() => togglePurchased(product.id)}
                >
                  Додати в кошик
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
