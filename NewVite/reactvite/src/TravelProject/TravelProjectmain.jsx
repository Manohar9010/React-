import React from "react";
import Header from "./Header";
import FrontPage from "./FrontPage/FrontPage";
import Aboutmain from "./TravelAbout/Aboutmain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Errorpage from "./Errorpage";
import Exploremain from "./Explore/Exploremain";

export default function TravelProjectmain() {
  return (
    <div>
      {/* <Header/> */}

      {/* <Aboutmain/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/about" element={<Aboutmain />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
      {/* <Exploremain/> */}
    </div>
  );
}
