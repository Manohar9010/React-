import React from 'react'
import "./ReallyAre.css"
import reallyimg1 from "../../../Images/reallyareimg1.webp"
import reallyimg2 from "../../../Images/reallyareimg2.webp"
import downloadapp from "../../../Images/doenloadapp.webp"
export default function ReallyAre() {
  return (
    <div>
        <div className='reallytitle'>
            <h1>Who we really are!!</h1>
        </div>
       <div className='reallydflex'>
         <div className='reallyimg'>
            <img src={reallyimg1} alt="" />
         </div>
         <div className='reallytext'>
            <img src={reallyimg2} alt="" />
            <p>The inception of Bella Vita Luxury stems from <br/>one unified purpose of the brand - To bring you <br/>luxury in a bottle. The Bella Vita Luxury blends <br/>are our hardworking workmanship, built on the<br/> crux of prestige, value & celebration. We take<br/>pride in our creations, carefully crafted through <br/>years of research & aspiration.</p>
         </div>
        </div> 
       <br/>
       <div className='downapp'>
        <img src={downloadapp} alt="" />
       </div>
    </div>
  )
}
