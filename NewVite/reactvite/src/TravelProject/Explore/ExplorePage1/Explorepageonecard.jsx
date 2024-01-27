import React from "react";
import "./ExplrePageone.css";
import { Plane } from "lucide-react";
export default function Explorepageonecard({ expolreicon, exploretitle }) {
  return (
    <div>
      <div className="explorecardmain">
        <div className="exploreicon">
          {expolreicon}
          {/*  */}
        </div>
        <h4>{exploretitle}</h4>
        <p>
          Sit amet consect etur adipi sicing elit. Rem quib usdam corporis,
          dolores quos, nobis culpa est
        </p>
      </div>
    </div>
  );
}
