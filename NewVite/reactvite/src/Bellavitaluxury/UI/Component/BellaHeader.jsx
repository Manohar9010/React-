import React, { useState } from "react";
import "./BellaHeader.css";
import { ChevronDown, MenuSquare, Package2, Search, UserRound, X } from "lucide-react";
import { Button, InputGroup } from "reactstrap";
import { Input } from "reactstrap";
import logoimg from "../Images/logoimage.avif";
import { NavLink } from "react-router-dom";
export default function BellaHeader() {
  const [togleopen, setTogleope] = useState(false);
  const [navuse,setNavuse]=useState(false)
  const navtoggle =()=>{
    setNavuse(!navuse)
  }
  
  const toglefun = () => {
    setTogleope(!togleopen);
  };
  return (
    <div className="headermain" >
      <div children="headpost">
        <div>
          <div className="bg-black" style={{ height: "30px", color: "white" }}>
            <span>
              <marquee
                width="100%"
                direction="right"
                height="100px"
                scrollamount="20"
              >
                <span style={{ padding: "0px 0px 0px 0px" }}>
                  Free Gift worth 99 on PREPAID ORDERS
                </span>
                <span style={{ padding: "0px 500px 0px 800px" }}>
                  Free Gift worth 100 on PREPAID ORDERS
                </span>
                <span style={{ padding: "0px 500px 0px 800px" }}>
                  Free Gift worth 200 on PREPAID ORDERS
                </span>
              </marquee>
            </span>
            <span>
              <marquee
                width="100%"
                direction="right"
                height="100px"
                scrollamount="20"
              ></marquee>
            </span>
          </div>
           
          <div style={{backgroundColor:"white",paddingBottom:"10px"}}>
            <div className="headtitle">
              <div className="user mt-1">
                <NavLink style={{ color: "black" }} to={"/belllogin"}>
                  {" "}
                  <UserRound size={28} strokeWidth={1.25} />
                </NavLink>
              </div>
              <div className="logo text-center">
                {" "}
                <img src={logoimg} alt="" />
              </div>
              <div className="search gap-4">
                <InputGroup style={{ height: "20px", width: "" }}>
                  <Input type="text" placeholder="Search for product" />
                  <Button
                    className="seabtn"
                    style={{ background: "transparent" }}
                  >
                    <Search color="black" size={20} strokeWidth={1.25} />
                  </Button>
                </InputGroup>

                <span className="packagemenusqure mt-3"><MenuSquare role="button" onClick={navtoggle} size={30}/></span>
                <span className="package mt-3">
                  <Package2
                    role="button"
                    onClick={toglefun}
                    size={30}
                    style={{ paddingTop: "0", margin: "0" }}
                    strokeWidth={1.25}
                  />
                </span>
              </div>
            </div>
            
            <div className="navbar">
              <ul className="d-flex justify-content-center gap-5  ">
                <li>
                  <NavLink style={{ color: "black" }} to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink style={{ color: "black" }} to={"/bellabout"}>
                    CreyDeals
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink style={{ color: "black" }} to={"/bellcontact"}>
                    Shop All
                  </NavLink>
                </li>
                <li className="fragreceli">
                  Fragrance{" "}
                  <ChevronDown size={20} color="grey" className="arrow" />
                  <div className="frageacesub">
                    <ul>
                      <li>
                        <a href="">All Perfumes</a>
                      </li>
                      <li>
                        <a href="">Men</a>
                      </li>
                      <li>
                        <a href="">Women</a>
                      </li>
                      <li>
                        <a href="">Unisex</a>
                      </li>
                      <li>
                        <a href="">Oud Collection</a>
                      </li>
                      <li>
                        <a href="">Little Luxuries</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink style={{ color: "black" }} to={"/bellrigister"}>
                    Registration
                  </NavLink>{" "}
                </li>

                <li>
                  <NavLink to={"/profile"} style={{ color: "black" }} >  Profile</NavLink>
                  
                </li>
                <li>Wishlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {togleopen && (
        <section className="menubar">
          <div className="navbar">
            <div className="closebtn">
              <button className="cbtn">
                <span className="btnclose">
                  <X className="xbtn" role="button" onClick={toglefun} />
                </span>
              </button>
            </div>
            <div className="menutext">
              <h5>Your crat is empty</h5>

              <Button>Continue shopping</Button>

              <h5>Have an account?</h5>

              <p>
                <NavLink
                  style={{ color: "black", textDecoration: "underline" }}
                  onClick={toglefun}
                  to={"belllogin"}
                >
                  Login
                </NavLink>{" "}
                to check out faster.
              </p>
            </div>
          </div>
        </section>
      )}

{   navuse && (
       <div className="navbar_toggle">
              <ul className=" ">
                <li>
                  <NavLink style={{ color: "black" }} to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink style={{ color: "black" }} to={"/bellabout"}>
                    About
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink style={{ color: "black" }} to={"/bellcontact"}>
                    Contact Us
                  </NavLink>
                </li>
                <li className="fragreceli">
                  Fragrance{" "}
                  <ChevronDown size={20} color="grey" className="arrow" />
                  <div className="frageacesub">
                    <ul>
                      <li>
                        <a href="">All Perfumes</a>
                      </li>
                      <li>
                        <a href="">Men</a>
                      </li>
                      <li>
                        <a href="">Women</a>
                      </li>
                      <li>
                        <a href="">Unisex</a>
                      </li>
                      <li>
                        <a href="">Oud Collection</a>
                      </li>
                      <li>
                        <a href="">Little Luxuries</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <NavLink style={{ color: "black" }} to={"/bellrigister"}>
                    Registration
                  </NavLink>{" "}
                </li>

                <li>Profile</li>
                <li>Wishlist</li>
              </ul>
            </div>)}
    </div>
  );
}
