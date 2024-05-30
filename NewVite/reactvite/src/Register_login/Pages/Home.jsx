  import React, { useEffect, useState } from 'react'
  import "../Pages/Home.css"
  import { useSearchParams } from "react-router-dom";
import { User } from 'lucide-react';
  export default function Home() {
          const  [data,setdata]=useState()
          const [check,setcheck]=useState()
   useEffect (()=>{
         setdata( JSON.parse(  localStorage.getItem("regist")) || [])
         setcheck( JSON.parse(  localStorage.getItem("login")) || [])

         console.log("66666",data)
         console.log("66666",check)
   },[])
  

    return (
      <div className='homepage'>

        <div className= 'mt-16 mx-24 flex flex-wrap  gap-10'> 
          <h1>User List</h1>
         
         
     <div>

      
     </div>
      { check === "logintrue" ?(
        data?.map((e)=>{
          return(
            <div className='border-2 border-emerald-100 p-3 rounded-2'>

             <div className='flex justify-center'>
             <User size={100} color="#8d8181" strokeWidth={2.5} />
             </div>

             <div>
            <h6>Name: <span className='text-l capitalize font-normal'> {e.firstname} {e.lastname}</span></h6>
            <h6>Phone Number: <span className='text-l capitalize font-normal' >{e.phone}</span> </h6>
            <h6>City: <span className='text-l capitalize font-normal' >{e.city}</span> </h6>
            <h6>Gender: <span className='text-l capitalize font-normal' >{e.gender}</span> </h6>
            <h6>Hobbys: <span className='text-l capitalize font-normal' >{e.hobbys}</span> </h6>
            <h6>UserType: <span className='text-l capitalize font-normal' >{e.usertype}</span></h6>

             </div>

          </div>
          )
        }) ):(  <p></p> )
      }

        </div>
    


      </div>
    )
  }
