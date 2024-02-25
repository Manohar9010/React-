// import React, { useState } from 'react';
// // import './MenuBar.css'; // Import your CSS file for styling

// export default  UseforPractice = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="menu-bar">
//       <button onClick={toggleMenu}>Toggle Menu</button>

//       {isMenuOpen && (
//         <div className="menu">
//           {/* Add your menu items or components here */}
//           <p>Menu Item 1</p>
//           <p>Menu Item 2</p>
//           <p>Menu Item 3</p>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";

export default function UseforPractice() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    gender: "",
    hobby: [],
    usertype: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [updateval, setUpdate] = useState(null);
  let gen = ["male", "femal", "kids"];
  let hobbys = ["reading", "singing", "dancing"];

  let options = [
    { value: "admin", label: "admin" },
    { value: "user", label: "user" },
    { value: "employe", label: "employe" },
  ];

  const checkboxfun = (item) => {
    let match = user.hobby.includes(item);
    console.log(match);
    if (match) {
      let fillterdata = user.hobby.filter((e, i) => e !== item);
      setUser({ ...user, hobby: fillterdata });
    } else {
      setUser({ ...user, hobby: [...user.hobby, item] });
    }
  };

  const getdata = (e) => {
    e.preventDefault();

    if (user.email.length > 0) {
      let match = alldata.some((e) => e.email == user.email);
      if (!match) {
        setAlldata([...alldata, user]);
        localStorage.setItem("trycurd", JSON.stringify([...alldata, user]));

        setUser({
          email: "",
          password: "",
          gender: "",
          hobby: [],
          usertype: "",
        });
      } else {
        alert("same data");
        setUser({
          email: "",
          password: "",
          gender: "",
          hobby: [],
          usertype: "",
        });
      }
    } else {
      alert("enter data");
    }
  };

  const deletefun = (item) => {
    let filltardata = alldata.filter((e, i) => i !== item);
    setAlldata(filltardata);
    localStorage.setItem("trycurd", JSON.stringify(filltardata));
  };

  const editfun = (data, index) => {
    setUser(data);
    setUpdate(index);
    console.log(data);
  };
  const updatefun = () => {
    if (updateval || updateval == 0) {
      alldata.splice(updateval, 1, user);
      setAlldata([...alldata]);
      setUser({
        email: "",
        password: "",
        gender: "",
        hobby: [],
        usertype: "",
      });
      setUpdate(null);
    }
  };
  useEffect(() => {
    let normal = JSON.parse(localStorage.getItem("trycurd") || "[]");
    setAlldata(normal);
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className=" w-50 border border-success p-3 rounded">
          <Form onSubmit={getdata}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e?.target.value })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e?.target.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              {gen.map((e, i) => {
                return (
                  <Col md={3}>
                    <FormGroup>
                      <Label for="examplegender">{e}</Label>
                      <Input
                        id="examplegender"
                        name="gender"
                        type="radio"
                        value={e}
                        checked={user.gender === e}
                        onChange={() => setUser({ ...user, gender: e })}
                      />
                    </FormGroup>
                  </Col>
                );
              })}
            </Row>
            <Row>
              {hobbys.map((e, i) => {
                return (
                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleHobbys">{e}</Label>
                      <Input
                        id="exampleHobbys"
                        name="Hobbys"
                        type="checkbox"
                        onChange={() => checkboxfun(e)}
                        checked={user.hobby.includes(e)}
                      />
                    </FormGroup>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">User Type</Label>
                  <Select
                    options={options}
                    value={options.find((opt) => opt.value === user.usertype)}
                    onChange={(e) => setUser({ ...user, usertype: e?.value })}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button>Sign in</Button> <Button onClick={updatefun}>Update</Button>
          </Form>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Table className="w-75" striped>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobbys</th>
              <th>Usertype</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td>{e.gender}</td>
                  <td>{e.hobby}</td>
                  <td>{e.usertype}</td>
                  <td>
                    <Button onClick={() => deletefun(i)}>Delete</Button>{" "}
                    <Button onClick={() => editfun(e, i)}>Edit</Button>
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
