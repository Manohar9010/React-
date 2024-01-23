import React from "react";
import "./AboutPage5.css";
import { Facebook, Instagram, Twitter } from "lucide-react";
export default function Aboutpage5card({ img2,usename,usepost}) {
  return (
    <div>
      <div className="aboutpage5card">
        <div >
          <img  src={img2} alt="" />
        </div>
        <div className="text-center mt-4">
          <h4>{usename}</h4>
          <h6>{usepost}</h6>
          <ul className="socicon mt-3 d-flex gap-4  justify-content-center">
            <li>
              <a href="">
                <Facebook size={18}/>
              </a>
            </li>
            <li>
              <a href="">
                <Twitter size={18}/>
              </a>
            </li>
            <li>
              <a href="">
                <Instagram size={18}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
