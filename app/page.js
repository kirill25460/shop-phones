"use client";

import Header from "../components/header/header";
import Main from "../components/main/main";
import OfferOfTheDay from "../components/offerOfTheDay/offerOfTheDay";
import Hero from "../components/hero/hero";
import AirPods from "../components/AirPods/airPods";
import AssortmentOfGoodsTitle from "../components/assortmentOfGoodsTitle/assortmentOfGoodsTitle";
import AssortmentOfGoods from "../components/assortmentOfGoods/assortmentOfGoods";
export default function MainPage() {
  return (
    <div>
      <Header />
      <Main />
      <OfferOfTheDay/>
      <Hero/>
      <AirPods/>
      <AssortmentOfGoodsTitle/>
      <AssortmentOfGoods/>
    </div>
  );
}