import React from "react";
import "./Explorepage2.css";
import Explorepage2card from "./Explorepage2card";
import expoimg1 from "../../Images/thirdpageimage3.jpg";
import expoimg2 from "../../Images/forthpageimage2.jpg";
import expoimg3 from "../../Images/forthpageimage3.jpg";
import expoimg4 from "../../Images/footerimge1.jpg";
import expoimg5 from "../../Images/thirdpageimage1.jpg";
import expoimg6 from "../../Images/thirdpageimage5.jpg";
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
        <Explorepage2card
          expocardimg={expoimg2}
          expotitle={expotitle[1]}
          expodis={expodis[1]}
        />
        <Explorepage2card
          expocardimg={expoimg3}
          expotitle={expotitle[2]}
          expodis={expodis[2]}
        />
      </div>
      <div className="expopage2 d-flex gap-5">
        <Explorepage2card
          expocardimg={expoimg4}
          expotitle={expotitle[3]}
          expodis={expodis[3]}
        />
        <Explorepage2card
          expocardimg={expoimg5}
          expotitle={expotitle[4]}
          expodis={expodis[4]}
        />
        <Explorepage2card
          expocardimg={expoimg6}
          expotitle={expotitle[5]}
          expodis={expodis[5]}
        />
      </div>
    </div>
  );
}
