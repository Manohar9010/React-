import React, { useEffect, useState } from "react";
import "./BellaRegistaion.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
export default function BellRegistetion() {
  const [userdata, setUserdata] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    hobbys: [],
    usertype: "",
  });

  const options = [
    { value: "User", label: "User" },
    { value: "Admin", label: "Admin" },
    { value: "Employee", label: "Employee" },
  ];
  let genders = ["Male", "Female", "Kids"];
  let hobby = ["Reading", "Dancing", "Singing", "Cycling"];

  const getcheckvalue = (item) => {
    let match = userdata.hobbys.includes(item);

    if (match) {
      let fillterdata = userdata?.hobbys?.filter((e) => e !== item);
      setUserdata({ ...userdata, hobbys: fillterdata });
    } else {
      setUserdata({ ...userdata, hobbys: [...userdata?.hobbys, item] });
    }
  };

  const getdata = (e) => {
    e.preventDefault();
    if (userdata.username.length > 0 && userdata.email.length > 0) {
      let josndata = localStorage.getItem("bellregisterdata");
      let normal = JSON?.parse(josndata || "[]");
      localStorage.setItem(
        "bellregisterdata",
        JSON.stringify([...normal, userdata])
      );

      setUserdata({
        username: "",
        age: "",
        email: "",
        password: "",
        gender: "",
        hobbys: [],
        usertype: "",
      });
      restoggle();
      toast.success("Your Detailes Submited");
    } else {
      alert("fill the form");
    }
  };
  useEffect(() => {
    let josndata = localStorage.getItem("bellregisterdata");
    let normal = JSON?.parse(josndata || "[]");
    console.log("Registation details", normal);
  });
  return (
    <div>
      <div className="registermain">
        <div className="regiterborder">
          <div className="rigistrationtitle">
            <h1>Registration</h1>
          </div>
          <div className="bellaregister">
            <div>
              <Form onSubmit={getdata}>
                <FormGroup>
                  <Label for="exampleEmail">User Name</Label>
                  <Input
                    id="Username"
                    name="name"
                    placeholder="Enter Your Name"
                    type="text"
                    value={userdata.username}
                    onChange={(e) =>
                      setUserdata({ ...userdata, username: e?.target?.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Age</Label>
                  <Input
                    id="UserAge"
                    name="Age"
                    placeholder="Enter Your Age"
                    type="Number"
                    value={userdata.age}
                    onChange={(e) =>
                      setUserdata({ ...userdata, age: e?.target?.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email"
                    value={userdata.email}
                    onChange={(e) =>
                      setUserdata({ ...userdata, email: e?.target?.value })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="password"
                    value={userdata.password}
                    onChange={(e) =>
                      setUserdata({ ...userdata, password: e?.target?.value })
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <legend>Gender</legend>
                  <FormGroup className="d-flex gap-4 ">
                    {genders.map((e, i) => {
                      return (
                        <FormGroup key={i} check>
                          <Input
                            name="radio1"
                            type="radio"
                            value={userdata.gender}
                            onChange={() =>
                              setUserdata({ ...userdata, gender: e })
                            }
                          />{" "}
                          <Label check>{e}</Label>
                        </FormGroup>
                      );
                    })}
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <legend>Hoddys</legend>
                  <FormGroup className="d-flex gap-3">
                    {hobby.map((e, i) => {
                      return (
                        <FormGroup key={i} check>
                          <Input
                            type="checkbox"
                            onChange={() => getcheckvalue(e)}
                          />{" "}
                          <Label check>{e}</Label>
                        </FormGroup>
                      );
                    })}
                  </FormGroup>
                  <FormGroup>
                    <Select
                      onChange={(e) =>
                        setUserdata({ ...userdata, usertype: e?.value })
                      }
                      options={options}
                    />
                  </FormGroup>
                </FormGroup>
                <Button className="bg-secondary   text-white fs-5 fw-medium">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
