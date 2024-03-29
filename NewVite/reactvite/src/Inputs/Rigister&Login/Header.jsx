import React, { useState } from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import LoginModel from "./LoginModel";
import RegisterModel from "./RegisterModell";
import { Bird } from "lucide-react";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);

  const toggleLogin = () => setLoginModal(!loginModal);

  const [rectmodal, setModalrect] = useState(false);

  const restoggle = () => setModalrect(!rectmodal);

  return (
    <div>
      
      <div className="bg-info-subtle py-3 mt-3 d-flex justify-content-around ">
        <div className="fs-5 fw-medium"><Bird size={48} color="black" /> </div>
        <div>
          <ul className="fs-5 fw-medium  d-flex gap-5">
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>About</li>
            <li>Explore</li>

            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={"/todo"}
              >
                Todolist
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-3">
          <div>
            <Button onClick={restoggle}>Register</Button>
          </div>
          <div>
            <Button onClick={toggleLogin}>Login</Button>
          </div>
          <div>
            <LoginModel modal={loginModal} toggle={toggleLogin} />
          </div>
          <div>
            <RegisterModel rectmodal={rectmodal} restoggle={restoggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
