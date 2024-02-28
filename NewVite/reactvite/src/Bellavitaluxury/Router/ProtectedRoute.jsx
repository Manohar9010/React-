import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedRoute({ Componentprofile }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   let josndata = localStorage.getItem("userType");
  //   let normaldata = JSON.parse(josndata);
  //   if (!normaldata || normaldata?.usertyep !== "admin") {
  //     navigate("/");
  //   }

  // })
  useEffect(() => {
    let normaldata =JSON.parse (localStorage.getItem("userType"));
    console.log("first===>",normaldata)
    if (!normaldata || normaldata?.usertype !== "Admin") {
      navigate("/belllogin");
      toast.warning("plese login")
    }
  });

  
  return <div>{Componentprofile}</div>;
}
