import React, { useEffect, useState } from "react";
import "./Header.css";
import iconimg from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Input } from "reactstrap";
import { ChevronDown, MapPin, Search } from "lucide-react";
import Selectdrop from "../Selectdrop/Selectdrop";
import axios from "axios";

import compareimg from "../../images/icon-compare.svg";
import heartimg from "../../images/icon-heart.svg";
import cartimg from "../../images/icon-cart.svg";
import userimg from "../../images/icon-user.svg";
import Nav from "./Nav";
export default function Header() {
  const [opendrap,setOpendrap]=useState(true)
  let categories = [
    " All Categories",
    "Milks and Dairies",
    " Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ];
  const countrylist = [];
  useEffect(() => {
    axios({
      method: "get",
      url: "https://countriesnow.space/api/v0.1/countries/",
    })
      .then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countrylist.push(item.country);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <header>
        <div className="containermain">
          <div className="headdisplayflex">
            <div className="headimgdiv">
              <img src={iconimg} alt="" />
            </div>
            <div className="search">
              <div className="allcat">
                <Selectdrop
                  categories={categories}
                  placeholder={"All Categories"}
                />
              </div>
              <Input type="text" placeholder="Search for items..." />
              <Search color="#9ea39f" size={35} style={{ cursor: "pointer" }} />
            </div>
            <div className="headlocation" style={{}}>
              <div className="headlicaflex">
                <div>
                  <MapPin color="#8ed58e" />
                </div>
                <div className="selecttwo">
                  <Selectdrop
                    categories={countrylist}
                    placeholder={"YourLocation"}
                  />
                </div>
              </div>
            </div>
            <div className="help">
            
              <div className="options ">
                <ul className="d-flex gap-3 ">
                  <li className="d-flex gap-1 align-items: baseline;">
                    <img src={compareimg} alt="" /> 
                    <span className="optioncircle">3</span>
                    <p>Compare</p>
                  </li>
                  <li className="d-flex gap-1 align-items: baseline;">
                    <img src={heartimg} alt="" />
                    <span className="optioncircle">4</span>
                    <p>wishlist</p>
                  </li>
                  <li className="d-flex gap-1 align-items: baseline;">
                    <img src={cartimg} alt="" />
                    <span className="optioncircle">6</span>
                    <p>Cart</p>
                  </li>
                  <li className="acutli d-flex gap-1 align-items: baseline;" onClick={()=>setOpendrap(!opendrap)}>
                    <img src={userimg} alt="" />
                    <p>Account</p>
              
                  </li>
                        {/* { opendrap &&
                   <ul className="actdtop">
                     <li>Account</li>
                     <li>Whishlist</li>
                     <li>traking</li>
                     <li>setting</li>
                     <li>sighup</li>

                   </ul>
                  } */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <Nav/>
      </section>
    </div>
  );
}
