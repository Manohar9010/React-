import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ Componentprofile }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let normaldata = JSON.parse(localStorage.getItem("userType"));

    if (!normaldata || normaldata?.usertype !== "Admin") {
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

    if (!normaldata || normaldata?.usertype !== "User" && normaldata?.usertype !== "Admin") {
      navigate("/belllogin");
      toast.warning("plese login");
    }
  });

  return <div>{Componentuser}</div>;
};
