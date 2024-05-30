import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Profile() {
       const   navigate=useNavigate()
        const   [data,setdata]=useState({})
  const logoutfun=()=>{
    localStorage.removeItem("login")
    localStorage.removeItem("homedata")
    navigate("/Loginpage")
  }
  useEffect(()=>{
    setdata( JSON.parse( localStorage.getItem("homedata")) || [])
console.log("--->",data)
},[])
  // useEffect(()=>{
  //  localStorage.getItem("") 
  // })
  return (
    <div>
      <div>
        <div className=' border-2 border-emerald-100  w-72 p-3 rounded capitalize'>
          <h6>name: <span>{data.firstname} {data.lastname}</span> </h6>
          <h6>Phone number: <span>{data.phone} </span> </h6>
          <h6>City: <span>{data.city} </span> </h6>
          <h6>Gender: <span>{data.gender}</span></h6>
          <h6>Hobbys: <span>{data.hobbys}</span></h6>
        </div>
        <p></p>
      </div>
      <Button   onClick={logoutfun}  className='bg-black text-white'>Logout</Button>
      <Button className='bg-black ms-7' onClick={()=>Editfun()}>Edit</Button>

    </div>
  )
}
