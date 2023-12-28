import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function HeaderTask1() {
   const navigate=useNavigate()
const loginfun=()=>{
// localStorage.setItem("passdata",JSON.stringify( {login:true,usertype:"super",}))  
// localStorage.setItem("passdata",JSON.stringify( {login:true,usertype:"admin",}))
// localStorage.setItem("passdata",JSON.stringify( {login:true,usertype:"employe",}))
// localStorage.setItem("passdata",JSON.stringify( {login:true,usertype:"user",}))
// localStorage.setItem("passdata",JSON.stringify( {login:true:usertype"profile",}))
}
const logoutfun=()=>{
 localStorage.removeItem("passdata")  
 navigate("/")
}
  return (
    <div className='d-flex py-3 justify-content-around'>
     <div>
         <ul className='d-flex gap-5'>
            <li> <NavLink to={"/"}>Home</NavLink> </li>    
            <li> <NavLink to={"/superadimTask1"}>SuperAdmin</NavLink> </li>    
            <li> <NavLink to={"/admintask1"}>Admin</NavLink> </li>    
            <li> <NavLink to={"/employetask1"}>Employe</NavLink> </li>    
            <li> <NavLink to={"/usertask1"}>User</NavLink> </li>    
            <li> <NavLink to={"/profiletask1"}>Profile</NavLink> </li>    
            
        </ul>  

    </div>        
      <div className='d-flex gap-5'>
        <Button onClick={loginfun}>Login</Button>
        <Button onClick={logoutfun}>Logout</Button>
      </div>


    </div>
  )
}
