import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../assets/images/logo.webp";

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  margin: "10px auto",
  zIndex: 99,
  borderRadius: "50px",
  padding: "5px 20px",
  color: "#333",
  height: "70px",
  width: "90%",
}));

const GlassButton = styled(Button)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: "#333",
  color: "white",
  borderRadius: "20px",
  padding: "5px 20px",
  "&:hover": {
    backgroundColor: "#000",
  },
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: "#333",
  textTransform: "capitalize",
  "&:hover": {
    color: "#000",
  },
}));

function Header() {
  const navigate = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <GlassAppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={Logo} alt="Besiktasli-doktorlar-dernegi-logo" width={60} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LinkButton onClick={() => navigate("home")}>
            <Typography variant="body1">Ana Sayfa</Typography>
          </LinkButton>
          <LinkButton onClick={() => navigate("about")}>
            <Typography variant="body1">Hakkımızda</Typography>
          </LinkButton>
          <LinkButton>
            <Typography variant="body1">Üyelerimiz</Typography>
          </LinkButton>
          <LinkButton>
            <Typography variant="body1">Etkinlikler</Typography>
          </LinkButton>
          <LinkButton>
            <Typography variant="body1">İletişim</Typography>
          </LinkButton>
          <LinkButton>
            <Typography variant="body1">Üyelik</Typography>
          </LinkButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LinkButton>
            <Typography variant="body1">Giriş Yap</Typography>
          </LinkButton>
          <GlassButton variant="contained">Üye Ol</GlassButton>
        </Box>
      </Toolbar>
    </GlassAppBar>
  );
}

export default Header;
