import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Register from "./Pages/Register";
import Loginpage from "./Pages/Loginpage";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Protectrout from "./Protechtedrout/Protectrout";

export default function Mainregiter() {
  return (
    <div>
      <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Loginpage" element={<Loginpage/>} />

            <Route path="/Profile" element={<Protectrout  componentuser={ <Profile/>} /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
