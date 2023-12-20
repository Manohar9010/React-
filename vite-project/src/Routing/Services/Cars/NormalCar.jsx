import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function NormalCar() {
   const navigater=useNavigate()
  return (
    <div className='d-flex justify-content-center   bg-danger-subtle' style={{height:"80vh", alignItems:"center"}}>
    <h1>NormalCar</h1>
         <div className='m-3'>
            <Button onClick={()=>navigater(-1)}>Go Back</Button>
         </div>
    </div>

  )
}
