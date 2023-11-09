import React, { useState } from 'react'
import { Button } from "reactstrap";
export default function UsestatePro2() {
     const colorarr=["red","blue","yellow","pink","orange","green","Purple"];
       let[index,setindex]= useState(0);
       const cangeindex=()=>{
        if (index >colorarr.length-2) {
        
          if (window.confirm('do you want continue?')) {
             if(window.confirm('Are you sure you want to start over?')){
              setindex(0)
             }else{
                    let dis="true"
             }
          }
        } 
      
        else{
             
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
        <Button disabled={dis} onClick={()=>cangeindex()}>change color</Button>
    </div>
  )
}
