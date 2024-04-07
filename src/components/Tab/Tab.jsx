import { Button } from "@mui/material";
import React from "react";

const Tab = ({ children, active, color }) => {
  return (
    <div className="tab">
      <Button variant="text" color={color} sx={{ fontWeight: "400" }}>
        {children}
      </Button>
      {active && <div className="tabActive"></div>}
    </div>
  );
};

export default Tab;
