import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    Password: "",
    usertype: "",
  });

  const [alldata, setAlldata] = useState([]);
  const [showdata, setShowdata] = useState([]);

  const options = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
    { value: "Employe", label: "Employe" },
  ];
  const filteroptions = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
    { value: "Employe", label: "Employe" },
    { value: "AllUser", label: "AllUser" },
  ];

  const getdata = (e) => {
    e.preventDefault();
    if (
      user.email.length > 0 &&
      user.Password.length > 0 &&
      user.usertype.length > 0
    ) {
      setAlldata([...alldata, user]);
      console.log("alll", alldata);
      localStorage.setItem("logindata", JSON.stringify([...alldata, user]));
      setUser({
        email: "",
        Password: "",
        usertype: "",
      });
    } else {
      toast.error("Fill the blanks ");
    }
  };
  useEffect(() => {
    let josndarta = localStorage.getItem("logindata");
    let normaldata = JSON.parse(josndarta) || [];
    setAlldata(normaldata);
  }, []);

  const matchdata = (item) => {
    //  console.log("====>",item.value)
    let fillterdata = alldata.filter((e) => e.usertype == item.value);

    console.log(fillterdata);
    setShowdata(fillterdata);
    if (item.value == "AllUser") {
      setShowdata(alldata);
    }
  };
  const Deletefun = (val) => {
    let filldelet = alldata.filter((e, i) => i !== val);
    let fiiii = showdata.filter((e, i) => i !== val);
    console.log("delet", filldelet);
    console.log("val", val);

    setAlldata(filldelet);
    setShowdata(fiiii);
    localStorage.setItem("logindata", JSON.stringify(filldelet));
  };
  return (
    <div>
      <div className="w-25 m-auto mt-lg-5">
        <Form onSubmit={getdata}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              value={user.Password}
              onChange={(e) => setUser({ ...user, Password: e.target.value })}
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Select
              options={options}
              onChange={(e) => setUser({ ...user, usertype: e?.value })}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
      <div className="w-25 m-auto mt-5">
        <Select options={filteroptions} onChange={(e) => matchdata(e)} />
      </div>
      {/* {alldata.map((e,i) => {
        return (
          <div key={i} className="d-flex gap-5 justify-content-center mt-2">
            <li>{e.email}</li>
            <li>{e.Password}</li>
            <li>{e.usertype}</li>
          </div>
        );
      })} */}
      {/* <div>

      {showdata.map((e,i) => {
        return (
          <div key={i} className="d-flex gap-5 justify-content-center mt-2">
            <div>{e.email}</div>
            <div>{e.Password}</div>
            <div>{e.usertype}</div>
          </div>
        );
      })}
      
      </div> */}
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>S.r</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showdata.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{e.Password}</td>
                  <td>{e.usertype}</td>
                  <td>
                    <Button onClick={() => Deletefun(i)}>Delete</Button>
                    <Button onClick={() => Editfun(e)}>Edit</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
         
    </div>
  );
}
