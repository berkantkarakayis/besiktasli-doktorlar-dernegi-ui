import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Logo from "../../assets/images/logo.png";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Ana Sayfa", link: "/" },
    { text: "Hakkımızda", link: "/hakkimizda" },
    { text: "Üyelerimiz", link: "/uyeler" },
    { text: "Etkinlikler", link: "/etkinlikler" },
    { text: "İletişim", link: "/iletisim" },
    { text: "Üyelik", link: "/uyelik" },
  ];

  return (
    <GlassAppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={Logo} alt="Besiktasli-doktorlar-dernegi-logo" width={60} />
        </Box>
        {isMobile ? (
          <>
            <Button onClick={handleDrawerToggle}>Menu</Button>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                {menuItems.map((item, index) => (
                  <Link to={item.link} key={index}>
                    <ListItem button>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {menuItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <LinkButton>
                  <span className="B-18">{item.text}</span>
                </LinkButton>
              </Link>
            ))}
          </Box>
        )}
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
