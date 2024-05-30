import { parse } from "postcss";
import React, { useState } from "react";
import { BrowserRouter as Router, unstable_HistoryRouter, useNavigate, useSearchParams } from "react-router-dom";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Loginpage() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [loginval, setLoginval] = useState({
    phone: "",
    password: "",
  });
  const loginfun = (e) => {
    e.preventDefault();

    if (loginval.phone.length > 9 && loginval.password.length > 5) {
      let josndata = localStorage?.getItem("regist");
      let normaldata = JSON?.parse(josndata);
      let data = normaldata?.find((e) => e.phone === loginval.phone);
      if(data){

        localStorage.setItem("login", JSON.stringify("logintrue"));
        alert("login success");
       localStorage.setItem("homedata",JSON.stringify(data))
        navigate("/");
      }else{
        alert("your not register")
        navigate("/Register")
        
      }
      console.log("loginfun  data:", data);
      // navigate("/");
    } else {
      alert("Enter Your Phone Number And Password");
    }
  };
  return (
    <div>
      <div className="mx-96">
        <h1>Login </h1>
        <Form onSubmit={loginfun}>
          <FormGroup>
            <Label for="examplePassword">Phone Number</Label>
            <Input
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone number placeholder"
              type="number"
              value={loginval.phone}
              onChange={(e) =>
                setLoginval({ ...loginval, phone: e?.target?.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              value={loginval.password}
              onChange={(e) =>
                setLoginval({ ...loginval, password: e?.target?.value })
              }
            />
          </FormGroup>

          <Button className="bg-black text-white">Submit</Button>
        </Form>
      </div>
      <div>
        <p>{loginval.phone}</p>
        <p>{loginval.password}</p>
      </div>
    </div>
  );
}
