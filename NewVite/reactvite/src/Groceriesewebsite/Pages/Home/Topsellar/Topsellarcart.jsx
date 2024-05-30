import { Rating } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Topsellarcart() {
  return (
    <div>
        
<div className='flex gap-4 ease-in-out  duration-500 hover:-translate-y-2 '>
    <div className='w-1/3'>
        <img className='object-cover rounded-2 ' src={"https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-7.jpg"} alt="" />
    </div>
    <div>
        <NavLink  >
          <span className='text-black text-sm fw-semibold hover:text-green-600 leading-none ' style={{ lineHeight: '0' }}>

     Nestle Original Coffee Mate Coffee Creamer
          </span>
        </NavLink>
          <div>

          <Rating name="half-rating"  defaultValue={3.5} precision={1} size="small" />
          </div>
          <div>
            <h6 className='text-green-700'>$32.85  <span className='text-sm line-through text-gray-500 ms-4'>$33.8</span></h6>
          </div>


    </div>
    
    </div>        



    </div>
  )
}
