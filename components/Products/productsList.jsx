import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "./products.module.css";
import { useCart } from "../cart/CartContext";
import VanillaTilt from "vanilla-tilt";

export default function ProductsList({ product }) {
  const tiltRef = useRef(null);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || {}
  );
  const [bgColor, setBgColor] = useState(selectedVariant.color || "#fff");
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 300,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    
      <div
        className={styles.Card}
        ref={tiltRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
          <Image
            className={styles.ProductImage}
            src={selectedVariant.image || product.image}
            alt={product.name}
            width={92}
            height={109}
          />
          
     
        <div className={styles.ProductInfo}>
          <h3 className={styles.ProductTitle}>{product.name}</h3>
          <p className={styles.ProductPrice}>${product.price}</p>
        </div>
        <div  className={`${styles.InfoPanel} ${isHovered ? styles.ShowInfoPanel : ""}`}>
          <div className={styles.InfoItem}>
            <strong>{product.name || "N/A"}</strong>
          </div>
          <div className={styles.InfoItem}>
            <strong>${product.price || "N/A"}</strong>
          </div>
          <div className={styles.InfoItem}>
            <strong>Memory:</strong> {product.memory || "N/A"}
          </div>
          <div className={styles.InfoItem}>
            <strong>Screen Size:</strong> {product.screenSize || "N/A"}
          </div>
          <div className={styles.InfoItem}>
            <strong>Battery Capacity:</strong>{" "}
            {product.batteryCapacity || "N/A"}
          </div>
          <div className={styles.InfoItem}>
            <strong>Processor:</strong> {product.processor || "N/A"}
          </div>
          <div className={styles.InfoItem}>
            <strong>Camera:</strong> {product.camera || "N/A"}
          </div>
          <div className={styles.ColorOptions}>
            {product.variants?.map((variant, index) => (
              <div
                key={index}
                className={styles.ColorCircle}
                style={{
                    background: variant.color,
                    border: selectedVariant.color === variant.color ? "2px solid #000" : "2px solid transparent",
                  }}
                onClick={() => {
                  setSelectedVariant(variant);
                  setBgColor(variant.color);
                }}
              />
            ))}
          </div>
          <button
            className={styles.AddToCartButton}
            onClick={() => addToCart(product, selectedVariant)}
          >
            Add to Cart
          </button>
        </div>
      </div>
   
  );
}
