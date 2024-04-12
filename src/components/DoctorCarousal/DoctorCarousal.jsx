import React from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import { Box, Typography } from "@mui/material";
import { Doctors } from "../../data";
import { SwiperSlide } from "swiper/react";
import OfferCarousal from "../OfferCarousal/OfferCarousal";

const DoctorCarousal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "819px",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingTop: "70px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "text.primary",
          fontSize: "48px",
          fontWeight: "600",
          textAlign: "center",
          margin: "10px",
        }}
      >
        Our Medical Specialist
      </Typography>

      <OfferCarousal
        slidesPerView={3}
        spaceBetween={15}
        height="577px"
        MyClass="doctors_sw"
      >
        {Doctors.map((val, index) => (
          <SwiperSlide key={"offer" + index}>
            <DoctorCard doc={val}></DoctorCard>
          </SwiperSlide>
        ))}
      </OfferCarousal>
    </Box>
  );
};

export default DoctorCarousal;
