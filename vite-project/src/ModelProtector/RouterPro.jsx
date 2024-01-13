import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import UserData from "./UserData";
export default function RouterPro() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userdata" element={<UserData/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
