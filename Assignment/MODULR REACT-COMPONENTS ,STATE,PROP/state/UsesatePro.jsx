import React, { useState } from 'react'
import { Button } from "reactstrap";
export default function UsestatePro () {
  let[color,setcolor]= useState("red")
  
  let [text,settextcolor]= useState("blue")

  const changecolor=()=>{
    setcolor("lightpink")
    settextcolor("white")

  }
  
    return (
    <div className="d-flex flex-column justify-content-center">
      <div style={ {padding: "10px",
          textAlign: "center",
          backgroundColor: color,
          color: text,}}  className="m-5">
              <h1>hello world</h1>    
      </div>
      <Button onClick={()=>changecolor()}>Change color</Button>

    </div>
  )
}
