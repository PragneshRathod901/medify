import { Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import { ReactComponent as Lab } from "../../assets/svg/lab.svg";
import { ReactComponent as Stethoscope } from "../../assets/svg/Stethoscope.svg";
import { ReactComponent as HeartRate } from "../../assets/svg/HeartRate.svg";
import { ReactComponent as HeartRateMonitor } from "../../assets/svg/HeartRateMonitor.svg";
import { ReactComponent as BloodSample } from "../../assets/svg/BloodSample.svg";
import { ReactComponent as Immune } from "../../assets/svg/Immune.svg";
import { ReactComponent as XRay } from "../../assets/svg/X-Ray.svg";

const Card = ({ icon, title }) => {
  return (
    <Grid item md={2} sm={2} spacing={3}>
      <Box
        sx={{
          width: "270px",
          bgcolor: "#FFFFFF",
          padding: "22px 70px 22px 70px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 34px 44px 0px #D5DBE470",
          rowGap: "20px",
        }}
      >
        <Box sx={{ width: "80px", height: "80px" }}>{icon}</Box>
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            width: "121px",
            height: "36px",
            fontSize: "18px",
            color: "#ABB6C7",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Grid>
  );
};

const FindBySpecialization = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(45deg, rgba(232, 241, 255, 1) 47%, rgba(231, 240, 255, 1) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "56px 10%",
        rowGap: "48px",
      }}
    >
      <Typography
        sx={{
          fontSize: "48px",
          color: "text.primary",
          fontWeight: 600,
          height: "67px",
        }}
      >
        Find by Specialisation
      </Typography>
      <Grid container spacing={3} columns={{ md: 8, sm: 4 }}>
        <Card icon={<Lab />} title={"Dentistry"} />
        <Card icon={<Stethoscope />} title={"Primary Care"} />
        <Card icon={<HeartRate />} title={"Cardiology"} />
        <Card icon={<HeartRateMonitor />} title={"MRI Resonance"} />
        <Card icon={<BloodSample />} title={"Blood Test"} />
        <Card icon={<Immune />} title={"Piccoloist"} />
        <Card icon={<Lab />} title={"Laboratory"} />
        <Card icon={<XRay />} title={"X-Ray"} />
      </Grid>
      <Button variant="contained" sx={{ width: "147px", height: "50px" }}>
        View All
      </Button>
    </Box>
  );
};

export default FindBySpecialization;
