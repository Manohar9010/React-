import React, { useEffect, useState } from "react";
import "../ProfilePage/ProfilePage.css";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
export default function ProfilePage() {
  const {user}= useSelector(state=>state.singupdataslice)
//  console.log(data.user)
   
  return (
    <div>
      <div className="profilemain">
        <h1>All user list  <hr /></h1>
        <Table striped>
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
                  <td>{user.usertype}</td>
                  <td>{user.hobbys}</td>
                </tr>
            
          </tbody>
        </Table>

        <div></div>
      </div>
    </div>
  );
}
