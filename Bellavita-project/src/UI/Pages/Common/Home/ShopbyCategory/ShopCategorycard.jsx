import React from "react";
import "./ShopbyCategory.css";


export default function ShopCategorycard({shopbyimg,shopbytitle}) {
  return (
    <div>
      <div className="shopcategorycard">
        <img  src={shopbyimg} alt="" />
         <p>{shopbytitle}</p>


      </div>
    </div>
  );
}
