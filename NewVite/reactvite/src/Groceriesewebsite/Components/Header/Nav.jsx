import React, { useEffect } from "react";
import "./Nav.css";
import { Button } from "reactstrap";
import { ChevronDown, LayoutGrid, Headphones } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
export default function Nav() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 82) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
      console.log("first", position)
    });
  },[]);
  return (
    <div className="navfirst">
      <div className="container-fluid" ref={headerRef}>
        <nav className="navmain">
          <div className="navnutton">
            <Button className="d-flex">
              <LayoutGrid /> Browse All Categories <ChevronDown />
            </Button>
          </div>
          <div className="navoption">
            <ul className="d-flex gap-3">
              <li>
                <NavLink to="/" style={{display:"flex",alignItems:"center"}}>
                  Home&nbsp;<ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/" style={{display:"flex",alignItems:"center"}}>About <ChevronDown size={16} color="#d1cccc" /></NavLink>{" "}
              </li>
              <li>
                <NavLink to="list" style={{display:"flex",alignItems:"center"}}>
                  Shop <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/" style={{display:"flex",alignItems:"center"}}>
                  Vendors <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li className="megamenu">
                <NavLink to="/" style={{display:"flex",alignItems:"center"}}>
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
                <NavLink to="/" style={{display:"flex",alignItems:"center"}}>
                  Blog <ChevronDown size={16} color="#d1cccc" />
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/" style={{display:"flex",alignItems:"center"}}>
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
