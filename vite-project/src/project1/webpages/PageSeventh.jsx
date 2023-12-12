import React, { useEffect, useState } from "react";
import "./PageSeventh.css";
import { Button, Form, FormGroup, Input, Table } from "reactstrap";
export default function PageSeventh() {
   const [data,setData]=useState({
    username:"",
    email:"",
    message:"",
   })
   const [allset,setAllset]=useState([])
   const [upindex,setUpindex]=useState(null)
   const Getdata=()=>{
    if(data.username.length >0 && data.email.length >0){
    setAllset([...allset,data])
    localStorage.setItem("localdata",JSON.stringify([...allset,data]))
    setData({
      username:"",
      email:"",
      message:"",
     })}

   }
   
   useEffect(()=>{
      const jsondata=localStorage.getItem("localdata")       
      const normaldata=JSON.parse(jsondata)
      setAllset(normaldata)
   },[])
   const Deletedata=(ele)=>{
      const afterdelete= allset.filter((e,i)=>{
        return i !==ele
      }) 
       localStorage.setItem("localdata",JSON.stringify(afterdelete))
      setAllset(afterdelete)
   }

   const Editdata=(data,index)=>{
    setData(data)
    setUpindex(index)
   }
   const Updaate=()=>{
    if(upindex || upindex==0){
     allset.splice(upindex,1,data)
     setAllset([...allset]) 
     localStorage.setItem("localdata",JSON.stringify([...allset]))
     setData({
      username:"",
      email:"",
      message:"",
     })
     setUpindex(null)}
   }
  return (
    <div>
      <div className="main_form">
        <div className="form_left">
          <h1>Get in Touch</h1>
          <h1>Contact me</h1>
          <div className="left_blur"></div>
        </div>
        <div className="form_right">

          <div className="right_blur"></div>

          <Form>
            <FormGroup>
              <Input
                id="examplename"
                name="name"
                placeholder=" Name"
                type="text"
                value={data.username}
                onChange={(e)=>setData({...data,username:e?.target?.value})}

              />
            </FormGroup>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                value={data.email}
                onChange={(e)=>setData({...data,email:e?.target?.value})}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="texbordr"
                id="exampleText"
                name="text"
                placeholder="Message"
                type="textarea"
                value={data.message}
                onChange={(e)=>setData({...data,message:e?.target?.value})}
              />
            </FormGroup>
            {
              !(upindex || upindex===0)?(
            
            <Button className="button" onClick={()=>Getdata()}>Submit</Button>):(
            <Button onClick={Updaate}>Update</Button>)}
            <div>
            <Table
>
  <thead>
    <tr>
      <th>
        Sr.
      </th>
      <th>
        UserName
      </th>
      <th>
        Email
      </th>
      <th>
        Meassage
      </th>
      <th>
        Delete||Edit
      </th>
    </tr>
  </thead>
  <tbody>
    {
      allset.map((e,i)=>{
        return <tr key={i}>
        <th scope="row">
          {i+1}
        </th>
        <td>
          {e.username}
        </td>
        <td>
          {e.email}
        </td>
        <td>
          {e.message}
        </td>
        <td className="">
          <Button className="ms-0 me-3" onClick={()=>Deletedata(i)}>Delete</Button>
          <Button className="ms-0" onClick={()=>Editdata(e,i)}>Edit</Button>
        </td>
      </tr>
      })
    }
    
  
  </tbody>
</Table>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
