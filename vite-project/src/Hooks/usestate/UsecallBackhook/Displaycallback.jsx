import React, { useEffect, useState } from 'react'

export default function Displaycallback({fun}) {
   let [arr,setArr]=useState([])
     
     useEffect(()=>{
        let a=fun()
        setArr(a)
     },[fun])

  return (
    <div>Displaycallback
        <h5>count: {arr[0]}</h5>
        <h5>count:==+1== {arr[1]}</h5>
        <h5>count:==+2== {arr[2]}</h5>

    </div>
  )
}
