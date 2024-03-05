import React from "react";
import bestsellerimg from "../../Images/bestsellerimg.webp";
import bestsellerimg1 from "../../Images/bestsellerimg1.webp";
import bestsellerimg2 from "../../Images/bestsellerimg2.webp";
import bestsellerimg3 from "../../Images/bestsellerimg3.webp";
import bestsellerimg4 from "../../Images/bestsellerimg4.webp";
import bestsellerimg5 from "../../Images/bestsellerimg5.webp";
import bestsellerimg6 from "../../Images/bestsellerimg6.webp";
import bestsellerimg7 from "../../Images/bestsellerimg7.webp";
import lureximg1 from "../../Images/luxefragranceimg.webp";
import lureximg2 from "../../Images/luxefragranceimg1.webp";
import lureximg3 from "../../Images/luxefragranceimg2.webp";
import lureximg4 from "../../Images/luxefragranceimg3.webp";
import BestSellercard from "../Home/BestSellercard";

export default function BellaContact() {
  let bestsellercarddata = [
    {
      image: bestsellerimg,
      type: "EAU DE PARFUM",
      brandname: "Luxurv Perume Gift Sets For Men",
      rating: "4.4 (261 reviews)",
      price: "-33% ₹ 565.00",
      oldprice: "₹649.00",
    },
    {
      image: bestsellerimg1,
      type: "Eau De Parfum For All ",
      brandname: "OUD GOLD - 100ml",
      rating: "5 (17 reviews)",
      price: "-23% ₹ 849.00",
      oldprice: "₹1099.00",
    },
    {
      image: bestsellerimg2,
      type: "EAU DE PARFUM ",
      brandname: "CEO Man",
      rating: "4.3 (192 reviews)",
      price: "-44% ₹ 449.00",
      oldprice: "₹099.00",
    },
    {
      image: bestsellerimg3,
      type: "EAU DE PARFUM ",
      brandname: "Luxurv Unisex Perfume Gift Set-4",
      rating: "4.3 (338 reviews)",
      price: "-33% ₹ 565.00",
      oldprice: "₹049.00",
    },

    {
      image: bestsellerimg4,
      type: "EAU DE PARFUM ",
      brandname: "Luxurv Unisex Perfume Gift",
      rating: "4.3 (338 reviews)",
      price: "-34% ₹ 765.00",
      oldprice: "₹059.00",
    },

    {
      image: bestsellerimg7,
      type: "EAU DE PARFUM ",
      brandname: "Luxurv Pefume",
      rating: "4.3 (338 reviews)",
      price: "-34% ₹ 765.00",
      oldprice: "₹059.00",
    },
    {
      image: lureximg1,
      type: "Eau De Parfum for Women",
      brandname: "Hot Mess Perfume for Women-100ml",
      rating: "4.9 (36 reviews)",
      price: "-44% ₹ 449.00",
      oldprice: "₹099.00",
    },
    {
      image: lureximg2,
      type: "EAU DE PARFUM",
      brandname: "OCEAN Man- 100ml",
      rating: "4.9 (36 reviews)",
      price: "-44% ₹ 449.00",
      oldprice: "₹099.00",
    },
    {
      image: lureximg3,
      type: "EAU DE PARFUM",
      brandname: "BLU Man- 100ml",
      rating: "4.9 (36 reviews)",
      price: "-44% ₹ 449.00",
      oldprice: "₹099.00",
    },
    {
      image: lureximg4,
      type: "EAU DE PARFUM",
      brandname: "D.I.V.A Woman- 100ml",
      rating: "4.9 (36 reviews)",
      price: "-44% ₹ 449.00",
      oldprice: "₹099.00",
    },
  ];

  let lurexdata = [];

  return (
    <div style={{ padding: "200px 0px 50px 0px",  textAlign: "center" }}>
      <h1 style={{fontFamily:"ui-rounded",textAlign:"left",paddingLeft:"25px"}}>Shop All <hr /></h1>
<div  className="d-flex justify-content-center  flex-wrap  gap-5">
      {bestsellercarddata.map((datalue, i) => {
        return (
          <div key={i}>
            <div >

            <BestSellercard
             imag1={datalue.image}
             type={datalue.type}
             brandname={datalue.brandname}
             rating={datalue.rating}
             price={datalue.price}
             oldprice={datalue.oldprice}
            />
            </div>
          </div>
        );
      })}

</div>
    </div>
  );
}
