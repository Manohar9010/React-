import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";
import { AdminProtector, Protector } from "./Protector";
import Admin from "./Admin";

export default function ProtectRoute() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/contact"
            element={<Protector Component={<Contact />} />}
          />
          <Route path="/about" Component={About} />
          <Route
            path="/profile"
            element={<Protector Component={<Profile />} />}
          />
          <Route
            path="/admin"
            element={<AdminProtector Component={<Admin />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
