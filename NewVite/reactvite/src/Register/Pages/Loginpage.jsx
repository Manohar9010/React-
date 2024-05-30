import { parse } from 'postcss'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Loginpage() {

const [loginval,setLoginval]=useState({

phone:"",
password:""


})
    const loginfun=(e)=>{
        
        e.preventDefault();
     let josndata =localStorage?.getItem("regist")
     let normaldata=JSON?.parse(josndata)
     console.log(normaldata)
    }
  return (
    <div>
        <div className='mx-96'>

            <h1>Login </h1>
        <Form onSubmit={loginfun}>
        <FormGroup>
            <Label for="examplePassword">Phone Number</Label>
            <Input
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone number placeholder"
              type="number"
              value={loginval.phone}
              onChange={(e)=>setLoginval({...loginval,phone: e?.target?.value})}
             
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              value={loginval.password}
              onChange={(e)=>setLoginval({...loginval,password: e?.target?.value})}
             
            />
          </FormGroup>

  <Button>
    Submit
  </Button>
</Form>
        </div>
<div>
    <p>{loginval.phone}</p>
    <p>{loginval.password}</p>
</div>


    </div>
  )
}
