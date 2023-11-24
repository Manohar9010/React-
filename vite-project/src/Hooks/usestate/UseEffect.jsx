import React, { useEffect, useState } from 'react'

export default function UseEffect() {
 const [count,setcount]=useState(0)
    // useEffect(()=>{
    //      alert("hello")       
    // },)
    // useEffect(()=>{
    //    alert("------welcome to my page rani---")       
    // },[])

    useEffect(()=>{
        if(count===5 && count != 0){

            alert("----count change-----")
        }
    },[count])

  return (
    <div style={{textAlign:"center",marginTop:"150px"}}>
      <h1>{count}</h1>

      <button style={{padding:"10px 20px",backgroundColor:"red",color:"white"}}     onClick={()=>setcount(count+1)}>Click</button>

    </div>
  )
}
