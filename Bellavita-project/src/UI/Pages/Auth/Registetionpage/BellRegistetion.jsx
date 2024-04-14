// import React, { useEffect, useState } from "react";
// import "./BellaRegistaion.css";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import Select from "react-select";
// import { NavLink } from "react-router-dom";
// export default function BellRegistetion() {
//   const [userdata, setUserdata] = useState({
//     username: "",
//         age: "",
//         email: "",
//         password: "",
//         gender: "",
//         hobbys: [],
//         usertype: "",
//   });

//   const options = [
//     { value: "User", label: "User" },
//     { value: "Admin", label: "Admin" },
//     { value: "Employee", label: "Employee" },
//   ];
//   let genders = ["Male", "Female", "Kids"];
//   let hobby = ["Reading", "Dancing", "Singing", "Cycling"];

//   const getcheckvalue = (item) => {
//     let match = userdata.hobbys.includes(item);

//     if (match) {
//       let fillterdata = userdata?.hobbys?.filter((e) => e !== item);
//       setUserdata({ ...userdata, hobbys: fillterdata });
//     } else {
//       setUserdata({ ...userdata, hobbys: [...userdata?.hobbys, item] });
//     }
//   };

//   const getdata = (e) => {
//     e.preventDefault();
//     if (userdata.username.length > 0 && userdata.email.length > 0) {
//       let josndata = localStorage.getItem("bellregisterdata");
//       let normal = JSON?.parse(josndata || "[]");
//       localStorage.setItem(
//         "bellregisterdata",
//         JSON.stringify([...normal, userdata])
//       );

//       setUserdata({
//         username: "",
//         age: "",
//         email: "",
//         password: "",
//         gender: "",
//         hobbys: [],
//         usertype: "",
//       });
//       restoggle();
//       toast.success("Your Detailes Submited");
//     } else {
//       alert("fill the form");
//     }
//   };
//   useEffect(() => {
//     let josndata = localStorage.getItem("bellregisterdata");
//     let normal = JSON?.parse(josndata || "[]");
//     console.log("Registation details", normal);
//   });
//   return (
//     <div>
//       <div className="registermain">
//         <div className="regiterborder">
//           <div className="rigistrationtitle">
//             <h1>Registration</h1>
//           </div>
//           <div className="bellaregister">
//             <div>
//               <Form onSubmit={getdata}>
//                 <FormGroup>
//                   <Label for="exampleEmail">User Name</Label>
//                   <Input
//                     id="Username"
//                     name="name"
//                     placeholder="Enter Your Name"
//                     type="text"
//                     value={userdata.username}
//                     onChange={(e) =>
//                       setUserdata({ ...userdata, username: e?.target?.value })
//                     }
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="exampleEmail">Age</Label>
//                   <Input
//                     id="UserAge"
//                     name="Age"
//                     placeholder="Enter Your Age"
//                     type="Number"
//                     value={userdata.age}
//                     onChange={(e) =>
//                       setUserdata({ ...userdata, age: e?.target?.value })
//                     }
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="exampleEmail">Email</Label>
//                   <Input
//                     id="exampleEmail"
//                     name="email"
//                     placeholder="Enter Your Email"
//                     type="email"
//                     value={userdata.email}
//                     onChange={(e) =>
//                       setUserdata({ ...userdata, email: e?.target?.value })
//                     }
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="examplePassword">Password</Label>
//                   <Input
//                     id="examplePassword"
//                     name="password"
//                     placeholder="password"
//                     type="password"
//                     value={userdata.password}
//                     onChange={(e) =>
//                       setUserdata({ ...userdata, password: e?.target?.value })
//                     }
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <legend>Gender</legend>
//                   <FormGroup className="d-flex gap-4 ">
//                     {genders.map((e, i) => {
//                       return (
//                         <FormGroup key={i} check>
//                           <Input
//                             name="radio1"
//                             type="radio"
//                             value={userdata.gender}
//                             checked={userdata.gender==e}
//                             onChange={() =>
//                               setUserdata({ ...userdata, gender: e })
//                             }
//                           />{" "}
//                           <Label check>{e}</Label>
//                         </FormGroup>
//                       );
//                     })}
//                   </FormGroup>
//                 </FormGroup>
//                 <FormGroup>
//                   <legend>Hoddys</legend>
//                   <FormGroup className="d-flex gap-3">
//                     {hobby.map((e, i) => {
//                       return (
//                         <FormGroup key={i} check>
//                           <Input
//                             type="checkbox"
//                             onChange={() => getcheckvalue(e)}
//                             checked={userdata.hobbys.includes(e)}
//                           />{" "}
//                           <Label check>{e}</Label>
//                         </FormGroup>
//                       );
//                     })}
//                   </FormGroup>
//                   <FormGroup>
//                     <Select
//                       onChange={(e) =>
//                         setUserdata({ ...userdata, usertype: e?.value })
//                       }
//                       value={options.find((opt)=> opt.value === userdata.value)}
//                       options={options}
//                     />
//                   </FormGroup>
//                 </FormGroup>
//                 <Button className="bg-secondary   text-white fs-5 fw-medium">
//                   Submit
//                 </Button>
//                 <Button className="ms-3">
//                   <NavLink
//                     className="text-white fs-5 fw-medium "
//                     to={"/belllogin"}
//                   >
//                     Login
//                   </NavLink>
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./BellaRegistaion.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../../Redux/Fetures/SingupSlice";
export default function BellRegistetion() {
  const [userdata, setUserdata] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    conpassword: "",
    userType: "",
    address: [],
  });

  const [check, setCheck] = useState(false);
  const [addval, setaddval] = useState({
    add: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const options = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "customer", label: "Customer" },
  ];

  const getdata = (e) => {
    e.preventDefault();
    if (userdata.password !== userdata.conpassword)
      return alert("Check Confom password");
    if (userdata.name.length > 0 && userdata.email.length > 0) {
      axios({
        method: "post",
        url: "http://localhost:9999/user/signup",
        data: { ...userdata, address: [addval] },
      })
        .then((res) => {
          console.log("====--=-==-=-=-==", res.data);
          dispatch(login(res.data));
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });

      setUserdata({
        name: "",
        age: "",
        email: "",
        password: "",
        conpassword: "",
        userType: "",
      });
      setaddval({
        add: "",
        city: "",
        state: "",
        pincode: "",
      });
    } else {
      alert("fill the form");
    }
  };

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
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">User Name</Label>
                      <Input
                        id="Username"
                        name="name"
                        placeholder="Enter Your Name"
                        type="text"
                        value={userdata.name}
                        onChange={(e) =>
                          setUserdata({ ...userdata, name: e?.target?.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
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
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
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
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password"
                        type={check ? "text" : "password"}
                        value={userdata.password}
                        onChange={(e) =>
                          setUserdata({
                            ...userdata,
                            password: e?.target?.value,
                          })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="ConformPassword">Conform Password</Label>
                      <Input
                        id="exampleConformPassword"
                        name="Conformpassword"
                        placeholder="Conform password"
                        type="password"
                        value={userdata.conpassword}
                        onChange={(e) =>
                          setUserdata({
                            ...userdata,
                            conpassword: e?.target?.value,
                          })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} className="mt-4">
                    <FormGroup>
                      <Input
                        type="checkbox"
                        checked={check}
                        onChange={() => setCheck(!check)}
                      />

                      <Label className="ms-2">ShowPassword</Label>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Add</Label>
                      <Input
                        type="text"
                        value={addval.add}
                        placeholder="Address"
                        onChange={(e) =>
                          setaddval({ ...addval, add: e?.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>City</Label>
                      <Input
                        type="text"
                        value={addval.city}
                        placeholder="City"
                        onChange={(e) =>
                          setaddval({ ...addval, city: e?.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>State</Label>
                      <Input
                        type="text"
                        value={addval.state}
                        placeholder="State"
                        onChange={(e) =>
                          setaddval({ ...addval, state: e?.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>pinCone</Label>
                      <Input
                        type="text"
                        value={addval.pincode}
                        placeholder="Pincode"
                        onChange={(e) =>
                          setaddval({ ...addval, pincode: e?.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Select
                    onChange={(e) =>
                      setUserdata({ ...userdata, userType: e?.value })
                    }
                    options={options}
                  />
                </FormGroup>
                <Button className="bg-dark  w-100 text-white fs-5 fw-medium">
                  Submit
                </Button>
                <div className="mt-2">
                  If You Have Alredy Account ? &nbsp;&nbsp;
                  <NavLink
                    className="text-dark fs-6 fw-medium "
                    to={"/belllogin"}
                  >
                    Login
                  </NavLink>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <p>{addval.add}</p>
        <p>{addval.city}</p>
        <p>{addval.state}</p>
      </div>
    </div>
  );
}
