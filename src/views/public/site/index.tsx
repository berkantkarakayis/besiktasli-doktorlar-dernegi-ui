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
import Membership from "./membership";

function SiteLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/uyeler" element={<Members />} />
        <Route path="/uyeler/:id/:name" element={<MemberDetail />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/etkinlikler" element={<Events />} />
        <Route path="/etkinlikler/:id/:title" element={<EventDetail />} />
        <Route path="/uyelik" element={<Membership />} />
      </Routes>
      <Footer />
    </>
  );
}

export default SiteLayout;
