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
      <Home />
      <About />
      <Members />
      <Footer />
    </>
  );
}

export default SiteLayout;
