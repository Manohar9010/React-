import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";

import { addCart, fetchCart } from "../../../../Redux/Fetures/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import axios from "axios";

export default function WishList() {
  const dispatch = useDispatch();
  const { error, cart, pending,cartid } = useSelector((store) => store.cartSlice);
  console.log("WishList  cartid:", cartid)
  const data = useSelector((state) => state.singupdataslice);  
       const  [count,setCount]=useState()
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
        

  const dcrementeHnadler=(productId ,count) => {
    let isRemove =  false
if(count === 1){
  isRemove=true
}     
// 
    axios({
      method:"put",
      url:`http://localhost:9999/cart/update`,
      data:{
        _id:cartid,
        productId,
        isRemove
      },
      headers: {
        authorization: `Bearer ${data?.token}`,
        "Content-Type": "application/json",
      },
    })?.then((res)=>{
           dispatch(addCart(res.data));
    })
  }
  console.log("+++++",cart)
  return (
    <div className="" style={{ marginTop: "150px" }}>
      <div></div>
      <div>
        <div>
          {cart.map((e,i) => {
            return (
            
                <div key={i} className="flex items-center my-2">
                  <div className="flex-1 flex justify-center">
                    
                    <img src={e.productId.thumbnail} alt="" className="w-36 rounded" />
                  </div>
                  <div className="flex-1 grig items-center">

                  <p> <span>TITTLE :</span> {e.productId.title}</p> 
                  <p> <span>PRICE :</span> {e.productId.price}</p>
                  </div>
                  <div className="flex-1"> 
                  <div className="d-flex gap-3">

                  <Button onClick={()=>dcrementeHnadler(  e.productId._id,e.count)} className="bg-transparent text-black fw-bolder  ">-</Button>
                 <p>{e.count}</p>
                  <Button  className="bg-transparent text-black fw-bolder  ">+</Button>
                  </div>
                    {/* <p> <span>COUNT : </span> {e.count}  </p> */}
                  </div>
                </div>
             
            );
          })}
        </div>
      </div>
    </div>
  );
}
