import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Service from "./Services/Service";
import Error404 from "./Error404";
import CarService from "./Services/CarService";
import BikeService from "./Services/BikeService";
import NormalBike from "./Services/bikes/NormalBike";
import SportsBike from "./Services/bikes/SportsBike";
import SportsCar from "./Services/Cars/SportsCar";
import NormalCar from "./Services/Cars/NormalCar";
import UseParam from "./Param/UseParam";
import Username from "./Param/userName";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service">
            <Route index Component={Service} />
            <Route path="car"  >
              
              <Route index Component={CarService}/>
              <Route path="sportscar" Component={SportsCar}/>
              <Route path="normalcar" Component={NormalCar}/>
              
            </Route>
            <Route path="bike">
              <Route index Component={BikeService} />
              <Route path="sports" Component={SportsBike} />
              <Route path="normal" Component={NormalBike} />
            </Route>
          </Route>
          <Route path="*" Component={Error404} />
          <Route path="/useparam" Component={UseParam} />
          <Route path="/username/:name " Component={Username}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
