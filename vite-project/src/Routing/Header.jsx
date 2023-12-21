import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
       <div>
        <ul className=' d-flex gap-5 justify-content-center p-4 bg-danger-subtle fs-5 fw-bold text-dark'>
          <li> <NavLink  to={"/"}> Home</NavLink> </li>
          <li> <NavLink  to={"/contact"}> Contact</NavLink> </li>
          <li> <NavLink to={"/service"}> Service</NavLink> </li>
          <li> <NavLink to={"/useparam"}> useparam</NavLink> </li>
        </ul>
       </div>


    </div>
  )


}
