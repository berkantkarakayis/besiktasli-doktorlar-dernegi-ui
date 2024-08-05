import React from "react";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        py: 2,
      }}
    >
      Footer
    </Box>
  );
}

export default Footer;
