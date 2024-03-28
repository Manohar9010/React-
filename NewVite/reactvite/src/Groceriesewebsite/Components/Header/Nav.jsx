import React from "react";
import "./Nav.css";
import { Button } from "reactstrap";
import { ChevronDown, LayoutGrid, Headphones } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="navfirst">
      <div className="container-fluid">
        <nav className="navmain">
          <div className="navnutton">
            <Button className="d-flex">
              <LayoutGrid /> Browse All Categories <ChevronDown />
            </Button>
          </div>
          <div className="navoption">
            <ul className="d-flex gap-4">
              <li>
                <NavLink to="/">
                  Home <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/">About</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/">
                  Shop <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/">
                  Vendors <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li className="megamenu">
                <NavLink to="/">
                  Mega menu <ChevronDown size={16} color="#d1cccc" />
                </NavLink>
              </li>
              <div className="megadrop">
                <div className="megadropflex">
                  <div>
                    <h6>Fruit & Vegetables</h6>
                    <ul>
                      <li>Meat & Vegetables</li>
                      <li>Fresh Vegetables</li>
                      <li>Herbs & Seasonings </li>
                      <li>Cuts & Sprouts</li>
                      <li>Exotic Fruits & Veggies</li>
                      <li>Packaged Produce </li>
                    </ul>
                  </div>
                  <div>
                    <h6>Breakfast5 & Dairy</h6>
                    <ul>
                      <li>Milk & Flavourd Milk</li>
                      <li>Butter and Margarine</li>
                      <li>Eggs Substitues</li>
                      <li>Marmalades</li>
                      <li>Sour Cream</li>
                      <li>Cheese</li>
                    </ul>
                  </div>
                  <div>
                    <h6>Meat & Seafood</h6>
                    <ul>
                      <li>Breakfast Sausage</li>
                      <li>Dnnier Sousage</li>
                      <li>Chiken</li>
                      <li>Sliced Deli Meat</li>
                      <li>Wild caught Fillets</li>
                      <li>Crab and Shelifish</li>
                    </ul>
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <li>
                <NavLink to="/">
                  Blog <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/">
                  Pages <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>

              <li>
                <NavLink to="/">Contact</NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className="navnumber">
            <div>
              <Headphones size={30} />
            </div>
            <div>
              <h5>1900-888</h5>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
