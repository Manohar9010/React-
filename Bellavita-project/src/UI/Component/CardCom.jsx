import axios from "axios";
import { Heart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function CardCom({ product,addtocardhandler }) {
  const navigate = useNavigate();
  const data = useSelector((state) => state.singupdataslice);


 const wishlisthandler=(id)=>{
  console.log("chrck",id)
  axios({
    method:"post",
    url: `http://localhost:9999/wishlist/create`,
    data:id,
    headers: {
      authorization: `Bearer ${data?.token}`,
      "Content-Type": "application/json",
    } 
  }).then((res)=>{
           console.log("wishcart",res.data)
  }).catch((error)=>{
        console.log("errorwish",error)
  })
  
 }
  return (
    <div className="mt-3 ">
      <div
        onClick={() => navigate(`/showpreview/${product?._id}`)}
        className="d-flex justify-center cursor-pointer "
      >
        <img  src={product?.thumbnail || img1} alt="" className="rounded  relative" />
      

       
        
      </div>
      <div className="text-center">
        <h6> Title: {product?.title}</h6>
        < Heart  onClick={()=>wishlisthandler(product?._id)} />

        <p>
          <span className="font-medium">Type:</span> {product?.description}
        </p>
        <h6>
          Price:
          <span className="text-green-600">
            {"-" + product?.discountPercentage + "%"}
          </span>
          <span className="text-red-500">
            {((
              (product?.price * product?.discountPercentage) / 100
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
