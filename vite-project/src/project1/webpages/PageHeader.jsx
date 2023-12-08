import React from 'react'
import './PageHeader.css'
export default function PageHeader() {
  return (
    <div>
        <div className="mainheade">
            <div className="lefthead">
                <div className="logo">Anfrew</div>
                <span>toggle</span>
            </div>
            <div className="righthead">
                <div className="navhead">
                <ul>
                    <li>Home</li>
                    <li>service</li>
                    <li>Experince</li>
                    <li>Testimonials</li>
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
