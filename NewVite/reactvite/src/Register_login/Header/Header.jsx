import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default function Header() {
  return (
    <div className="border my-2 mx-2">
      <div className="flex flex-1 justify-between mx-5 items-center">
        <div>
          <img
            src="https://i.pinimg.com/736x/5a/02/5e/5a025e222970a3dd2c3706bde935ae15.jpg"
            alt=""
            style={{ width: "10%" }}
          />
        </div>
         <div className="flex flex-2 gap-5">
           <NavLink  to={"/"}>Home</NavLink>
           <NavLink  to={"/Profile"}>Profile</NavLink>

         </div>
        <div className=" flex-1 flex justify-end">
          <NavLink to={"/Register"}>
            {" "}
            <Button  className="bg-black text-white">Register</Button>{" "}
          </NavLink>
          <NavLink to={"/Loginpage"}>
            {" "}
            <Button className="bg-black text-white">Login</Button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
