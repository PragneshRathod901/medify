import React from "react";
import "./MainPage.css";
import HeaderTab from "../Header/HeaderTab";
import HeroSection from "../HeroSection/HeroSection";
import OfferCarousal from "../OfferCarousal/OfferCarousal";
import { SwiperSlide } from "swiper/react";
import { OfferImages } from "../../data";
import DoctorCarousal from "../DoctorCarousal/DoctorCarousal";
import FindBySpecialization from "../FindBySpecialization/FindBySpecialization";

const MainPage = () => {
  return (
    <div>
      <HeaderTab />
      <HeroSection />
      <OfferCarousal
        slidesPerView={3}
        spaceBetween={30}
        height="455px"
        MyClass="offer_sw"
      >
        {OfferImages.map((val, index) => (
          <SwiperSlide key={"offer" + index}>
            <img src={"./images/" + val} alt="offerImages"></img>
          </SwiperSlide>
        ))}
      </OfferCarousal>
      <FindBySpecialization/>
      <DoctorCarousal />
    </div>
  );
};

export default MainPage;
