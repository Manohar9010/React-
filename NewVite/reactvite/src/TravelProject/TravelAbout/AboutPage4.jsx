import React from 'react'
import "./AboutPage4.css"
import { Button } from 'reactstrap'
import { ChevronsRight } from 'lucide-react'
import aboutpage4img from "../Images/footerimge1.jpg"
export default function AboutPage4() {
  return (
    <div> 
     <div className='aboutpage4main'>
        <div className='aboutpage4one'>
         <h1>Modern And Luxury Architecture And Interior Designers For You</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, soluta impedit. Consequatur, quasi mollitia? Adipisci exercitationem amet dolore expedita repudiandae voluptatem impedit ipsa vero repellendus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio molestiae ex aut possimus atque explicabo nostrum recusandae ab quisquam</p>
         <Button>Read More <ChevronsRight /></Button>
        </div>
        <div className='aboutpage4two'>
            <img src={aboutpage4img} alt="" />
        </div>
     </div>


    </div>
  )
}
