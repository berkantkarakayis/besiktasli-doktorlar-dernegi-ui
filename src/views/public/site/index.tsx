// SiteLayout.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./contact";
import Header from "../../../components/layout-components/Header";
import Footer from "../../../components/layout-components/Footer";
import About from "./about";
import Home from "./home";
import Members from "./members";

function SiteLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default SiteLayout;
