import React, { useState } from 'react'
import { Button } from "reactstrap";
export default function UsestatePro2() {
     const colorarr=["red","blue","white","green"];
       let[index,setindex]= useState(0);
       const cangeindex=()=>{
        if (index === colorarr.indexOf('green')) {
          setindex(3);
        } else {
          setindex(index + 1);
        }
       }

    return (
        <div className="d-flex flex-column justify-content-center">
        <h1>{index}</h1>
        <div
          style={{
            padding: "10px",
            textAlign: "center",
            backgroundColor: colorarr[index],
          }}
          className="m-5"
        >
          <h1>Hello World</h1>
        </div>
        <Button onClick={()=>cangeindex()}>change color</Button>
    </div>
  )
}
