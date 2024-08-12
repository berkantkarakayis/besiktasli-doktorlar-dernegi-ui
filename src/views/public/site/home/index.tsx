import React from "react";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MembersSection from "./components/MembersSection";
import EventsSection from "./components/EventsSection";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Grid,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../../../../assets/images/logo.png";

const StatBox = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: "16px",
  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.2)",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  width: "100%",
}));

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      id="home"
      style={{
        backgroundColor: "var(--bg-color)",
        height: "100%",
        width: "100%",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <Hero />
        <AboutSection />
        <MembersSection />
        {/* <EventsSection /> */}
      </div>
    </section>
  );
}

export default Home;
