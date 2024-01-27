import React from "react";
import "./LuxeFragrances.css";
// import LuxeFragrancescard from './LuxeFragrancescard'
import BestSellercard from "../Sellercomponent/BestSellercard";
import lureximg1 from "../../../Images/luxefragranceimg.webp";
import lureximg2 from "../../../Images/luxefragranceimg1.webp";
import lureximg3 from "../../../Images/luxefragranceimg2.webp";
import lureximg4 from "../../../Images/luxefragranceimg3.webp";
import Shoplureximg from "../../../Images/ShopLuxeFragrancesimg.webp";

let lurexdata = [
  {
    lureimg: lureximg1,
    luretype: "Eau De Parfum for Women",
    lurexbrad: "Hot Mess Perfume for Women-100ml",
    lurerating: "4.9 (36 reviews)",
    price: "-44% ₹ 449.00",
    oldprice: "₹099.00",
  },
  {
    lureimg: lureximg2,
    luretype: "EAU DE PARFUM",
    lurexbrad: "OCEAN Man- 100ml",
    lurerating: "4.9 (36 reviews)",
    price: "-44% ₹ 449.00",
    oldprice: "₹099.00",
  },
  {
    lureimg: lureximg3,
    luretype: "EAU DE PARFUM",
    lurexbrad: "BLU Man- 100ml",
    lurerating: "4.9 (36 reviews)",
    price: "-44% ₹ 449.00",
    oldprice: "₹099.00",
  },
  {
    lureimg: lureximg4,
    luretype: "EAU DE PARFUM",
    lurexbrad: "D.I.V.A Woman- 100ml",
    lurerating: "4.9 (36 reviews)",
    price: "-44% ₹ 449.00",
    oldprice: "₹099.00",
  },
];
export default function LuxeFragrances() {
  return (
    <div className="lurexmain">
      <div>
        <div className="luxetitle">
          <h1>Luxé Fragrances</h1>
        </div>
        <div className="lurecarddiv ">

        {lurexdata.map((datalue, i) => {
          return (
            <div className="" key={i}>
              <BestSellercard
                imag1={datalue.lureimg}
                type={datalue.luretype}
                brandname={datalue.lurexbrad}
                rating={datalue.lurerating}
                price={datalue.price}
                oldprice={datalue.oldprice}
              />
            </div>
          );
        })}
        </div>
        <div className="shoplureimg">
            <img src={Shoplureximg} alt="" />
        </div>
      </div>
    </div>
  );
}
