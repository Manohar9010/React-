

import React, { useState } from 'react'
import { Button } from "reactstrap"

export default function UsestateFun() {
   let [count,setcount]=useState(100)

    let x=0;
    const incrementCount =()=>{
        x+=1;
        // console.log("x",x);
        setcount(count +1);
        // console.log("count", count);

    }      
    return (      
    <div>
        <h1>X is {x}</h1>
        <h1>count is {count}</h1>
        <Button color="danger" onClick={()=>incrementCount() }> Inc</Button>
    </div>
  )
}
