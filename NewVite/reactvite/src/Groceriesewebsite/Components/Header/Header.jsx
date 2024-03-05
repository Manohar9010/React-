import React, { useEffect, useState } from "react";
import "./Header.css";
import iconimg from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Input } from "reactstrap";
import { ChevronDown, MapPin, Search } from "lucide-react";
import Selectdrop from "../Selectdrop/Selectdrop";
import axios from "axios";
export default function Header() {
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
  // https://countriesnow.space/api/v0.1/countries/
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
            console.log(countrylist);
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
            <div className="headlocation">
              <div className="headlicaflex">
                <div className="">
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
            <div className="help">hellp</div>
          </div>
        </div>
      </header>
    </div>
  );
}
