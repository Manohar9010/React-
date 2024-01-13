import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function UserData() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let nomal = JSON.parse(jsondata) || [];
    setUserData(nomal);
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobbys</th>
            <th>UserType</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>{e.gender}</td>
                <td>{e.hobbys}</td>
                <td>{e.usertype}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
