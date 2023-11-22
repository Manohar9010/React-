import React, { useState } from 'react'

export default function StateHook() {
       let [count ,setcount] =useState(0)
    
        
   function Increment() {
    setcount(count+1)
   }
   function Decrement() {
    setcount(count-1)
    if(count==0){
      setcount(count=0)
    }
   }
   function reset() {
    setcount(count=0)
   }

  return (
    <div style={{backgroundColor:"blue", color:"white",height:"665px"}}>
         <div>
            <h1 style={{textAlign:"center",paddingTop:"200px"}}>React Web</h1>
            <h1 style={{textAlign:"center",}}>{count}</h1>

         </div>
         <div style={{textAlign:"center"}}>
            <button onClick={Decrement} style={{padding:"5px 15px", borderRadius:"10px",backgroundColor:"black",color:"white",marginRight:"30px"}}>Decrement</button>  <button onClick={Increment} style={{padding:"5px 15px", borderRadius:"10px",backgroundColor:"black",color:"white"}}>Increment</button>
         </div>
         <div style={{textAlign:"center",}}>
            <button onClick={reset}  style={{padding:"5px 15px", borderRadius:"10px",backgroundColor:"black",color:"white",marginTop:"30px"}}>Reset</button>
         </div>



    </div>
  )
}
