import React from 'react'
import './PageHeader.css'
import { NavLink } from 'react-router-dom'
export default function PageHeader() {
  return (
    <div>
        <div className="mainheade container">
            <div className="lefthead">
                <div className="logo">Anfrew</div>
                <span>toggle</span>
            </div>
            <div className="righthead">
                <div className="navhead">
                <ul>
                    <li> <NavLink to={'/forth'}>Home</NavLink> </li>
                    <li> <NavLink to={'/second'}>Sevice</NavLink> </li>
                    <li> <NavLink to={'/fifth'}>About</NavLink> </li>
                    <li> <NavLink to={'/sixth'}>Detailes</NavLink> </li>
                </ul>
                </div>
            </div>
                <div className='n_btn'>
                  <button className='button'>Contact Us</button>
                </div>
        </div>
        
    </div>
  )
}
