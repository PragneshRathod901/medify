import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./OfferCarousal.css";

const OfferCarousal = ({
  slidesPerView,
  spaceBetween,
  height,
  MyClass,
  children,
}) => {
  return (
    <Box sx={{ height: { height }, bgcolor: "white", padding: "0px 92px" }}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className={"mySwiper " + MyClass}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default OfferCarousal;
