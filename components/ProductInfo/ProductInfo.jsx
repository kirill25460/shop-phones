import styles from "./ProductInfo.module.css";
import Image from "next/image";
import iphone from "../../public/iphone_15_pro.png";
import characteristicIphonImg from "../../public/characteristicIphonImg.png";
import { useState } from "react";

export default function ProductInfo() {
  const [activeColorIdSpan, setActiveColorIdSpan] = useState(null);
  const [activeColorIdItem, setActiveColorIdItem] = useState(null);

  const handleClickSpan = (id) => {
    setActiveColorIdSpan(id);
  };

  const handleClickItem = (id) => {
    setActiveColorIdItem(id);
  };

  const colorsSpan = [
    { name: "Чорний, ", id: 1 },
    { name: "Блакитний, ", id: 2 },
    { name: "Зелений, ", id: 3 },
    { name: "Жовтий, ", id: 4 },
    { name: "Рожевий, ", id: 5 },
  ];

  const colorsItem = [
    { name: "128 ГБ", id: 1 },
    { name: "256 ГБ", id: 2 },
    { name: "512 ГБ", id: 3 },
  ];

  return (
    <div className={styles.productInfoConteiner}>
      <div className={styles.productInfoBlock}>
        <Image src={iphone} alt="EvoMac Logo" className={styles.productImg} />
        <div className={styles.infoBlockItem}>
          <h1 className={styles.productName}>iPhone 15 Pro</h1>
          <h2 className={styles.productMaterial}>Natural Titanium</h2>
          <ul className={styles.productList}>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Stan:</span> Telefon, który
              otrzymasz,{" "}
              <span className={styles.productSpan}>jest nie aktywowany</span> i
              posiada 12 miesięcy oficjalnej gwarancji.
            </li>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Jak działa:</span>{" "}
              urządzenie nie posiada blokad SIMLOCK, iCloud, Find My iPhone oraz
              blokad ratalnych.
            </li>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Legalne pochodzenie:</span>{" "}
              oferowane urządzenia zostały legalnie nabyte z zachowaniem
              wszelkich procedur marżowych.
            </li>
            <li className={styles.productItem}>
              <span className={styles.productSpan}>Zestaw:</span> iPhone, kabel,
              oryginalne pudełko, faktura zakupu, karta gwarancyjna.
            </li>
          </ul>
          <div className={styles.priceBlock}>
            <p className={styles.priceItem}>4,290.00 zł</p>
            <button className={styles.priceButton}>Купити</button>
          </div>
        </div>
      </div>
      <div className={styles.productCharacteristicBlock}>
        <h3 className={styles.productCharacteristicBlockMainText}>
          Характеристики
        </h3>
        <div className={styles.productCharacteristicFlexBlock}>
          <div className={styles.productCharacteristicFirstBlock}>
            <h4 className={styles.mainTextTypeOfDescription}>Колір</h4>
            <Image
              src={characteristicIphonImg}
              alt="EvoMac"
              className={styles.characteristicImg}
            />
            <p className={styles.colorChanger}>
              {colorsSpan.map((colorObj) => (
                <span
                  key={colorObj.id}
                  className={`${styles.colorChangerSpan} ${
                    activeColorIdSpan === colorObj.id ? styles.active : ""
                  }`}
                  onClick={() => handleClickSpan(colorObj.id)}
                >
                  {colorObj.name}
                </span>
              ))}
            </p>
            <p className={styles.productCharacteristicTextItem}>
              Алюмінієвий корпус
            </p>
            <p className={styles.productCharacteristicTextItem}>
              Передня панель із Ceramic Shield
            </p>
            <p className={styles.productCharacteristicTextItem}>
              Задня панель із прокольорованого скла
            </p>
            <ul className={styles.productCharacteristicList}>
              <li className={styles.productCharacteristicListItem}>
                Dynamic Island
              </li>
              <li className={styles.productCharacteristicListItem}>
                Підтримка HDR
              </li>
              <li className={styles.productCharacteristicListItem}>
                Технологія True Tone
              </li>
              <li className={styles.productCharacteristicListItem}>
                Розширена колірна гама (P3)
              </li>
              <li className={styles.productCharacteristicListItem}>
                Гаптичний дотик
              </li>
              <li className={styles.productCharacteristicListItem}>
                Контрастність 2 000 000:1 (стандартна)
              </li>
              <li className={styles.productCharacteristicListItem}>
                Олеофобне покриття, стійке до появи слідів від пальців
              </li>
              <li className={styles.productCharacteristicListItem}>
                Підтримка одночасного відображення кількох мов і наборів
                символів
              </li>
              <li className={styles.productCharacteristicListItem}>
                Яскравість: до 1000 кд/м² (стандартна); 1600 кд/м² у піковому
                режимі (HDR); 2000 кд/м² у піковому режимі (на сонці)
              </li>
            </ul>
          </div>
          <div className={styles.productCharacteristicSecondBlock}>
            <div className={styles.productCharacteristicCapacityBlock}>
              <h4 className={styles.mainTextTypeOfDescription}>Ємність</h4>
              <ul className={styles.productCharacteristicCapacityList}>
                {colorsItem.map((colorObj) => (
                  <li
                    key={colorObj.id}
                    onClick={() => handleClickItem(colorObj.id)}
                    className={`${
                      styles.productCharacteristicCapacityListItem
                    } ${
                      activeColorIdItem === colorObj.id ? styles.active : ""
                    }`}
                  >
                    {colorObj.name}
                  </li>
                ))}
              </ul>
            </div>
            <h4 className={styles.mainTextTypeOfDescription}>Дисплей</h4>
            <p className={styles.productText}>
              Дисплей OLED із повно­екранним дизайном, діагональ 6,1 дюйма
              2556×1179  пікселів, 460 пікселів на дюйм
            </p>
            <p className={styles.productTextItem}>
              Дисплей iPhone 15 має вигляд стандартного прямокутника
              із заокругленими кутами у красивому вигнутому корпусі. Довжина
              діагоналі дисплея становить 6,12 дюйма, якщо вимірювати
              між вершинами стандартного прямокутника (фактична зона перегляду
              менша).
            </p>
            <h4 className={styles.mainTextTypeOfDescription}>Чип</h4>
            <ul className={styles.chipList}>
              <li className={styles.chipListItem}>Чип A16 Bionic</li>
              <li className={styles.chipListItem}>
                5-ядерний графічний процесор
              </li>
              <li className={styles.chipListItem}>
                16‑ядерна система Neural Engine
              </li>
              <li className={styles.chipListItem}>
                6‑ядерний центральний процесор: 2 ядра продуктивності та 4 ядра
                ефективності
              </li>
            </ul>
            <h4 className={styles.mainTextTypeOfDescription}>
              Захист від бризок, води й пилу
            </h4>
            <p className={styles.productText}>
              Клас захисту IP68 згідно зі стандартом IEC 60529 (занурення
              щонайбільше на 6 метрів протягом 30 хвилин)
            </p>
          </div>
        </div>
        <div className={styles.lastProductCharacteristicBlock}>
          <div className={styles.row}>
            <div className={styles.productCharacteristicItemBlock}>
              <h4 className={styles.mainTextTypeOfDescription}>Камера</h4>
              <ul className={styles.listCharacteristic}>
                <li className={styles.listCharacteristicItem}>
                  Основна: 48 Мп, f/1.78 (Quad-Pixel, OIS).
                </li>
                <li className={styles.listCharacteristicItem}>
                  Телеоб’єктив: 12 Мп, f/2.8 (3× оптичний зум).
                </li>
                <li className={styles.listCharacteristicItem}>
                  Ультраширококутна: 12 Мп, f/2.2 (120° кут огляду).
                </li>
                <li className={styles.listCharacteristicItem}>
                  Фронтальна: 12 Мп, f/1.9 (AutoFocus).
                </li>
                <li className={styles.listCharacteristicItem}>
                  Функції: Photonic Engine, нічний режим, ProRAW, запис відео 4K
                  60 fps, ProRes, кінематографічний режим, макрозйомка.
                </li>
              </ul>
            </div>

            <div className={styles.productCharacteristicItemBlock}>
              <h4 className={styles.mainTextTypeOfDescription}>
                Операційна система
              </h4>
              <p className={styles.productText}>
                iOS 17 (з підтримкою оновлень на 5+ років).
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.productCharacteristicItemBlock}>
              <h4 className={styles.mainTextTypeOfDescription}>
                Акумулятор і зарядка
              </h4>
              <ul className={styles.listCharacteristic}>
                <li className={styles.listCharacteristicItem}>
                  Час роботи: до 23 годин відео.
                </li>
                <li className={styles.listCharacteristicItem}>
                  Реверсивна зарядка через USB-C.
                </li>
                <li className={styles.listCharacteristicItem}>
                  Зарядка: MagSafe (15 Вт), Qi2 (15 Вт), провідна (USB-C, 50% за
                  30 хв).
                </li>
              </ul>
            </div>

            <div className={styles.productCharacteristicItemBlock}>
              <h4 className={styles.mainTextTypeOfDescription}>
                Зв’язок і порти
              </h4>
              <ul className={styles.listCharacteristic}>
                <li className={styles.listCharacteristicItem}>
                  USB-C 3.0 (до 10 Гбіт/с).
                </li>
                <li className={styles.listCharacteristicItem}>
                  Dual SIM (nano-SIM + eSIM / дві eSIM у США).
                </li>
                <li className={styles.listCharacteristicItem}>
                  5G, Wi-Fi 6E, Bluetooth 5.3, UWB (Ultra-Wideband 2-го
                  покоління).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
