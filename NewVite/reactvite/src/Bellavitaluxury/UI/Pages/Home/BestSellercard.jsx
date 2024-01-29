import React from 'react'
import "./Bestsellers.css"
import { BadgeCheck, Star } from 'lucide-react'
import { Button } from 'reactstrap'


export default function BestSellercard({imag1,type,brandname,rating}) {
  
    
  return (
    <div className=''>
       <div className='bestselarmain'>

        <div className='bestsellarimg'>
            <img src={imag1} alt="" />
        </div>
        <div className='bestsellartext'>
               <p className='m-0 p-0'>{type}</p>
               <h6 >{brandname}</h6>
               <p><Star fill='#f2eb07' color="#f2eb07" />
                { rating}
                <BadgeCheck color="#16d1e9" />
               </p>
               <Button className='w-100 '>ADD TO CARAT</Button>
        </div>
       </div>

    </div>
  )
}
