import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Showpreview({ showprview }) {
  let navigate = useNavigate();

  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${id}`,
    }).then((res) => {
      console.log("useEffect  res:", res.data.count);
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    setData(showprview);
  }, [showprview]);
  return (
    <div className="  ">
      <div className="mt-56 flex justify-end me-9">
      <X size={40} color="#918d8d" onClick={() => navigate(-1)} />
      </div>
      <div className="d-flex justify-center gap-20  mb-20">
        
        <div>

        <img src={data?.thumbnail} alt="" srcset="" className="w-80 rounded-lg"/>


        
        </div>
        <div>

        <p > <span className="fw-bolder">PERFUME NAME: </span>  {data?.title}</p>
        <p> <span className="fw-bolder">PERFUME TYPE:</span>  {data?.description}</p>

        <p> <span  className="fw-bolder">PRICE : </span> {data?.price} </p>

        <p> <span className="fw-bolder uppercase" >discountPercentage :</span> {data?.discountPercentage}% </p>


        <p ><span className="fw-bolder">AFTER DISCOUNT PPRICE :</span> {((
              (data?.price * data?.discountPercentage) / 100 
            
            )).toFixed(2)} </p>

            <p> <span className="fw-bolder">STOCK :</span> {data?.stock} </p>

            <Button className="bg-black me-10">ADD TO CART</Button>
            <Button className="bg-black">SHOP NOW</Button>
        </div>
      </div>
     

    </div>
  );
}
