import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./DoctorCard.css";

const DoctorCard = ({ doc }) => {
  return (
    <Card
      sx={{
        width: "370px",
        height: "504px",
        columnGap: "15px",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 15px 55px -10px #00000017",
          padding: "10px",
          height: "414px",
          borderRadius: "250px 250px 8px 8px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)",
            height: "100%",
            borderRadius: "250px 250px 4px 4px",
            position: "relative",
          }}
        >
          <CardMedia
            image={doc.img}
            title="docImg"
            component="img"
            sx={{
              objectFit: "fill",
              position: "absolute",
              top: "30px",
              left: "6px",
            }}
          ></CardMedia>
        </Box>
      </Box>
      <CardContent className="cardHeader">
        <Typography variant="h4" color={"text.primary"}>
          {doc.name}
        </Typography>
        <Typography variant="body2" color={"primary.main"}>
          {doc.designation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
