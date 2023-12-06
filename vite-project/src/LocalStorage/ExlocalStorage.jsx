import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table }from 'reactstrap'
import { toast } from'react-toastify'
export default function ExlocalStorage() {
             const[user,setUser]=useState({
              email:"",
              password:"",
             })

             const[alldata,setAlldata]=useState([])
             const [upindex,setupindex]=useState(null)
       const getdata=()=>{
        if(user.email.length>0 && user.password.length >0){
        setAlldata([...alldata,user])
        localStorage.setItem("alldataloc",JSON.stringify([...alldata,user]))
        setUser({
          email:"",
          password:"",  
         })
        toast.success("Success")
        
        }else{
           toast.error("Plese Enter Data")
         }  
       }   
       
       useEffect(()=>{
          const jsondata   =localStorage.getItem("alldataloc")
          const normal= JSON.parse(jsondata)
          setAlldata(normal)
       },[])

       const Deletedata=(ele)=>{
          const afterdelete=alldata.filter((e,i)=> i!==ele)
          setAlldata(afterdelete)
          toast.info('Data Delete')
          localStorage.setItem("alldataloc",JSON.stringify(afterdelete))
       }

       const Editdata=(data,eindex)=>{
               setUser(data)
               setupindex(eindex)
       }

       const Updatedata=()=>{
        if(upindex || upindex ===0){
          alldata.splice(upindex,1,user)
          setAlldata([...alldata])
          setUser({
            email:"",
            password:"",  
           })
           localStorage.setItem("alldataloc",JSON.stringify([...alldata]))
           setupindex(null)
           toast.success("Data Update successfully")
          }

       }
  return (
    <div>
      
      <Form className='w-50 mt-5 m-auto'>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      value={user.email}
      onChange={(e)=>setUser({...user,email:e?.target?.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={user.password}
      onChange={(e)=>setUser({...user,password:e?.target?.value})}
    />
  </FormGroup>
 { ! (upindex ||  upindex === 0) ?(
  <Button onClick={()=>getdata()}>
    Submit
  </Button>):(

  <Button onClick={Updatedata}>Update</Button>)
 }
</Form>
  <div className='w-50 mt-5 m-auto'>
  <Table
>
  <thead>
    <tr>
      <th>
        Sr.
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Delete||Update
      </th>
    </tr>
  </thead>
  <tbody>
    {
      alldata.map((e,i)=>{
        return  <tr>
        <th scope="row">
          {i+1}
        </th>
        <td>
          {e.email}
        </td>
        <td>
          {e.password}
        </td>
        <td>
          <Button className='bg-danger' onClick={()=>Deletedata(i)}>Delete</Button>
          <Button className='ms-3 bg-warning' onClick={()=>Editdata(e,i)} >Edit</Button>
        </td>
      </tr>
      })
    }

   
  
  </tbody>
</Table>

  </div>


    </div>
  )
}
