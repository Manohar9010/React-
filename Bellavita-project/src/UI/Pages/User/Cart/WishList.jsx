import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../../Redux/Fetures/CartSlice";

export default function WishList() {
  const dispatch = useDispatch();
  const { error, cart, pending } = useSelector((store) => store.cartSlice);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  console.log("+++++",cart)
  return (
    <div className="" style={{ marginTop: "150px" }}>
      <div></div>
      <div>
        <div>
          {cart.map((e) => {
            return (
              <>
                <div className="flex items-center my-2">
                  <div className="flex-1 flex justify-center">
                    
                    <img src={e.productId.thumbnail} alt="" className="w-36 rounded" />
                  </div>
                  <div className="flex-1 grig items-center">

                  <p> <span>TITTLE :</span> {e.productId.title}</p> 
                  <p> <span>PRICE :</span> {e.productId.price}</p>
                  </div>
                  <div className="flex-1"> 
                    <p> <span>COUNT : </span> {e.count}  </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
