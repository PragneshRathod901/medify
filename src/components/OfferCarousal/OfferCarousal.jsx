import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./OfferCarousal.css";

const OfferCarousal = ({ ImageArray }) => {
  return (
    <Box sx={{ height: "455px", bgcolor: "white", padding: "0px 92px" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ImageArray.map((val, index) => (
          <SwiperSlide key={"offer" + index}>
            <img src={"./images/" + val} alt="offerImages"></img>
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </Box>
  );
};

export default OfferCarousal;
