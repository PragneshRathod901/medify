import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Header from "../Header/Header";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(45deg, rgba(232,241,255,1) 47%, rgba(231,240,255,1) 100%)`,
        height: "832px",
        position: "relative",
      }}
    >
      <Header />
      <Box
        sx={{
          position: "absolute",
          top: "42px",
          right: "100px",
          width: "643px",
          zIndex: "0",
        }}
      >
        <img src="./images/hero_image.png" alt="heroImg" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "570px",
          height: "287px",
          marginLeft: "135px",
          marginTop: "44px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "31px",
            fontWeight: "500",
            color: "secondary.dark",
          }}
        >
          Skip the travel! Find Online
        </Typography>
        <Box>
          <Typography variant="h2" sx={{ fontWeight: "700", fontSize: "56px" }}>
            Medical{"  "}
            <Box
              component="span"
              sx={{
                fontSize: "56px",
                fontWeight: "700",
                color: "primary.main",
              }}
            >
              Centers
            </Box>
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "400",
            color: "#5C6169",
          }}
        >
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </Typography>
        <Button variant="contained" sx={{ marginTop: "32px" }}>
          Find Centers
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
