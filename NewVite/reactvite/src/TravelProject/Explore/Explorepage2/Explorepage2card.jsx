import React from 'react'
import expoimg1 from"../../Images/thirdpageimage3.jpg"
export default function Explorepage2card({expocardimg,expotitle,expodis}) {
  return (
    <div >
        
    <div className='expocard'>
        <img src={expocardimg} alt="" />
        <h4>{expotitle}</h4>
        <p>{expodis}</p>
    </div>



    </div>
  )
}
