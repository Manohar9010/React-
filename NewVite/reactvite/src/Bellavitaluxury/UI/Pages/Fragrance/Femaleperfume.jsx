import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'

export default function Femaleperfume() {
     const [femaledata,setFemaledata]=useState([])

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:9999/product/getAll",
            params:{gender:"female"}

        }).then((res)=>{
          console.log("========>" ,res.data.data)
          setFemaledata(res.data.data)
        })
    },[])

  return (
    <div>

         <div className="mt-56">
            <div className='mx-10 font-serif'>

            <h1>Female Special Perfumes</h1>
            <hr />
            </div>
        <div className="bestselarmain grid grid-cols-4 gap-5  mx-20">
          {femaledata?.map?.((e,i) => {
            return (
              <div key={i}  className="mt-3 ">
                <div className="d-flex justify-center">
                  <img src={e.thumbnail || img1} alt="" className="rounded" />
                </div>
                <div className="text-center">
                  <h6> Title: {e.title}</h6>
                  <p > <span className='font-medium'>Type:</span>  {e.description}</p>
                  <h6>
                    {" "}Price:
                    <span className="text-green-600">
                      {"-" + e.discountPercentage + "%"}
                    </span>{" "}
                    <span className='text-red-500'> 
                      {-((e.price * e.discountPercentage) / 100 - e.price)}{" "}
                    </span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {e.price}
                    </span>{" "}
                  </h6>

                  <Button className="bg-dark w-75">ADD TO CART</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        
        



    </div>
  )
}
