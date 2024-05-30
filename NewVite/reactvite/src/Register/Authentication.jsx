import React from "react";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Loginpage from "./Header/Loginpage";

export default function Authentication() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/reg" element={<Register/>} />
          <Route path="/Login" element={<Loginpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
