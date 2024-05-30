import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";

export default function Mainregiter() {
  return (
    <div>
      <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Loginpage" element={<Loginpage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
