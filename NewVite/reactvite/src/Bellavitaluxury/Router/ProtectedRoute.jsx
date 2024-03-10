import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ Componentprofile }) => {
  const navigate = useNavigate();
  const data= useSelector(state=>state.singupdataslice)
  useEffect(() => {
   

    if (!data || data.user.userType !== "admin") {
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
  const data= useSelector(state=>state.singupdataslice)
  useEffect(() => {

    if (!data || data.user.userType !== "User" && data.user.userType !== "admin") {
      navigate("/belllogin");
      alert("plese login")
    }
  });

  return <div>{Componentuser}</div>;
};
