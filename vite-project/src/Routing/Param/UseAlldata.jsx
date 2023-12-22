import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function UseAlldata() {
   const navigator=useNavigate()
    const data=useParams()
    console.log(data)
  return (
    <div style={{textAlign:"center",paddingTop:"200px",backgroundColor:"#A1EEBD",height:"85vh" }}>
         <h1>My Name is :{data?.name}</h1>
         <h1>My Age is :{data?.age}</h1>
         <h1>Iam From :{data?.city}</h1>
        <div>
            <Button onClick={()=>navigator(-1)}>Go Back</Button>
        </div>
    </div>
  )
}
