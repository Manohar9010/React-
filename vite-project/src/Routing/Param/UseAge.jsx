import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function UseAge() {
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
      <h1>My Age :{data.age}</h1>

      <div>
        <Button color="info" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
