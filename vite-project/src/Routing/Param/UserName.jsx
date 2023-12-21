import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Username() {
  const  navigate=useNavigate()

       const data=useParams()  
       console.log("-------->",data)

       return (
         <div>

      <h1>My Name {data?.name}</h1> 
      
      <Button onClick={()=>navigate(-1)}></Button>
      
    </div>
  )
}
