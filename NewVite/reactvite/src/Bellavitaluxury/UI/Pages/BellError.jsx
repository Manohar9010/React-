import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import "./BellError.css"
export default function BellError() {
  return (
    <div className='errordiv' style={{padding:"200px 0px 0px 0px"}}>
      
      <div className='erromain'>

        <h1>404</h1>
        <h2>Page Not Found</h2>

        <NavLink to={"/"}><Button>Go to Home</Button></NavLink>
         
      </div>
        


      
    
    </div>
  )
}
