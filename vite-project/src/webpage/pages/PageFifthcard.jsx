import React from 'react'
import './PageFifth.css'
export default function PageFifthcard(props) {
  return (
    <div>
    <div className="pagefifthcard">
        <img src={props.img} alt="" />
        <div className="div1">
        <svg>
                <path></path>
            </svg>
        </div>
           
        <div className="cardtext">
            <h4>{props.name}</h4>
            <h6>{props.title}</h6>

            <p>{props.decs}</p>    
        </div>
    </div>

    </div>
  )
}
