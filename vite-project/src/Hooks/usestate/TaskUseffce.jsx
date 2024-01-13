import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'

export default function TaskUseffce() {
   const  [state1,useState1]=useState(0)
   const  [state2,useState2]=useState(0)
   const  [state3,useState3]=useState(0)

    //   useEffect(()=>{

    //     console.log("--------with out dependancy-----")

    //   })
    // useEffect(()=>{
    //   console.log("----Empty dependancy-----")
    // },[])


    useEffect(()=>{
        console.log("-----with dependancy----")
    },[state1,state3])
       



  return (
    <div>
        
        
        <h1>Count no:{state1}</h1>
        <h1>Count no:{state2}</h1>
        <h1>Count no:{state3}</h1>
        TaskUseffcevi

         <Button onClick={()=>useState1(state1+1)}>increment</Button>
         <Button onClick={()=>useState2(state2+1)}>increment2</Button>
         <Button onClick={()=>useState3(state3+1)}>increment3</Button>

    </div>
  )
}
