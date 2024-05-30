import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between  my-4 mx-5">
         <div  className=" w-28">
            <img src="https://www.logodesign.net/logo/line-art-buildings-in-swoosh-1273ld.png?nwm=1&nws=1&industry=company&sf=&txt_keyword=All" alt="" />
            </div>   

            <div>

              <NavLink to={"/reg"}>Register</NavLink>
            </div>
            <div className="">
              <NavLink to={"/reg"}><Button className="me-5">Register</Button></NavLink>
              <NavLink to={"/Login"}><Button className="me-5">Loginpage</Button></NavLink>
               
               
            </div>

      </div>
    </div>
  );
}
