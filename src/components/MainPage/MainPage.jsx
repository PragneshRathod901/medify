import React from "react";
import "./MainPage.css";
import HeaderTab from "../Header/HeaderTab";
import HeroSection from "../HeroSection/HeroSection";
import OfferCarousal from "../OfferCarousal/OfferCarousal";

const OfferImages = [
  "offer2.png",
  "offer.png",
  "offer2.png",
  "offer.png",
  "offer2.png",
];

const MainPage = () => {
  return (
    <div>
      <HeaderTab />
      <HeroSection />
      <OfferCarousal ImageArray={OfferImages} />
    </div>
  );
};

export default MainPage;
