import React from 'react'
import "./MostLoved.css"
import mostlovedimg from "../../../Images/MostLoved.webp"
import { Button } from 'reactstrap'
export default function MostLoved() {
  return (
    <div>
        
<div className='mostlovedmain'>
    <div className='mostloveimg'>
        <div className='mostlovesmallimg'>

        <img src={mostlovedimg} alt="" />
        </div>
    </div>
    <div className='mostlovedtext'>
        <div className='mostlovedsmall'>

        <h2>  Most Loved!</h2>
        <p className='m-0 p-0'>The inception of Bella Vita Luxury stems from one
        <br /> unified purpose of the brand.</p>
        <h6 >- To bring you luxury in a bottle.</h6>


       <Button>SHOP FRAGRANCES</Button>
        </div>

    </div>
</div>

    </div>
  )
}
