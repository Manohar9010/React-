import React from "react";
import "./Featured.css";

export default function Featuredcard({ featuredimg, feauretext }) {
  return (
    <div>
      <div className="featuremain">
        <div className="featuretext">
          <p>{feauretext}</p>
        </div>
        <div>
          <img src={featuredimg} alt="" />
        </div>
      </div>
    </div>
  );
}
