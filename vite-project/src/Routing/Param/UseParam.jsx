import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
export default function UseParam() {
  const navigate = useNavigate();
  let userdetaile = [
    { name: "Madhav", age: 25, city: "Surat" },
    { name: "Mani", age: 27, city: "Navsari" },
    { name: "Goapl", age: 24, city: "Valsad" },
  ];
  return (
    <div
      className="mt-5 px-5 bg-info-subtle"
      style={{ height: "500px", textAlign: "center", paddingTop: "100px" }}
    >
      <Table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>All Data</th>
          </tr>
        </thead>
        <tbody>
          {userdetaile.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td
                  role="button"
                  onClick={() => navigate(`/username/${e.name}`)}
                >
                  {e.name}
                </td>
                <td role="button" onClick={() => navigate(`/useage/${e.age}`)}>
                  {e.age}
                </td>
                <td
                  role="button"
                  onClick={() => navigate(`/usecity/${e.city}`)}
                >
                  {e.city}
                </td>
                <td
                  role="button"
                  onClick={() =>
                    navigate(`/usealldata/${e.name}/${e.age}/${e.city}`)
                  }
                >
                  All Data
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
//
