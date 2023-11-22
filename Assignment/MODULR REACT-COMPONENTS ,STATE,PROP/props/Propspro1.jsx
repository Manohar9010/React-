import React from 'react'
import data from"../../../../../Advance_javascript/assignment/product.json"
import CradCom from './CradCom';
export default function Propspro1() {
    console.log(data);
  return (
    <div className='d-flex flex-wrap gap-2 m-10'>
        {
            data.map((e)=>{
                return <CradCom name={e.title} price={e.price} description={e.description} disc={e.discountPercentage}after={e.price*e.discountPercentage/100}/>
             })
        }
        
    </div>
  )
}
