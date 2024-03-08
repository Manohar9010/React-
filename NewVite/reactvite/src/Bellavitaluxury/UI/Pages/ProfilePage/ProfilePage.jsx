import React, { useEffect, useState } from "react";
import "../ProfilePage/ProfilePage.css";
import { Table } from "reactstrap";
export default function ProfilePage() {
  const [datapro, setDatapro] = useState([]);

  useEffect(() => {
    let normaldata = JSON.parse(
      localStorage.getItem("userlogin") || "[]"
    );
    setDatapro(normaldata);
  }, []);
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
            {datapro.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>{e.gender}</td>
                  <td>{e.usertype}</td>
                  <td>{e.hobbys}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div></div>
      </div>
    </div>
  );
}
