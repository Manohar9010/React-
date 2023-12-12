import React from 'react'
import './pageSecond.css'  
import Card from './Card'
import heartemoji from '../img/heartemoji.png'
import imgglasses from '../img/glasses.png'
import imghumble from '../img/humble.png'
export default function PageSecond() {
  return (
    <div>
      <div className="second_main container">
        <div className="second_left">
           <h1>My Awesome</h1>
           <h2>services</h2>
           <p>Lorem, ipsum dolor sit amet consecteturadipisicing elit.<br/> Fuga quidem officiis.</p>

           <button className='button sec_button'>Download CV</button>

           <div className="blur1"> dw</div>
        </div>
        <div className="second_right">
          <div className='blur'></div>
          <div className='smallcard' style={{right:"0"}}>

           <Card img={heartemoji} htext="Design" ptext='Figma,Sketch,Photoshop Adode illustrator, Adode xd'/>
          </div>
          <div className='smallcard' style={{left:"0", top:"140px"}}>

           <Card img={imgglasses} htext="Design" ptext='Html,Css,Java Script,React,Nodejs,Express'/>
          </div>
          <div className='smallcard' style={{left:"300px", top:"270px"}}>

           <Card img={imghumble} htext="Design" ptext='Figma,Sketch,Photoshop Adode illustrator, Adode xd'/>
          </div>
             
        </div>
        
     </div>  
        
    </div>
  )
}
