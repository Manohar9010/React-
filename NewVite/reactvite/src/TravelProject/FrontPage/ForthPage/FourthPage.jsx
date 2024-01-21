import React from 'react'
import './Fourthpage.css'
import FourthPagecard from './FourthPagecard'
import image1 from "../../Images/thirdpageimage3.jpg"
import image2 from "../../Images/forthpageimage2.jpg"
import image3 from "../../Images/forthpageimage3.jpg"
 let titles=["South Island","New Zealand","Bora Bora"]
  let rates=["525","700","600"]
export default function FourthPage() {
  return (
    <div>
     <div style={{margin:"50px 0px 0px 50px"}}>
      <h1>Top Travelling Destinations</h1>
     </div>
     <div className='d-flex gap-5 ' style={{margin:"60px 40px 50px 40px"}}>
    
      <FourthPagecard imgd={image1} title={titles[0]} rate={rates[0]} />
      <FourthPagecard imgd={image2} title={titles[1]} rate={rates[1]} />
      <FourthPagecard imgd={image3} title={titles[2]} rate={rates[2]} />

     </div>


    </div>
  )
}
