import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protecttask1 = ({ componentsupr }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (!normaldata || normaldata?.usertype !== "super") {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{componentsupr}</div>;
};
export const Adminttask1 = ({ componentsupr }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (
      !normaldata ||
      (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super")
    ) {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{componentsupr}</div>;
};
export const Empoyeetask1 = ({ componentsupr }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (
      !normaldata ||
      (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super" &&normaldata?.usertype !== "employe")
    ) {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{componentsupr}</div>;
};

export const Usertask1 = ({ componentsupr }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let jsondata = localStorage.getItem("passdata");
    let normaldata = JSON.parse(jsondata);
    if (
      !normaldata ||
      (normaldata?.usertype !== "admin" && normaldata?.usertype !== "super" &&normaldata?.usertype !== "employe" &&normaldata?.usertype !== "user")
    ) {
      navigate("/");
      alert("--------->not allow")
    }
  });

  return <div>{componentsupr}</div>;
};

