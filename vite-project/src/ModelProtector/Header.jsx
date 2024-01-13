import React, { useState } from "react";
import { Button } from "reactstrap";
import Modelpage from "./Modelpage";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
        <Modelpage modal={modal} toggle={toggle}/>
      <div className="d-flex justify-content-between mx-5 py-3">
        <div>
          <ul className="d-flex gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/userdata"}>UserPage</NavLink>
            </li>
          </ul>
        </div>
        <div>
            <Button onClick={toggle}>Register</Button>
        </div>
      </div>
    </div>
  );
}
