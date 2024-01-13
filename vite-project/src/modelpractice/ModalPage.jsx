import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function ModalPage({ modal, toggle }) {
  let [userdata, setUserdata] = useState({
    email: "",
    password: "",
    gender: "Male",
    hobbys: [],
    usertype: "",
  });
  let [alldata, setAlldata] = useState([]);
  const options = [
    { value: "User", label: "User" },
    { value: "Admin", label: "Admin" },
    { value: "Employee", label: "Employee" },
  ];
  const Checkboxfun = (item) => {
    let match = userdata?.hobbys?.includes(item);
    if (match) {
      let fillterdata = userdata?.hobbys?.filter((e) => e !== item);
      setUserdata({ ...userdata, hobbys: fillterdata });
    } else {
      setUserdata({ ...userdata, hobbys: [...userdata?.hobbys, item] });
    }
  };
  const getdata = (e) => {
    e?.preventDefault();
    let jsondata = localStorage?.getItem("passdata") || "[]";
    let normaldata = JSON?.parse(jsondata);

    if (userdata.email.length > 0 && userdata.password.length > 0) {
      if (
        userdata.usertype === "Admin" &&
        normaldata.some((e) => e.usertype === "Admin")
      ) {
        toast.warn("Admin alredy exist");
        return;
      }
      let macth = normaldata.some((e) => {
        return e.email === userdata.email;
      });

      if (macth) {
        alert("dublicate data");
      } else {
        localStorage?.setItem(
          "passdata",
          JSON.stringify([...normaldata, userdata])
        );
        setUserdata({
          email: "",
          password: "",
          gender: "",
          hobbys: [],
          usertype: "",
        });
        toggle();
      }
    } else {
      alert("fill the form");
    }
  };

  let gender = ["Male", "Female", "Kids"];
  let hobbys = ["Reading", "Singing", "Dancing", "Cycling"];

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={getdata}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
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
                placeholder="password placeholder"
                type="password"
                value={userdata.password}
                onChange={(e) =>
                  setUserdata({ ...userdata, password: e?.target?.value })
                }
              />
            </FormGroup>

            <legend>Radio Buttons</legend>
            <FormGroup tag="fieldset" className="d-flex gap-3">
              {gender.map((e, i) => {
                return (
                  <FormGroup check key={i}>
                    <Input
                      checked={userdata?.gender === e}
                      name="radio1"
                      onChange={() => setUserdata({ ...userdata, gender: e })}
                      type="radio"
                    />{" "}
                    <Label check>{e}</Label>
                  </FormGroup>
                );
              })}
            </FormGroup>

            <legend>Hobbys</legend>

            <FormGroup className="d-flex gap-3">
              {hobbys.map((e, i) => {
                return (
                  <FormGroup check>
                    <Input
                      checked={userdata?.hobbys?.includes(e)}
                      type="checkbox"
                      onClick={() => Checkboxfun(e)}
                    />{" "}
                    <Label check>{e}</Label>
                  </FormGroup>
                );
              })}
            </FormGroup>
            <FormGroup>
              <Select
                options={options}
                onChange={(e) =>
                  setUserdata({ ...userdata, usertype: e?.value })
                }
              />
               {/* <Select
              id="usertype"
              options={options}
              onChange={(selectedOption) =>
                setUserdata({ ...userdata, usertype: selectedOption.value })
              }
              value={options.find((option) => option.value === userdata.usertype)} user
            /> */}

            </FormGroup>

            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>

     
    </div>
  );
}
