import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Error from './Error'
export default function RoutingCom() {
  return (
    <>
     <BrowserRouter>
    <div>
      <ul className=' d-flex gap-5'>
        <li>
          <NavLink to={"/"}>Home</NavLink>
          
        </li>
        <li>
        <NavLink to={"/contact"}>Contact</NavLink>

        </li>
      </ul>
    </div>
    <div className='  d-flex justify-content-center mt-5'>
     <Routes>
     <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*'  element={<Error/>}/>
       {/* <Home/> */}
     </Routes>


    </div>
     </BrowserRouter>
    </>
  )
}
