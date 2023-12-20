import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function CarService() {
   const Navigate=useNavigate()
  return (
    <div className='d-flex justify-content-center   bg-danger-subtle' style={{height:"80vh", alignItems:"center"}}>
      <h1>CarService</h1>  
      <div className=' bg-success-subtle p-5  rounded-4  m-3 d-flex gap-3'>
        <Button onClick={()=>Navigate("/service/car/sportscar")}>Sports Car</Button>
        <Button onClick={()=>Navigate("/service/car/normalcar")}>Normal Car</Button>
      </div>
        <Button onClick={()=>Navigate(-1)}>Go Back</Button>

    </div>
  )
}

