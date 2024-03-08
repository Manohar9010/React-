import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ Componentprofile }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("userType"));

    if (!normaldata || normaldata?.usertype !== "admin") {
      navigate("/belllogin");
    }
  });

  return (
    <div>
      {Componentprofile} 
    </div>
  );
};



export const ProtectedRouteuser = ({ Componentuser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("userType"));

    if (!normaldata || normaldata?.usertype !== "User" && normaldata?.usertype !== "admin") {
      navigate("/belllogin");
      alert("plese login")
    }
  });

  return <div>{Componentuser}</div>;
};
