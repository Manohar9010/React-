import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function PreviewData({
  args,setModal1,modal1,toggle1
 
}) {

 

  // const navigate = useNavigate();

  // const data = useSelector((state) => {
  //   return state.userpreviwSlice;
  // });
  // console.log("previe", data);
  const imgStyle = {
    // mixBlendMode: 'color-burn',
    filter: "drop-shadow(10px 7px 10px black)",
    borderRadius: "10px",
  };
 
  let data = [];
  return (
    <div>
      <div>
        {/* <div
          className="d-flex"
          style={{
            margin: "0px 150px",
            border: "2px solid grey",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#F4F6F6",
          }}
        >
          <div className="w-50">
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
              <h5>Color: {data.userpre.color.map((e) => "  " + e)}</h5>
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

              <h5>Size: {data.userpre.size.map((e) => "  " + `(${e})`)}</h5>
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
        </div> */}
      <div>
      <Button color="danger" onClick={toggle1}>
        Click Me
      </Button>
      <Modal isOpen={modal1} toggle1={toggle1} {...args}>
        <ModalHeader toggle1={toggle1}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle1}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
      </div>
    </div>
  );
}

{
  /* <div
              className="d-flex"
              style={{
                margin: "0px 150px",
                border: "2px solid grey",
                borderRadius: "5px",
                padding: "20px",
                backgroundColor: "#F4F6F6",
              }}
            >
              <div className="w-50">
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
                  <h5>Color: {data.userpre.color.map((e) => "  " + e)}</h5>
                  <h5>Price: {data.userpre.price}</h5>
                </div>
                <div>
                  <h5>DiscountPercentage: {data.userpre.discountPercentage}</h5>
                  <h5>
                    AfterDiscountAmount:
                    {(
                      data.userpre.price -
                      (data.userpre.price * data.userpre.discountPercentage ||
                        0) /
                        100
                    ).toFixed(2)}
                  </h5>

                  <h5>Size: {data.userpre.size.map((e) => "  " + `(${e})`)}</h5>
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
            </div>  */
}
