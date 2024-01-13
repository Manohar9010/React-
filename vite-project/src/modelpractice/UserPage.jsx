import React, { useEffect, useState } from 'react'

export default function UserPage() {
  const[showdata,setShowdata]=useState()
  useEffect(()=>{
  let jsondata  = localStorage.getItem("passdata") || "[]";
   let tabletata=JSON.parse(jsondata)  
   setShowdata(tabletata)
})
  return (
    <div>
      
      <div className=''>
          <h1 className='text-center'>Table Data</h1>

          <div className=' mx-auto py-3 border border-info  rounded w-50  bg-info-subtle text-emphasis-info'>
            <div className='d-flex ms-3 gap-5'>
              <ul >
                <li  >Email</li>
              </ul>
              <ul >
                <li>Password</li>
              </ul>
              <ul >
                <li>Gender</li>
              </ul>
              <ul >
                <li>Hobbys</li>
              </ul>
              <ul >
                <li>User Type</li>
              </ul>

            </div>
           {
               showdata?.map((e,i)=>{return(
                <ul className='mx-3 list-unstyled my-1 p-2 border border-info  d-flex  gaprounded   bg-info-subtle text-emphasis-info' >
                  <li className='w-25 text-center'>{e.email}</li>
                  <li className='w-25 text-center'>{e.password}</li>
                  <li className='w-25 text-center'>{e.gender}</li>
                  <li className='w-25 text-center'>{e.hobbys}</li>
                  <li className='w-25 text-center'>{e.usertype}</li>

                </ul>
               )}) 
           }

          </div>


      </div>

      
      
      
      </div>
  )
}
