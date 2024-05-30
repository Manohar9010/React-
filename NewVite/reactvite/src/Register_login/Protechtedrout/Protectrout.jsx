import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protectrout({componentuser}) {
     const navigate  =useNavigate()
useEffect(()=>{
     let checklogin=JSON.parse (localStorage.getItem("login"))
     console.log(checklogin)
     if(!checklogin){

       navigate("/Loginpage")
     }

},[])

  return (
    <div>
      {
        componentuser
      }
      
    


    </div>
  )
}
