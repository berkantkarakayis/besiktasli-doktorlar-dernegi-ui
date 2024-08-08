import React from "react";
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
