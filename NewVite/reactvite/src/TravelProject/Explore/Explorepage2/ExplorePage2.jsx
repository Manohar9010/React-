import React from "react";
import "./Explorepage2.css";
import Explorepage2card from "./Explorepage2card";
import expoimg1 from "../../Images/thirdpageimage3.jpg";
import expoimg2 from "../../Images/forthpageimage2.jpg";
export default function ExplorePage2() {
  let expotitle = [
    "Turkey Grenada",
    "Colosseum, Rome",
    "Australia Nature",
    "French-Polynesia",
    "South Island",
    "Bora Bora",
  ];
  let expodis = [
    "4 Tours available",
    "9 Tours available",
    "10 Tours available",
    "8 Tours available",
    "5 Tours available",
    "7 Tours available",
  ];
  return (
    <div>
      <div className="expopage2 d-flex gap-5">
        <Explorepage2card
          expocardimg={expoimg1}
          expotitle={expotitle[0]}
          expodis={expodis[0]}
        />
        <Explorepage2card expocardimg={expoimg2} />
        <Explorepage2card />
      </div>
      <div className="expopage2 d-flex gap-5">
        <Explorepage2card />
        <Explorepage2card />
        <Explorepage2card />
      </div>
    </div>
  );
}
