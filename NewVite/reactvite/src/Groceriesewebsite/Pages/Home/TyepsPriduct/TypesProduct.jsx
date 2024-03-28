import React from 'react'
import './TypesProducst.css'
import banner1 from "../../../images/banner1.jpg"
import banner2 from "../../../images/banner2.jpg"
import banner3 from "../../../images/banner3.jpg"
export default function TypesProduct() {
  return (
    <div>
        
   <div>
    <div className="container-fluid d-flex mt-5 typemain">
      <div className='item'>
        
    <img src={banner1} alt=""  className='w-100 rounded-4'/>
      </div>
      <div className='item'>

    <img src={banner2} alt="" className='w-100 rounded-4'/>
      </div>
      <div className='item'>

    <img src={banner3} alt=""  className='w-100 rounded-4'/>
      </div >
    <div>
        </div> 
    </div>
   </div>

    
    </div>
  )
}
