import React, { useState } from 'react'
import "./Bestsellers.css"
import { BadgeCheck, Star } from 'lucide-react'
import { Button } from 'reactstrap'
import WishList from '../Wishlist/WishList'
// {imag1,type,brandname,rating}

export default function BestSellercard(props) {
  const [datain,setDatain]=useState(props)
  const addwishlist=()=>{
  
    console.log("Updated datain:", datain);
  }
    
  return (
    <div className=''>
       <div className='bestselarmain'>

        <div className='bestsellarimg'>
            <img src={props.imag1} alt="" />
        </div>
        <div className='bestsellartext'>
               <p className='m-0 p-0'>{props.type}</p>
               <h6 >{props.brandname}</h6>
               <p><Star fill='#f2eb07' color="#f2eb07" />
                { props.rating}
                <BadgeCheck color="#16d1e9" />
               </p>
               <Button className='w-100 ' onClick={addwishlist}>ADD TO CARAT</Button>
        </div>
       </div>
       {/* <WishList datain={datain}/> */}
    </div>
  )
}
