// import React, { useState } from 'react'
// import{Button, Form, FormGroup, Input, Label, Table, Toast,}from 'reactstrap'
// import{toast}from'react-toastify'
// export default function InputPractice() {
//          const  [user,setUser]=useState({
//             email:"",
//             password:"",
//           })
//        const[alldata,setAlldata]=useState([])
//        const [indexdata,setIndexdata]=useState(null)
//        const getdata=()=>{
//         if(user.email.length >0){
//            setAlldata([...alldata,user])
//            setUser({
//             email:"",
//             password:"",
//           })

//         }
//        }
//    const DataDelete=(ele)=>{
//       const afterdata=alldata.filter((e,i)=>{
//           return i !==ele
//       })
//       setAlldata(afterdata)
//    }

//    const Editdata=(data,dataindex)=>{
//         setUser(data)
//         setIndexdata(dataindex)
//    }
//     const Updatedata=()=>{
//          alldata.splice(indexdata,1,user )
//          setUser([...alldata])

//     }
//   return (
//     <div>

//       <Form className='w-50 mt-5 m-auto'>
//   <FormGroup>
//     <Label for="exampleEmail">
//       Email
//     </Label>
//     <Input
//       id="exampleEmail"
//       name="email"
//       placeholder="with a placeholder"
//       type="email"
//       value={user.email}
//       onChange={(e)=>setUser({...user,email:e?.target?.value}) }
//     />
//   </FormGroup>
//   <FormGroup>
//     <Label for="examplePassword">
//       Password
//     </Label>
//     <Input
//       id="examplePassword"
//       name="password"
//       placeholder="password placeholder"
//       type="password"
//       value={user.password}
//       onChange={(e)=>setUser({...user,password:e?.target?.value}) }
//     />
//   </FormGroup>

//   <Button onClick={()=>getdata()}>
//     Submit
//   </Button>
//   <Button onClick={Updatedata}>Update</Button>
// </Form>

//  <div>
//  <Table className='w-50 mt-5 m-auto'
// >
//   <thead>
//     <tr>
//       <th>
//        SR
//       </th>
//       <th>
//         First Name
//       </th>
//       <th>
//         Last Name
//       </th>
//       <th>
//         Delete && edit
//       </th>
//     </tr>
//   </thead>
//   <tbody>
//     { alldata.map((e,i)=>{
//       return  <tr key={i}>
//       <th scope="row">
//         {i+1}
//       </th>
//       <td>
//         {e.email}
//       </td>
//       <td>
//         {e.password}
//       </td>
//       <td>
//         <Button onClick={()=>DataDelete(i)} >Delete</Button>
//         <Button className='ms-3' onClick={()=>Editdata(e,i)}>Edit</Button>
//       </td>
//     </tr>
//     })
//    }

//   </tbody>
// </Table>

//   </div>

//     </div>
//   )
// }

import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

export default function InputPractice() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let [alldata, setAlldata] = useState([]);
  let [updateindex, setUpdateindex] = useState(null);

  const adddata = () => {
    if (data.email.length > 0 && data.password.length > 0) {
      const mach = alldata.some((e) => {
        return e.email === data.email;
      });
      if (mach) {
        toast.error("same data");
      } else {
        setAlldata([...alldata, data]);
        setData({
          email: "",
          password: "",
        });
        toast.success("success");
      }
    } else {
      toast.error("Please fill the form");
    }
  };
  const deletedata = (index) => {
    const afterdelete = alldata.filter((e, i) => {
      return i !== index;
    });
    setAlldata(afterdelete);
  };
  const Editdata = (datas, dataindex) => {
    setData(datas);
    setUpdateindex(dataindex);
  };

  const updatedata = () => {
    if (updateindex || updateindex == 0) alldata.splice(updateindex, 1, data);
    setData([...alldata]);
    setData({
      email: "",
      password: "",
    });
    setUpdateindex(null);
  };

  //  useEffect(()=>{
  //   if (data.email === alldata.email) {
  //     toast.error('Email already exists');
  //   }
  //  },[data.email,alldata.email])
  return (
    <div>
      {/* <h1>{data.email}</h1>
   <h1>{data.password}</h1> */}
      <Form className="w-50 mt-5 m-auto">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e?.target.value })}
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
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, password: e?.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick={adddata}>Sign in</Button>
        <Button onClick={updatedata}>Update</Button>
      </Form>

      {alldata.length > 0 ? (
        <div className="mt-5 m-auto w-75">
          <Table>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Email</th>
                <th>Password</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {alldata.map((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{e.email}</td>
                    <td
                      style={{ color: e.password.length < 5 ? "red" : "green" }}
                    >
                      {e.password}
                    </td>

                    {/*{" "}
                    {e.password.length < 5 ? (
                      <td style={{ color: "red" }}>{e.password}</td>
                    ) : (
                      <td style={{ color: "green" }}>{e.password}</td>
                    )}
                    */}
                    <td>
                      <Button
                        style={{ marginLeft: "0px" }}
                        onClick={() => deletedata(i)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{ marginLeft: "0px" }}
                        onClick={() => Editdata(e, i)}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <h1>please enter data</h1>
      )}
    </div>
  );
}
