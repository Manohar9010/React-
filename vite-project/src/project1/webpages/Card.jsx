import React from 'react'
import './Card.css'
export default function Card({img,htext,ptext }) {
  return (
    <div>
       <div className="main_card">
        <div className='cardimg'>
           <img src={img} alt="" />

        </div>
           <h6>{htext}</h6>

           <p> {ptext}</p>

           <button className='cardbtn'>LEARN MORE</button>
       </div>




    </div>
  )
}
