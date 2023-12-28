import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Username() {
  const navigate = useNavigate();

  const data = useParams();
  console.log("-------->", data);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "200px",
        backgroundColor: "#A1EEBD",
        height: "85vh",
      }}
    >
      <h1>My Name is : {data?.name}</h1>

      <Button color="info" onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
