import React, { useEffect, useState } from "react";
import "../ProfilePage/ProfilePage.css";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { CircleUserRound } from "lucide-react";
import imgsideshow from '../../Images/sideshow.jpg'
export default function ProfilePage() {
  const {user}= useSelector(state=>state.singupdataslice)
//  console.log(data.user)
   
  return (
    <div>
      <div className="profilemain">
        <h1> User list  <hr /></h1>
        {/* <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>userType</th>
              <th>Hobbys</th>
            </tr>
          </thead>
          <tbody>
           
                <tr >
                  <th scope="row">sr</th>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.gende}</td>
                  <td>{user.userType}</td>
                  <td>{user.hobbys}</td>
                </tr>
            
          </tbody>
        </Table> */}
 
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
            </div>
            </div>
             
         </div>
   

      </div>
    </div>
  );
}
