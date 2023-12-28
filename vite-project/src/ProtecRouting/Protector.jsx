import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protector = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let josndata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(josndata);
    if (!normaldata) {
      navigate("/");
    }
  });

  return (
    <div>
      Protector
      {Component}
    </div>
  );
};

export const AdminProtector = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let josndata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(josndata);
    if (!normaldata || normaldata?.usertyep !== "admin") {
      navigate("/");
    }
  });
  return (
    <div>
      Protector
      {Component}
    </div>
  );
};
