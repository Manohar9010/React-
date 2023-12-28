import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function UseCity() {
  const navigate = useNavigate();
  const data = useParams();
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "200px",
        backgroundColor: "#A1EEBD",
        height: "85vh",
      }}
    >
      <h1>Iam from: {data.city}</h1>

      <div>
        <Button color="info" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
