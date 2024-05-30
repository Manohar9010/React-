import React from "react";
import "./PopularProduct.css";
import PopuralCard from "./PopuralCard";
export default function PopularProduct() {
  const tagNames = ["hot", "sale", "new","", "best","hot","best","new","sale" ,""];
  return (
    <div>
      <div className="popular mx-4">
        <div className="popularitems d-flex  ">
          <h2 className="mt-2">PopularProduct</h2>
          <ul className="listdrop ">
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a href="">Milks & Dairies</a>
            </li>
            <li>
              <a href="">Coffes & Teas</a>
            </li>
            <li>
              <a href="">Pet Foods</a>
            </li>
            <li>
              <a href="">Meats</a>
            </li>
            <li>
              <a href="">Vegetables</a>
            </li>
            <li>
              <a href="">Fruits</a>
            </li>
          </ul>
        </div>
        <div className="productrow">
          {tagNames.map((e)=>{
            return(

          <div className="productitem">
        
          <PopuralCard  tagname={e}/>
          </div>
            )
          })

          }
        </div>
      </div>
    </div>
  );
}
