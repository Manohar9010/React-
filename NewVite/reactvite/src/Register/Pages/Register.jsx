import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

let intaialvalue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
  city: "",
  gender: "",
  hobbys: [],
  usertype: "",
};
export default function Register() {
  const [registeruservalue, setRegisteruservalue] = useState(intaialvalue);

  const [registerlist, setregisterlist] = useState([]);

  const checkboxfun = (item) => {
    let check = registeruservalue.hobbys.includes(item);

    if (check) {
      let fillterdata = registeruservalue.hobbys.filter((e, i) => e !== item);
      setRegisteruservalue({ ...registeruservalue, hobbys: fillterdata });
    } else {
      setRegisteruservalue({
        ...registeruservalue,
        hobbys: [...registeruservalue.hobbys, item],
      });
    }
  };

  const Registersubmit = (e) => {
    e.preventDefault();
    if (
      registeruservalue.phone.length > 0 ||
      registeruservalue.password.length > 3
    ) {
      setregisterlist([...registerlist, registeruservalue]);
      localStorage.setItem(
        "regist",
        JSON.stringify([...registerlist, registeruservalue])
      );
      setRegisteruservalue(intaialvalue);
      alert("Registetion sucssece");
    } else {
      alert("please check phone number and password");
    }
  };

  return (
    <div>
      <div className="mx-96">
        <Form onSubmit={Registersubmit}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="First Name"
              type="text"
              value={registeruservalue.firstname}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  firstname: e?.target?.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              type="text"
              value={registeruservalue.lastname}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  lastname: e?.target?.value,
                })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              value={registeruservalue.email}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  email: e?.target?.value,
                })
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
              value={registeruservalue.password}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  password: e?.target?.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Phone Number</Label>
            <Input
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone number placeholder"
              type="number"
              maxLength={10}
              value={registeruservalue.phone}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  phone: e?.target?.value,
                })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">City</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={registeruservalue.city}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  city: e?.target?.value,
                })
              }
            >
              <option>------Select City----- </option>
              <option>Surat</option>
              <option>Vadodara</option>
              <option>Navsari</option>
              <option>Sachin</option>
              <option>Khim</option>
            </Input>
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Gender</legend>
            <FormGroup className="flex gap-3">
              {["male", "female"]?.map((e, i) => {
                return (
                  <FormGroup check key={i}>
                    <Input
                      name="radio1"
                      type="radio"
                      checked={registeruservalue.gender == e}
                      value={registeruservalue.gender}
                      onChange={() =>
                        setRegisteruservalue({
                          ...registeruservalue,
                          gender: e,
                        })
                      }
                    />{" "}
                    <Label check>{e}</Label>
                  </FormGroup>
                );
              })}
            </FormGroup>
          </FormGroup>
          <legend>Hobbys</legend>
          <FormGroup className="flex gap-2">
            {["Reading", "Danceing", "Singing"]?.map((e, i) => {
              return (
                <FormGroup check key={i}>
                  <Input
                    type="checkbox"
                    checked={registeruservalue.hobbys.includes(e)}
                    onChange={() => checkboxfun(e)}
                  />{" "}
                  <Label check>{e}</Label>
                </FormGroup>
              );
            })}
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">User Type</Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              value={registeruservalue.usertype}
              onChange={(e) =>
                setRegisteruservalue({
                  ...registeruservalue,
                  usertype: e?.target?.value,
                })
              }
            >
              <option>------Select User Type----- </option>
              <option>Admin</option>
              <option>User</option>
              <option>Employe</option>
              <option>Gust</option>
            </Input>
          </FormGroup>

          <Button>Register</Button>
        </Form>
      </div>
      <div>
        <p>{registeruservalue.firstname}</p>
        <p>{registeruservalue.lastname}</p>
        <p>{registeruservalue.email}</p>
        <p>{registeruservalue.password}</p>
        <p>{registeruservalue.city}</p>
        <p>{registeruservalue.gender}</p>
        <p>{registeruservalue.hobbys}</p>
        <p>{registeruservalue.usertype}</p>
      </div>
    </div>
  );
}
