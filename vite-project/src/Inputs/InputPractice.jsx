import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function InputPractice() {
         const [data,setData]=useState({
            email:"",
            password:"",
         })
        const[alldata,setAlldata]=useState([])

         const adddata =()=>{

         }
  return (
    <div>
   <h1>{data.email}</h1>
   <h1>{data.password}</h1>
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
</Form>



    </div>
  )
}
