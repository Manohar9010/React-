import { Star } from 'lucide-react';
import React from 'react'

export default function Topsellercart() {
  return (
    <div>
    <div>
        <div>


            <img src={"https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-7.jpg"} alt=""  className='rounded ' />
        </div>
        <div>
           <h6>Nestle Original Coffee-Mate Coffee Creamer</h6>

           <div className="d-flex gap-1">
            {[1, 2, 3, 4, 5].map((e, i) => {
              return (
                <>
                
                <p key={i}>
                  {" "}
                  <Star
                    fill="yellow"
                    size={20}
                    color="yellow"
                    strokeWidth={1.75}
                    absoluteStrokeWidth
                    />
                </p> 
                    </>
              );
            })}
            <div className='text-gray-500 ms-2'>
            (4.
            0)

            </div>
          </div>
          <h4 className='fw-bold text-green-600'>$32.85   <snap className="ms-4 text-gray-400 text-lg fw-medium line-through">$33.8</snap> </h4>
        </div>
        
        </div>    
    


    </div>
  )
}
