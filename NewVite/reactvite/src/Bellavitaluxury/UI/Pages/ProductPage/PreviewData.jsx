import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
export default function PreviewData() {
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.userpreviwSlice;
  });
  console.log("previe", data);
  const imgStyle = {
    filter: "drop-shadow(10px 7px 10px black)",
    borderRadius: "10px",
  };

  useLayoutEffect(()=>{
    window.scrollTo(0, 0)
})
  return (
    <div>
      <div style={{ marginTop: "150px", marginBottom: "15px" }}>
        <div
          className="d-flex"
          style={{
            margin: "0px 150px",
            border: "2px solid grey",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#F4F6F6",
          }}
        >
          <div className="w-50 ">
            <img
              src={data.userpre.thumbnail}
              alt=""
              className="w-50"
              style={imgStyle}
            />
          </div>

          <div className="">
            <div>
              <h5>Brand: {data.userpre.brand}</h5>
              <h5>Title: {data.userpre.title}</h5>
              <h5>Category: {data.userpre.category}</h5>
              <h5>Description: {data.userpre.description}</h5>
              <h5>Color: {data.userpre.color ? data.userpre.color.map((e) => "  " + e) : ""}</h5>
              <h5>Price: {data.userpre.price}</h5>
            </div>
            <div>
              <h5>DiscountPercentage: {data.userpre.discountPercentage}</h5>
              <h5>
                AfterDiscountAmount:
                {(
                  data.userpre.price -
                  (data.userpre.price * data.userpre.discountPercentage || 0) /
                    100
                ).toFixed(2)}
              </h5>

              <h5>Size: {data.userpre.size ? data.userpre.size.map((e) => "  " + `(${e})`) : ""}</h5>
              <h5>Gender:{data.userpre.gender}</h5>
              <h5>AvailableStock:{data.userpre.availableStock}</h5>
              <Button
                style={{ backgroundColor: "black" }}
                onClick={() => navigate("/product")}
              >
                Back to Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
