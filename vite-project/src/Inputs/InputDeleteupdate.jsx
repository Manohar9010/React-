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
  import React, { useState } from "react";
  import { toast } from "react-toastify";
  
  export default function InputDeleteupdate() {
    let [inpudata, setInputdaat] = useState({
      username: "",
      age: "",
      email: "",
      password: "",
      adress: "",
      city: "",
      state: "",
      pincode: "",
    });
    let [alldata, setAlldata] = useState([]);
    let [upindex,setUpindex]=useState(null)
  
    const Submitdata = (e) => {
      e.preventDefault();
      if (
        inpudata.username.length > 0 &&
        inpudata.age.length > 0 &&
        inpudata.email.length > 0 &&
        inpudata.password.length > 0
      ) {
        setAlldata([...alldata, inpudata]);
  
        setInputdaat({
            username: "",
            age: "",
            email: "",
            password: "",
            adress: "",
            city: "",
            state: "",
            pincode: "",
          });
        toast.success("Form Submitted Successfully");
      } else {
        toast.error("Please fill the form");
      }
    };

    const deletedata=(index)=>{
      const afterdelet= alldata.filter((e,i)=>{
        return i !==index
       })
       setAlldata(afterdelet)
     
    }

    const Editdata=(data,index)=>{
        setInputdaat(data)
        setUpindex(index)
    }

    const Updatefun=()=>{
      if(upindex || upindex===0)
     alldata.splice(upindex,1,inpudata);
     setInputdaat([...alldata])
     setInputdaat({
      username: "",
      age: "",
      email: "",
      password: "",
      adress: "",
      city: "",
      state: "",
      pincode: "",
    });
    setUpindex(null)
    }
  
    return (
      <div>
        <Form className="w-50 mt-5 m-auto border border-dark rounded p-5">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="Username ">User Name</Label>
                <Input
                  id="Username"
                  name="name"
                  placeholder="Enter Your Name"
                  type="text"
                  value={inpudata.username}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, username: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Userage">User Age</Label>
                <Input
                  id="UserAge"
                  name="age"
                  placeholder="Enter Your Age"
                  type="number"
                  value={inpudata.age}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, age: e?.target?.value })
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
                  value={inpudata.email}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, email: e?.target?.value })
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
                  placeholder="Enter Your password"
                  type="password"
                  value={inpudata.password}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, password: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="1234 Main St"
              value={inpudata.adress}
              onChange={(e) =>
                setInputdaat({ ...inpudata, adress: e?.target?.value })
              }
            />
          </FormGroup>
  
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  id="exampleCity"
                  name="city"
                  placeholder=""
                  value={inpudata.city}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, city: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  id="exampleState"
                  name="state"
                  placeholder=""
                  value={inpudata.state}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, state: e?.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">PinCode</Label>
                <Input
                  id="exampleZip"
                  name="zip"
                  placeholder=""
                  value={inpudata.pincode}
                  onChange={(e) =>
                    setInputdaat({ ...inpudata, pincode: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
  {
    !(upindex || upindex===0 )?(
  
          <Button
            className=" w-50 text-center mt-3 bg-success text-white"
            onClick={Submitdata}
          >
            Submit
          </Button>):(
          <Button className="w-50 text-center mt-3 bg-success text-white" onClick={Updatefun}>Upadate</Button>)}
        </Form>
        {alldata.length >0 ?(
  
        <div className="m-5">
          <Table bordered borderless hover responsive striped>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>User Name</th>
                <th>User Age</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Pincode</th>
                <th >Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {alldata.map((e, i) => {
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{e.username}</td>
                    <td>{e.age}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                    <td>{e.adress}</td>
                    <td>{e.city}</td>
                    <td>{e.state}</td>
                    <td>{e.pincode}</td>
                    <td ><Button style={{marginLeft:"10px"}} onClick={()=>deletedata(i)}>Delete</Button></td>
                    <td><Button style={{marginLeft:"10px"}} onClick={()=>Editdata(e,i)}>Edit</Button></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>): (<h1 className="text-center">Please Enter Your Detailes</h1>
            
        )} 
      </div>
    );
  }