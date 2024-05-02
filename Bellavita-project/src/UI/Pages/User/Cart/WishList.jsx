import React, { useEffect, useState } from "react";
import "../Wishlist/WishList.css";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

export default function WishList() {
 
  const data = useSelector((state) => state.singupdataslice);
axios({
  method:"post",
  url: "http://localhost:9999/wishlist/create",
  headers: {
    authorization: `Bearer ${data?.token}`,
    "Content-Type": "application/json",
  },
})

  return (
   <div className="" >

    <h1 className="mt-100">wishlist</h1>



   </div>
  );
}
