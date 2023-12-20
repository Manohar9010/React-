import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function BikeService() {
  const  navigate=useNavigate()
  return (
    <div className='d-flex justify-content-center   bg-danger-subtle' style={{height:"80vh", alignItems:"center"}}> 
    <h1>
        
        BikeService
        
        
        </h1>    
        <div className=' bg-success-subtle p-5  rounded-4  m-3 d-flex gap-3'>
            <Button onClick={()=>navigate('/service/bike/sports')} >Sports</Button>
            <Button onClick={()=>navigate('/service/bike/normal')}>Normal</Button>
        </div>


        <div>
            <Button onClick={()=>navigate(-1)}>Go Back</Button>
        </div>
        <Outlet/>
    </div>
  )
}
