import React from "react";
import "./Header.css";
import { Moon, Phone, PlaneTakeoff, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="Headermain">
        <div className="subhead">
          <div className="logo">
            <PlaneTakeoff
              size={50}
              fill="#20b7d5"
              color="#20b7d5"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            &nbsp; &nbsp; &nbsp;
            <span>GO&nbsp;</span>
            <span>Trip</span>
          </div>
          <div>
            <ul>
              <li>
                <NavLink className={"navlink_custom"} to={"/"}>Home</NavLink>{" "}
              </li>
              <li>
                <NavLink className={"navlink_custom"} to={"/about"}>About</NavLink>{" "}
              </li>
              <li><NavLink className={"navlink_custom"} to={"/explore"}>Explore</NavLink>  </li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="d-flex gap-2">
          <div>
            <Phone
              size={30}
              color="white"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            <span style={{ color: "white" }}>+(21)-234-9999</span>
          </div>
          <div className="d-flex gap-3 ">
            <Search color="white" strokeWidth={0.9} absoluteStrokeWidth />
            <Moon color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
