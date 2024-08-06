import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MembersSection from "./components/MembersSection";
import EventsSection from "./components/EventsSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MembersSection />
      <EventsSection />
    </>
  );
}

export default Home;
