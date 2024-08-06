import React from "react";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 100, // TODO - REMOVE
      }}
    >
      Footer
    </Box>
  );
}

export default Footer;
