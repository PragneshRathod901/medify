import { Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "primary.main",
          height: "40px",
          textAlign: "centre",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle2" color="primary.contrastText">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
