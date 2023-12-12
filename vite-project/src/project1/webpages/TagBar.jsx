import React from 'react'
import './TagBar.css'
export default function TagBar({img ,tex ,texd}) {
  return (
    <div className="tagformain">
       

        <img src={img} alt="" className='tag_img' />
       <span>
        {tex} <br />{texd}

       </span>
    
       
        
    </div>
  )
}
