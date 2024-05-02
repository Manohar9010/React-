import React from "react";
import "./Bestsellers.css";
import { BadgeCheck, Star } from "lucide-react";
import { Button } from "reactstrap";

export default function BestSellercard({
  imag1,
  type,
  brandname,
  rating,
  oldprice,
  price,
  percentage,
}) {
  return (
    <div className="">
      <div className="bestselarmain ">
        <div >

        <div className="bestsellarimg">
          <img src={imag1} alt="" />
        </div>
        <div className="bestsellartext text-center">
          <p className="m-0 p-0 text-center">{type}</p>
          <h6>{brandname}</h6>
          <div className=" d-flex gap-3 justify-center">
            <Star fill="#f2eb07" color="#f2eb07" />
            {rating}
            <BadgeCheck color="#16d1e9" />
          </div>
          <p> </p>
          <p>
            <span style={{ color: "green" }}>{percentage}</span>{" "}
            <span style={{ color: "red" }}>{price}</span>{" "}
            <span style={{ textDecoration: "line-through" }}>{oldprice}</span>
          </p>
          <Button className="w-100 ">ADD TO CARAT</Button>
        </div>
        </div>
      </div>
    </div>
  );
}
