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

  return (
    <div className="" style={{ marginTop: "150px" }}>
      <div></div>
      <div>
        <div>
          {cart.map((e) => {
            return (
              <>
                <div>
                  <div>
                    {" "}
                    <img src={e.productId.thumbnail} alt="" />{" "}
                  </div>
                  <p>{e.productId.title}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
