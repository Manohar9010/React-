import React from "react";
import Aboutpage5card from "./Aboutpage5card";
import "./AboutPage5.css";
import aboutpage5img1 from "../../Images/aboutpage5image1.jpg";
import aboutpage5img2 from "../../Images/aboutpage5image2.jpg";
import aboutpage5img3 from "../../Images/aboutpage5image3.jpg";
import aboutpage5img4 from "../../Images/aboutpage5image4.jpg";
export default function AboutPage5() {
  let usename = ["John watson", "Alexander", "Steve alexa", "Steve alena"];
  let usepost = [
    "Founder of company",
    "Co-Founder of company","Manager of company",
    "Hr of company",
  
  ];
  return (
    <div className="d-flex gap-5 " style={{margin:"0px 80px"}}>
      <Aboutpage5card
        img2={aboutpage5img1}
        usename={usename[0]}
        usepost={usepost[0]}
      />
      <Aboutpage5card
        img2={aboutpage5img2}
        usename={usename[1]}
        usepost={usepost[1]}
      />
      <Aboutpage5card
        img2={aboutpage5img3}
        usename={usename[2]}
        usepost={usepost[2]}
      />
      <Aboutpage5card
        img2={aboutpage5img4}
        usename={usename[3]}
        usepost={usepost[3]}
      />
    </div>
  );
}
