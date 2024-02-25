import React from "react";
import BellaAboutcart from "./BellaAboutcart";
import "./Bellaabout.css"
import aboutimg1 from '../../Images/about1.webp'
import aboutimg2 from '../../Images/about2.webp'
import aboutimg3 from '../../Images/about3.webp'
import aboutimg4 from '../../Images/about4.webp'
import aboutimg5 from '../../Images/about5.webp'
export default function BellaAboutus() {

  let aboutdata=[
    {
      img:aboutimg1,
      text: "Ultimate Perfume Box"
      
    },
    {
      img:aboutimg2,
      text: "Perfect Jodi"
      
      
    },
    {
      img:aboutimg3,
      text: "Fresh All Day Combo"
      
    },
    {
      img:aboutimg4,
      text: "Bade Miya Chhote Miya"
      
      
    },
    {
      img:aboutimg5,
      text: "Five Star Fragrance Combo"
      
      
    },
   


  ]

  
  return (
    <div >
      <div  style={{ padding: "200px 0px 0px 0px", }}>

      <h1 className="ms-5"> Crazy Deals <hr /> </h1>
      </div>
   <div className="bellabout">

    { aboutdata.map((aboutval,i )=>{
      return(
        <div key={i} >

        <BellaAboutcart  aboutimg={aboutval.img} textabout={aboutval.text} />
        </div>
      )
    })

    }
   </div>
     
    </div>
  );
}
