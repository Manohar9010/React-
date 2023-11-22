import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function PropsChange(props) {
        let  [name,setstate]=useState(props.name)
        let  [isProps, setisprops]=useState(false)
        
  
    const changeName=()=>{
   
          setstate(isProps ? props.name :"user");
          setisprops(!isProps)
  
    }
    
    
    const changeName1=()=>{
         props.name
    }
  return (
    <>
    <h1> its change the value with useState </h1>
    <h1>
    PropsChange {name}
        
    </h1>
    <Button color='danger' size='lg' onClick={()=>changeName()} >change name</Button>
       <hr />

    <h1>
    PropsChange {props.name}
        
    </h1>
    <Button color='danger' size='lg' onClick={()=>changeName1()} >change name</Button>
    
    
    </>
  )
}
