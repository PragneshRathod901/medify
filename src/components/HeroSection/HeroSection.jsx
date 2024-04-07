import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Tab from "../Tab/Tab";
import { ReactComponent as Logo } from "../../logo.svg";

const TabsTexts = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(45deg, rgba(232,241,255,1) 47%, rgba(231,240,255,1) 100%)`,
        height: "832px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "96px",
          padding: "0px 140px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "4px",
          }}
        >
          <Box width="23px" height={"23px"}>
            {" "}
            <Logo />{" "}
          </Box>
          <Typography variant="h6" fontWeight={700} color={"primary"}>
            Medify
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: "40px",
          }}
        >
          {TabsTexts.map((value, index) => (
            <Tab key={"tab" + index} color="secondary">
              {value}
            </Tab>
          ))}
          <Button variant="contained" height="40px" disableElevation>
            My Bookings
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
