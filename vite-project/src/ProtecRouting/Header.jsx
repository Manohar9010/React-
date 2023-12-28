import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function Header() {
  const navigate = useNavigate();

  const loginfunction = () => {
    localStorage.setItem(
      "passdata",
      JSON.stringify({ login: true, usertyep: "admin" })
    );
  };
  const logoutfunction = () => {
    localStorage.removeItem("passdata");
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-evenly py-3">
      <div>
        <ul className="d-flex justify-content-center gap-5">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <Button onClick={loginfunction}> Login</Button>
        <Button onClick={logoutfunction}> Log Out</Button>
      </div>
    </div>
  );
}
