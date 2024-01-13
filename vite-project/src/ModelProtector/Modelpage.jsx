import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
} from "reactstrap";

export default function Modelpage({ modal, toggle }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    gender: "female",
    hobbys: [],
    usertype: "",
  });

  let selectoption = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "employee", label: "Employee" },
  ];

  const ChackChange = (item) => {
    let indexval = user?.hobbys?.includes?.(item);
    if (indexval) {
      let filterdata = user?.hobbys?.filter?.((e) => e !== item);
      setUser({ ...user, hobbys: filterdata });
    } else setUser({ ...user, hobbys: [...user?.hobbys, item] });
  };
  const getdata = (e) => {
    if (user.email.length === 0 && user.password.length === 0) {
      alert("Enter Your Email & Password");
    } else {
      e?.preventDefault();
      let jsondata = localStorage.getItem("passdata");
      let normaldata = JSON?.parse(jsondata || "[]");
      localStorage?.setItem("passdata", JSON.stringify([...normaldata, user]));
      //  console.log(normaldata)
      const storedUser = normaldata.some((data) => data.email === user.email);
      if (storedUser) {
        alert("Email already exists!");
        setUser({
          email: "",
          password: "",
          gender: "female",
          hobbys: [],
          usertype: "",
        });
        return;
      }

      setUser({
        email: "",
        password: "",
        gender: "male",
        hobbys: [],
        usertype: "",
      });
      toggle();
    }
  };

  let Radioarry = [
    {
      gendar: "Male",
    },
    {
      gendar: "Female",
    },
    {
      gendar: "Kids",
    },
  ];

  let Checkarry = [
    {
      hobby: "Reading",
    },
    {
      hobby: "Singing",
    },
    {
      hobby: "Dancing",
    },
    {
      hobby: "tracking",
    },
  ];
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={getdata}>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleEmail"
                  name="email"
                  onChange={(e) =>
                    setUser({ ...user, email: e?.target?.value })
                  }
                  placeholder="with a placeholder"
                  type="email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>
                Password
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePassword"
                  name="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e?.target?.value })
                  }
                  placeholder="password placeholder"
                  type="password"
                />
              </Col>
            </FormGroup>

            <FormGroup row tag="fieldset">
              <legend className="col-form-label col-sm-2">Gender</legend>
              <Col sm={10} className="d-flex gap-4">
                <FormGroup check>
                  {Radioarry.map((e, i) => {
                    return (
                      <FormGroup check>
                        <Input
                          checked={user?.gender === e?.gendar}
                          onChange={() =>
                            setUser({ ...user, gender: e?.gendar })
                          }
                          name="radio2"
                          type="radio"
                        />{" "}
                        <Label check>{e?.gendar}</Label>
                      </FormGroup>
                    );
                  })}
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="checkbox2" sm={2}>
                Hobbys
              </Label>
              <Col
                sm={{
                  size: 10,
                }}
                className="d-flex "
              >
                {Checkarry.map((e, i) => {
                  return (
                    <FormGroup check>
                      <Input
                        onClick={() => ChackChange(e.hobby)}
                        id="checkbox2"
                        type="checkbox"
                      />{" "}
                      <Label check>{e.hobby}</Label>
                    </FormGroup>
                  );
                })}
              </Col>
            </FormGroup>
            <FormGroup>
              <Label check>User Type</Label>
              <Select
                onChange={(e) => setUser({ ...user, usertype: e?.value })}
                options={selectoption}
              />
            </FormGroup>

            <FormGroup check row>
              <Col
                sm={{
                  offset: 2,
                  size: 10,
                }}
              >
                <Button className=" ">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
