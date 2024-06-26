import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Button, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CircleUserRound } from "lucide-react";
import imgsideshow from '../../../../assets/Images/sideshow.jpg'
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../Redux/Fetures/SingupSlice";
export default function ProfilePage() {
  const {user}= useSelector(state=>state.singupdataslice)
  const dispach = useDispatch();
  const navigate = useNavigate();
//  console.log(data.user)
const logoutfun = () => {
  dispach(logout());
  // localStorage.clear("userType");
  setLogbutton(false);
  navigate("/");
};
  return (
    <div>
      <div className="profilemain">
        <h1> User list  <hr /></h1>
      
 
        <div className="profilbox">
         <div className="userimg">
         <img src={imgsideshow} alt="" />
         </div>
         <div className="userdata">
            <div className="databoder">
              
              <h4>User Name: {user.name}</h4>
              <h4>User Age: {user.age}</h4>
              <h4>Email: {user.email}</h4>
              <h4>User Type: {user.userType}</h4>
            <div><Button onClick={logoutfun} className="bg-dark w-100">Logout</Button></div>
            </div>
            </div>
             
         </div>
   

      </div>
    </div>
  );
}
