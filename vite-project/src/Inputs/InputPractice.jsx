import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'

export default function InputPractice() {
         const [data,setData]=useState({
            email:"",
            password:"",
         })
        let[alldata,setAlldata]=useState([])
        let [updateindex,setUpdateindex]=useState(null)

         const adddata =()=>{
          if(data.email.length>0 && data.password.length>0){
          setAlldata([...alldata,data])
          setData({
            email:"",
            password:"",
         })
         toast.success("success")
        }else{
         
          toast.error("Please fill the form")}
         }
   const deletedata=(index)=>{
    const afterdelete= alldata.filter((e,i)=>{
      return i !==index
    })
    setAlldata(afterdelete)

   }
   const Editdata=(datas,dataindex)=>{
        setData(datas)
        setUpdateindex(dataindex)
   }

   const updatedata=()=>{
    if(updateindex || updateindex==0)
    alldata.splice(updateindex,1,data)
    setData([...alldata])
    setData({
      email:"",
      password:"",
   })
   setUpdateindex(null)

   }

  //  useEffect(()=>{
  //   if (data.email === alldata.email) {
  //     toast.error('Email already exists');
  //   }
  //  },[data.email,alldata.email])
  return (
    <div>
   {/* <h1>{data.email}</h1>
   <h1>{data.password}</h1> */}
<Form className='w-50 mt-5 m-auto'>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
          value={data.email}
          onChange={(e)=>setData({...data,email:e?.target.value})}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
          value={data.password}
          onChange={(e)=>setData({...data,password:e?.target.value})}
        />
      </FormGroup>
    </Col>
  </Row>
  
  <Button onClick={adddata}>
    Sign in
  </Button>
  <Button onClick={updatedata}>Update</Button>
</Form>

{alldata.length >0?(
   <div className='mt-5 m-auto w-75'>

   <Table
>
  <thead>
    <tr>
      <th>
        Sr.
      </th>
      <th>
        Email
      </th>
      <th>
        Password
      </th>
      <th>
        Delete
      </th>
      <th>
        Edit
      </th>
     
    </tr>
  </thead>
  <tbody>
    {
      
      alldata.map((e,i)=>{
        return  <tr key={i}>
        <th scope="row">
          {i+1}
        </th>
        <td>
          {e.email}
        </td>
        
          {e.password.length<5?(
        <td style={{color:"red"}}>
          {e.password}
         
        </td>):(
        <td style={{color:"green"}}>
          {e.password}
        </td>)}
              <td >
          <Button style={{marginLeft:"0px"}} onClick={()=>deletedata(i)}>Delete</Button>
        </td>
        <td>
          <Button style={{marginLeft:"0px"}} onClick={()=>Editdata(e,i)} >Edit</Button>
        </td>
       
      </tr>
      })
     
    
   }
     </tbody>
</Table>

   </div>): ( <h1>please enter data</h1>)}

    </div>
  )
}




