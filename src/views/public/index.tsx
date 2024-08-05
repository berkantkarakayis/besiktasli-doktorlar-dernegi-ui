import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./site";

function PublicLayout() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SiteLayout />} />
      </Routes>
    </>
  );
}

export default PublicLayout;
