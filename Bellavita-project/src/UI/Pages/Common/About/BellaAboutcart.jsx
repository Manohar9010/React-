import React from "react";
import { Button } from "reactstrap";
import "./Bellaabout.css";
export default function BellaAboutcart({ aboutimg, textabout }) {
  return (
    <div>
      <div className="aboutcard">
        <img src={aboutimg} alt="" />
      </div>
      <div className="d-flex justify-content-between aboutcarttext ">
        <p className="textcart">{textabout}</p> <Button>Buy Now</Button>
      </div>
    </div>
  );
}
