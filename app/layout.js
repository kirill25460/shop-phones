import { Geologica } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/components/cart/CartContext";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["100","300","400", "500","600", "700"], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mobilka",
  description: "Mobilka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geologica.variable}`}>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
