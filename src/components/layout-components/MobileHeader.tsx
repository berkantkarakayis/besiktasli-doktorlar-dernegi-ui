import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
  Button,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

function MobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ padding: "10px" }}>
          <img src={Logo} alt="Besiktasli-doktorlar-dernegi-logo" width={40} />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Slide direction="right" in={drawerOpen} mountOnEnter unmountOnExit>
            <Stack spacing={10} width={200}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="close"
                onClick={handleDrawerToggle}
                sx={{ position: "absolute", right: 8, top: 16 }}
              >
                <CloseIcon />
              </IconButton>
              <Stack spacing={2}>
                {menuItems.map((item, index) => (
                  <Link to={item.link} key={index} onClick={handleDrawerToggle}>
                    <Button>
                      <span className="B-18">{item.text}</span>
                    </Button>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Slide>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default MobileHeader;
