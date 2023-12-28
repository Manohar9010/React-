import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Service() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center px-5  bg-danger-subtle"
      style={{ height: "80vh", alignItems: "center" }}
    >
      <h1>Service</h1>

      <div className="d-flex justify-content-center  gap-2   rounded">
        <Button onClick={() => navigate("/service/car")}>Car</Button>
        <Button onClick={() => navigate("/service/bike")}>Bike</Button>
      </div>
      <Outlet />
    </div>
  );
}
