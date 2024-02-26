import React from "react";
import "./Aboutmain.css";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function AboutPage1() {
  return (
    <div>
      <div className="about1main">
        <ul className="d-flex gap-2 text-white justify-content-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>{" "}
          </li>
          <li>
            <a href="">
              <ChevronRight />
            </a>{" "}
          </li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
