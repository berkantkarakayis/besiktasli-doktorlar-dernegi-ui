// SiteLayout.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Header from "../../../components/layout-components/Header";
import Footer from "../../../components/layout-components/Footer";
import About from "./about";
import Home from "./home";
import Members from "./members";
import MemberDetail from "./members/components/MemberDetail";
import Events from "./events";
import EventDetail from "./events/components/EventDetail";

function SiteLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/etkinlikler" element={<Events />} />
        <Route path="/etkinlikler/:id/:title" element={<EventDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default SiteLayout;
