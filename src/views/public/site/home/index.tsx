import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MembersSection from "./components/MembersSection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MembersSection />
    </>
  );
}

export default Home;
