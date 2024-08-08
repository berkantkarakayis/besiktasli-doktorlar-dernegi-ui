// Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  margin: "0px auto",
  zIndex: 99,
  borderRadius: "50px",
  padding: "5px 20px",
  color: "#333",
  height: "70px",
  width: "90%",
}));

const GlassButton = styled(Button)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  backgroundColor: "var(--black-primary)",
  color: "white",
  borderRadius: "20px",
  padding: "5px 20px",
  "&:hover": {
    backgroundColor: "var(--black-color)",
  },
}));

const LinkButton = styled(Button)(({ theme }) => ({
  color: "var(--black-primary)",
  textTransform: "capitalize",
  "&:hover": {
    color: "var(--black-color)",
  },
}));

function Header() {
  return (
    <GlassAppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={Logo} alt="Besiktasli-doktorlar-dernegi-logo" width={60} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link to="/">
            <LinkButton>
              <span className="B-18">Ana Sayfa</span>
            </LinkButton>
          </Link>
          <Link to="/about">
            <LinkButton>
              <span className="B-18">Hakkımızda</span>
            </LinkButton>
          </Link>
          <Link to="/members">
            <LinkButton>
              <span className="B-18">Üyelerimiz</span>
            </LinkButton>
          </Link>
          <Link to="/events">
            <LinkButton>
              <span className="B-18">Etkinlikler</span>
            </LinkButton>
          </Link>
          <Link to="/contact">
            <LinkButton>
              <span className="B-18">İletişim</span>
            </LinkButton>
          </Link>
          <Link to="/membership">
            <LinkButton>
              <span className="B-18">Üyelik</span>
            </LinkButton>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <LinkButton>
            <span className="B-18">Giriş Yap</span>
          </LinkButton>
          <GlassButton variant="contained">
            <span
              className="B-18"
              style={{
                color: "var(--white-color)",
                textTransform: "capitalize",
              }}
            >
              Üye Ol
            </span>
          </GlassButton>
        </Box>
      </Toolbar>
    </GlassAppBar>
  );
}

export default Header;
