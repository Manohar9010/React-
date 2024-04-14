import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function CardCom({ product }) {
  const navigate = useNavigate();
  return (
    <div className="mt-3 ">
      <div
        onClick={() => navigate(`/showpreview/${product?._id}`)}
        className="d-flex justify-center cursor-pointer "
      >
        <img src={product?.thumbnail || img1} alt="" className="rounded" />
      </div>
      <div className="text-center">
        <h6> Title: {product?.title}</h6>

        <p>
          <span className="font-medium">Type:</span> {product?.description}
        </p>
        <h6>
          Price:
          <span className="text-green-600">
            {"-" + product?.discountPercentage + "%"}
          </span>
          <span className="text-red-500">
            {(-(
              (product?.price * product?.discountPercentage) / 100 -
              product?.price
            )).toFixed(2)}
          </span>
          <span style={{ textDecoration: "line-through" }}>
            {product?.price}
          </span>
        </h6>

        <span>{product?.colour}</span>

        <Button
          onClick={() => addtocardhandler(product?._id)}
          className="bg-dark w-75"
        >
          ADD CART
        </Button>
      </div>
    </div>
  );
}
