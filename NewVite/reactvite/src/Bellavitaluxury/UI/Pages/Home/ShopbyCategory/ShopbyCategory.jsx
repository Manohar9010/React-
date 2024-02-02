import React from "react";
import "./ShopbyCategory.css";
import ShopCategorycard from "./ShopCategorycard";
import ShopbyCategoryimg1 from "../../../Images/bestsellerimg4.webp";
import ShopbyCategoryimg2 from "../../../Images/shopbycategoryimg1.webp";
import ShopbyCategoryimg3 from "../../../Images/shopbycategoryimg2.webp";
import ShopbyCategoryimg4 from "../../../Images/shopbycategoryimg3.webp";
import ShopbyCategoryimg5 from "../../../Images/shopbycategoryimg4.webp";
import ShopbyCategoryimg6 from "../../../Images/shopbycategoryimg5.webp";

let shopbydata = [
  {
    shopbyimg: ShopbyCategoryimg1,
    shopbytitle: "Gift Sets",
  },
  {
    shopbyimg: ShopbyCategoryimg2,
    shopbytitle: "Fragrance",
  },
  {
    shopbyimg: ShopbyCategoryimg3,
    shopbytitle: "Ultimate Perfume Box",
  },
  {
    shopbyimg: ShopbyCategoryimg4,
    shopbytitle: "Bath and Body",
  },
  {
    shopbyimg: ShopbyCategoryimg5,
    shopbytitle: "Little Luxuries",
  },
  {
    shopbyimg: ShopbyCategoryimg6,
    shopbytitle: "Body Lotions",
  },
];
export default function ShopbyCategory() {
  return (
    <div>
      <div>
        <div className="shopbycategorytitle">
          <h1 className="text-center fw-normal ">Shop By Category</h1>
        </div>
        <div className="shopcate">
          <div className="shopcategoryinsercard">
            {shopbydata.map((data1, i) => {
              return (
                <div key={i} className="mapshopcategory">
                  <ShopCategorycard
                    shopbyimg={data1.shopbyimg}
                    shopbytitle={data1.shopbytitle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
